<?php
$featured_image = get_the_post_thumbnail( $post->ID, 'medium_large' );
$excerpt        = '';

if ( true == $data->displayPostExcerpt ) {
	$excerpt = get_the_excerpt();
	$limit   = $data->excerptLength;
	if ( str_word_count( $excerpt, 0 ) > $limit ) {
		$words   = str_word_count( $excerpt, 2 );
		$pos     = array_keys( $words );
		$excerpt = substr( $excerpt, 0, $pos[ $limit ] );
	}
}

$permalink = apply_filters( 'carkeek_block_custom_post_' . $data->postTypeSelected . '__link', get_permalink(), $post->ID, $data );

?>
<div class="ck-custom-post__item">
<?php
if ( ! empty( $featured_image ) ) {
	?>
		<a class="ck-custom-post__image_link" href="<?php echo esc_url( $permalink ); ?>">
			<?php echo wp_kses_post( $featured_image ); ?>
		</a>
	<?php } ?>
	<div class="ck-custom-post__content-wrap">
		<?php do_action( 'carkeek_block_custom_post_layout__before_title' ); ?>
		<a class="'ck-custom-post__title_link" href="<?php echo esc_url( $permalink ); ?>"><h2><?php the_title(); ?></h2></a>
		<?php do_action( 'carkeek_block_custom_post_layout__after_title' ); ?>
		<?php
		if ( ! empty( $excerpt ) ) {
			?>
			<div class="ck-custom-post__excerpt"><?php echo wp_kses_post( $excerpt ); ?></div>
		<?php } ?>
		<?php do_action( 'carkeek_block_custom_post_layout__after_excerpt' ); ?>
	</div>
</div>
