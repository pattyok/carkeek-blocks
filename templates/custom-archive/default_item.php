<?php
$featured_image = '';
$image_size     = 'medium_large';
if ( empty( $data->imageSize ) || $data->imageSize == 'default' ) {
	// use standard image size for the theme
	$image_size = apply_filters( 'ck_custom_archive__featured_image_default_size', $image_size, $post->ID, $data );
} else {
	$image_size = $data->imageSize;
}
// allow override for specific post
$image_size = apply_filters( 'ck_custom_archive_' . $data->postTypeSelected . '__featured_image_default_size', $image_size, $post->ID, $data );

if ( $data->displayFeaturedImage ) {
	$featured_image = get_the_post_thumbnail( $post->ID, $image_size );
}

$featured_image = apply_filters( 'ck_custom_archive_' . $data->postTypeSelected . '__featured_image', $featured_image, $post->ID, $data );

$excerpt = '';
if ( true == $data->displayPostExcerpt ) {
	$excerpt = wp_filter_nohtml_kses( get_the_excerpt() );
	$limit   = $data->excerptLength;
	if ( -1 !== $limit ) {
		if ( str_word_count( $excerpt, 0 ) > $limit ) {
			$words    = str_word_count( $excerpt, 2 );
			$pos      = array_keys( $words );
			$excerpt  = substr( $excerpt, 0, $pos[ $limit ] );
			$excerpt .= '<span class="excerpt-ellipsis">&#8230;</span>';
		}
	}
	$excerpt = apply_filters( 'ck_custom_archive_' . $data->postTypeSelected . '__excerpt', $excerpt, $post->ID, $data );
}

$permalink        = apply_filters( 'ck_custom_archive_' . $data->postTypeSelected . '__link', get_permalink(), $post->ID, $data );
$permalink_target = $data->newWindow ? '_blank' : '_self';
$permalink_target = apply_filters( 'ck_custom_archive_' . $data->postTypeSelected . '__link_target', $permalink_target, $data );
$link_title       = wp_sprintf( '<a class="ck-custom-archive-title_link" href="%1s" target="%2s">%3s</a>', $permalink, $permalink_target, get_the_title() );
if ( true == $data->useHeadingTitle ) {

	$start      = '<h' . $data->headlineLevel . '>';
	$end        = '</h' . $data->headlineLevel . '>';
	$link_title = $start . $link_title . $end;
}

$meta = array(
	'before' => '',
	'after'  => '',
);
if ( true == $data->showPublishDate ) {
	$prefix                             = $data->publishDatePrefix ? '<span class="publish-date-prefix">' . $data->publishDatePrefix . '</span>' : '';
	$meta[ $data->publishDateLocation ] = wp_sprintf( '<span class="ck-custom-archive-item-date">%1s %1s</span>', $prefix, get_the_date() );
}
// deprecate this in favor of dynamic titles
$meta_before = apply_filters( 'ck_custom_archive_layout__meta_before_title', $meta['before'], $data );
$meta_after  = apply_filters( 'ck_custom_archive_layout__meta_after_title', $meta['after'], $data );
$meta_before = apply_filters( 'ck_custom_archive_' . $data->postTypeSelected . '__meta_before_title', $meta_before, $data );
$meta_after  = apply_filters( 'ck_custom_archive_' . $data->postTypeSelected . '__meta_after_title', $meta_after, $data );

