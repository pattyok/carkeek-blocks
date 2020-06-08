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
class CarkeekBlocks_CustomPost {

	/**
	 * This plugin's instance.
	 *
	 * @var CarkeekBlocks_CustomPost
	 */
	private static $instance;

	/**
	 * Registers the plugin.
	 */
	public static function register() {
		if ( null === self::$instance ) {
			self::$instance = new CarkeekBlocks_CustomPost();
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
		// add_action( 'init', array( $this, 'carkeek_blocks_register_portfolio' ), 9999 );
	}

	/**
	 * Register post type
	 */
	public function carkeek_blocks_register_portfolio() {
		register_post_type(
			'ck_portfolio',
			array(
				'labels'       => array(
					'name'          => __( 'Portfolio', 'textdomain' ),
					'singular_name' => __( 'Portfolio Item', 'textdomain' ),
				),
				'public'       => true,
				'has_archive'  => true,
				'rewrite'      => array( 'slug' => 'portfolio' ), // my custom slug
				'menu_icon'    => 'dashicons-book-alt',
				'supports'     => array( 'title', 'editor', 'thumbnail', 'page-attributes', 'excerpt' ),
				'show_in_rest' => true,
			)
		);
	}

	/**
	 * Render Custom Post Type Archive
	 *
	 * @param array $attributes Attributes passed to callback.
	 * @return string HTML of dynamic content.
	 */
	public function carkeek_blocks_render_custom_posttype_archive( $attributes ) {
		if ( empty( $attributes['postTypeSelected'] ) ) {
			return;
		}
		$args  = array(
			'posts_per_page' => $attributes['numberOfPosts'],
			'post_type'      => $attributes['postTypeSelected'],
		);
		$query = new WP_Query( $args );
		$posts = '';

		$classname = 'is-' . $attributes['postLayout'] . ' post-type-' . $attributes['postTypeSelected'] . ' align' . $attributes['align'];

		if ( $query->have_posts() ) {
			$posts .= '<div class="wp-block-ck-custom_posttype__list ' . $classname . '"><ul>';
			while ( $query->have_posts() ) {
				$query->the_post();
				$featured_image = '';
				$post_title     = '';
				$post_content   = '';
				$class_pre      = 'wp-block-ck-custom_posttype__';

				if ( $attributes['displayFeaturedImage'] == true ) {
					$featured_image  = '<a href="' . esc_url( get_the_permalink() ) . '" class="' . $class_pre . 'image-link">';
					$featured_image .= get_the_post_thumbnail( null, 'medium_large' );
					$featured_image .= '</a>';
				}

				if ( $attributes['displayPostTitle'] == true ) {
					$post_title  = '<a href="' . esc_url( get_the_permalink() ) . '" class="' . $class_pre . 'text-link">';
					$post_title .= get_the_title();
					$post_title .= '</a>';
				}

				if ( $attributes['displayPostContent'] == true ) {
					if ( $attributes['displayPostContentRadio'] === 'excerpt' ) {
						$post_content   = get_the_excerpt();
						$class_excerpt .= 'excerpt';
					} else {
						$post_content   = get_the_content();
						$class_excerpt .= 'full-content';
					}
					$post_content = '<div class="' . $class_pre . $class_excerpt . '">' . $post_content . '</div>';
				}

				$posts .= '<li>' . $featured_image . '<div class="' . $class_pre . 'content-wrap">' . $post_title . $post_content . '</div></li>';
			}
			$posts .= '</ul></div>';
			wp_reset_postdata();
			return $posts;
		} else {
			return '<div>' . __( 'No Posts Found', 'carkeek-blocks' ) . '</div>';
		}
	}

}

CarkeekBlocks_CustomPost::register();


