<?php
/** Template for the modal window shared between link types */
?>
<div class="ck-modal-item-dialog modal2 modal--animate-scale js-modal" id="modal-name-<?php echo esc_attr( $data->item_id ); ?>" >
		<div class="modal__content" role="alertdialog" aria-labelledby="modal-title-<?php echo esc_attr( $data->item_id ); ?>" aria-describedby="modal-description-<?php echo esc_attr( $data->item_id ); ?>">

				<header class="modal-header">
					<?php do_action( 'ck_custom_archive_layout_modal_dialog__header', $data->data ); ?>
					<button class="modal__close-btn modal__close-btn--inner mc4-hide@md js-modal__close js-tab-focus">
						<svg class="mc4-icon mc4-icon--xs" viewBox="0 0 16 16">
						<title>Close modal window</title>
						<g stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
							<line x1="13.5" y1="2.5" x2="2.5" y2="13.5"></line>
							<line x1="2.5" y1="2.5" x2="13.5" y2="13.5"></line>
						</g>
						</svg>
					</button>
				</header>
				<div class="modal-body">
					<?php if ( ! empty( $data->modal_body_image ) ) { ?>
						<?php echo wp_kses_post( $data->modal_body_image ); ?>
					<?php } ?>
					<?php do_action( 'ck_custom_archive_layout_modal_dialog__after_image' ); ?>
					<!-- Shows up on small and big item -->
					<div class="ck-modal-item-header">
						<?php do_action( 'ck_custom_archive_layout__before_title', $data->data ); ?>
						<p class="ck-modal-item-name"><?php the_title(); ?></p>
						<?php do_action( 'ck_custom_archive_layout__after_title', $data->data ); ?>
						<?php do_action( 'ck_custom_archive_layout_modal_dialog__after_title' ); ?>
						<?php
						if ( ! empty( $data->html_before_excerpt ) ) {
							echo wp_kses_post( $data->html_before_excerpt );
						}
						?>
						<?php do_action( 'ck_custom_archive_layout_modal_dialog__header_bottom', $data->data ); ?>
					</div>
					<div class="ck-modal-item-details" id="modal-description-<?php echo esc_attr( $data->item_id ); ?>">
						<?php do_action( 'ck_custom_archive_layout_modal_dialog__before_content', $data->data ); ?>
						<?php the_content(); ?>
					</div>
					<?php
					if ( ! empty( $data->html_after_excerpt ) ) {
						echo wp_kses_post( $data->html_after_excerpt );
					}
					?>
					<?php do_action( 'ck_custom_archive_layout_modal_dialog__after_content', $data->data ); ?>
				</div>
				<footer class="modal-footer">
				<button class="modal__close-btn modal__close-btn--outer js-modal__close js-tab-focus">

					Close


  				</button>
				</footer>

		</div>
	</div>

