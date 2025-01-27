<?php
/**
 * Template part for displaying the header search
 *
 * @package wp_rig
 */

namespace WP_Rig\WP_Rig;



$menu_style = is_user_logged_in() ? 'member-menu-logged-in' : 'member-menu-logged-out';
$icon_loggedin_before = '';
$icon_loggedout_before = '';
$icon_loggedin_after = '';
$icon_loggedout_after = '';
if ( $attributes['showIcon']) {
	if ( $attributes['alignment'] == 'before' ) {
		$icon_loggedin_after = '<i class="fa-solid fa-user"></i>';
		$icon_loggedout_after = '<i class="fa-solid fa-lock"></i>';
	} else {
		$icon_loggedin_before = '<i class="fa-solid fa-user"></i>';
		$icon_loggedout_before = '<i class="fa-solid fa-lock"></i>';
	}
}
?>



<div <?php echo get_block_wrapper_attributes(
	array(
		'class' => 'member-menu-wrapper nav--toggle-small ' . $menu_style,
	)
); ?>>
<button id="member-menu-toggle" class="member-menu-toggle header-toggle header-button" data-target="#member-menu" aria-controls="member-menu" aria-expanded="false">
		<?php if ( is_user_logged_in() ) : ?>
			<?php
			$label = '';
			if ($attributes['alignment'] !== 'hidden') {
				$label = $attributes['label'];
				if ( $attributes['showUserName'] ) {
					$label = __( 'Hi, ', 'wp-rig' ) . '<span>' . wp_get_current_user()->display_name . '</span>';
				}
			}

			echo wp_kses_post( $icon_loggedin_before . ' <span class="overflow-ellipses">' . $label . '</span> ' . $icon_loggedin_after); ?>

		<?php else : ?>

			<?php echo wp_kses_post( $icon_loggedout_before . '<span class="login-label">' .  __( 'Login', 'wp-rig' ) . '</span>' . $icon_loggedout_after); ?>
		<?php endif; ?>
	</button>
	<div class="member-menu" id="member-menu">
	<?php block_template_part( 'member-menu' ); ?>
	</div>
</div>
