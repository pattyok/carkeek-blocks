<?php
/**
 * Custom Archive List Item Template
 *
 * @package CarkeekBlocks
 */

	$permalink        = apply_filters( 'ck_custom_archive_list' . $data->postTypeSelected . '__link', get_permalink(), $post->ID, $data );
	$permalink_target = isset( $data->newWindow ) && true == $data->newWindow ? '_blank' : '_self';
	$permalink_target = apply_filters( 'ck_custom_archive_list' . $data->postTypeSelected . '__link_target', $permalink_target, $data );

	$link_title = get_the_title();
	$link_start = '<a class="ck-custom-archive-title_link" href="' . esc_url( $permalink ) . '" target="' . esc_attr( $permalink_target ) . '">';
	$link_end = '</a>';


$link_title = apply_filters( 'ck_custom_archive_list' . $data->postTypeSelected . '__link_title', $link_title, $post->ID, $data );


$link_title = '<li class="ck-custom-archive-list-item">' . $link_start . $link_title . $link_end . '</li>';

echo wp_kses_post( $link_title );

