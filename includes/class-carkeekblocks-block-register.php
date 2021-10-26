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

		add_action( 'init', array( $this, 'carkeek_blocks_register_blocks' ), 9999 );
		add_filter( 'block_categories', array( $this, 'carkeek_blocks_categories' ), 10, 2 );
	}

	/**
	 * Register Blocks.
	 */
	public function carkeek_blocks_register_blocks() {
		$blocks = array(
			'team-member',
			'accordion',
			'modal-item',
			'fixed-image',
			'widget-row',
			'quick-link',
			'page-link',
			'extended-gallery',
		);

		foreach ( $blocks as $block ) {
			$this->carkeek_blocks_register_block( $block );
		}
		$this->carkeek_blocks_register_block(
			'featured-image',
			array(
				'attributes'      => array(
					'align'      => array(
						'type' => 'string',
					),
					'className'  => array(
						'type' => 'string',
					),
					'focalPoint' => array(
						'type' => 'object',
					),
					'blockId'    => array(
						'type' => 'string',
					),
				),
				'render_callback' => function( $attributes ) {
					$class_names = '';
					if ( ! empty( $attributes['align'] ) ) {
						$class_names .= 'align' . $attributes['align'];
					}
					if ( ! empty( $attributes['className'] ) ) {
						$class_names .= $attributes['className'];
					}
					$id = '';
					$style = '';

					$nocrop = strpos( $attributes['className'], 'is-style-no-crop' );
					if ( false == $nocrop && ! empty( $attributes['blockId'] ) && ! empty( $attributes['focalPoint'] ) ) {
						$id = 'id="block-' . esc_attr( $attributes['blockId'] ) . '"';
						$focal_point = $attributes['focalPoint'];

						$x = $focal_point['x'] * 100;
						$y = $focal_point['y'] * 100;

						$style = '<style>#block-' . $attributes['blockId'] . ' img {object-position:' . esc_attr( $x ) . '% ' . esc_attr( $y ) . '%;}</style>';
					}
					return $style . '<div ' . $id . ' class="wp-block-carkeek-blocks-featured-image ' . esc_attr( $class_names ) . '">' . get_the_post_thumbnail() . '</div>';
				},
			)
		);
		$this->carkeek_blocks_register_block(
			'custom-archive',
			array(
				'render_callback' => array( 'CarkeekBlocks_CustomPost', 'carkeek_blocks_render_custom_posttype_archive' ),
				'attributes'      => array(
					'numberOfPosts'        => array(
						'type'    => 'number',
						'default' => 3,
					),
					'blockId'              => array(
						'type' => 'string',
					),
					'postTypeSelected'     => array(
						'type' => 'string',
					),
					'postLayout'           => array(
						'type'    => 'string',
						'default' => 'grid',
					),
					'columns'              => array(
						'type'    => 'number',
						'default' => 3,
					),
					'columnsMobile'        => array(
						'type'    => 'number',
						'default' => 1,
					),
					'columnsTablet'        => array(
						'type'    => 'number',
						'default' => 3,
					),
					'limitItemsMobile'     => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'itemsMobile'          => array(
						'type'    => 'number',
						'default' => 1,
					),
					'itemsTablet'          => array(
						'type'    => 'number',
						'default' => 3,
					),
					'taxTermsSelected'     => array(
						'type' => 'string',
					),
					'taxonomySelected'     => array(
						'type' => 'string',
					),
					'groupListings'        => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'groupTaxSelected'     => array(
						'type' => 'string',
					),
					'groupHideParents'     => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'groupHideEmpty'       => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'displayPostExcerpt'   => array(
						'type'    => 'boolean',
						'default' => true,
					),
					'displayFeaturedImage' => array(
						'type'    => 'boolean',
						'default' => true,
					),
					'imageOrientation'     => array(
						'type' => 'string',
					),
					'openAsModal'          => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'filterByTaxonomy'     => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'excerptLength'        => array(
						'type'    => 'number',
						'default' => 30,
					),
					'order'                => array(
						'type'    => 'string',
						'default' => 'ASC',
					),
					'sortBy'               => array(
						'type'    => 'string',
						'default' => 'date',
					),
					'sortByMeta'           => array(
						'type' => 'string',
					),
					'emptyMessage'         => array(
						'type' => 'string',
					),
					'hideIfEmpty'          => array(
						'type' => 'boolean',
					),
					'align'                => array(
						'type' => 'string',
					),
					'className'            => array(
						'type' => 'string',
					),
					'headlineLevel'        => array(
						'type' => 'number',
					),
					'useHeadingTitle'      => array(
						'type' => 'boolean',
					),
					'showPublishDate'      => array(
						'type' => 'boolean',
					),
					'publishDateLocation'  => array(
						'type' => 'string',
					),
					'showTerms'            => array(
						'type' => 'boolean',
					),
					'showPagination'       => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'showLearnMoreLink'    => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'learnMoreLinkTitle'   => array(
						'type' => 'string',
					),
					'taxQueryType'         => array(
						'type'    => 'string',
						'default' => 'AND',
					),
					'isRelated'            => array(
						'type'    => 'boolean',
						'default' => false,
					),
				),
			)
		);

		$this->carkeek_blocks_register_block(
			'related-posts-archive',
			array(
				'render_callback' => array( 'CarkeekBlocks_CustomPost', 'carkeek_blocks_render_custom_posttype_archive' ),
				'attributes'      => array(
					'numberOfPosts'        => array(
						'type'    => 'number',
						'default' => 3,
					),
					'blockId'              => array(
						'type' => 'string',
					),
					'postTypeSelected'     => array(
						'type' => 'string',
					),
					'postLayout'           => array(
						'type'    => 'string',
						'default' => 'grid',
					),
					'columns'              => array(
						'type'    => 'number',
						'default' => 3,
					),
					'columnsMobile'        => array(
						'type'    => 'number',
						'default' => 1,
					),
					'columnsTablet'        => array(
						'type'    => 'number',
						'default' => 3,
					),
					'fillTheSlots'         => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'limitItemsMobile'     => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'itemsMobile'          => array(
						'type'    => 'number',
						'default' => 1,
					),
					'itemsTablet'          => array(
						'type'    => 'number',
						'default' => 3,
					),
					'taxTermsSelected'     => array(
						'type' => 'string',
					),
					'taxonomySelected'     => array(
						'type' => 'string',
					),
					'groupListings'        => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'groupTaxSelected'     => array(
						'type' => 'string',
					),
					'groupHideParents'     => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'groupHideEmpty'       => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'displayPostExcerpt'   => array(
						'type'    => 'boolean',
						'default' => true,
					),
					'displayFeaturedImage' => array(
						'type'    => 'boolean',
						'default' => true,
					),
					'imageOrientation'     => array(
						'type' => 'string',
					),
					'openAsModal'          => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'filterByTaxonomy'     => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'excerptLength'        => array(
						'type'    => 'number',
						'default' => 30,
					),
					'order'                => array(
						'type'    => 'string',
						'default' => 'ASC',
					),
					'sortBy'               => array(
						'type'    => 'string',
						'default' => 'date',
					),
					'sortByMeta'           => array(
						'type' => 'string',
					),
					'emptyMessage'         => array(
						'type' => 'string',
					),
					'hideIfEmpty'          => array(
						'type' => 'boolean',
					),
					'align'                => array(
						'type' => 'string',
					),
					'className'            => array(
						'type' => 'string',
					),
					'headlineLevel'        => array(
						'type' => 'number',
					),
					'useHeadingTitle'      => array(
						'type' => 'boolean',
					),
					'showPublishDate'      => array(
						'type' => 'boolean',
					),
					'publishDateLocation'  => array(
						'type' => 'string',
					),
					'showTerms'            => array(
						'type' => 'boolean',
					),
					'showPagination'       => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'showLearnMoreLink'    => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'learnMoreLinkTitle'   => array(
						'type' => 'string',
					),
					'taxQueryType'         => array(
						'type'    => 'string',
						'default' => 'AND',
					),
					'isRelated'            => array(
						'type'    => 'boolean',
						'default' => true,
					),
				),
			)
		);

		if ( post_type_exists( 'tribe_events' ) ) {

			$this->carkeek_blocks_register_block(
				'events-archive',
				array(
					'render_callback' => array( 'CarkeekBlocks_CustomPost', 'carkeek_blocks_render_events_archive' ),
					'attributes'      => array(
						'numberOfPosts'        => array(
							'type'    => 'number',
							'default' => 3,
						),
						'postLayout'           => array(
							'type'    => 'string',
							'default' => 'grid',
						),
						'columns'              => array(
							'type'    => 'number',
							'default' => 3,
						),
						'catTermsSelected'     => array(
							'type' => 'string',
						),
						'catTagsSelected'      => array(
							'type' => 'string',
						),
						'displayPostExcerpt'   => array(
							'type'    => 'boolean',
							'default' => false,
						),
						'displayFeaturedImage' => array(
							'type'    => 'boolean',
							'default' => true,
						),
						'filterByCategory'     => array(
							'type'    => 'boolean',
							'default' => false,
						),
						'filterByTag'          => array(
							'type'    => 'boolean',
							'default' => false,
						),
						'excerptLength'        => array(
							'type'    => 'number',
							'default' => 30,
						),
						'order'                => array(
							'type'    => 'string',
							'default' => 'ASC',
						),
						'sortBy'               => array(
							'type'    => 'string',
							'default' => 'date',
						),
						'emptyMessage'         => array(
							'type' => 'string',
						),
						'hideIfEmpty'          => array(
							'type' => 'boolean',
						),
						'align'                => array(
							'type' => 'string',
						),
						'className'            => array(
							'type' => 'string',
						),
						'displayField1'        => array(
							'type' => 'string',
						),
						'displayField2'        => array(
							'type' => 'string',
						),
						'displayField3'        => array(
							'type' => 'string',
						),
						'displayField4'        => array(
							'type' => 'string',
						),
						'dateFormat'           => array(
							'type'    => 'string',
							'default' => 'F j',
						),
						'timeFormat'           => array(
							'type'    => 'string',
							'default' => 'g:i a',
						),
						'showEndDate'          => array(
							'type'    => 'string',
							'default' => 'show_end_date',
						),
						'featuredEvents'       => array(
							'type'    => 'boolean',
							'default' => false,
						),

					),
				),
			);
		}

		$this->carkeek_blocks_register_block(
			'custom-link-list',
			array(
				'render_callback' => array( 'CarkeekBlocks_CustomPost', 'carkeek_blocks_render_custom_linklist' ),
				'attributes'      => array(
					'order'                 => array(
						'type'    => 'string',
						'default' => 'ASC',
					),
					'makeCollapsible'       => array(
						'type'    => 'boolean',
						'default' => true,
					),
					'makeTitlesCollapsible' => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'headline'              => array(
						'type' => 'string',
					),
					'sortBy'                => array(
						'type'    => 'string',
						'default' => 'title',
					),
					'headlineLevel'         => array(
						'type'    => 'number',
						'default' => 2,
					),
					'listSelected'          => array(
						'type' => 'string',
					),
					'primaryContent'        => array(
						'type'    => 'string',
						'default' => 'links',
					),
				),
			)
		);

		$this->carkeek_blocks_register_block(
			'form-assembly',
			array(
				'render_callback' => array( $this, 'carkeek_blocks_render_formassembly_form' ),
				'attributes'      => array(
					'formId' => array(
						'type' => 'string',
					),
				),
			)
		);
		$this->carkeek_blocks_register_block(
			'title-block',
			array(
				'render_callback' => function() {
					return '<h1 class="entry-title">' . get_the_title() . '</h1>';
				},
			)
		);
	}

	/**
	 * Register the blocks.
	 *
	 * @param string $block Block slug.
	 * @param array  $options Options array.
	 */
	public function carkeek_blocks_register_block( $block, $options = array() ) {
		register_block_type(
			'carkeek-blocks/' . $block,
			array_merge(
				array(
					'editor_script' => $this->slug . '-editor-script',
					'editor_style'  => $this->slug . '-editor-style',
					'style'         => $this->slug . '-style',
				),
				$options
			)
		);
	}
	/**
	 * Register the categories
	 *
	 * @param array $categories the categories array.
	 * @param array $post post optional.
	 */
	public function carkeek_blocks_categories( $categories, $post ) {
		$new_category = array(
			'slug'  => 'carkeek-category',
			'title' => __( 'Carkeek Blocks', 'carkeek-blocks' ),
			'icon'  => '',
		);
		array_unshift( $categories, $new_category );
		return $categories;
	}

	public function carkeek_blocks_render_formassembly_form( $atts ) {
		if ( ! empty( $atts['formId'] ) ) {
			$shortcode   = '[formassembly formid=' . $atts['formId'] . ']';
			$form_block  = '<div class="wp-block-carkeek-blocks-form-assembly">';
			$form_block .= do_shortcode( ( $shortcode ) );
			$form_block .= '</div>';
			return $form_block;
		} else {
			return;
		}
	}

}

CarkeekBlocks_Block_Register::register();
