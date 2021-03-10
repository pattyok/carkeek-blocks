<?php
	$item_id          = $data->blockId . '_' . $post->ID;
	$image            = '';
	$modal_body_image = '';
if ( $data->displayFeaturedImage ) {
	$image = get_the_post_thumbnail( $post->ID, 'large' );
}
if ( ! empty( $image ) ) {
	$modal_body_image = '<div class="ck-modal-item-image">' . $image . '</div>';
}
	$modal_body_image = apply_filters( 'ck_custom_archive_layout_modal_dialog__image', $modal_body_image );
?>

<div class="ck-columns__item ck-custom-archive__item ck-modal-item <?php echo esc_attr( $post->name ); ?>" data-id="<?php echo esc_attr( $item_id ); ?>" >
	<?php if ( ! empty( $image ) ) { ?>
		<a class="ck-modal-item-image ck-custom-archive-image-link" data-toggle="modal" data-target="#dialog-<?php echo esc_attr( $item_id ); ?>">
			<?php echo wp_kses_post( $image ); ?>
		</a>
	<?php } ?>

	<a
		class="ck-modal-item-name"
		id="title-<?php echo esc_attr( $item_id ); ?>"
		data-toggle="modal"
		data-target="#dialog-<?php echo esc_attr( $item_id ); ?>"
	>
		<?php the_title(); ?>
	</a>
	<!-- <p class="ck-team-member__title"><?php the_field( 'organizers_role' ); ?></p> -->
	<?php do_action( 'ck_custom_archive_layout_modal_preview__after_title' ); ?>
	<div class="ck-modal-item-dialog modal fade" id="dialog-<?php echo esc_attr( $item_id ); ?>" tabIndex="-1" role="dialog" aria-labelledby="title-<?php echo esc_attr( $item_id ); ?>" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<?php do_action( 'ck_custom_archive_layout_modal_dialog__header' ); ?>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<?php if ( ! empty( $modal_body_image ) ) { ?>
						<?php echo wp_kses_post( $modal_body_image ); ?>
					<?php } ?>
					<?php do_action( 'ck_custom_archive_layout_modal_dialog__after_image' ); ?>
					<p class="ck-modal-item-name"><?php the_title(); ?></p>
					<?php do_action( 'ck_custom_archive_layout_modal_dialog__after_title' ); ?>
					<div class="ck-modal-item-details">
						<?php the_content(); ?>
					</div>
					<?php do_action( 'ck_custom_archive_layout_modal_dialog__after_content' ); ?>
				</div>
				<div class="modal-footer">
					<?php do_action( 'ck_custom_archive_layout_modal_dialog__footer' ); ?>
					<a data-dismiss="modal">Close</a>
				</div>
			</div>
		</div>
	</div>
</div>