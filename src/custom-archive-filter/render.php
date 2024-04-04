<?php
/**
 * Custom Archive Filter Block
 *
 * @package CarkeekBlocks
 */
var_dump($attributes);
$args = array(
	'taxonomy' => $attributes['taxonomySelected'],
	'hide_empty' => true,
);
if (isset($attributes['termOption']) && $attributes['termOption'] === 'some') {
	$terms = array_map('intval', $attributes['taxTermsSelected']);
	$args[ $attributes['taxTermsIncludeExclude'] ] = $terms;
}
$filter_terms = get_terms($args);
$current_url = explode("?", $_SERVER['REQUEST_URI']);

?>



<div  <?php echo get_block_wrapper_attributes( array('class' => '')); ?>>
<div class="filter-header">
	<h3><?php echo $attributes['filterLabel']; ?></h3>
</div>
<ul class="filter-list">
	<?php foreach ($filter_terms as $term) : ?>
		<?php
		$term_link = $current_url[0] . '?ck-tax=' . $attributes['taxonomySelected'] . '&ck-term=' . $term->id;
		?>
		<li>
			<a href="<?php echo $term_link; ?>" class="filter-link"><?php echo $term->name; ?></a>
		</li>
	<?php endforeach; ?>
</div>