if ( ! empty( $data->addlContentBefore ) ) {
	$meta_before_excerpt = explode( ',', $data->addlContentBefore );
}
if ( ! empty( $data->addlContentBefore ) ) {
	$meta_after_excerpt = explode( ',', $data->addlContentAfter );
}
?>
<div class="ck-columns-item ck-custom-archive-item <?php echo esc_attr( $post->name ); ?> archive-item-id-<?php echo esc_attr( $post->ID ); ?>">
<?php
if ( ! empty( $featured_image ) ) {
	$image_style = isset( $data->imageOrientation ) ? 'layout-' . $data->imageOrientation : 'layout-landscape';
	$focal_point = get_post_meta( $post->ID, '_carkeekblocks_featured_image_focal_point', true );
	if ( ! empty( $focal_point ) ) {
		$x = $focal_point['x'] * 100;
		$y = $focal_point['y'] * 100;
		echo '<style>.wp-block-carkeek-blocks-custom-archive .archive-item-id-' . esc_attr( $post->ID ) . ' .ck-custom-archive-image-link img {object-position:' . esc_attr( $x ) . '% ' . esc_attr( $y ) . '%;}</style>';
	}
	?>
		<a class="ck-custom-archive-image-link <?php echo esc_attr( $image_style ); ?>" aria-label="<?php echo esc_attr( get_the_title() ); ?>" href="<?php echo esc_url( $permalink ); ?>" target="<?php echo esc_attr( $permalink_target ); ?>">
			<?php echo wp_kses_post( $featured_image ); ?>
		</a>
	<?php } ?>
	<div class="ck-custom-archive__content-wrap">


		<?php
		// deprecate this in favor of filters.
		do_action( 'ck_custom_archive_layout__before_title', $data );
		?>

		<?php echo wp_kses_post( $meta_before ); ?>
		<?php echo wp_kses_post( $link_title ); ?>
		<?php echo wp_kses_post( $meta_after ); ?>
		<?php
		// deprecate this in favor of filters.
		do_action( 'ck_custom_archive_layout__after_title', $data );
		?>
		<?php
		if ( ! empty( $meta_before_excerpt ) ) {
			foreach ( $meta_before_excerpt as $key ) {
				$key = trim( $key );
				if ( ! empty( $key ) ) {
					$value = get_post_meta( $post->ID, $key, true );
					if ( ! empty( $value ) ) {
						$html = '<div class="ck-custom-archive-item-meta-before-excerpt" data-meta="' . esc_attr( $key ) . '">' . wp_kses_post( $value ) . '</div>';
						$html = apply_filters( 'ck_custom_archive_layout__' . $data->postTypeSelected . '_meta_before_excerpt', $html, $key );
						echo wp_kses_post( $html );
					}
				}
			}
		}
		?>
		<?php
		if ( ! empty( $excerpt ) ) {
			?>
			<div class="ck-custom-archive-excerpt"><?php echo wp_kses_post( $excerpt ); ?></div>
		<?php } ?>

		<?php do_action( 'ck_custom_archive_layout__after_excerpt', $data ); ?>
		<?php
		if ( ! empty( $meta_after_excerpt ) ) {
			foreach ( $meta_after_excerpt as $key ) {
				if ( ! empty( $key ) ) {
					$key         = trim( $key );
					$value_after = get_post_meta( $post->ID, $key, true );
					if ( ! empty( $value_after ) ) {
						$html = '';
						$html = '<div class="ck-custom-archive-item-meta-before-excerpt" data-meta="' . esc_attr( $key ) . '">' . wp_kses_post( $value_after ) . '</div>';
						$html = apply_filters( 'ck_custom_archive_layout__' . $data->postTypeSelected . '_meta_after_excerpt', $html, $key );
						echo wp_kses_post( $html );
					}
				}
			}
		}
		?>
		<?php
		if ( true == $data->showTerms ) {
			$term_list = '<div class="ck-custom-archive-term-list">' . get_the_term_list( $post->ID, $data->taxonomySelected, '<span class="ck-custom-archive-tax-label">Posted In: </span>', ', ' ) . '</div>';
			$term_list = apply_filters( 'ck_custom_archive_layout__term_list', $term_list, $data );
			$term_list = apply_filters( 'ck_custom_archive_layout__' . $data->postTypeSelected . '_term_list', $term_list, $data );
			echo wp_kses_post( $term_list );
		}
		?>
		<?php
		if ( true == $data->showLearnMoreLink ) {
			$link_label = empty( $data->learnMoreLinkTitle ) ? __( 'Learn more', 'wp-rig' ) : $data->learnMoreLinkTitle;
			$more_link  = wp_sprintf( '<a class="ck-custom-archive-more-link arrow-link" href="%1s" target="%2s">%2s<span class="screen-reader-text">%3s</span></a>', get_the_permalink(), $permalink_target, $link_label, get_the_title() );
			$more_link  = apply_filters( 'ck_custom_archive_layout__more_link', $more_link, $data );
			$more_link  = apply_filters( 'ck_custom_archive_layout__' . $data->postTypeSelected . '_more_link', $more_link, $data );

			echo wp_kses_post( $more_link );
		}
		?>
	</div>
</div>
