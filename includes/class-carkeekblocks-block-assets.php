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

		// add_action( 'enqueue_block_assets', array( $this, 'block_assets' ) );
		add_action( 'init', array( $this, 'carkeek_blocks_register' ), 9999 );
		// add_action( 'admin_enqueue_scripts', array( $this, 'filter_admin_assets' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'carkeek_blocks_enqueue_assets' ) );
		add_filter( 'block_categories', array( $this, 'carkeek_blocks_categories' ), 10, 2 );
	}

	function carkeek_blocks_enqueue_assets() {
		wp_enqueue_script(
			$this->slug . '-editor-js',
			$this->url . '/dist/editor_script.js',
			array( 'wp-data', 'wp-plugins', 'wp-edit-post', 'wp-i18n', 'wp-components' ),
			$this->version
		);
	}

	function carkeek_blocks_register() {
		wp_register_script(
			$this->slug . '-editor-script',
			$this->url . '/dist/editor.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components', 'lodash', 'wp-blob', 'wp-data', 'wp-html-entities', 'wp-compose' ),
			$this->version
		);

		wp_register_script(
			$this->slug . '-script',
			$this->url . '/dist/script.js',
			array( 'jquery' ),
			$this->version
		);

		wp_register_style(
			$this->slug . '-editor-style',
			$this->url . '/dist/editor.css',
			array( 'wp-edit-blocks' ),
			$this->version
		);

		wp_register_style(
			$this->slug . '-style',
			$this->url . '/dist/style.css',
			array(),
			$this->version
		);

		$blocks = array(
			'team-member',
			'link-tile',
		);

		foreach ( $blocks as $block ) {
			$this->carkeek_blocks_register_block( $block );
		}

		$this->carkeek_blocks_register_block(
			'custom-archive',
			array(
				'render_callback' => array( 'CarkeekBlocks_CustomPost', 'carkeek_blocks_render_custom_posttype_archive' ),
				'attributes'      => array(
					'numberOfPosts'           => array(
						'type'    => 'number',
						'default' => 3,
					),
					'displayFeaturedImage'    => array(
						'type'    => 'boolean',
						'default' => true,
					),
					'displayPostTitle'        => array(
						'type'    => 'boolean',
						'default' => true,
					),
					'postLayout'              => array(
						'type'    => 'string',
						'default' => 'grid',
					),
					'displayPostContent'      => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'displayPostContentRadio' => array(
						'type'    => 'string',
						'default' => 'excerpt',
					),
				),
			)
		);

	}

	function carkeek_blocks_register_block( $block, $options = array() ) {
		register_block_type(
			'carkeek-blocks/' . $block,
			array_merge(
				array(
					'editor_script' => $this->slug . '-editor-script',
					'editor_style'  => $this->slug . '-editor-style',
					'script'        => $this->slug . '-script',
					'style'         => $this->slug . '-style',
				),
				$options
			)
		);
	}

	function carkeek_blocks_categories( $categories, $post ) {
		return array_merge(
			$categories,
			array(
				array(
					'slug'  => 'carkeek-category',
					'title' => __( 'Carkeek Blocks', 'carkeek-blocks' ),
					'icon'  => 'wordpress',
				),
			)
		);
	}

}

CarkeekBlocks_Block_Assets::register();




