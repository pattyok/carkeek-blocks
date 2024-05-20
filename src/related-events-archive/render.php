<?php
/** Template for Related Events
 */
global $post;


$is_admin = ( is_admin() || ( defined( 'REST_REQUEST' ) && REST_REQUEST ) ) ? true : false;
$ck_blocks_template_loader = new Carkeek_Blocks_Template_Loader();

if ( function_exists( 'tribe_get_events' ) ) {
		$emptyMessage = !empty( $attributes['emptyMessage'] ) ? $attributes['emptyMessage'] : __( 'No related events found.', 'carkeek-blocks' );
		if ( true === $attributes['hideIfEmpty']  ) {
			$emptyMessage .= ' ' . __( 'This block will not display on the front end.', 'carkeek-blocks' );
		}
		$args = array(
			'posts_per_page'              => $attributes['numberOfPosts'],
			'orderby'                     => '_EventStartDate',
			'order'                       => 'ASC',
			'start_date'                  => 'now',
			'hide_subsequent_recurrences' => true,
		);
		if ( ! empty( $attributes['taxonomySelected'] ) ) {
			$args['tax_query'] = array();
			foreach ( $attributes['taxonomySelected'] as $my_tax ) {
				$my_terms = get_the_terms( $post->ID, $my_tax );
				if ( ! is_wp_error( $my_terms ) && is_array( $my_terms ) ) {
					if ( isset( $attributes['childTermsOnly'] ) && true == $attributes['childTermsOnly'] ) {
						$children = wp_list_filter( $my_terms, array( 'parent' => 0 ), 'NOT' );
						if ( ! empty( $children ) ) {
							$my_terms = $children;
						}
					}
					$term_ids            = wp_list_pluck( $my_terms, 'term_id' );
					$args['tax_query'][] =
						array(
							'taxonomy' => $my_tax,
							'field'    => 'term_id',
							'terms'    => $term_ids,
							'operator' => 'IN',
						);
				}
			}
			$arg['tax_query']['relation'] = 'OR';
		}

		$rel_events = tribe_get_events( $args );

		if ( true == $attributes['fillTheSlots'] && count( $rel_events ) < $attributes['numberOfPosts'] ) {
			$args['posts_per_page'] = $attributes['numberOfPosts'] - count( $rel_events );
			unset( $args['tax_query'] );
			if ( ! empty( $rel_events ) ) {
				$exclude_ids          = wp_list_pluck( $rel_events, 'ID' );
				$args['post__not_in'] = $exclude_ids;
			}
			$filler_events = tribe_get_events( $args );
			$rel_events    = array_merge( $rel_events, $filler_events );
		}

		?>
		<?php if ( ! empty( $rel_events ) ) { ?>
			<?php
			$layout            = isset( $attributes['postLayout'] ) ? $attributes['postLayout'] : 'grid';
			$css_classes_inner = array( 'alignwide' );
			$css_classes_outer = array( 'carkeek-archive is-layout-constrained' );

			if ( 'grid' === $layout ) {
				$css_classes_outer[] = 'ck-columns has-' . $attributes['columns'] . '-columns item-count-' . count( $rel_events );
				$mobile              = isset( $attributes['columnsMobile'] ) ? $attributes['columnsMobile'] : 1;
				$tablet              = isset( $attributes['columnsTablet'] ) ? $attributes['columnsTablet'] : $attributes['columns'];
				$css_classes_outer[] = 'has-' . $mobile . '-columns-mobile has-' . $tablet . '-columns-tablet';
			}

			if ( isset( $attributes['limitItemsMobile'] ) && true == $attributes['limitItemsMobile'] ) {
				if ( -1 !== $attributes['itemsTablet'] ) {
					$css_classes_outer[] = 'limit-tablet-' . $attributes['itemsTablet'];
				}
				$css_classes_outer[] = 'limit-mobile-' . $attributes['itemsMobile'];
			}
			?>
		<div <?php echo get_block_wrapper_attributes( array( 'class' => implode( ' ', $css_classes_outer ) ) ); ?>>
			<?php if ( ! empty( $attributes['headline'] ) ) { ?>
				<h2 class="ck-custom-archive__headline"><?php echo esc_html( $attributes['headline'] ); ?></h2>
			<?php } ?>
			<?php

			if ( 'grid' === $layout ) {
					$css_classes_inner[] = 'ck-columns__wrap';
			}

			?>
				<div class="<?php echo esc_attr( implode( ' ', $css_classes_inner ) ); ?>">
			<?php
			global $post;
			foreach ( $rel_events as $post ) {
				setup_postdata( $post );
				ob_start();
				$ck_blocks_template_loader
					->set_template_data( $attributes )
					->get_template_part( 'events/default_item' );
				$post_html = ob_get_clean();
				echo $post_html;
			}
			wp_reset_postdata();
			?>
				</div>
			<?php if (  ! empty( $attributes['morePostsLink'] ) ) { ?>
				<div class="ck-custom-archive__buttons"><a class="button" href="<?php echo esc_url( $attributes['morePostsLink'] ); ?>"><?php echo esc_html( $attributes['morePostsLinkLabel'] ); ?></a></div>
			<?php } ?>
		</div>

			<?php
		} else {

			if ( false == $attributes['hideIfEmpty'] || $is_admin ) {
				?>
				<div <?php echo get_block_wrapper_attributes(); ?>>
				<?php if ( ! empty( $attributes['headline'] ) ) { ?>
					<h2 class="ck-custom-archive__headline"><?php echo esc_html( $attributes['headline'] ); ?></h2>
				<?php } ?>
				<?php echo esc_html( $emptyMessage ); ?>
				<?php if (  ! empty( $attributes['morePostsLink'] ) ) { ?>
					<div class="ck-custom-archive__buttons"><a class="button" href="<?php echo esc_url( $attributes['morePostsLink'] ); ?>"><?php echo esc_html( $attributes['morePostsLinkLabel'] ); ?></a></div>
				<?php } ?>
				</div>
				<?php
			}
		}

} else {
	if ($is_admin) {
	?>
	<div <?php echo get_block_wrapper_attributes(); ?>>
		<p><?php esc_html_e( 'The Events Calendar is not active. Please activate the plugin to use this block.', 'carkeek-blocks' ); ?></p>
	</div>
	<?php
	}
}
