<?php
/*
* Plugin Name: Carkeek Blocks
* Plugin URI: https://carkeekstudios.com/
* Description: Series of blocks designed to work with the Carkeek Theme
* Author: pattyok
* Author URI https://carkeekstudios.com/
*/

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once 'src/metabox.php';

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
add_filter( 'block_categories', 'carkeek_blocks_categories', 10, 2 );

function carkeek_blocks_register_block_type( $block, $options = array() ) {
	register_block_type(
		'carkeek-blocks/' . $block,
		array_merge(
			array(
				'editor_script' => 'carkeek-blocks-editor-script',
				'editor_style'  => 'carkeek-blocks-editor-style',
				'script'        => 'carkeek-blocks-script',
				'style'         => 'carkeek-blocks-style',
			),
			$options
		)
	);
}

function carkeek_blocks_enqueue_assets() {
	wp_enqueue_script(
		'carkeek-blocks-editor-js',
		plugins_url( 'dist/editor_script.js', __FILE__ ),
		array( 'wp-data', 'wp-plugins', 'wp-edit-post', 'wp-i18n' )
	);
}

add_action( 'enqueue_block_editor_assets', 'carkeek_blocks_enqueue_assets' );

function carkeek_blocks_register() {

	wp_register_script(
		'carkeek-blocks-editor-script',
		plugins_url( 'dist/editor.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components', 'lodash', 'wp-blob', 'wp-data', 'wp-html-entities', 'wp-compose' )
	);

	wp_register_script(
		'carkeek-blocks-script',
		plugins_url( 'dist/script.js', __FILE__ ),
		array( 'jquery' )
	);

	wp_register_style(
		'carkeek-blocks-editor-style',
		plugins_url( 'dist/editor.css', __FILE__ ),
		array( 'wp-edit-blocks' )
	);

	wp_register_style(
		'carkeek-blocks-style',
		plugins_url( 'dist/style.css', __FILE__ )
	);

	carkeek_blocks_register_block_type( 'firstblock' );
	carkeek_blocks_register_block_type( 'secondblock' );
	carkeek_blocks_register_block_type( 'team-member' );
	carkeek_blocks_register_block_type( 'team-members' );
	carkeek_blocks_register_block_type(
		'latest-posts',
		array(
			'render_callback' => 'carkeek_blocks_render_latest_posts_block',
			'attributes'      => array(
				'numberOfPosts'  => array(
					'type'    => 'number',
					'default' => 5,
				),
				'postCategories' => array(
					'type' => 'string',
				),
			),
		)
	);
	carkeek_blocks_register_block_type( 'redux' );
	carkeek_blocks_register_block_type( 'todo-list' );
	carkeek_blocks_register_block_type( 'todo-list-count' );
	carkeek_blocks_register_block_type( 'meta' );
}

add_action( 'init', 'carkeek_blocks_register' );

function carkeek_blocks_render_latest_posts_block( $attributes ) {
	$args = array(
		'posts_per_page' => $attributes['numberOfPosts'],
	);
	if ( $attributes['postCategories'] ) {
		$args['cat'] = $attributes['postCategories'];
	}
	$query = new WP_Query( $args );
	$posts = '';

	if ( $query->have_posts() ) {
		$posts .= '<ul class="wp-block-carkeek-blocks-latest-posts">';
		while ( $query->have_posts() ) {
			$query->the_post();
			$posts .= '<li><a href="' . esc_url( get_the_permalink() ) . '">'
			. get_the_title() . '</a></li>';
		}
		$posts .= '</ul>';
		wp_reset_postdata();
		return $posts;
	} else {
		return '<div>' . __( 'No Posts Found', 'carkeek-blocks' ) . '</div>';
	}
}

function carkeek_blocks_register_post_template() {
	$post_type_object           = get_post_type_object( 'post' );
	$post_type_object->template = array(
		array( 'carkeek-blocks/meta' ),
		array(
			'core/paragraph',
			array(
				'content' => 'cljljlj',
			),
		),
		array(
			'carkeek-blocks/team-members',
			array(
				'columns' => 2,
			),
			array(
				array( 'carkeek-blocks/team-member', array( 'title' => 'ljljljl;j' ) ),
				array( 'carkeek-blocks/team-member' ),
			),
		),
	);
}

add_action( 'init', 'carkeek_blocks_register_post_template' );
