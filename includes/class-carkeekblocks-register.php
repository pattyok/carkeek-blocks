<?php
/**
 * Load assets for our blocks.
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
class CarkeekBlocks_Block_Register {

	/**
	 * This plugin's instance.
	 *
	 * @var CarkeekBlocks_Block_Register
	 */
	private static $instance;

	/**
	 * Registers the plugin.
	 */
	public static function register() {
		if ( null === self::$instance ) {
			self::$instance = new CarkeekBlocks_Block_Register();
		}
	}

	/**
	 * The Plugin slug.
	 *
	 * @var string $slug
	 */
	private $slug;

	/**
	 * The Constructor.
	 */
	private function __construct() {
		$this->slug = 'carkeek-blocks';

		add_action( 'init', array( $this, 'create_block_carkeek_blocks_block_init' ), 9999 );
		add_action( 'enqueue_block_assets', array( $this, 'carkeek_blocks_enqueue_global_assets' ), 9999 );
		add_action( 'enqueue_block_editor_assets', array( $this, 'carkeek_blocks_enqueue_block_editor_assets' ), 9999 );
	}

	/**
	 * Registers the block using the metadata loaded from the `block.json` file.
	 * Behind the scenes, it registers also all assets so they can be enqueued
	 * through the block editor in the corresponding context.
	 *
	 * @see https://developer.wordpress.org/reference/functions/register_block_type/
	 */
	public function create_block_carkeek_blocks_block_init() {
		$dir = plugin_dir_path( dirname( __FILE__ ) );
		register_block_type( "$dir/build/accordion" );
		register_block_type( "$dir/build/accordion-panel" );
		register_block_type( "$dir/build/carkeek-slider" );
		register_block_type( "$dir/build/fixed-image" );
		register_block_type( "$dir/build/extended-gallery" );
		register_block_type( "$dir/build/lightbox-gallery" );
		register_block_type( "$dir/build/modal-item" );
		register_block_type( "$dir/build/widget-row" );

		/** Dynamic Blocks */
		register_block_type(
			"$dir/build/custom-archive",
			array(
				'render_callback' => array( 'CarkeekBlocks_CustomArchive', 'carkeek_blocks_render_custom_posttype_archive' ),
			)
		);

		register_block_type(
			"$dir/build/related-posts-archive",
			array(
				'render_callback' => array( 'CarkeekBlocks_CustomArchive', 'carkeek_blocks_render_custom_posttype_archive' ),
			)
		);

		register_block_type(
			"$dir/build/taxonomy-archive-links",
			array(
				'render_callback' => array( 'CarkeekBlocks_CustomArchive', 'carkeek_blocks_render_tax_archive' ),
			),
		);

		register_block_type(
			"$dir/build/featured-image",
			array(
				'render_callback' => array( 'CarkeekBlocks_CustomArchive', 'render_featured_image' ),
			)
		);

		if ( post_type_exists( 'tribe_events' ) ) {
			register_block_type(
				"$dir/build/events-archive",
				array(
					'render_callback' => array( 'CarkeekBlocks_CustomArchive', 'carkeek_blocks_render_events_archive' ),
				),
			);
		}

	}


	/** Auto loading via block.json not working as we need is in the footer.
	 */
	public function carkeek_blocks_enqueue_global_assets() {

		$dir = plugin_dir_path( dirname( __FILE__ ) );

		$script_asset_path = "$dir/build/shared/index.asset.php";
		if ( ! file_exists( $script_asset_path ) ) {
			throw new Error(
				'You need to run `npm start` or `npm run build` for the "carkeek-blocks" plugin first.'
			);
		}

		$shared_css = 'build/shared/style-index.css';
		wp_enqueue_style(
			'carkeek-blocks-shared',
			plugins_url( $shared_css, dirname( __FILE__ ) ),
			array(),
			filemtime( "$dir/$shared_css" )
		);

		$vendor = 'vendor/';

		// load shared assets for specific blocks only.
		if ( has_block( 'carkeek-blocks/carkeek-slider' ) || has_block( 'carkeek-blocks/extended-gallery' ) ) {
			wp_enqueue_script(
				'slick-slider',
				plugins_url( $vendor . 'slick.js', dirname( __FILE__ ) ),
				array( 'jquery' ),
				filemtime( "$dir/$vendor/slick.js" ),
				true
			);
		}

		if ( has_block( 'carkeek-blocks/modal-item' ) ) {
			wp_enqueue_script(
				'bootsrap-modal',
				plugins_url( $vendor . 'bootstrap.bundle.min.js', dirname( __FILE__ ) ),
				array( 'jquery' ),
				filemtime( "$dir/$vendor/bootstrap.bundle.min.js" ),
				true
			);
		}

		if ( has_block( 'carkeek-blocks/extended-gallery' ) || has_block( 'carkeek-blocks/lightbox-gallery' ) ) {
			wp_enqueue_script(
				'fancybox-js',
				plugins_url( $vendor . 'jquery.fancybox.min.js', dirname( __FILE__ ) ),
				array( 'jquery' ),
				filemtime( "$dir/$vendor/jquery.fancybox.min.js" ),
				true
			);
			wp_enqueue_style(
				'fancybox-css',
				plugins_url( $vendor . 'jquery.fancybox.min.css', dirname( __FILE__ ) ),
				array(),
				filemtime( "$dir/$vendor/jquery.fancybox.min.css" )
			);
		}
	}

	/** Load Block Editor specific styles */
	public function carkeek_blocks_enqueue_block_editor_assets() {
		/** Shared css for editor only */
		$dir        = plugin_dir_path( dirname( __FILE__ ) );
		$shared_css = 'build/shared/index.css';
		wp_enqueue_style(
			'carkeek-blocks-shared-editor',
			plugins_url( $shared_css, dirname( __FILE__ ) ),
			array(),
			filemtime( "$dir/$shared_css" )
		);

		/** Assets for the Editor plugins */
		$plugins = 'build/plugins/';
		wp_enqueue_script(
			$this->slug . '-plugins-editor-script',
			plugins_url( $plugins . 'index.js', dirname( __FILE__ ) ),
			array( 'wp-data', 'wp-plugins', 'wp-edit-post', 'wp-i18n', 'wp-components' ),
			filemtime( "$dir/$plugins/index.js" ),
			false
		);
		// add script to pass options variables (cannot access via rest);
		wp_add_inline_script(
			$this->slug . '-plugins-editor-script',
			'const ckBlocksVars = ' . json_encode(
				array(
					'supportsOpacity' => get_option( '_carkeekblocks_featuredimage_use_opacity' ),
					'opacityDefault'  => get_option( '_carkeekblocks_featuredimage_opacity_default', 0 ),
				)
			),
			'before'
		);

		wp_enqueue_style(
			$this->slug . '-plugins-editor-style',
			plugins_url( $plugins . 'index.css', dirname( __FILE__ ) ),
			array(),
			filemtime( "$dir/$plugins/index.css" ),
		);
	}
}

CarkeekBlocks_Block_Register::register();
