<?php if ( ! empty( get_the_post_thumbnail( null, 'large' ) ) ) {
	$size             = isset( $attributes['imageSize'] ) ? $attributes['imageSize'] : 'large';
	$extra_attributes = array();
	$caption          = '';
	if ( true === $attributes['showCaption'] ) {
			$caption                   = '<figcaption class="image-caption">' . get_the_post_thumbnail_caption() . '</figcaption>';
			$extra_attributes['class'] = 'has-caption';
	}

	$id = '';
	$nocrop = false;
	if (isset( $attributes['className']) ) {
		$nocrop = strpos( $attributes['className'], 'is-style-no-crop' );
	}
	$style  = '';
	if ( false == $nocrop && ! empty( $attributes['blockId'] )  )  {
		if ( isset( $attributes['blockId'] ) ) {
			$id = 'id="block-' . esc_attr( $attributes['blockId'] ) . '"';
		}
		$focal_point = $attributes['focalPoint'];
		if ( empty( $focal_point ) ) {
			global $post;
			// If not set in the block attributes, try to get it from the post meta.
			$focal_point = get_post_meta( $post->ID, '_carkeekblocks_featured_image_focal_point', true );
		}

		if ( ! empty( $focal_point ) ) {
			$x = $focal_point['x'] * 100;
			$y = $focal_point['y'] * 100;

			$style = 'object-position:' . esc_attr( $x ) . '% ' . esc_attr( $y ) . '%;';

		}
	}

	?>
<figure <?php echo get_block_wrapper_attributes( $extra_attributes ); ?> <?php echo $id; ?>>
	<?php echo get_the_post_thumbnail( null, $size, array('style' => $style) ); ?>
	<?php echo $caption; ?>
</figure>
	<?php
}
