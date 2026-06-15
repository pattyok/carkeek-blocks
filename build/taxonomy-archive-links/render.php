<?php
/**
 * Render Taxonomy Archive Links
 *
 * @param array $attributes Attributes passed from the block.
 */

global $post;
$term_list = '';
if ( $attributes['displayAs'] == 'tile' ) {
	$list_style = 'tile-list no-bullets';
} else {
	$list_style  = $attributes['showBullets'] == true ? '' : 'no-bullets ';
	$list_style .= $attributes['displayAs'] == 'inline' ? 'list-inline ' : '';
	$list_style .= 'separator-' . $attributes['separator'];
	$list_style .= $attributes['hierarchical'] == true ? ' hierarchical-list' : '';
}

$aria_title = $attributes['listLabel'] ? $attributes['listLabel'] : 'Taxonomy List for ' . $attributes['taxonomySelected'];
if ( true == $attributes['relevantToPost'] ) {
	$terms = get_the_terms( $post->ID, $attributes['taxonomySelected'] );
} else {
	$args = array(
		'taxonomy' => $attributes['taxonomySelected'],
		'orderby'  => $attributes['sortBy'],
		'order'    => $attributes['order'],
	);
	if ( $attributes['excludeChildTerms'] ) {
		$args['parent'] = 0;
	}
	$terms = get_terms( $args );
}

if ( ! empty( $terms ) && ! is_wp_error( $terms ) ) {
	if ( ! empty( $attributes['hierarchical'] ) && ! $attributes['excludeChildTerms'] && $attributes['hierarchical'] == true ) {
		$terms_by_id   = array();
		$children_map  = array();
		$ordered_terms = array();
		$visited_terms = array();

		foreach ( $terms as $term ) {
			$terms_by_id[ $term->term_id ] = $term;
		}

		foreach ( $terms as $term ) {
			$parent_id = (int) $term->parent;
			if ( 0 !== $parent_id && ! isset( $terms_by_id[ $parent_id ] ) ) {
				$parent_id = 0;
			}

			if ( ! isset( $children_map[ $parent_id ] ) ) {
				$children_map[ $parent_id ] = array();
			}


			$children_map[ $parent_id ][] = $term;
		}

		$append_children = static function ( $parent_id ) use ( &$append_children, &$children_map, &$ordered_terms, &$visited_terms ) {
			if ( empty( $children_map[ $parent_id ] ) ) {
				return;
			}

			foreach ( $children_map[ $parent_id ] as $child_term ) {
				$term_id = (int) $child_term->term_id;
				if ( isset( $visited_terms[ $term_id ] ) ) {
					continue;
				}

				$visited_terms[ $term_id ] = true;
				$ordered_terms[]           = $child_term;
				$append_children( $term_id );
			}
		};

		$append_children( 0 );

		foreach ( $terms as $term ) {
			$term_id = (int) $term->term_id;
			if ( ! isset( $visited_terms[ $term_id ] ) ) {
				$ordered_terms[] = $term;
			}
		}

		$terms = $ordered_terms;
	}

	$term_list = '<ul class="term-archive ' . $list_style . '" aria-label="' . $aria_title . '">';
	foreach ( $terms as $term ) {
		$term_link_url  = '';
		$term_link_text = $term->name;
		if ( true == $attributes['linkToCategory'] ) {
			if ( 'WordPress' == $attributes['archiveType'] ) {
				$term_link_url = get_term_link( $term );
			} elseif ( 'facetwp' == $attributes['archiveType'] ) {
				$term_link_url = add_query_arg(
					array(
						$attributes['archiveFacet'] => $term->slug,
					),
					$attributes['archivePage']
				);
			}
		}
		$term_content = '';
		$term_icon    = '';
		$tile_hover   = '';
		$layout	   = $attributes['displayAs'];
		if ( $attributes['displayAs'] == 'tile' ) {
			$img_field = $attributes['tileImageField'];
			if ( ! empty( $img_field ) ) {
				$term_image = get_field( $img_field, $term );
				$img_style  = $attributes['tileImageStyle'];
				if ( ! empty( $term_image ) ) {
					$term_icon = wp_get_attachment_image( $term_image, array( '600', '600' ), '', array( 'class' => $img_style ) );
				}
			}
			$tile_hover = '<div class="tile-hover"><span>' . esc_html( $term->description ) . '</span></div>';
		}

		$term_link_url  = apply_filters( 'ck_tax_archive_term_link', $term_link_url, $term, $post );
		$term_link_text = apply_filters( 'ck_tax_archive_term_text', $term->name, $term, $post );
		$term_link_text = apply_filters( 'ck_tax_archive_term_text__' . $layout, $term->name, $term, $post );
		if ( ! empty( $term_link_text ) ) {
			$term_link_text = wp_kses_post( '<span class="term-name">' . $term_link_text . '</span>' );
		}
		if ( empty( $term_link_url ) ) {
			$term_content .= $term_link_text;
		} else {
			if ( $attributes['displayAs'] == 'tile' ) {
				$term_content .= '<a href="' . esc_url( $term_link_url ) . '"></a>' . $term_icon . $term_link_text . $tile_hover;

			} else {
				$term_content .= $term_icon . '<a href="' . esc_url( $term_link_url ) . '">'  . $term_link_text . '</a>';
			}

		}
		$term_class = $term->parent == 0 ? 'parent-term' : 'child-term';

		// $term_content .= $tile_hover;
		$term_list .= '<li class="' . esc_attr( $term_class ) . '">' . $term_content . '</li>';
	}
	$term_list .= '</ul>';
}
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
<?php if ( ! empty( $attributes['listLabel'] ) ) : ?>
	<div class="term-list-label" aria-hidden="true"><?php echo esc_html( $attributes['listLabel'] ); ?></div>
<?php endif; ?>
<?php echo wp_kses_post( $term_list ); ?>
</div>

