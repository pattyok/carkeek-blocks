<?php
/**
 * Render Taxonomy Archive Links
 *
 * @param array $attributes Attributes passed from the block.
 */

global $post;
$term_list = '';
$list_style = $attributes['showBullets'] == true ? '' : 'no-bullets ';
$list_style .= $attributes['displayAs'] == 'inline' ? 'list-inline ' : '';
$list_style .= 'separator-' . $attributes['separator'];
$aria_title = $attributes['listLabel'] ? $attributes['listLabel'] : 'Taxonomy List for ' . $attributes['taxonomySelected'];
if ( true == $attributes['relevantToPost'] ) {
	$terms = get_the_terms( $post->ID, $attributes['taxonomySelected'] );
} else {
	$args  = array(
		'taxonomy' => $attributes['taxonomySelected'],
		'orderby'  => $attributes['sortBy'],
		'order'    => $attributes['order'],
	);
	$terms = get_terms( $args );
}
if ( ! empty( $terms ) && ! is_wp_error( $terms ) ) {
	$term_list = '<ul class="term-archive ' . $list_style . '" aria-label="' . $aria_title . '">';
	foreach ( $terms as $term ) {
		$term_link_url  = apply_filters( 'ck_tax_archive_term_link', get_term_link( $term ), $term, $post );
		$term_link_text = apply_filters( 'ck_tax_archive_term_text', $term->name, $term, $post );
		if ( true == $attributes['linkToCategory'] ) {
			$term_link = '<a href="' . esc_url( $term_link_url ) . '" alt="' . esc_attr( sprintf( __( 'View all items filed under %s', 'my_localization_domain' ), $term->name ) ) . '">' . $term_link_text . '</a>';
		} else {
			$term_link = $term_link_text;
		}
		$term_list .= '<li>' . $term_link . '</li>';
	}
	$term_list .= '</ul>';
}
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
<?php if (!empty($attributes['listLabel'])) : ?>
	<div class="term-list-label" aria-hidden="true"><?php echo esc_html($attributes['listLabel']); ?></div>
<?php endif; ?>
<?php echo wp_kses_post( $term_list ); ?>
</div>

