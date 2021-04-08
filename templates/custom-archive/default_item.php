<?php
$featured_image = '';
if ( $data->displayFeaturedImage ) {
	$featured_image = get_the_post_thumbnail( $post->ID, 'medium_large' );
}

$excerpt = '';
if ( true == $data->displayPostExcerpt ) {
	$excerpt = get_the_excerpt();
	$limit   = $data->excerptLength;
	if ( str_word_count( $excerpt, 0 ) > $limit ) {
		$words   = str_word_count( $excerpt, 2 );
		$pos     = array_keys( $words );
		$excerpt = substr( $excerpt, 0, $pos[ $limit ] );
	}
}

$permalink  = apply_filters( 'ck_custom_archive_' . $data->postTypeSelected . '__link', get_permalink(), $post->ID, $data );
$link_title = wp_sprintf( '<a class="ck-custom-archive-title_link" href="%1s">%2s</a>', $permalink, get_the_title() );
if ( $data->useHeadingTitle ) {
	$start      = '<h' . $data->headlineLevel . '>';
	$end        = '</h' . $data->headlineLevel . '>';
	$link_title = $start . $link_title . $end;
}

$meta = array(
	'before' => '',
	'after'  => '',
);
if ( $data->showPublishDate ) {
	$meta[ $data->publishDateLocation ] = wp_sprintf( '<span class="ck-custom-archive-item-date">%1s</span>', get_the_date() );
}
$meta_before = apply_filters( 'ck_custom_archive_layout__meta_before_title', $meta['before'], $data );
$meta_after  = apply_filters( 'ck_custom_archive_layout__meta_after_title', $meta['after'], $data );
?>
<div class="ck-columns-item ck-custom-archive-item <?php echo esc_attr( $post->name ); ?>">
<?php
if ( ! empty( $featured_image ) ) {
	?>
		<a class="ck-custom-archive-image-link" href="<?php echo esc_url( $permalink ); ?>">
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
		if ( ! empty( $excerpt ) ) {
			?>
			<div class="ck-custom-archive-excerpt"><?php echo wp_kses_post( $excerpt ); ?></div>
		<?php } ?>
		<?php do_action( 'ck_custom_archive_layout__after_excerpt', $data ); ?>
		<?php
		if ($data->showTerms) {
			echo get_the_term_list( $post->ID, $data->taxonomySelected, 'Posted In: ', ', ' );
		}
		?>
	</div>
</div>
