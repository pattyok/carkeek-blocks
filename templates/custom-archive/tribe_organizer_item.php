<?php
	$item_id = $data->blockId . '_' . $post->ID;
	$image   = get_the_post_thumbnail( $post->ID, 'large' );
?>

<div class="ck-custom-archive__item wp-block-carkeek-blocks-team-member" data-id="<?php echo esc_attr( $item_id ); ?>" >
	<?php if ( ! empty( $image ) ) { ?>
		<a class="ck-team-member__image" data-toggle="modal" data-target="#dialog-<?php echo esc_attr( $item_id ); ?>">
			<?php echo wp_kses_post( $image ); ?>
		</a>
	<?php } ?>

	<a
		class="ck-team-member__name"
		id="title-<?php echo esc_attr( $item_id ); ?>"
		data-toggle="modal"
		data-target="#dialog-<?php echo esc_attr( $item_id ); ?>"
	>
		<?php the_title(); ?>
	</a>
	<p class="ck-team-member__title"><?php the_field( 'organizers_role' ); ?></p>
	<div class="ck-team-member__additional modal fade" id="dialog-<?php echo esc_attr( $item_id ); ?>" tabIndex="-1" role="dialog" aria-labelledby="title-<?php echo esc_attr( $item_id ); ?>" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<?php if ( ! empty( $image ) ) { ?>
						<div class="ck-team-member__image" data-toggle="modal" data-target="#dialog-<?php echo esc_attr( $item_id ); ?>">
							<?php echo wp_kses_post( $image ); ?>
						</div>
					<?php } ?>

					<p class="ck-team-member__name"><?php the_title(); ?></p>
					<?php if ( ! empty( get_field( 'organizers_role' ) ) ) { ?>
						<p class="ck-team-member__title"><?php the_field( 'organizers_role' ); ?></p>
					<?php } ?>
					<div class="ck-team-member__details">
						<?php the_content(); ?>
					</div>
				</div>
				<div class="modal-footer">
					<a data-dismiss="modal">Close</a>
				</div>
			</div>
		</div>
	</div>
</div>
