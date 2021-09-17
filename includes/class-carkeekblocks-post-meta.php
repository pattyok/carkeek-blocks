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
		add_action( 'rest_api_init', array( $this, 'register_settings' ) );
		add_action( 'admin_init', array( $this, 'register_settings' ) );
	}

	/**
	 * Register API Key settings.
	 *
	 * @return void
	 */
	public function register_settings() {
		register_setting(
			'options',
			'_carkeekblocks_featuredimage_use_focalpoint',
			array(
				'type'         => 'boolean',
				'show_in_rest' => true,
				'default'      => false,
			)
		);
		register_setting(
			'options',
			'_carkeekblocks_featuredimage_use_hideTitle',
			array(
				'show_in_rest' => true,
				'type'         => 'boolean',
				'default'      => true,
			)
		);
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

		register_meta(
			'post',
			'_carkeekblocks_featured_image_focal_point',
			array(
				'type'         => 'object',
				'description'  => 'Focal point of the featured image',
				'single'       => true,
				'auth_callback' => function() {
					return current_user_can( 'edit_posts' );
				},
				'show_in_rest' => array(
					'schema' => array(
						'type'       => 'object',
						'properties' => array(
							'x' => array(
								'type' => 'number',
							),
							'y' => array(
								'type' => 'number',
							),
						),
					),
				),
			)
		);

	}

}

return new CarkeekBlocks_Post_Meta();
