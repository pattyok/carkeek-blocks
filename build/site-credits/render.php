<?php 
/**
 * Render callback for the Site Credits block.
 *
 * @package carkeek-blocks
 */
/** Saved to theme */
$creditsPopupContent = get_option( '_carkeekblocks_site_credits', '' );
$creditsPopupOverride = $attributes['creditsPopupContent'] ?? '';
if ( $creditsPopupOverride ) {
	$creditsPopupContent = $creditsPopupOverride;
}
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php if ( $attributes['showCopyright'] ) { ?>
	<span class="site-info">&copy; <?php echo esc_attr( gmdate( 'Y' ) ); ?> <?php echo wp_kses_post( $attributes['contentAfter'] ); ?></span>
	<?php } ?>
	<?php if ( $attributes['showCredits'] ) { ?>
		<span class="info-popover ck-credits" data-popover="site-credit-pop"><?php echo esc_html( $attributes['creditsLinkLabel'] ); ?></span>
		<div class="gpopover no-list" id="site-credit-pop">
			<ul class="no-list">
				<?php echo wp_kses_post( $creditsPopupContent ); ?>
			</ul>
		</div>
	<?php } ?>
</div>