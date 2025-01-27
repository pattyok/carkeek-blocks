<?php
/**
 * Template part for displaying the header search
 *
 * @package wp_rig
 */

namespace WP_Rig\WP_Rig;


$label = isset($attributes['label']) ? $attributes['label'] : '';

?>


<div <?php echo get_block_wrapper_attributes(
	array(
		'class' => 'nav--toggle-small header-search-wrapper',
		'id'    => 'search_modal',
	)
); ?>>
	<button class="search-toggle header-toggle" data-toggleoff="primary-menu-toggle" id="search-toggle" data-target="#header-search"
	<?php if ( $attributes['alignment'] == 'hidden') { ?>
		aria-label="<?php esc_attr_e( $label, 'wp-rig' ); ?>"
	<?php } ?>
	 aria-controls="header-search" aria-expanded="false">
	<?php if ( $attributes['alignment'] == 'before') { ?>
		<span class="search-label"><?php echo esc_html( $label ); ?></span>
	<?php } ?>
	<span class="search-toggle-box">
	<span class="search-toggle__circle"></span>
		<span class="search-toggle__rectangle"></span>
	</span>
	<?php if ( $attributes['alignment'] == 'after') { ?>
		<span class="search-label"><?php echo esc_html( $label ); ?></span>
	<?php } ?>
	</button>
	<div class="header-search search-dropdown__content">
		<?php get_search_form( true ); ?>
	</div>
</div>

