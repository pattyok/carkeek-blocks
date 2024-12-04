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
	$list_style = $attributes['showBullets'] == true ? '' : 'no-bullets ';
	$list_style .= $attributes['displayAs'] == 'inline' ? 'list-inline ' : '';
	$list_style .= 'separator-' . $attributes['separator'];
}

$aria_title = $attributes['listLabel'] ? $attributes['listLabel'] : 'Taxonomy List for ' . $attributes['taxonomySelected'];
if ( true == $attributes['relevantToPost'] ) {
	$terms = get_the_terms( $post->ID, $attributes['taxonomySelected'] );
} else {
	$args  = array(
		'taxonomy' => $attributes['taxonomySelected'],
		'orderby'  => $attributes['sortBy'],
		'order'    => $attributes['order'],
	);
	if ( $attributes['excludeChildTerms']  ) {
		$args['parent'] = 0;
	}
	$terms = get_terms( $args );
}

if ( ! empty( $terms ) && ! is_wp_error( $terms ) ) {
	$term_list = '<ul class="term-archive ' . $list_style . '" aria-label="' . $aria_title . '">';
	foreach ( $terms as $term ) {
		$term_link_url = '';
		$term_link_text = $term->name;
		if ( true == $attributes['linkToCategory'] ) {
			if ( 'wordpress' == $attributes['archiveType'] ) {
				$term_link_url = get_term_link( $term );
			} else if ( 'facetwp' == $attributes['archiveType'] ) {
				$term_link_url = add_query_arg(
					array(
						$attributes['archiveFacet'] => $term->slug,
					),
					$attributes['archivePage']);
			}
		}
		$term_content = '';
		$term_icon = '';
		$tile_hover = '';
		if ( $attributes['displayAs'] == 'tile' ) {
			$img_field = $attributes['tileImageField'];
			if ( ! empty( $img_field ) ) {
				$term_image = get_field( $img_field, $term );
				$img_style = $attributes['tileImageStyle'];
				if ( ! empty( $term_image ) ) {
					$term_icon = wp_get_attachment_image( $term_image, array('600', '600'), "", array( "class" => $img_style ) );
				}
			}
			$tile_hover = '<div class="tile-hover"><span>' . esc_html( $term->description ) . '</span></div>';
		}

		$term_link_url  = apply_filters( 'ck_tax_archive_term_link', $term_link_url, $term, $post );
		$term_link_text = apply_filters( 'ck_tax_archive_term_text', $term->name, $term, $post );
		if ( empty( $term_link_url ) ) {
			$term_content .= esc_html( $term_link_text );
		} else {
			$term_content .= '<a href="' . esc_url( $term_link_url ) . '">' . $term_icon . esc_html( $term_link_text ) . $tile_hover . '</a>';
		}

		//$term_content .= $tile_hover;
		$term_list .= '<li>' . $term_content . '</li>';
	}
	$term_list .= '</ul>';
}
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
<?php if (!empty($attributes['listLabel'])) : ?>
	<div class="term-list-label" aria-hidden="true"><?php echo esc_html($attributes['listLabel']); ?></div>
<?php endif; ?>
<?php echo wp_kses_post( $term_list ); ?>
</div>

