<?php
/**
 * Load functions used in the plugin
 *
 * @package   CarkeekBlocks
 * @author    Patty O'Hara
 * @link      https://carkeekstudios.com
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Load general assets for our blocks.
 *
 * @since 1.0.0
 */
class CarkeekBlocks_Helpers {

	/**
	 * This plugin's instance.
	 *
	 * @var CarkeekBlocks_Helpers
	 */
	private static $instance;

	/**
	 * Registers the plugin.
	 */
	public static function register() {
		if ( null === self::$instance ) {
			self::$instance = new CarkeekBlocks_Helpers();
		}
	}

	/**
	 * The Constructor.
	 */
	private function __construct() {

	}

	/**
	 * Make meta html from the addlData fields.
	 * Take the string, make it an array and return the html for each field.
	 *
	 * @param string $addl_data possibly comma separated string of fields.
	 * @param string $post_id current post id.
	 * @param string $location where its going to be placed (before or after).
	 * @param string $posttype current posttype.
	 *
	 * @return string html for each field.
	 */
	public static function make_meta_fields( $addl_data, $post_id, $location, $posttype, $sep = '' ) {
		$meta_html = '';
		if ( ! empty( $addl_data ) ) {
			$meta_fields = array_filter( explode( ',', $addl_data ) );
			if ( count( $meta_fields ) > 1 && !empty($sep) ) {
				$meta_html = '<div class="ck-custom-archive-item-meta-' . $location . '-excerpt-wrapper" data-meta="multiple" >';
			}
			foreach ( $meta_fields as $n => $key ) {
				if ( empty( trim($key) ) ) {
					continue;
				}
				if ( $n > 0 && !empty($sep) ) {
					$meta_html .= '<span class="ck-custom-archive-item-meta-' . $location . '-excerpt-sep">' .  $sep  . '</span>';
				}
				$key   = trim( $key );
				$value = get_post_meta( $post_id, $key, true );
				if ( ! empty( $value ) ) {
					if ( strpos( $key, 'email' ) !== false ) {
						$value = '<a href="mailto:' . antispambot( $value ) . '" class="arrow-link">Contact</a>';
					}
					if ( strpos ($key, 'date') !== false) {
						//default to Wordpress Date format
						$default_date_format = get_option('date_format');
						$value = date( $default_date_format, strtotime( $value ) );
					}
					$field      = '<div class="ck-custom-archive-item-meta-' . $location . '-excerpt" data-meta="' . esc_attr( $key ) . '">' . wp_kses_post( $value ) . '</div>';
					$meta_html .= apply_filters( 'ck_custom_archive_layout__' . $posttype . '_meta_' . $location . '_excerpt', $field, $key );
				}
			}
			if ( count( $meta_fields ) > 1 && !empty($sep) ) {
				$meta_html .= '</div>';
			}
		}
		return $meta_html;
	}

	/**
	 * Takes an email and returns obscured version.
	 * https://www.maurits.vdschee.nl/php_hide_email/
	 *
	 * @param string $email The email to be obfuscated.
	 * @return string
	 */
	public function hide_email( $email, $link_text = 'Contact' ) {
		$character_set = '+-.0123456789@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';

		$key         = str_shuffle( $character_set );
		$cipher_text = '';
		$id          = 'e' . rand( 1, 999999999 );

		for ( $i = 0;$i < strlen( $email );
		$i += 1 ) {
			$cipher_text .= $key[ strpos( $character_set, $email[ $i ] ) ];
		}

		$script = 'var a="' . $key . '";var b=a.split("").sort().join("");var c="' . $cipher_text . '";var d="";';

		$script .= 'for(var e=0;e<c.length;e++)d+=b.charAt(a.indexOf(c.charAt(e)));';

		$script .= 'document.getElementById("' . $id . '").innerHTML="<a href=\\"mailto:"+d+"\\" class="arrow-link">' . $link_text . '</a>"';

		$script = 'eval("' . str_replace( array( '\\', '"' ), array( '\\\\', '\"' ), $script ) . '")';

		$script = '<script type="text/javascript">/*<![CDATA[*/' . $script . '/*]]>*/</script>';

		return '<span id="' . $id . '">[javascript protected email address]</span>' . $script;

	}

}

CarkeekBlocks_Helpers::register();
