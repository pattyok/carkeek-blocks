<?php
// TODO will someday clean this up more dynamic.

$meta_fields = array( $data->displayField1, $data->displayField2, $data->displayField3, $data->displayField4 );
$meta_data   = array();

$permalink = apply_filters(
	'ck_events_archive_tribe_events__link',
	get_permalink(),
	$post->ID,
	$data
);

foreach ( $meta_fields as $field ) {
	switch ( $field ) {
		case 'startdate':
			$date_format     = ! empty( $data->dateFormat ) ? $data->dateFormat : 'F j';
			$end_date_format = $date_format;

			$show_time = false;
			if ( ! tribe_event_is_all_day( $post->ID ) && ! empty( $data->timeFormat ) ) {
				$date_format .= ', ' . $data->timeFormat;
				$end_date_format = $date_format;
				$show_time    = true;
			}
			// these are the standard date formats we'll probably use.
			if ( 'F j' == $date_format || 'M j' == $date_format && false == $show_time ) {
				// if the months are the same, don't repeat.
				$st = tribe_get_start_date( $post->ID, false, 'F' );
				$et = tribe_get_end_date( $post, false, 'F' );
				if ( $st == $et ) {
					$end_date_format = 'j';
				}
			}

			$start = tribe_get_start_date( $post->ID, false, $date_format );
			$end   = '';
			if ( tribe_event_is_multiday( $post ) && 'show_end_date' == $data->showEndDate ) {
				$end = ' - ' . wp_kses_post( tribe_get_end_date( $post, false, $end_date_format ) );
			} elseif ( true == $show_time && 'show_end_date' == $data->showEndDate ) {
				$end = ' - ' . wp_kses_post( tribe_get_end_date( $post, false, $data->timeFormat ) );
			}
			$event_date  = '<div class="ck-item-event_date">' . $start . $end . '</div>';
			$meta_data[] = apply_filters( 'carkeek_block_events_layout__event_date', $event_date, $post->ID, $data );
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
		case 'title':
			$post_title  = '<a class="ck-custom-archive-title_link" href="' . esc_url( $permalink ) . '">' . get_the_title() . '</a>';
			$meta_data[] = $post_title;
			break;
	}
}

$featured_image = '';
if ( $data->displayFeaturedImage ) {
	$featured_image = get_the_post_thumbnail( $post->ID, 'medium_large' );
	$featured_image = apply_filters( 'carkeek_block_events_layout__featured_image', $featured_image, $post->ID, $data );
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
		<?php if ( false == $data->hideTitle ) { ?>
		<a class="ck-custom-archive-title_link" href="<?php echo esc_url( $permalink ); ?>"><?php the_title(); ?></a>
		<?php } ?>
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
