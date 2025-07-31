<?php
/**
 * Block Filters for modifying core WordPress blocks.
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
 * CarkeekBlocks_Block_Filters Class
 *
 * @since 3.2.58
 */
class CarkeekBlocks_Block_Filters {

	/**
	 * Constructor
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'register_block_filters' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_frontend_styles' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_block_editor_assets' ), 9999 );
	}

	/**
	 * Register block filters and modifications
	 */
	public function register_block_filters() {
		// Register the main plugins bundle (handles the main editor functionality)
		//register_block_type( CARKEEKBLOCKS_PLUGIN_DIR . 'build/plugins' );
		
		register_block_type( CARKEEKBLOCKS_PLUGIN_DIR . 'build/filter-list-columns' );
	}

	/**
	 * Enqueue frontend styles
	 */
	public function enqueue_frontend_styles() {
		$dir        = plugin_dir_path( __DIR__ );
		$plugins = 'build/';
		// Only load list-columns CSS if the page has core/list blocks
		if ( function_exists( 'has_block' ) && has_block( 'core/list' ) ) {
			wp_enqueue_style(
				'carkeek-blocks-plugins-list-style',
				plugins_url( $plugins . '/filter-list-columns/style-index.css', __DIR__ ),
				array(),
				filemtime( "$dir/$plugins/filter-list-columns/style-index.css" ),
			);
		}
	}

	/** Enqueue Editor Assets */
	public function enqueue_block_editor_assets() {
		$dir        = plugin_dir_path( __DIR__ );
		$plugins = 'build/';
		wp_enqueue_style(
			'carkeek-blocks-plugins-list-editor-style',
			plugins_url( $plugins . '/filter-list-columns/style-index.css', __DIR__ ),
			array(),
			filemtime( "$dir/$plugins/filter-list-columns/style-index.css" ),
		);
	}
}

return new CarkeekBlocks_Block_Filters();