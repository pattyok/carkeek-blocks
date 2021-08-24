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
class CarkeekBlocks_Block_Assets {

	/**
	 * This plugin's instance.
	 *
	 * @var CarkeekBlocks_Block_Assets
	 */
	private static $instance;

	/**
	 * Registers the plugin.
	 */
	public static function register() {
		if ( null === self::$instance ) {
			self::$instance = new CarkeekBlocks_Block_Assets();
		}
	}

	/**
	 * The Plugin slug.
	 *
	 * @var string $slug
	 */
	private $slug;

	/**
	 * The base URL path (without trailing slash).
	 *
	 * @var string $url
	 */
	private $url;

	/**
	 * The Plugin version.
	 *
	 * @var string $version
	 */
	private $version;

	/**
	 * The Constructor.
	 */
	private function __construct() {
		$this->version = CARKEEKBLOCKS_VERSION;
		$this->slug    = 'carkeek-blocks';
		$this->url     = untrailingslashit( plugins_url( '/', dirname( __FILE__ ) ) );
		$this->dir     = plugin_dir_path( dirname( __FILE__ ) );

		add_action( 'enqueue_block_editor_assets', array( $this, 'carkeek_blocks_enqueue_assets' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'carkeek_blocks_enqueue_frontend_assets' ) );

	}

	/**
	 * Enqueue block back end only editor JS & CSS
	 */
	function carkeek_blocks_enqueue_assets() {
		wp_enqueue_script(
			$this->slug . '-plugins-editor-script',
			$this->url . '/dist/plugins_editor.js',
			array( 'wp-data', 'wp-plugins', 'wp-edit-post', 'wp-i18n', 'wp-components' ),
			$this->version
		);

		wp_enqueue_style(
			$this->slug . '-plugins-editor-style',
			$this->url . '/dist/plugins_editor.css',
			array(),
			$this->version
		);

		wp_register_script(
			$this->slug . '-editor-script',
			$this->url . '/dist/editor.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components', 'lodash', 'wp-blob', 'wp-data', 'wp-html-entities', 'wp-compose' ),
			$this->version
		);

		wp_register_style(
			$this->slug . '-editor-style',
			$this->url . '/dist/editor.css',
			array( 'wp-edit-blocks' ),
			$this->version
		);
	}

	/**
	 * Enqueue block frontend JS & CSS
	 */
	public function carkeek_blocks_enqueue_frontend_assets() {
		$frontend_js_path = 'dist/script.js';
		$style_path       = '/dist/style.css';
		$deps             = array( 'jquery', 'bootstrap-js' );
		// wp_enqueue_script( 'jquery-ui-slider' );
		// wp_enqueue_style( 'jquery-ui' );
		// Register frontend styles. Include block style file in editor if you want backend styles.

		// TODO Only load if using and only get the part we need
		wp_enqueue_script(
			'bootstrap-js',
			$this->url . '/vendor/bootstrap.bundle.min.js',
			array( 'jquery' ),
			$this->version,
			true
		);

		// Only load slider js when using the slider block
		if ( is_singular() ) {
			$id = get_the_ID();
			if ( has_block( 'carkeek-blocks/carkeek-slider', $id ) || has_block( 'carkeek-blocks/lightbox-gallery', $id ) ) {
				$deps[] = 'ck-slick';
				wp_enqueue_script(
					'ck-slick',
					$this->url . '/vendor/slick.js',
					array( 'jquery' ),
					$this->version,
					true
				);
			}
			if ( has_block( 'carkeek-blocks/lightbox-gallery', $id ) ) {
				$deps[] = 'ck-fancybox';
				wp_enqueue_script(
					'ck-fancybox',
					$this->url . '/vendor/jquery.fancybox.js',
					array( 'jquery' ),
					$this->version,
					true
				);
				wp_enqueue_style(
					'ck-fancybox',
					$this->url . '/vendor/jquery.fancybox.min.css',
					array(),
					filemtime( $this->dir . $style_path ),
				);
			}
			if ( has_block( 'carkeek-blocks/accordion', $id ) || has_block( 'carkeek-blocks/custom-link-list', $id ) ) {
				$deps[] = 'ck-accordion';
				wp_enqueue_script(
					'ck-accordion',
					$this->url . '/vendor/aria.accordion.min.js',
					array(),
					$this->version,
					true
				);
			}
		}

		// Register frontend scripts.
		wp_enqueue_script(
			$this->slug . '-script',
			$this->url . '/' . $frontend_js_path,
			$deps,
			filemtime( $this->dir . $frontend_js_path ),
			true
		);

		// Register frontend styles. Include block style file in editor if you want backend styles.
		wp_enqueue_style(
			$this->slug . '-style',
			$this->url . $style_path,
			array(),
			filemtime( $this->dir . $style_path ),
		);

	}

}

CarkeekBlocks_Block_Assets::register();




