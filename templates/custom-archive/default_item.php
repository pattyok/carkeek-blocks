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

$permalink = apply_filters( 'ck_custom_archive_' . $data->postTypeSelected . '__link', get_permalink(), $post->ID, $data );

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
		<?php do_action( 'ck_custom_archive_layout__before_title', $data ); ?>
		<a class="ck-custom-archive-title_link" href="<?php echo esc_url( $permalink ); ?>"><?php the_title(); ?></a>
		<?php do_action( 'ck_custom_archive_layout__after_title', $data ); ?>
		<?php
		if ( ! empty( $excerpt ) ) {
			?>
			<div class="ck-custom-archive-excerpt"><?php echo wp_kses_post( $excerpt ); ?></div>
		<?php } ?>
		<?php do_action( 'ck_custom_archive_layout__after_excerpt', $data ); ?>
	</div>
</div>
