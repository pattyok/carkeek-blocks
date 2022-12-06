<?php
/** Template for rendering the circle chart.
 * /
 *
 * @package CarkeekBlocks
 */
$marker = $attributes['isPercentage'] ? '%' : '';

$max_val = $attributes['isPercentage'] ? 100 : $attributes['max'];
$r = 145;
$circle = pi() * ($r * 2);
$pct = (($max_val - $attributes['numberVal']) / $max_val) * $circle;
?>
<div  <?php echo get_block_wrapper_attributes(); ?>>
	<div class="ck-circle-counter--text-wrap">
			<div class="ck-circle-counter--text before"><?php echo esc_html( $attributes['textBefore'] ); ?></div>
			<div class="ck-circle-counter--number" style="color:<?php echo $attributes['colorHex']; ?>">
				<?php echo esc_html( $attributes['numberVal'] . $marker ); ?>
			</div>
			<div class="ck-circle-counter--text before"><?php echo esc_html( $attributes['textAfter'] ); ?></div>
	</div>
	<div class="ck-circle-counter--circle">
		<svg class="svg" viewBox="0 0 300 300" version="1.1" preserveAspectRatio="xMinYMin meet">
			<circle class="ck-bar-bg" r="145" cx="150" cy="150" stroke-width="10" stroke="<?php echo $attributes['backgroundColorHex']; ?>" fill="transparent" stroke-dasharray="911.06" stroke-dashoffset="0"></circle>
			<circle class="ck-bar" r="145" cx="150" cy="150" stroke="<?php echo $attributes['colorHex']; ?>" fill="transparent" stroke-dasharray="911.06" stroke-width="10" stroke-dashoffset=<?php echo $pct; ?> transform="rotate(-90.1 150 150)"></circle>
		</svg>
	</div>
</div>
