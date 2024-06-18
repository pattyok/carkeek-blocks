<?php

	$item_id          = $data->blockId . '_' . $post->ID;
	$image            = '';
	$modal_body_image = '';

	$focal_point = get_post_meta( $post->ID, '_carkeekblocks_featured_image_focal_point', true );
	$style       = '';
if ( ! empty( $focal_point ) ) {
	$x     = $focal_point['x'] * 100;
	$y     = $focal_point['y'] * 100;
	$style = 'object-position:' . esc_attr( $x ) . '% ' . esc_attr( $y ) . '%;';
}
	$image = get_the_post_thumbnail( $post->ID, 'large', array( 'style' => $style ) );

if ( ! empty( $image ) ) {

	$modal_body_image = '<div class="ck-modal-item-image">' . $image . '</div>';
}
	$modal_body_image = apply_filters( 'ck_custom_archive_layout_modal_dialog__image', $modal_body_image );
?>

<?php

$html_before_excerpt = CarkeekBlocks_Helpers::make_meta_fields( $data->addlContentBefore, $post->ID, 'before', $data->postTypeSelected );
$html_after_excerpt  = CarkeekBlocks_Helpers::make_meta_fields( $data->addlContentAfter, $post->ID, 'after', $data->postTypeSelected );

$link_title = '<a
class="ck-modal-item-name"
id="title-' . esc_attr( $item_id ) . '"
aria-controls="modal-name-' . esc_attr( $item_id ) . '"
href="javascript:;">' . get_the_title() . '</a>';

if ( true == $data->useHeadingTitle ) {

	$start      = '<h' . $data->headlineLevel . '>';
	$end        = '</h' . $data->headlineLevel . '>';
	$link_title = $start . $link_title . $end;
}
?>

<div class="ck-columns__item ck-custom-archive__item ck-modal-item <?php echo esc_attr( $post->name ); ?> archive-item-id-<?php echo esc_attr( $post->ID ); ?>" data-id="<?php echo esc_attr( $item_id ); ?>" >
	<?php
	if ( ! empty( $image ) && true == $data->displayFeaturedImage ) {
		$image_style = isset( $data->imageOrientation ) ? 'layout-' . $data->imageOrientation : 'layout-landscape';

		?>
		<a href="javascript:;" class="ck-modal-item-image ck-custom-archive-image-link <?php echo esc_attr( $image_style ); ?>" aria-controls="modal-name-<?php echo esc_attr( $item_id ); ?>">
			<?php echo wp_kses_post( $image ); ?>
		</a>
	<?php } ?>
	<?php do_action( 'ck_custom_archive_layout__before_title', $data ); ?>
	<?php echo wp_kses_post( $link_title ); ?>
	<?php
	if ( ! empty( $html_before_excerpt ) ) {
		echo wp_kses_post( $html_before_excerpt );
	}
	?>
	<?php do_action( 'ck_custom_archive_layout__after_title', $data ); ?>
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
