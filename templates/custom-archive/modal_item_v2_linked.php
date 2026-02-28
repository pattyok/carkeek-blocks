<?php


	$item_id          = $data->blockId . '_' . $post->ID;
	$image            = '';
	$modal_body_image = '';
	$image            = get_the_post_thumbnail( $post->ID, 'large' );
	$image = apply_filters( 'ck_custom_archive_' . $data->postTypeSelected . '__featured_image_html', $image, $data );
if ( ! empty( $image ) ) {
	$modal_body_image = '<div class="ck-modal-item-image">' . $image . '</div>';
}
	$modal_body_image = apply_filters( 'ck_custom_archive_layout_modal_dialog__image', $modal_body_image );

	$html_before_excerpt = CarkeekBlocks_Helpers::make_meta_fields( $data->addlContentBefore, $post->ID, 'before', $data->postTypeSelected );
$html_after_excerpt  = CarkeekBlocks_Helpers::make_meta_fields( $data->addlContentAfter, $post->ID, 'after', $data->postTypeSelected );
?>

<div class="ck-columns__item ck-custom-archive__item ck-modal-item <?php echo esc_attr( $post->name ); ?>" data-id="<?php echo esc_attr( $item_id ); ?>" >
	<a href="javascript:;"
	class="ck-modal-item-image"
	id="title-<?php echo esc_attr( $item_id ); ?>"
	aria-controls="modal-name-<?php echo esc_attr( $item_id ); ?>"
>
	<?php
	if ( ! empty( $image ) && true == $data->displayFeaturedImage ) {
		$image_style = isset( $data->imageOrientation ) ? 'layout-' . $data->imageOrientation : 'layout-landscape';
		?>
		<div class="ck-modal-item-image ck-custom-archive-image-link <?php echo esc_attr( $image_style ); ?>">
			<?php echo wp_kses_post( $image ); ?>
		</div>
	<?php } ?>
	<div class="ck-modal-item-title ">
	<?php do_action( 'ck_custom_archive_layout__before_title', $data ); ?>

		<?php echo sprintf( '<span class="ck-custom-archive-title_link">%s</span>', esc_html( get_the_title() ) ); ?>

		<?php
	if ( ! empty( $html_before_excerpt ) ) {
		echo wp_kses_post( $html_before_excerpt );
	}
	?>
	<?php do_action( 'ck_custom_archive_layout__after_title', $data ); ?>
	</div>
	</a>

	<?php
	$template_data = array(
		'item_id'          => $item_id,
		'modal_body_image' => $modal_body_image,
		'data'               => $data,
		'html_before_excerpt' => $html_before_excerpt,
		'html_after_excerpt'  => $html_after_excerpt,
	);
	$template_loader = new Carkeek_Blocks_Template_Loader();

	ob_start();
	$template_loader->set_template_data( $template_data )
		->get_template_part( 'custom-archive/modal' );
	echo ob_get_clean();
?>
</div>
