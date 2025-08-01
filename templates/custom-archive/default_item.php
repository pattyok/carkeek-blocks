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

$focal_point = get_post_meta( $post->ID, '_carkeekblocks_featured_image_focal_point', true );
$style       = '';
if ( ! empty( $focal_point ) ) {
	$x     = $focal_point['x'] * 100;
	$y     = $focal_point['y'] * 100;
	$style = 'object-position:' . esc_attr( $x ) . '% ' . esc_attr( $y ) . '%;';
}

if ( $data->displayFeaturedImage ) {
	$featured_image = get_the_post_thumbnail( $post->ID, $image_size, array( 'style' => $style ) );
	if ( empty( $featured_image ) && !empty($data->defaultFeaturedImage)) {
		$featured_image = apply_filters( 'ck_custom_archive__featured_image_default', '<img class="ck-image-default" src="' . esc_url( $data->defaultFeaturedImage ) . '" alt="' . esc_attr( $data->defaultAltText ) . '" />', $post->ID, $data );
	}
}

$featured_image = apply_filters( 'ck_custom_archive_' . $data->postTypeSelected . '__featured_image', $featured_image, $post->ID, $data );

$excerpt = '';
if ( true == $data->displayPostExcerpt ) {
	$excerpt = stripslashes( wp_filter_nohtml_kses( get_the_excerpt() ) );
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
$link_start = '';
$link_end   = '';
$permalink        = apply_filters( 'ck_custom_archive_' . $data->postTypeSelected . '__link', get_permalink(), $post->ID, $data );
$permalink_target = isset( $data->newWindow ) && true == $data->newWindow ? '_blank' : '_self';
$permalink_target = apply_filters( 'ck_custom_archive_' . $data->postTypeSelected . '__link_target', $permalink_target, $data );


if ( isset( $data->noLink ) && true == $data->noLink || empty( $permalink ) ) {
	$link_title = get_the_title();
} else {
	
	if ( !isset( $data->wholeLink ) || false == $data->wholeLink ) {
		$link_title       = wp_sprintf( '<a class="ck-custom-archive-title_link" href="%1s" target="%2s">%3s</a>', $permalink, $permalink_target, get_the_title() );
	} else {
		$link_title = get_the_title();
		$link_start = '<a class="ck-custom-archive-title_link" href="' . esc_url( $permalink ) . '" target="' . esc_attr( $permalink_target ) . '">';
		$link_end = '</a>';
	}
}
$link_title = apply_filters( 'ck_custom_archive_' . $data->postTypeSelected . '__link_title', $link_title, $post->ID, $data );

if ( true == $data->useHeadingTitle ) {

	$start      = '<h' . $data->headlineLevel . ' class="ck-custom-archive-title-header">';
	$end        = '</h' . $data->headlineLevel . '>';
	$link_title = $start . $link_title . $end;
} else {
	$link_title = '<div class="ck-custom-archive-title">' . $link_title . '</div>';
}

$meta = array(
	'before' => '',
	'after'  => '',
);
if ( isset( $data->showPublishDate ) && true == $data->showPublishDate ) {
	$prefix = '';
	if ( isset( $data->publishDatePrefix ) && ! empty( $data->publishDatePrefix ) ) {
		// look for [author] and replace with the author name
		$prefix = str_replace( '[author]', get_the_author(), $data->publishDatePrefix );

		$prefix = '<span class="publish-date-prefix">' . $prefix . '</span>';
	}
	$meta[ $data->publishDateLocation ] = wp_sprintf( '<span class="ck-custom-archive-item-date">%1s %1s</span>', $prefix, get_the_date() );
}
// deprecate this in favor of dynamic titles
$meta_before = apply_filters( 'ck_custom_archive_layout__meta_before_title', $meta['before'], $data );
$meta_after  = apply_filters( 'ck_custom_archive_layout__meta_after_title', $meta['after'], $data );
$meta_before = apply_filters( 'ck_custom_archive_' . $data->postTypeSelected . '__meta_before_title', $meta_before, $data );
$meta_after  = apply_filters( 'ck_custom_archive_' . $data->postTypeSelected . '__meta_after_title', $meta_after, $data );

$html_before_excerpt = '';
$html_after_excerpt  = '';
if ( isset( $data->addlContentBefore ) ) {
	$html_before_excerpt = CarkeekBlocks_Helpers::make_meta_fields( $data->addlContentBefore, $post->ID, 'before', $data->postTypeSelected );
}
if ( isset( $data->addlContentAfter ) ) {
	$html_after_excerpt = CarkeekBlocks_Helpers::make_meta_fields( $data->addlContentAfter, $post->ID, 'after', $data->postTypeSelected );
}
?>
<div class="ck-columns-item ck-custom-archive-item <?php echo esc_attr( $post->name ); ?> archive-item-id-<?php echo esc_attr( $post->ID ); ?>">
<?php
if ( ! empty( $link_start ) ) {
	echo wp_kses_post( $link_start );
}
$featured_image_html = '';
if ( ! empty( $featured_image ) ) {
	$image_style = isset( $data->imageOrientation ) ? 'layout-' . $data->imageOrientation : 'layout-landscape';

	if ( false == $data->noLink && false == $data->wholeLink && !empty($permalink)) {
		$featured_image_html =  sprintf('<a class="ck-custom-archive-image-link %s" aria-hidden="true" tabindex="-1" href="%s" target="%s">%s</a>',
			esc_attr( $image_style ),
			esc_url( $permalink ),
			esc_attr( $permalink_target ),
			$featured_image
		);
	} else {
		$featured_image_html = sprintf('<div class="ck-custom-archive-image-link %s">%s</div>',
			esc_attr( $image_style ),
			$featured_image
		);
	}
}
$featured_image_html = apply_filters( 'ck_custom_archive__featured_image_html', $featured_image_html, $data );
$featured_image_html = apply_filters( 'ck_custom_archive_' . $data->postTypeSelected . '__featured_image_html', $featured_image_html, $data );
echo $featured_image_html;
?>
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
		if ( ! empty( $html_before_excerpt ) ) {
			echo wp_kses_post( $html_before_excerpt );
		}
		?>
		<?php
		if ( ! empty( $excerpt ) ) {
			?>
			<div class="ck-custom-archive-excerpt"><?php echo wp_kses_post( $excerpt ); ?></div>
		<?php } ?>


		<?php
		if ( ! empty( $html_after_excerpt ) ) {
			echo wp_kses_post( $html_after_excerpt );
		}
		?>
		<?php do_action( 'ck_custom_archive_layout__after_excerpt', $data ); ?>
		<?php
		if ( true == $data->showTerms ) {
			$taxlist = $data->showTermsTax;
			if ( empty( $taxlist ) ) {
				$taxlist = $data->taxonomySelected;
			}
			$taxlist = explode( ',', $taxlist );
			$term_list = '';
			foreach( $taxlist as $tax ) {
				$term_list .= '<div class="ck-custom-archive-term-list">' . get_the_term_list( $post->ID, $tax, '<span class="ck-custom-archive-tax-label">Posted In: </span>', ', ' ) . '</div>';
			}

			$term_list = apply_filters( 'ck_custom_archive_layout__term_list', $term_list, $data );
			$term_list = apply_filters( 'ck_custom_archive_layout__' . $data->postTypeSelected . '_term_list', $term_list, $data );
			echo wp_kses_post( $term_list );
		}
		?>
		<?php
		if ( true == $data->showLearnMoreLink ) {
			$link_label  = empty( $data->learnMoreLinkTitle ) ? __( 'Learn more', 'wp-rig' ) : $data->learnMoreLinkTitle;
			$title_class = isset( $data->appendPostTitle ) && true == $data->appendPostTitle ? 'more-link--append-title' : 'screen-reader-text';
			$more_link   = wp_sprintf( '<a class="ck-custom-archive-more-link arrow-link" href="%1s" target="%2s">%2s <span class="%3s">%4s</span></a>', get_the_permalink(), $permalink_target, $link_label, $title_class, get_the_title() );
			$more_link   = apply_filters( 'ck_custom_archive_layout__more_link', $more_link, $data );
			$more_link   = apply_filters( 'ck_custom_archive_layout__' . $data->postTypeSelected . '_more_link', $more_link, $data );

			echo wp_kses_post( $more_link );
		}
		?>
	</div>
	<?php
	if ( ! empty( $link_end ) ) {
		echo wp_kses_post( $link_end );
	}
	?>
</div>
