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
	if ( false == $nocrop && ! empty( $attributes['blockId'] ) && ! empty( $attributes['focalPoint'] ) ) {
		if ( isset( $attributes['blockId'] ) ) {
		$id = 'id="block-' . esc_attr( $attributes['blockId'] ) . '"';
		}
		$focal_point = $attributes['focalPoint'];

		$x = $focal_point['x'] * 100;
		$y = $focal_point['y'] * 100;

		$style = 'object-position:' . esc_attr( $x ) . '% ' . esc_attr( $y ) . '%;';
	}

	?>
<figure <?php echo get_block_wrapper_attributes( $extra_attributes ); ?> <?php echo $id; ?>>
	<?php echo get_the_post_thumbnail( null, $size, array('style' => $style) ); ?>
	<?php echo $caption; ?>
</figure>
	<?php
}
