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
		add_action( 'init', array( $this, 'carkeek_blocks_register_customlinks' ) );
		add_filter( 'rest_post_collection_params', array( $this, 'ckb_prefix_add_rest_orderby_params' ), 10, 1 );
		add_filter( 'acf/settings/load_json', array( $this, 'acf_json_load_point' ) );
	}

	/**
	 * Register post type - TODO Admin Screen whether to activate or not
	 */
	public function carkeek_blocks_register_customlinks() {
		$labels = array(
			'name'                  => _x( 'Custom Links', 'Post Type General Name', 'text_domain' ),
			'singular_name'         => _x( 'Custom Link', 'Post Type Singular Name', 'text_domain' ),
			'menu_name'             => __( 'Custom Link', 'text_domain' ),
			'name_admin_bar'        => __( 'Custom Link', 'text_domain' ),
			'archives'              => __( 'Link Archives', 'text_domain' ),
			'attributes'            => __( 'Link Attributes', 'text_domain' ),
			'parent_item_colon'     => __( 'Parent Link:', 'text_domain' ),
			'all_items'             => __( 'All Links', 'text_domain' ),
			'add_new_item'          => __( 'Add New Link', 'text_domain' ),
			'add_new'               => __( 'Add New', 'text_domain' ),
			'new_item'              => __( 'New Link', 'text_domain' ),
			'edit_item'             => __( 'Edit Link', 'text_domain' ),
			'update_item'           => __( 'Update Link', 'text_domain' ),
			'view_item'             => __( 'View Link', 'text_domain' ),
			'view_items'            => __( 'View Links', 'text_domain' ),
			'search_items'          => __( 'Search Link', 'text_domain' ),
			'not_found'             => __( 'Not found', 'text_domain' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'text_domain' ),
			'featured_image'        => __( 'Featured Image', 'text_domain' ),
			'set_featured_image'    => __( 'Set featured image', 'text_domain' ),
			'remove_featured_image' => __( 'Remove featured image', 'text_domain' ),
			'use_featured_image'    => __( 'Use as featured image', 'text_domain' ),
			'insert_into_item'      => __( 'Insert into item', 'text_domain' ),
			'uploaded_to_this_item' => __( 'Uploaded to this item', 'text_domain' ),
			'items_list'            => __( 'Links list', 'text_domain' ),
			'items_list_navigation' => __( 'Links list navigation', 'text_domain' ),
			'filter_items_list'     => __( 'Filter items list', 'text_domain' ),
		);
		$args   = array(
			'label'               => __( 'Custom Link', 'wp-rig' ),
			'description'         => __( 'Add Custom Links to create dynamic lists of links', 'wp-rig' ),
			'labels'              => $labels,
			'supports'            => array( 'title', 'page-attributes' ),
			'hierarchical'        => false,
			'public'              => true,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'menu_position'       => 5,
			'menu_icon'           => 'dashicons-admin-links',
			'show_in_admin_bar'   => false,
			'show_in_nav_menus'   => false,
			'can_export'          => true,
			'has_archive'         => false,
			'exclude_from_search' => true,
			'publicly_queryable'  => false,
			'capability_type'     => 'page',
			'show_in_rest'        => false,
			'rest_base'           => 'custom-links',
		);
		register_post_type( 'custom_link', $args );

		$labels = array(
			'name'          => _x( 'Link List Categories', 'Taxonomy General Name', 'wp-rig' ),
			'singular_name' => _x( 'Link List Category', 'Taxonomy Singular Name', 'wp-rig' ),
			'menu_name'     => __( 'Link List Categories', 'wp-rig' ),
		);
		$args   = array(
			'labels'            => $labels,
			'hierarchical'      => true,
			'public'            => true,
			'show_ui'           => true,
			'show_admin_column' => true,
			'show_in_nav_menus' => true,
			'show_tagcloud'     => true,
			'show_in_rest'      => true,
		);
		register_taxonomy( 'link_list', array( 'custom_link' ), $args );

	}

	/**
	 * ACF Json for any custom post types launched in this plugin
	 */

	function acf_json_load_point( $paths ) {

		$paths[] = plugin_dir_path( __FILE__ ) . 'acf-json';

		return $paths;

	}

	/**
	 * Allow for random in the REST API
	 *
	 * * @param array $params Attributes passed to callback.
	 */
	public function ckb_prefix_add_rest_orderby_params( $params ) {
		$params['orderby']['enum'][] = 'rand';

		return $params;
	}

	/**
	 * Recursively sort an array of taxonomy terms hierarchically. Child categories will be
	 * placed under a 'children' member of their parent term.
	 *
	 * @param Array   $cats     taxonomy term objects to sort
	 * @param Array   $into     result array to put them in
	 * @param integer $parentId the current parent ID to put them in
	 */
	public static function sort_terms_hierarchically( array &$cats, array &$into, $parent_id = 0 ) {
		foreach ( $cats as $i => $cat ) {
			if ( $cat->parent == $parent_id ) {
				$into[ $cat->term_id ] = $cat;
				unset( $cats[ $i ] );
			}
		}

		foreach ( $into as $top_cat ) {
			$top_cat->children = array();
			self::sort_terms_hierarchically( $cats, $top_cat->children, $top_cat->term_id );
		}
	}

	/**
	 * Render Custom Post Type Archive grouped By Taxonomy Terms
	 *
	 * @param array  $args query args.
	 * @param array  $attributes Attributes passed to callback.
	 * @param object $template_loader template loader.
	 * @return string HTML of dynamic content.
	 */
	public static function get_posts_per_term( $term, $tax, $args, $attributes, $template_loader, $level = 0 ) {
		$posts_html = '<div class="ck-archive-tax-header level-' . esc_attr( $level ) . '">' . $term->name . '</div>';
		$new_args   = $args;
		$tax_query  = array(
			'taxonomy' => $tax,
			'field'    => 'id',
			'terms'    => $term->term_id,
		);
		if ( ! is_array( $new_args['tax_query'] ) ) {
			$$new_args['tax_query'] = array();
		}
		$new_args['tax_query'][] = $tax_query;

		$my_children = get_term_children( $term->term_id, $tax ); // returns all children - we only want to show them once.
		if ( ! empty( $my_children ) ) {
			$child_query             = array(
				'taxonomy' => $tax,
				'field'    => 'id',
				'terms'    => $my_children,
				'operator' => 'NOT IN',
			);
			$new_args['tax_query'][] = $child_query;
		}
		$query = new WP_Query( $new_args );
		if ( $query->have_posts() ) {

			while ( $query->have_posts() ) {
				$query->the_post();
				global $post;
				if ( true == $attributes['openAsModal'] ) {
					ob_start();
					$template_loader
						->set_template_data( $attributes )
						->get_template_part( 'custom-archive/modal_item' );
					$post_html = ob_get_clean();

				} else {
					ob_start();
					$template_loader
						->set_template_data( $attributes )
						->get_template_part( 'custom-archive/' . $template );
					$post_html = ob_get_clean();
				}

				if ( empty( $post_html ) ) {
					ob_start();
					$template_loader
						->set_template_data( $attributes )
						->get_template_part( 'custom-archive/default_item' );
					$post_html = ob_get_clean();
				}
				$posts_html .= apply_filters( 'carkeek_block_custom_group_post_layout', $post_html, $post, $attributes );

			}
		}
		wp_reset_postdata();
		if ( ! empty( $term->children ) ) {
			$level += 1;
			foreach ( $term->children as $child ) {
				$posts_html .= self::get_posts_per_term( $child, $tax, $args, $attributes, $template_loader, $level );
			}
		}
		return $posts_html;
	}


	/**
	 * Render Custom Post Type Archive grouped By Taxonomy Terms
	 *
	 * @param array  $args query args.
	 * @param array  $attributes Attributes passed to callback.
	 * @param object $template_loader template loader.
	 * @return string HTML of dynamic content.
	 */
	public static function render_custom_posttype_archive_grouped( $args, $attributes, $block_start, $template_loader ) {
		$post_html  = $block_start;
		$group_by   = $attributes['groupTaxSelected'];
		$hide_empty = $attributes['groupHideEmpty'];

		$tax_args = array(
			'taxonomy'   => $group_by,
			'hide_empty' => $hide_empty,
		);

		if ( is_taxonomy_hierarchical( $group_by ) ) {
			$filter_terms = array( 0 );
			// if the groupby taxonomy is the same as the filter we want to only get terms from the $terms selected.
			if ( $attributes['groupTaxSelected'] == $attributes['taxonomySelected'] ) {
				$filter_terms = explode( ',', $attributes['taxTermsSelected'] );
			}

			foreach ( $filter_terms as $filter_term ) {

				$parent = 0;

				$tax_args['child_of'] = $filter_term;
				// get children and parents and merge them
				$tax_terms = get_terms( $tax_args );

				// add Parent to the array
				if ( true == $attributes['groupHideParents'] ) {
					$parent = $filter_term;
				} else {
					$parent_term = get_term( $filter_term, $group_by );
					$tax_terms[] = $parent_term;
				}
				$category_hierarchy = array();
				self::sort_terms_hierarchically( $tax_terms, $category_hierarchy, $parent );

				foreach ( $category_hierarchy as $cat_term ) {
					$post_html .= self::get_posts_per_term( $cat_term, $group_by, $args, $attributes, $template_loader );

				}
			}
		} else {
			$tax_terms = get_terms( $tax_args );
			foreach ( $tax_terms as $cat_term ) {
				$post_html .= self::get_posts_per_term( $cat_term, $group_by, $args, $attributes, $template_loader );

			}
		}
		$post_html .= '</div>';
		return $post_html;
	}
	/**
	 * Render Custom Post Type Archive
	 *
	 * @param array $attributes Attributes passed to callback.
	 * @return string HTML of dynamic content.
	 */
	public function carkeek_blocks_render_custom_posttype_archive( $attributes ) {
		$ck_blocks_template_loader = new Carkeek_Blocks_Template_Loader();
		if ( empty( $attributes['postTypeSelected'] ) ) {
			return;
		}

		$layout    = $attributes['postLayout'];
		$post_type = $attributes['postTypeSelected'];
		$paged     = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
		$args      = array(
			'posts_per_page' => $attributes['numberOfPosts'],
			'post_type'      => $attributes['postTypeSelected'],
			'order'          => $attributes['order'],
			'orderby'        => $attributes['sortBy'],
			'post__not_in'   => array( get_the_ID() ),
			'paged'          => $paged,
			'ignore_sticky_posts' => true, //without this sticky posts add to the count
		);

		if ( 'meta_value' == $attributes['sortBy'] && ! empty( $attributes['sortByMeta'] ) ) {
			$args['orderby'] = array(
				$attributes['sortBy'] => $attributes['order'],
				'title'               => $attributes['order'],
			);
			// pull back all items whether they have been assigned or not
			$args['meta_query'] = array(
				'relation' => 'OR',
				array(
					'key'     => $attributes['sortByMeta'],
					'compare' => 'EXISTS',
				),
				array(
					'key'     => $attributes['sortByMeta'],
					'compare' => 'NOT EXISTS',
				),
			);
		}

		if ( true === $attributes['filterByTaxonomy'] && ! empty( $attributes['taxonomySelected'] ) && ! empty( $attributes['taxTermsSelected'] ) ) {
			$tax_terms = explode( ',', $attributes['taxTermsSelected'] );
			if ( count( $tax_terms ) > 1 && 'AND' === $attributes['taxQueryType'] ) {
				$tax_query = array();
				foreach ( $tax_terms as $tax_term ) {
					$tax_query[] = array(
						'taxonomy' => $attributes['taxonomySelected'],
						'field'    => 'term_id',
						'terms'    => $tax_term,
					);
				}
				$args['tax_query'] = array(
					'relation' => 'AND',
					$tax_query,
				);

			} else {
				$args['tax_query'] = array(
					array(
						'taxonomy' => $attributes['taxonomySelected'],
						'field'    => 'term_id',
						'terms'    => $tax_terms,
					),
				);
			}
		} elseif ( true == $attributes['isRelated'] ) {
			if ( ! empty( $attributes['taxonomySelected'] ) ) {
				$tax      = $attributes['taxonomySelected'];
				$my_id    = get_the_ID();
				$my_terms = get_the_terms( $my_id, $tax );
				if ( ! is_wp_error( $my_terms ) && is_array( $my_terms ) ) {
					$term_ids          = array_map(
						function( $t ) {
							return $t->term_id;
						},
						$my_terms
					);
					$args['tax_query'] = array(
						array(
							'taxonomy' => $tax,
							'field'    => 'term_id',
							'terms'    => $term_ids,
						),
					);
				}
			}
		}
		/** set up classes for the rendered block */
		$block_class       = 'wp-block-carkeek-blocks-custom-archive';
		$inner_el_class    = 'ck-custom-archive';
		$css_classes_outer = array(
			$block_class,
			'is-' . $layout,
			'post-type-' . $post_type,
			'align' . $attributes['align'],

		);
		if ( 'grid' === $layout ) {
			$css_classes_outer[] = 'ck-columns has-' . $attributes['columns'] . '-columns';
			$mobile              = isset( $attributes['columnsMobile'] ) ? $attributes['columnsMobile'] : 1;
			$tablet              = isset( $attributes['columnsTablet'] ) ? $attributes['columnsTablet'] : $attributes['columns'];
			$css_classes_outer[] = 'has-' . $mobile . '-columns-mobile has-' . $tablet . '-columns-tablet';
		}

		if ( isset( $attributes['limitItemsMobile'] ) && true == $attributes['limitItemsMobile'] ) {
			if ( -1 !== $attributes['itemsTablet'] ) {
				$css_classes_outer[] = 'limit-tablet-' . $attributes['itemsTablet'];
			}
			$css_classes_outer[] = 'limit-mobile-' . $attributes['itemsMobile'];
		}

		if ( $attributes['className'] && ! empty( $attributes['className'] ) ) {
			$css_classes_outer[] = $attributes['className'];
		}

		$css_classes_outer = apply_filters( 'carkeek_block_custom_post_layout__css_classes_outer', $css_classes_outer, $attributes );
		$block_start       = '<div class="' . implode( ' ', $css_classes_outer ) . '">';

		/** End set up classes */

		/** If Grouping we take the args from here */
		if ( true == $attributes['groupListings'] && ! empty( $attributes['groupTaxSelected'] ) ) {
			return self::render_custom_posttype_archive_grouped( $args, $attributes, $block_start, $ck_blocks_template_loader );
		}
		$args  = apply_filters( 'carkeek_block_custom_post_layout__query_args', $args, $attributes );
		$args  = apply_filters( 'carkeek_block_custom_post_layout_' . $post_type . '__query_args', $args, $attributes );
		$query = new WP_Query( $args );
		$posts = '';

		if ( true == $attributes['isRelated'] && true == $attributes['fillTheSlots'] && -1 !== $attributes['numberOfPosts'] ) {
			if ( $query->found_posts < $attributes['numberOfPosts'] ) {
				unset( $args['tax_query'] );
				$args['posts_per_page'] = $attributes['numberOfPosts'] - $query->found_posts;
				//exclude posts found so far
				if ( $query->have_posts() ) {
					while ( $query->have_posts() ) {
						$query->the_post();
						global $post;
						$args['post__not_in'][] = $post->ID;
						wp_reset_postdata();
					}
				}
				$query2                 = new WP_Query( $args );
				// populate post_count count for the loop to work correctly
				$query->post_count = $query->post_count + $query2->post_count;
				// merge the two arrays
				$query->posts = array_merge( $query->posts, $query2->posts );
			}
		}

		if ( $query->have_posts() ) {
			$posts           .= $block_start;
			$css_classes_list = array(
				$inner_el_class . '__list',
			);

			if ( 'grid' === $layout ) {
				$css_classes_list[] = 'ck-columns__wrap';
			}

			$css_classes_list = apply_filters( 'carkeek_block_custom_post_layout__css_classes_list', $css_classes_list, $attributes );
			$posts           .= '<div class="' . implode( ' ', $css_classes_list ) . '">';
			$count            = 0;
			$template         = $post_type . '_item';
			$template         = apply_filters( 'carkeek_block_custom_post_layout__template', $template, $attributes );

			while ( $query->have_posts() ) {
				$query->the_post();
				global $post;

				if ( true == $attributes['openAsModal'] ) {
					ob_start();
					$ck_blocks_template_loader
						->set_template_data( $attributes )
						->get_template_part( 'custom-archive/modal_item' );
					$post_html = ob_get_clean();

				} else {
					ob_start();
					$ck_blocks_template_loader
						->set_template_data( $attributes )
						->get_template_part( 'custom-archive/' . $template );
					$post_html = ob_get_clean();
				}

				if ( empty( $post_html ) ) {
					ob_start();
					$ck_blocks_template_loader
						->set_template_data( $attributes )
						->get_template_part( 'custom-archive/default_item' );
					$post_html = ob_get_clean();
				}
				$posts .= apply_filters( 'carkeek_block_custom_post_layout', $post_html, $post, $attributes );
				$count++;

			}
			$posts .= '</div>';
			if ( true == $attributes['showPagination'] ) {
				$big    = 999999999; // need an unlikely integer
				$posts .= '<div class="ck_pagination">';
				$posts .= paginate_links(
					array(
						'base'      => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
						'format'    => '?paged=%#%',
						'current'   => max( 1, get_query_var( 'paged' ) ),
						'total'     => $query->max_num_pages,
						'prev_next' => false,
						'type'      => 'list',
					)
				);
				$posts .= '</div>';

			}

			$posts .= '</div>';
			wp_reset_postdata();
			return $posts;
		} else {
			if ( false === $attributes['hideIfEmpty'] ) {
				$block_content = '<div class="' . $class_pre . '__list empty">' . $attributes['emptyMessage'] . '</div>';
				return $block_start . $block_content . '</div>';
			} else {
				return;
			}
		}
	}

	public static function make_custom_link( $link, $collapseTitle = false ) {

		$href  = get_field( 'cl_external_link', $link->ID );
		$notes = get_field( 'cl_notes', $link->ID );
		if ( ! empty( $href ) ) {
			$link_type = 'external';
		} else {
			$href = get_field( 'cl_pdf_link', $link->ID );
			if ( ! empty( $href ) ) {
				$link_type = 'pdf';
			} else {
				$href      = get_field( 'cl_page_link', $link->ID );
				$link_type = 'page';
			}
		}
		$target = ( $link_type == 'external' || $link_type == 'pdf' ) ? 'target="_blank"' : '';
		if ( empty( $href ) && true == $collapseTitle ) {
			$item = self::make_accordion_panel( $link->post_title, $notes );
		} else {
			if ( empty( $href ) ) {
				$item = '<div class="ck - custom - list - title">' . $link->post_title . '</div>';
			} else {
				$item = '<a class="ck - custom - list - title" href="' . esc_url( $href ) . '" ' . esc_attr( $target ) . '>' . $link->post_title . '</a>';
			}
			if ( ! empty( $notes ) ) {
				$item .= '<div class="ck - custom - list - notes">' . $notes . '</div>';
			}
		}
		return '<li>' . $item . '</li>';

	}

	public static function make_accordion_panel( $header, $content ) {

		$panel = '<div data-aria-accordion data-transition data-multi><div class="ck - custom - list - label" data-aria-accordion-heading>' . $header . '</div>
			<div class="ck - custom - list - notes" data-aria-accordion-panel>' . $content . '</div></div>';
		return $panel;
	}

	public function carkeek_blocks_render_custom_linklist( $attributes ) {
		if ( empty( $attributes['listSelected'] ) ) {
			return;
		}
		$layout    = $attributes['postLayout'];
		$args      = array(
			'numberposts' => -1,
			'post_type'   => 'custom_link',
			'order'       => $attributes['order'],
			'post_status' => 'publish',
			'orderby'     => $attributes['sortBy'],
		);
		$post_args = $args;

		// first get all posts with no sub cat selected

		$subcats           = get_term_children( $attributes['listSelected'], 'link_list' );
		$args['tax_query'] = array(
			'relation' => 'AND',
			array(
				'taxonomy' => 'link_list',
				'field'    => 'term_id',
				'terms'    => explode( ',', $attributes['listSelected'] ),
			),
			array(
				'taxonomy' => 'link_list',
				'field'    => 'term_id',
				'terms'    => $subcats,
				'operator' => 'NOT IN',
			),
		);

		$links      = get_posts( $args );
		$list_style = '';
		$data_atts  = array(
			'accordion' => '',
			'header'    => '',
			'panel'     => '',
		);
		if ( true == $attributes['makeCollapsible'] ) {
			$list_style .= ' carkeek-blocks-accordion mini';
			$data_atts   = array(
				'accordion' => 'data-aria-accordion data-transition data-multi',
				'header'    => 'data-aria-accordion-heading',
				'panel'     => 'data-aria-accordion-panel',
			);
		}

		if ( 'content' == $attributes['primaryContent'] ) {
			$list_style .= ' is-style-content';
		}

		$block_content = '<div class="wp - block - carkeek - custom - link - list' . esc_attr( $list_style ) . '"><div ' . esc_attr( $data_atts['accordion'] ) . '>';

		if ( ! empty( $attributes['headline'] ) ) {
			$tag_name       = 'h' . $attributes['headlineLevel'];
			$block_content .= '<' . $tag_name . ' class="ck - custom - headline">' . $attributes['headline'] . '</' . $tag_name . '>';
		}

		if ( ! empty( $links ) ) {
			$block_content .= '<ul class="ck - custom - list no - bullets">';
			foreach ( $links as $link ) {
				$block_content .= self::make_custom_link( $link, $attributes['makeTitlesCollapsible'] );
			}
			$block_content .= '</ul>';
		}

		if ( ! empty( $subcats ) ) {
			foreach ( $subcats as $cat ) {
				$term                   = get_term( $cat, 'link_list' );
				$post_args['tax_query'] = array(
					array(
						'taxonomy' => 'link_list',
						'field'    => 'term_id',
						'terms'    => explode( ',', $cat ),
					),
				);
				$sub_links              = get_posts( $post_args );
				if ( ! empty( $sub_links ) ) {
					$list_style = '';

					$block_content .= '<div class="ck - custom - list - label" ' . esc_attr( $data_atts['header'] ) . '>' . $term->name . '</div>';
					$block_content .= '<div class="ck - custom - list" ' . esc_attr( $data_atts['panel'] ) . '><ul class="no - bullets">';
					foreach ( $sub_links as $sub ) {
						$block_content .= self::make_custom_link( $sub, $attributes['makeTitlesCollapsible'] );
					}
					$block_content .= '</ul></div>';
				}
			}
		}

		$block_content .= '</div></div>';
		return $block_content;

	}

	/**
	 * Render Custom Post Type Archive
	 *
	 * @param array $attributes Attributes passed to callback.
	 * @return string HTML of dynamic content.
	 */
	public function carkeek_blocks_render_events_archive( $attributes ) {
		$ck_blocks_template_loader = new Carkeek_Blocks_Template_Loader();

		$layout    = $attributes['postLayout'];
		$post_type = 'tribe_events';
		$args      = array(
			'posts_per_page' => $attributes['numberOfPosts'],
			'post_type'      => $post_type,
			'orderby'        => 'meta_value',
			'meta_key'       => '_EventStartDate',
			'order'          => 'ASC',
			'post_status'    => array( 'publish' ),
			'meta_query'     => array(
				array(
					'key'     => '_EventEndDateUTC',
					'value'   => gmdate( 'Y-m-d H:i' ),
					'compare' => '>=',
					'type'    => 'DATETIME',
				),
			),
		);

		if ( true === $attributes['filterByCategory'] && ! empty( $attributes['catTermsSelected'] ) ) {
			$args['tax_query'] = array(
				array(
					'taxonomy' => 'tribe_events_cat',
					'field'    => 'term_id',
					'terms'    => explode( ',', $attributes['catTermsSelected'] ),
				),
			);
		}

		if ( true === $attributes['filterByTag'] && ! empty( $attributes['catTagsSelected'] ) ) {
			if ( isset( $args['tax_query'] ) && is_array( $args['tax_query'] ) ) {
				$args['tax_query'][] = array(
					'taxonomy' => 'post_tag',
					'field'    => 'term_id',
					'terms'    => explode( ',', $attributes['catTagsSelected'] ),
				);
			} else {
				$args['tax_query'] = array(
					array(
						'taxonomy' => 'post_tag',
						'field'    => 'term_id',
						'terms'    => explode( ',', $attributes['catTagsSelected'] ),
					),
				);

			}
		}

		if ( true === $attributes['featuredEvents'] ) {
			$args['meta_query'][] = array(
				'key'     => '_tribe_featured',
				'value'   => true,
				'compare' => '=',
			);
		}

		$args  = apply_filters( 'carkeek_block_events_layout_query_args', $args, $attributes );
		$query = new WP_Query( $args );

		$posts = '';

		$block_class    = 'wp-block-carkeek-blocks-custom-archive';
		$inner_el_class = 'ck-custom-archive';

		$css_classes_outer = array(
			$block_class,
			'is-' . $layout,
			'post-type-' . $post_type,
			'align' . $attributes['align'],
		);

		if ( $attributes['className'] && ! empty( $attributes['className'] ) ) {
			$css_classes_outer[] = $attributes['className'];
		}
		if ( 'grid' === $layout ) {
			$css_classes_outer[] = 'ck-columns has-' . $attributes['columns'] . '-columns';
		}

		$block_start = '<div class="' . implode( ' ', $css_classes_outer ) . '">';

		if ( $query->have_posts() ) {
			$posts           .= $block_start;
			$css_classes_list = array(
				$inner_el_class . '__list',
			);

			if ( 'grid' === $layout ) {
				$css_classes_list[] = 'ck-columns__wrap';
			}

			$css_classes_list = apply_filters( 'carkeek_block_events_layout__css_classes_list', $css_classes_list, $attributes );
			$posts           .= '<div class="' . implode( ' ', $css_classes_list ) . '">';
			$count            = 0;
			$template         = $post_type . '_item';
			$template         = apply_filters( 'carkeek_block_events_layout__template', $template, $attributes );

			while ( $query->have_posts() ) {
				$query->the_post();
				global $post;

				ob_start();
				$ck_blocks_template_loader
					->set_template_data( $attributes )
					->get_template_part( 'events/' . $template );
				$post_html = ob_get_clean();

				if ( empty( $post_html ) ) {
					ob_start();
					$ck_blocks_template_loader
						->set_template_data( $attributes )
						->get_template_part( 'events/default_item' );
					$post_html = ob_get_clean();
				}
				$posts .= apply_filters( 'carkeek_block_events_layout', $post_html, $post, $attributes );
				$count++;

			}
			$posts .= '</div></div>';
			wp_reset_postdata();
			return $posts;
		} else {
			if ( false === $attributes['hideIfEmpty'] ) {
				$block_content = '<div class="' . $class_pre . '__list empty">' . $attributes['emptyMessage'] . '</div>';
				return $block_start . $block_content . '</div>';
			} else {
				return;
			}
		}
	}

}

CarkeekBlocks_CustomPost::register();


