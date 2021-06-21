<?php
// TODO will someday clean this up more dynamic.

$meta_fields = array( $data->displayField1, $data->displayField2, $data->displayField3, $data->displayField4 );
$meta_data   = array();

foreach ( $meta_fields as $field ) {
	switch ( $field ) {
		case 'startdate':
			// todo add a filter for format and entire date
			$start = tribe_get_start_date( $post->ID, false, 'F j' );
			$end   = '';
			if ( tribe_event_is_multiday( $post ) ) {
				$end = ' - ' . wp_kses_post( tribe_get_end_date( $post, false, 'l, F j' ) );
			}
			$meta_data[] = '<div class="ck-item-event_date">' . $start . $end . '</div>';
			break;
		case 'organizer':
			$organizers = tribe_get_organizer_ids( $post->ID );
			$org_names  = array();
			foreach ( $organizers as $organizer_id ) {

				$org_names[] = tribe_get_organizer( $organizer_id );
			}
			$organizer   = '<div class="ck-item-event_org">' . implode( ', ', $org_names ) . '</div>';
			$meta_data[] = $organizer;
			break;
		case 'venue':
			$venue       = '<div class="ck-item-event_venue">' . tribe_get_venue( $post->ID ) . '</div>';
			$meta_data[] = $venue;
			break;
	}
}

$featured_image = '';
if ( $data->displayFeaturedImage ) {
	$featured_image = get_the_post_thumbnail( $post->ID, 'medium_large' );
}

$excerpt = '';
if ( true == $data->displayPostExcerpt ) {
	$excerpt = get_the_excerpt();
	$limit   = $data->excerptLength;
	if ( str_word_count( $excerpt, 0 ) > $limit ) {
		$words   = str_word_count( $excerpt, 2 );
		$pos     = array_keys( $words );
		$excerpt = substr( $excerpt, 0, $pos[ $limit ] );
	}
}

$permalink = apply_filters(
	'ck_events
_archive_' . $data->postTypeSelected . '__link',
	get_permalink(),
	$post->ID,
	$data
);

?>
<div class="ck-columns-item ck-custom-archive-item <?php echo esc_attr( $post->name ); ?>">
<?php
if ( ! empty( $featured_image ) ) {
	?>
		<a class="ck-custom-archive-image-link" href="<?php echo esc_url( $permalink ); ?>">
			<?php echo wp_kses_post( $featured_image ); ?>
		</a>
	<?php } ?>
	<div class="ck-custom-archive__content-wrap">
		<?php do_action( 'ck_events_archive_layout__before_title', $data ); ?>
		<a class="ck-custom-archive-title_link" href="<?php echo esc_url( $permalink ); ?>"><?php the_title(); ?></a>
		<?php do_action( 'ck_events_archive_layout__after_title', $data ); ?>
		<?php echo implode( '', $meta_data ); ?>
		<?php
		if ( ! empty( $excerpt ) ) {
			?>
			<div class="ck-custom-archive-excerpt"><?php echo wp_kses_post( $excerpt ); ?></div>
		<?php } ?>
		<?php do_action( 'ck_events_archive_layout__after_excerpt', $data ); ?>
	</div>
</div>
