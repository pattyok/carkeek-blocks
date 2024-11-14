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
class CarkeekBlocks_CustomArchive {

	/**
	 * This plugin's instance.
	 *
	 * @var CarkeekBlocks_CustomArchive
	 */
	private static $instance;

	/**
	 * Registers the plugin.
	 */
	public static function register() {
		if ( null === self::$instance ) {
			self::$instance = new CarkeekBlocks_CustomArchive();
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
		add_filter( 'rest_post_collection_params', array( $this, 'ckb_prefix_add_rest_orderby_params' ), 10, 1 );
	}

	/**
	 * Allow for random in the REST API
	 *
	 * @param array $params Attributes passed to callback.
	 */
	public function ckb_prefix_add_rest_orderby_params( $params ) {
		$params['orderby']['enum'][] = 'rand';

		return $params;
	}

	/**
	 * Recursively sort an array of taxonomy terms hierarchically. Child categories will be
	 * placed under a 'children' member of their parent term.
	 *
	 * @param Array   $cats     taxonomy term objects to sort.
	 * @param Array   $into     result array to put them in.
	 * @param integer $parent_id the current parent ID to put them in.
	 */
	public static function sort_terms_hierarchically( array &$cats, array &$into, $parent_id = 0 ) {
		foreach ( $cats as $i => $cat ) {
			if ( ! is_wp_error( $cat ) ) {
				if ( $cat->parent === $parent_id ) {
					$into[ $cat->term_id ] = $cat;
					unset( $cats[ $i ] );
				}
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
	 * @param object $term the term to group.
	 * @param string $tax the taxonomy of the term.
	 * @param array  $args query args.
	 * @param array  $attributes Attributes passed to callback.
	 * @param object $template_loader template loader.
	 * @param number $level current level of the group.
	 * @return string HTML of dynamic content.
	 */
	public static function get_posts_per_term( $term, $tax, $args, $attributes, $template_loader, $level = 0 ) {
		$term_item    = apply_filters( 'ck_custom_archive_tax_term_item', $term->name, $term, $tax, $args, $attributes, $level );
		$header_class = 'ck-archive-tax-header level-' . esc_attr( $level );
		$header_class = apply_filters( 'ck_custom_archive_tax_header_class', $header_class, $term, $tax, $args, $attributes, $level );
		$term_header  = '<div class="' . esc_attr( $header_class ) . '">' . $term_item . '</div>';
		$term_header  = apply_filters( 'ck_custom_archive_tax_term_header', $term_header, $term, $tax, $args, $attributes, $level );
		$post_type    = $attributes['postTypeSelected'];
		$posts_html   = '';
		if ( false == $attributes['groupHideEmpty'] ) {
			$posts_html = $term_header;
		}
		$new_args  = $args;
		$tax_query = array(
			'taxonomy' => $tax,
			'field'    => 'id',
			'terms'    => $term->term_id,
		);
		if ( ! is_array( $new_args['tax_query'] ) ) {
			$$new_args['tax_query'] = array();
		}
		$new_args['tax_query'][] = $tax_query;

		$my_children = get_term_children( $term->term_id, $tax ); // returns all children - we only want to show them once.
		$template    = $post_type . '_item';
		$template    = apply_filters( 'carkeek_block_grouped_layout__template', $template, $attributes );

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
			if ( true == $attributes['groupHideEmpty'] ) {
				$posts_html = $term_header;
			}
			while ( $query->have_posts() ) {
				$query->the_post();
				global $post;
				if ( true == $attributes['openAsModal'] ) {
					$modal = 'custom-archive/modal_item';

					if ( true == $attributes['wholeLink'] ) {
						$modal = 'custom-archive/modal_item_v2_linked';
					}

					ob_start();
					$template_loader
						->set_template_data( $attributes )
						->get_template_part( $modal );
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
			$level += 1; // phpcs:ignore
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
	 * @param string $block_start html that opens the block.
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
				// get children and parents and merge them.
				$tax_terms = get_terms( $tax_args );

				// add Parent to the array.
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
	public static function carkeek_blocks_render_custom_posttype_archive( $attributes ) {
		$ck_blocks_template_loader = new Carkeek_Blocks_Template_Loader();
		if ( empty( $attributes['postTypeSelected'] ) ) {
			return;
		}
		if ( isset( $attributes['honorStickyPosts'] ) && true == $attributes['honorStickyPosts'] ) {
			$sticky_posts                = get_option( 'sticky_posts' );
			$args['post__in']            = $sticky_posts;
			$args['ignore_sticky_posts'] = 1;
		}

		$layout       = $attributes['postLayout'];
		$post_type    = $attributes['postTypeSelected'];
		$paged        = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
		$related      = isset( $attributes['isRelated'] ) && true == $attributes['isRelated'] ? true : false;
		$posts_not_in = array( get_the_ID() );

		$args = array(
			'posts_per_page'      => $attributes['numberOfPosts'],
			'post_type'           => $attributes['postTypeSelected'],
			'order'               => $attributes['order'],
			'orderby'             => $attributes['sortBy'],
			'paged'               => $paged,
			'post__not_in'        => array( get_the_ID() ),
			'ignore_sticky_posts' => true, // without this sticky posts add to the count.
		);
		if ( $attributes['excludeChildPosts'] ) {
			$args['post_parent'] = 0;
		}

		if ( 'meta_value' == $attributes['sortBy'] && ! empty( $attributes['sortByMeta'] ) ) {
			$args['orderby'] = array(
				$attributes['sortBy'] => $attributes['order'],
				'title'               => $attributes['order'],
			);
			// pull back all items whether they have been assigned or not.
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
				$tax_operator = isset( $attributes['taxTermsIncludeExclude'] ) && 'exclude' == $attributes['taxTermsIncludeExclude'] ? 'NOT IN' : 'IN';
				$args['tax_query'] = array(
					array(
						'taxonomy' => $attributes['taxonomySelected'],
						'field'    => 'term_id',
						'terms'    => $tax_terms,
						'operator' => $tax_operator,
					),
				);
			}
		} elseif ( true == $related ) {

			if ( ! empty( $attributes['taxonomySelected'] ) ) {
				$tax          = $attributes['taxonomySelected'];
				$my_id        = get_the_ID();
				$my_terms     = get_the_terms( $my_id, $tax );
				$tax_operator = isset( $attributes['matchAllTerms'] ) && true == $attributes['matchAllTerms'] ? 'AND' : 'IN';
				if ( ! is_wp_error( $my_terms ) && is_array( $my_terms ) ) {
					if ( isset( $attributes['childTermsOnly'] ) && true == $attributes['childTermsOnly'] ) {
						$children = wp_list_filter( $my_terms, array( 'parent' => 0 ), 'NOT' );
						if ( ! empty( $children ) ) {
							$my_terms = $children;
						}
					}
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
							'operator' => $tax_operator,
						),
					);
				}
			}
		}

		/** Set up classes for the rendered block */
		$block_class    = 'carkeek-archive';
		$inner_el_class = 'ck-custom-archive';
		$align          = isset( $attributes['align'] ) ? $attributes['align'] : '';

		$css_classes_outer = array(
			$block_class,
			'is-' . $layout,
			'post-type-' . $post_type,
			'is-layout-constrained',
		);
		if ( 'grid' === $layout ) {
			$css_classes_outer[] = 'ck-columns has-' . $attributes['columns'] . '-columns';
			$mobile              = isset( $attributes['columnsMobile'] ) ? $attributes['columnsMobile'] : 1;
			$tablet              = isset( $attributes['columnsTablet'] ) ? $attributes['columnsTablet'] : $attributes['columns'];
			$css_classes_outer[] = 'has-' . $mobile . '-columns-mobile has-' . $tablet . '-columns-tablet';
		}

		if ( isset( $attributes['groupHideParents'] ) && true == $attributes['groupHideParents'] ) {
			$css_classes_outer[] = 'group-hide-parents';
		}

		if ( isset( $attributes['limitItemsMobile'] ) && true == $attributes['limitItemsMobile'] ) {
			if ( isset( $attributes['itemsTablet'] ) && -1 !== $attributes['itemsTablet'] ) {
				$css_classes_outer[] = 'limit-tablet-' . $attributes['itemsTablet'];
			}
			$css_classes_outer[] = 'limit-mobile-' . $attributes['itemsMobile'];
		}

		if ( isset( $attributes['className'] ) && ! empty( $attributes['className'] ) ) {
			$css_classes_outer[] = $attributes['className'];
		}

		$css_classes_outer = apply_filters( 'carkeek_block_custom_post_layout__css_classes_outer', $css_classes_outer, $attributes );
		$block_start       = '<div ' . get_block_wrapper_attributes( array( 'class' => implode( ' ', $css_classes_outer ) ) ) . '">';

		/** we only include headline and link if the whole block is hidden on empty */
		$view_more_link = '';
		if ( true === $attributes['hideIfEmpty'] ) {
			$headline = '';
			if ( ! empty( $attributes['headline'] ) ) {
				$headline = '<h2 class="ck-custom-archive__headline">' . $attributes['headline'] . '</h2>';
			}
			$block_start .= $headline;
			if ( ! empty( $attributes['morePostsLink'] ) ) {
				$view_more_link = '<div class="ck-custom-archive__buttons"><a class="ck-custom-archive__view-more-link button" href="' . $attributes['morePostsLink'] . '">' . $attributes['morePostsLinkLabel'] . '</a></div>';
			}
		}
		/** End set up classes */

		/** If Grouping we take the args from here */
		if ( isset( $attributes['groupListings'] ) && true == $attributes['groupListings'] && ! empty( $attributes['groupTaxSelected'] ) ) {
			return self::render_custom_posttype_archive_grouped( $args, $attributes, $block_start, $ck_blocks_template_loader );
		}

		/** Customize query to work with Filtering Tools
		 * Currently works with facetwp, value is 'facetwp', syntax for args is facetwp = true;
		 * Also working with the Carkeek block filter
		*/

		if ( !empty( $attributes['useWithFilter'])) {
			$args[$attributes['useWithFilter']] = true;
		}


		$args = apply_filters( 'carkeek_block_custom_post_layout__query_args', $args, $attributes );
		$args = apply_filters( 'carkeek_block_custom_post_layout_' . $post_type . '__query_args', $args, $attributes );
		// if sticky posts are enabled, we need to add them to the query.
		if ( isset( $attributes['honorStickyPosts'] ) && true == $attributes['honorStickyPosts'] ) {
			$args0              = $args;
			$sticky_posts       = get_option( 'sticky_posts' );
			$args0['post__in']  = $sticky_posts;
			$query              = new WP_Query( $args0 );
			$sticky_posts_count = $query->post_count;
			if ( isset( $attributes['numberOfPosts'] ) && -1 == $attributes['numberOfPosts'] || $attributes['numberOfPosts'] > $sticky_posts_count ) {
				$args['post__not_in'] = array_merge( $args['post__not_in'], $sticky_posts );
				if ( -1 !== $attributes['numberOfPosts'] ) {
					$args['posts_per_page'] = $attributes['numberOfPosts'] - $query->found_posts;
				}
				$query2 = new WP_Query( $args );
				// populate post_count count for the loop to work correctly.
				$query->post_count = $query->post_count + $query2->post_count;
				// merge the two arrays.
				$query->posts = array_merge( $query->posts, $query2->posts );
			}
		} else {
			$query = new WP_Query( $args );
		}


		$posts = '';

		if ( true == $related && true == $attributes['fillTheSlots'] && -1 !== $attributes['numberOfPosts'] ) {
			// if we used AND in the tax query, we need to use IN for the second query.
			if ( isset( $attributes['matchAllTerms'] ) && true == $attributes['matchAllTerms'] ) {

				if ( $query->post_count < $attributes['numberOfPosts'] ) {

					$args['tax_query'][0]['operator'] = 'IN';
					$args['posts_per_page']           = $attributes['numberOfPosts'] - $query->post_count;
					// exclude posts found so far.
					if ( $query->have_posts() ) {
						while ( $query->have_posts() ) {
							$query->the_post();
							global $post;
							$args['post__not_in'][] = $post->ID;
							wp_reset_postdata();
						}
					}
					$query2 = new WP_Query( $args );
					// populate post_count count for the loop to work correctly.
					$query->post_count = $query->post_count + $query2->post_count;
					// merge the two arrays.
					$query->posts = array_merge( $query->posts, $query2->posts );
				}
			}

			if ( $query->post_count < $attributes['numberOfPosts'] ) {

				unset( $args['tax_query'] );
				$args['posts_per_page'] = $attributes['numberOfPosts'] - $query->post_count;
				// exclude posts found so far.
				if ( $query->have_posts() ) {
					while ( $query->have_posts() ) {
						$query->the_post();
						global $post;
						$args['post__not_in'][] = $post->ID;
						wp_reset_postdata();
					}
				}
				$query2 = new WP_Query( $args );
				// populate post_count count for the loop to work correctly.
				$query->post_count = $query->post_count + $query2->post_count;
				// merge the two arrays.
				$query->posts = array_merge( $query->posts, $query2->posts );
			}
		}

		if ( $query->have_posts() ) {
			$posts           .= $block_start;
			$css_classes_list = array(
				$inner_el_class . '__list',
				'alignwide',
			);

			if ( 'grid' === $layout ) {
				$css_classes_list[] = 'ck-columns__wrap';
			}

			$css_classes_list = apply_filters( 'carkeek_block_custom_post_layout__css_classes_list', $css_classes_list, $attributes );
			if ( 'ul' == $layout ) {
				$posts .= '<ul class="' . implode( ' ', $css_classes_list ) . '">';
			} else {
				$posts .= '<div class="' . implode( ' ', $css_classes_list ) . '">';
			}
			$count            = 0;
			$template         = $post_type . '_item';
			if ( 'ul' == $layout ) {
				$template = 'list_item';
			}
			$template         = apply_filters( 'carkeek_block_custom_post_layout__template', $template, $attributes );

			while ( $query->have_posts() ) {
				$query->the_post();
				global $post;

				if ( isset( $attributes['openAsModal'] ) && true == $attributes['openAsModal'] ) {
					$modal = 'custom-archive/modal_item_v2';

					if ( true == $attributes['wholeLink'] ) {
						$modal = 'custom-archive/modal_item_v2_linked';
					}
					ob_start();
					$ck_blocks_template_loader
						->set_template_data( $attributes )
						->get_template_part( $modal );
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
			if ( 'ul' == $layout ) {
				$posts .= '</ul>';
			} else {
				$posts .= '</div>';
			}

			if ( isset( $attributes['showPagination'] ) && true == $attributes['showPagination'] ) {
				$big    = 999999999; // need an unlikely integer.
				$posts .= '<div class="ck_pagination">';
				$posts .= paginate_links(
					array(
						'base'      => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
						'format'    => '?paged=%#%',
						'current'   => max( 1, get_query_var( 'paged' ) ),
						'total'     => $query->max_num_pages,
						'prev_next' => true,
						'prev_text'          => __( '&lsaquo; Prev' ),
						'next_text'          => __( 'Next &rsaquo;' ),
						'type'      => 'list',
					)
				);
				$posts .= '</div>';

			}
			$posts .= $view_more_link;
			$posts .= '</div>';
			wp_reset_postdata();
			return $posts;
		} else {
			if ( false === $attributes['hideIfEmpty'] ) {
				$block_content = '<div class="wp-block-carkeek-blocks-custom-archive __list empty">' . $attributes['emptyMessage'] . '</div>';
				return $block_start . $block_content . '</div>';
			} else {
				return;
			}
		}
	}


	/**
	 * Render Custom Post Type Archive
	 *
	 * @param array $attributes Attributes passed to callback.
	 * @return string HTML of dynamic content.
	 */
	public static function carkeek_blocks_render_events_archive( $attributes ) {
		$ck_blocks_template_loader = new Carkeek_Blocks_Template_Loader();
		$meta_query_count          = 1;
		$layout                    = $attributes['postLayout'];
		$post_type                 = 'tribe_events';
		$paged                     = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
		$args                      = array(
			'posts_per_page' => $attributes['numberOfPosts'],
			'post_type'      => $post_type,
			'orderby'        => 'meta_value',
			'meta_key'       => '_EventStartDate',
			'post__not_in'   => array( get_the_ID() ),
			'order'          => 'ASC',
			'paged'          => $paged,
			'post_status'    => array( 'publish' ),
			'meta_query'     => array(
				'relation' => 'AND',

			),

		);
		if ( false == $attributes['includeHiddenEvents'] ) {
			$args['meta_query'][] = array(
				'key'     => '_EventHideFromUpcoming',
				'compare' => 'NOT EXISTS',
			);
		}

		if ( true !== $attributes['includePastEvents'] ) {
			$args['meta_query'][] =
				array(
					'key'     => '_EventEndDateUTC',
					'value'   => gmdate( 'Y-m-d H:i' ),
					'compare' => '>=',
					'type'    => 'DATETIME',

				);
			$meta_query_count ++;
		} else {
			$args['order'] = $attributes['sortOrder'];
			if ( true == $attributes['onlyPastEvents'] ) {
				$args['meta_query'][] =
					array(
						'key'     => '_EventEndDateUTC',
						'value'   => gmdate( 'Y-m-d H:i' ),
						'compare' => '<=',
						'type'    => 'DATETIME',

					);
				$meta_query_count ++;
			}
		}

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

		if ( true === $attributes['filterByVenue'] ) {
			$venue_args = array(
				'key'     => '_EventVenueID',
				'value'   => $attributes['venueSelected'],
				'compare' => '=',
			);
			if ( ! isset( $args['meta_query'] ) ) {
				$args['meta_query'] = array();
			}
			$meta_query_count++;
			$args['meta_query'][] = $venue_args;
		}

		if ( true === $attributes['featuredEvents'] ) {
			$featured_args = array(
				'key'     => '_tribe_featured',
				'value'   => true,
				'compare' => '=',
			);
			if ( ! isset( $args['meta_query'] ) ) {
				$args['meta_query'] = array();
			}
			$args['meta_query'][] = $featured_args;
			$meta_query_count++;
		}
		// if prioritizeRelated, we first search by related, then by the original args.
		if ( true == $attributes['prioritizeRelated'] ) {
			global $post;
			$args2              = $args;
			$args2['tax_query'] = array(
				'relation' => 'AND',
			);
			$event_cats         = get_the_terms( $post->ID, 'tribe_events_cat' );
			$event_tags         = get_the_terms( $post->ID, 'post_tag' );
			if ( ! empty( $event_cats ) ) {
				$cat_list = wp_list_pluck( $event_cats, 'term_id' );
				// run each as their own argument so we can switch to OR if not filled.
				foreach ( $cat_list as $cat ) {
					$args2['tax_query'][] = array(
						'taxonomy' => 'tribe_events_cat',
						'field'    => 'term_id',
						'terms'    => $cat,
					);
				}
			}
			if ( ! empty( $event_tags ) ) {
				$tags_list = wp_list_pluck( $event_tags, 'term_id' );
				foreach ( $tags_list as $tag ) {
					$args2['tax_query'][] = array(
						'taxonomy' => 'post_tag',
						'field'    => 'term_id',
						'terms'    => $tag,
					);
				}
			}
			$args2 = apply_filters( 'carkeek_block_events_related_layout_query_args', $args2, $attributes );
			$query = new WP_Query( $args2 );

			if ( $query->found_posts < $attributes['numberOfPosts'] ) {
				$args2['tax_query']['relation'] = 'OR';
				$args2['posts_per_page']        = $attributes['numberOfPosts'] - $query->found_posts;
				// exclude posts found so far.
				if ( $query->have_posts() ) {
					while ( $query->have_posts() ) {
						$query->the_post();
						global $post;
						$args2['post__not_in'][] = $post->ID;
						wp_reset_postdata();
					}
				}
				$query2 = new WP_Query( $args2 );
				// populate post_count count for the loop to work correctly .
				$query->post_count = $query->post_count + $query2->post_count;
				// merge the two arrays .
				$query->posts = array_merge( $query->posts, $query2->posts );
			}
			// run once more to fill up the grid if necessary
			if ( $query->post_count < $attributes['numberOfPosts'] ) {
				$args['posts_per_page'] = $attributes['numberOfPosts'] - $query->post_count;
				// exclude posts found so far.
				if ( $query->have_posts() ) {
					while ( $query->have_posts() ) {
						$query->the_post();
						global $post;
						$args['post__not_in'][] = $post->ID;
						wp_reset_postdata();
					}
				}
				// run with original args.
				$query3 = new WP_Query( $args );
				// populate post_count count for the loop to work correctly .
				$query->post_count = $query->post_count + $query3->post_count;
				// merge the two arrays .
				$query->posts = array_merge( $query->posts, $query3->posts );
			}
		} else {

			$args  = apply_filters( 'carkeek_block_events_layout_query_args', $args, $attributes );
			$query = new WP_Query( $args );

		}

		$posts = '';

		$block_class    = 'carkeek-archive';
		$inner_el_class = 'ck-custom-archive';

		$css_classes_outer = array(
			$block_class,
			'is-' . $layout,
			'post-type-' . $post_type,
		);

		if ( isset( $attributes['align'] ) ) {
			$css_classes_outer[] = 'align' . $attributes['align'];
		}
		if ( isset( $attributes['className'] ) && ! empty( $attributes['className'] ) ) {
			$css_classes_outer[] = $attributes['className'];
		}
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
		$block_start = '<div ' . get_block_wrapper_attributes( array( 'class' => implode( ' ', $css_classes_outer ) ) ) . '">';

		if ( $query->have_posts() ) {
			$posts           .= $block_start;
			$css_classes_list = array(
				$inner_el_class . '__list',
				'alignwide',
			);

			if ( 'grid' === $layout ) {
				$css_classes_list[] = 'ck-columns__wrap';
			}

			$css_classes_list = apply_filters( 'carkeek_block_events_layout__css_classes_list', $css_classes_list, $attributes );
			if ( 'ul' == $layout ) {
				$posts .= '<ul class="' . implode( ' ', $css_classes_list ) . '">';
			} else {
				$posts .= '<div class="' . implode( ' ', $css_classes_list ) . '">';
			}
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
			if ( 'ul' == $layout ) {
				$posts .= '</ul>';
			} else {
				$posts .= '</div>';
			}

			if ( true == $attributes['showPagination'] ) {
				$big    = 999999999; // need an unlikely integer.
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
				$block_content = '<div class="wp-block-carkeek-blocks-custom-archive __list empty">' . $attributes['emptyMessage'] . '</div>';
				return $block_start . $block_content . '</div>';
			} else {
				return;
			}
		}
	}

}

CarkeekBlocks_CustomArchive::register();
