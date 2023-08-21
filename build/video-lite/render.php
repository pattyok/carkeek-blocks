<?php
	$source   = $attributes['source'];
	$video_id = $attributes['videoId'];
	$embed    = '';
	$style    = '';


if ( $source == 'vimeo' ) {
	$embed = '<lite-vimeo videoid="' . $video_id . '" ' . $style . '></lite-vimeo>';
} elseif ( $source == 'youtube' ) {
	$embed = '<lite-youtube videoid="' . $video_id . '" ' . $style . '></lite-youtube>';
}

/** Check for and remove empty paragraph tag in $content */
if ( ! empty( $content ) ) {
	$content = preg_replace( '/<p[^>]*>([\s|&nbsp;]*)<\/p>/', '', $content );
}
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php echo $embed; ?>
	<?php if ( ! empty( trim( $content ) ) ) : ?>
		<div class="wp-block-carkeek-blocks-video-lite__caption">
			<?php echo $content; ?>
		</div>
	<?php endif; ?>
</div>
