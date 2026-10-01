<?php
/**
 * Custom Archive List Item Template
 *
 * @package CarkeekBlocks
 */

    $permalink        = apply_filters('ck_custom_archive_list' . $data->postTypeSelected . '__link', get_permalink(), $post->ID, $data);
    $permalink_target = isset($data->newWindow) && true == $data->newWindow ? '_blank' : '_self';
    $permalink_target = apply_filters('ck_custom_archive_list' . $data->postTypeSelected . '__link_target', $permalink_target, $data);
	$item_id          = $data->blockId . '_' . $post->ID;
    $link_title = get_the_title();
    $link_start = '';
    $link_end = '';
if ($data->useHeadingTitle == true ) {
    $link_start = '<h' . $data->headlineLevel . '>';
    $link_end = '</h' . $data->headlineLevel . '>';
}
if (!$data->noLink) {
    if ($data->openAsModal) {
        $link_start = $link_start . '<a
			class="ck-modal-item-name"
			id="title-' . esc_attr($item_id) . '"
			aria-controls="modal-name-' . esc_attr($item_id) . '"
			href="javascript:;">';

    } else {
        $link_start = $link_start . '<a class="ck-custom-archive-title_link" href="' . esc_url($permalink) . '" target="' . esc_attr($permalink_target) . '">';
    }
    $link_end = '</a>' . $link_end;
}

$link_title = '<li class="ck-custom-archive-list-item">' . $link_start . $link_title . $link_end . '</li>';
$link_title = apply_filters('ck_custom_archive_list' . $data->postTypeSelected . '__link_title', $link_title, $post->ID, $data);

echo wp_kses_post($link_title);

/**
 * If modal content is needed, load the modal template
*/
if ($data->openAsModal) {
	$focal_point = get_post_meta( $post->ID, '_carkeekblocks_featured_image_focal_point', true );
	$style       = '';
	if ( ! empty( $focal_point ) ) {
		$x     = $focal_point['x'] * 100;
		$y     = $focal_point['y'] * 100;
		$style = 'object-position:' . esc_attr( $x ) . '% ' . esc_attr( $y ) . '%;';
	}
	$image = get_the_post_thumbnail($post->ID, 'large', array( 'style' => $style ));
	$modal_body_image = apply_filters('ck_custom_archive_layout_modal_dialog__image', $image);
	$html_before_excerpt = CarkeekBlocks_Helpers::make_meta_fields( $data->addlContentBefore, $post->ID, 'before', $data->postTypeSelected, $data->addlContentBeforeSep );
	$html_after_excerpt  = CarkeekBlocks_Helpers::make_meta_fields( $data->addlContentAfter, $post->ID, 'after', $data->postTypeSelected, $data->addlContentAfterSep );

    $template_data = array(
    'item_id'          => $item_id,
    'modal_body_image' => $modal_body_image,
    'data'               => $data,
    'html_before_excerpt' => $html_before_excerpt,
    'html_after_excerpt'  => $html_after_excerpt,
    );

    $template_loader = new Carkeek_Blocks_Template_Loader();

    ob_start();
    $template_loader->set_template_data($template_data)
        ->get_template_part('custom-archive/modal');
    echo ob_get_clean();
}
