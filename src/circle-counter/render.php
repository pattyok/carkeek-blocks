<?php
/** Template for rendering the circle chart.
 * /
 *
 * @package CarkeekBlocks
 */
$marker = $attributes['isPercentage'] ? '%' : '';

$number = $attributes['numberVal'];

$max_val = $attributes['isPercentage'] ? 100 : $attributes['max'];
$type = $attributes['isPercentage'] ? 'percent' : 'number';
$classes_outer = array();
if ( $attributes['animate'] ) {
	$classes_outer[] = 'ck-counter-animate';
	$pct = 911.06;
} else {

	$r = 145;
	$circle = pi() * ($r * 2);
	$pct = (($max_val - $attributes['numberVal']) / $max_val) * $circle;
}
?>
<div  <?php echo get_block_wrapper_attributes( array('class' => implode(' ', $classes_outer ))); ?>
	data-type="<?php echo esc_attr( $type ); ?>"
	data-max="<?php echo esc_attr( $max_val ); ?>"
	data-number="<?php echo esc_attr( $number ); ?>"
	data-locale="<?php echo esc_attr( get_locale() ); ?>">
	<div class="ck-circle-counter">
		<div class="ck-circle-counter--text-wrap">
				<div class="ck-circle-counter--text before"><?php echo esc_html( $attributes['textBefore'] ); ?></div>
				<div class="ck-circle-counter--number ck-number-string" style="color:<?php echo $attributes['colorHex']; ?>">
					<span class="ck-number-int"><?php echo esc_html( $number ); ?></span><?php echo esc_html( $marker); ?>
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
</div>


