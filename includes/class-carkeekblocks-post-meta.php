<?php
/**
 * Register post meta.
 *
 * @package   CarkeekBlocks
 * @author    Patty O'Hara from CarkeekBlocks
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * CarkeekBlocks_Post_Meta Class
 *
 * @since 1.6.0
 */
class CarkeekBlocks_Post_Meta {

	/**
	 * Constructor
	 */
	public function __construct() {
		add_filter( 'init', array( $this, 'register_meta' ) );
		add_filter( 'body_class', array( $this, 'set_body_classes' ) );
	}

	/**
	 * Register meta.
	 */
	public function register_meta() {
		register_meta(
			'post',
			'_carkeekblocks_title_hidden',
			array(
				'show_in_rest'  => true,
				'single'        => true,
				'type'          => 'boolean',
				'auth_callback' => function() {
					return current_user_can( 'edit_posts' );
				},
			)
		);

		register_meta(
			'post',
			'_carkeekblocks_featuredimage_hidden',
			array(
				'show_in_rest'  => true,
				'single'        => true,
				'type'          => 'boolean',
				'auth_callback' => function() {
					return current_user_can( 'edit_posts' );
				},
			)
		);

	}

	public function set_body_classes( $classes ) {

		global $post;

		if ( is_page() || is_single() ) {
			if ( true == get_post_meta( $post->ID, '_carkeekblocks_featuredimage_hidden', true ) ) {
				$classes[] = 'carkeek-blocks-featured-image-hidden';
			}
			if ( true == get_post_meta( $post->ID, '_carkeekblocks_title_hidden', true ) ) {
				$classes[] = 'carkeek-blocks-title-hidden';
			}
		}
		return $classes;
	}

}

return new CarkeekBlocks_Post_Meta();
