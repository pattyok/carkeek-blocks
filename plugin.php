<?php
/*
* Plugin Name: Carkeek Blocks
* Plugin URI: https://github.com/pattyok/carkeek-blocks
* GitHub Plugin URI: pattyok/carkeek-blocks
* Requires PHP: 7.0
* Requires at least: 5.6
* Primary Branch: main
* Description: Series of blocks designed to work with this site's custom Theme
* Author: Patty O'Hara
* Version: 1.2.41
* Author URI https://carkeekstudios.com/
* Text Domain: carkeek-blocks
*/

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'CarkeekBlocks' ) ) :
	/**
	 * Main CarkeekBlocks Class.
	 *
	 * @since 1.0
	 */

	final class CarkeekBlocks {
		/**
		 * The plugin's instance
		 *
		 * @var CarkeekBlocks the main var
		 * @since 1.0
		 */

		private static $instance;

		/**
		 * Main CarkeekBlocks instance
		 *
		 * insures only one instance exists. Also prevents needing to define globals all around.
		 *
		 * @since 1.0.0
		 * @static
		 * @return object|CarkeekBlocks
		 */

		public static function instance() {
			if ( ! isset( self::$instance ) && ! ( self::$instance instanceof CarkeekBLocks ) ) {
				self::$instance = new CarkeekBlocks();
				self::$instance->init();
				self::$instance->setup_constants();
				self::$instance->asset_suffix();
				self::$instance->includes();
			}
			return self::$instance;
		}

		/**
		 * Throw error on object clone.
		 *
		 * The whole idea of the singleton design pattern is that there is a single
		 * object therefore, we don't want the object to be cloned.
		 *
		 * @since 1.0.0
		 * @access protected
		 * @return void
		 */
		public function __clone() {
			// Cloning instances of the class is forbidden.
			_doing_it_wrong( __FUNCTION__, esc_html__( 'Cheating huh?', 'carkeek-blocks' ), '1.0' );
		}

		/**
		 * Disable unserializing of the class.
		 *
		 * @since 1.0.0
		 * @access protected
		 * @return void
		 */
		public function __wakeup() {
			// Unserializing instances of the class is forbidden.
			_doing_it_wrong( __FUNCTION__, esc_html__( 'Cheating huh?', 'carkeek-blocks' ), '1.0' );
		}

		/**
		 * Setup plugin constants.
		 *
		 * @access private
		 * @since 1.0.0
		 * @return void
		 */
		private function setup_constants() {
			$plugin_data    = get_file_data( __FILE__, array( 'Version' => 'Version' ), false );
			$plugin_version = $plugin_data['Version'];

			$this->define( 'CARKEEKBLOCKS_DEBUG', true );
			$this->define( 'CARKEEKBLOCKS_VERSION', $plugin_version );
			$this->define( 'CARKEEKBLOCKS_HAS_PRO', false );
			$this->define( 'CARKEEKBLOCKS_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
			$this->define( 'CARKEEKBLOCKS_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
			$this->define( 'CARKEEKBLOCKS_PLUGIN_FILE', __FILE__ );
			$this->define( 'CARKEEKBLOCKS_PLUGIN_BASE', plugin_basename( __FILE__ ) );
		}

		/**
		 * Define constant if not already set.
		 *
		 * @param  string|string $name Name of the definition.
		 * @param  string|bool   $value Default value.
		 */
		private function define( $name, $value ) {
			if ( ! defined( $name ) ) {
				define( $name, $value );
			}
		}

		/**
		 * Include required files.
		 *
		 * @access private
		 * @since 4.1
		 * @return void
		 */
		private function includes() {

			require_once CARKEEKBLOCKS_PLUGIN_DIR . 'includes/class-carkeekblocks-block-assets.php';
			require_once CARKEEKBLOCKS_PLUGIN_DIR . 'includes/class-carkeekblocks-block-register.php';
			require_once CARKEEKBLOCKS_PLUGIN_DIR . 'includes/class-carkeekblocks-custom-post.php';
			require_once CARKEEKBLOCKS_PLUGIN_DIR . 'includes/class-carkeekblocks-post-meta.php';
			require_once CARKEEKBLOCKS_PLUGIN_DIR . 'includes/class-carkeekblocks-template-loader.php';

		}

		/**
		 * Load actions
		 *
		 * @return void
		 */
		private function init() {
			add_action( 'plugins_loaded', array( $this, 'load_textdomain' ), 99 );
			add_action( 'enqueue_block_editor_assets', array( $this, 'block_localization' ) );
		}

		/**
		 * Change the plugin's minified or src file name, based on debug mode.
		 *
		 * @since 1.0.0
		 */
		public function asset_suffix() {
			if ( true === CARKEEKBLOCKS_DEBUG ) {
				define( 'CARKEEKBLOCKS_ASSET_SUFFIX', null );
			} else {
				define( 'CARKEEKBLOCKS_ASSET_SUFFIX', '.min' );
			}
		}

		/**
		 * If debug is on, serve unminified source assets.
		 *
		 * @since 1.0.0
		 * @param string|string $type The type of resource.
		 * @param string|string $directory Any extra directories needed.
		 */
		public function asset_source( $type = 'js', $directory = null ) {
			if ( 'js' !== $type ) {
				return CARKEEKBLOCKS_PLUGIN_URL . 'build/css/' . $directory;
			}

			if ( true === CARKEEKBLOCKS_DEBUG ) {
				return CARKEEKBLOCKS_PLUGIN_URL . 'src/' . $type . '/' . $directory;
			}

			return CARKEEKBLOCKS_PLUGIN_URL . 'build/' . $type . '/' . $directory;
		}

		/**
		 * Loads the plugin language files.
		 *
		 * @access public
		 * @since 1.0.0
		 * @return void
		 */
		public function load_textdomain() {
			load_plugin_textdomain( 'block-options', false, dirname( plugin_basename( CARKEEKBLOCKS_PLUGIN_DIR ) ) . '/languages/' );
		}

		/**
		 * Enqueue localization data for our blocks.
		 *
		 * @access public
		 */
		public function block_localization() {
			if ( function_exists( 'wp_set_script_translations' ) ) {
				wp_set_script_translations( 'carkeekblocks-editor', 'carkeekblocks' );
			}
		}

	}

endif;


/**
 * The main function for that returns the main class
 *
 * The main function responsible for returning the one true version
 * Instance to functions everywhere.
 *
 * Use this function like you would a global variable, except without needing
 * to declare the global.
 *
 * Example: <?php $blockopts = CarkeekBlocks(); ?>
 *
 * @since 1.0
 * @return object|CarkeekBlocks The one true EditorsKit Instance.
 */
function carkeekblocks() {
	return CarkeekBlocks::instance();
}

// Get Plugin Running.
if ( function_exists( 'is_multisite' ) && is_multisite() ) {
	// Get Plugin Running. Load on plugins_loaded action to avoid issue on multisite.
	add_action( 'plugins_loaded', 'carkeekblocks' );
} else {
	carkeekblocks();
}
