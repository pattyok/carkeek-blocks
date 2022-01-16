import { InspectorControls, InspectorAdvancedControls } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import {
    RangeControl,
    PanelBody,
    ToggleControl,
    RadioControl,
    SelectControl,
    TextareaControl,
    TextControl
} from "@wordpress/components";


function postsInspector( props ){
    const {
        catTerms,
        catTags,
        venues,
        attributes,
        setAttributes,
    } = props;
    const {
        numberOfPosts,
        displayPostExcerpt,
        excerptLength,
        postLayout,
        featuredEvents,
        filterByCategory,
        filterByTag,
        filterByVenue,
        hideTitle,
        venueSelected,
        catTermsSelected,
        catTagsSelected,
        displayField1,
        displayField2,
        displayField3,
        dateFormat,
        timeFormat,
        showEndDate,
        hideIfEmpty,
        emptyMessage,
        columns,
        columnsMobile,
        columnsTablet,
        limitItemsMobile,
        itemsMobile,
        itemsTablet,
        displayFeaturedImage,
        showPagination,
        includePastEvents,
        prioritizeRelated
    } = attributes;

    //Handling these as individual attributes until I have time to figure out arrays.
    const availFields = [
        { label: 'Select a Field', value: '' },
        { label: 'Event Title', value: 'title' },
        { label: 'Event Date/Time', value: 'startdate' },
        { label: 'Organizer', value: 'organizer' },
        { label: 'Venue', value: 'venue' },
    ];

    let showDateFormat = false;
    if (displayField1 == "startdate"  || displayField2 == 'startdate' || displayField3 == 'startdate') {
        showDateFormat = true;
    }

    const fieldSelect = (
        <>
            <ToggleControl
                label={__("Hide Title")}
                checked={hideTitle}
                onChange={ ( value ) => setAttributes( { hideTitle: value } ) }
                help={__("To change the order of the title, hide it add place it with a metafield below.")}
            />
            <SelectControl
                label={__("Select Metafield 1", "carkeek-blocks")}
                onChange={ ( value ) => setAttributes( { displayField1: value } ) }
                options={
                    availFields
                }
                value={displayField1}
            />
            <SelectControl
                label={__("Select Metafield 2", "carkeek-blocks")}
                onChange={ ( value ) => setAttributes( { displayField2: value } ) }
                options={
                    availFields
                }
                value={displayField2}
            />

            <SelectControl
                label={__("Select Metafield 3", "carkeek-blocks")}
                onChange={ ( value ) => setAttributes( { displayField3: value } ) }
                options={
                    availFields
                }
                value={displayField3}
            />
            { showDateFormat &&
                <>
                <RadioControl
                    label={__("End Date/Time")}
                    selected={showEndDate}
                    options={[
                        { label: __("Show end date/time"), value: "show_end_date" },
                        { label: __("Never show end date/time"), value: "naver_show_end_date"},
                    ]}
                    onChange={value =>
                        setAttributes({
                            showEndDate: value
                        })
                    }
                />
                <p>Use PHP Date Formats, <a target="_blank" rel="noreferrer" href="https://wordpress.org/support/article/formatting-date-and-time/">Learn how to make your own date format here.</a></p>

                <TextControl
                    label="Date Format"
                    value={ dateFormat }
                    onChange={ ( value ) => setAttributes( { dateFormat: value } ) }
                />
                <TextControl
                    label="Time Format"
                    value={ timeFormat }
                    onChange={ ( value ) => setAttributes( { timeFormat: value } ) }
                    help='Leave blank to hide the time'
                />

                </>
            }
        </>
    )
    const taxonomySelect = (
        <>
            <ToggleControl
                label={__("Filter by Category")}
                checked={filterByCategory}
                onChange={ ( value ) => setAttributes( { filterByCategory: value } ) }
            />
            {filterByCategory && (
            <>
                <SelectControl
                    multiple
                    label={__("Select Terms", "carkeek-blocks")}
                    onChange={ ( terms ) => setAttributes( { catTermsSelected: terms.join(",") } ) }
                    options={
                        catTerms &&
                        catTerms.map(type => ({
                            value: type.id,
                            label: type.name
                        }))
                    }
                    value={catTermsSelected && catTermsSelected.split(',')}
                />
            </>
            )}
            <ToggleControl
                label={__("Filter by Tag")}
                checked={filterByTag}
                onChange={ ( value ) => setAttributes( { filterByTag: value } ) }
            />
            {filterByTag && (
            <>
                <SelectControl
                    multiple
                    label={__("Select Terms", "carkeek-blocks")}
                    onChange={ ( terms ) => setAttributes( { catTagsSelected: terms.join(",") } ) }
                    options={
                        catTags &&
                        catTags.map(type => ({
                            value: type.id,
                            label: type.name
                        }))
                    }
                    value={catTagsSelected && catTagsSelected.split(',')}
                />
            </>
            )}
            <ToggleControl
                label={__("Filter by Venue")}
                checked={filterByVenue}
                onChange={ ( value ) => setAttributes( { filterByVenue: value } ) }
            />
            {filterByVenue && (
            <>
                <SelectControl
                    label={__("Select Venue", "carkeek-blocks")}
                    onChange={ ( term ) => setAttributes( { venueSelected: term } ) }
                    options={
                        venues &&
                        venues.map(type => ({
                            value: type.id,
                            label: type.title.raw
                        }))
                    }
                    value={venueSelected && venueSelected.split(',')}
                />
            </>
            )}
            <ToggleControl
                label={__("Include Past Events")}
                checked={includePastEvents}
                onChange={ ( value ) => setAttributes( { includePastEvents: value } ) }
            />
        </>
    );

    function handlePaginationSettingChange( value ){
        setAttributes({ showPagination: value })
        setAttributes({ limitItemsMobile: false })
    }



    return (
        <>
        <InspectorControls>
            <PanelBody title={__("Events Settings", "carkeek-blocks")}>

                { taxonomySelect }

                <ToggleControl
                    label={__("Display only Featured Events")}
                    checked={featuredEvents}
                    onChange={ ( value ) => setAttributes( { featuredEvents: value } ) }
                />

                <RangeControl
                    label={__("Number of Posts", "carkeek-blocks")}
                    value={numberOfPosts}
                    help={__("Select -1 to show all")}
                    onChange={ ( numberOfPosts ) => setAttributes( { numberOfPosts } ) }
                    min={-1}
                    max={21}
                />
            </PanelBody>
            <PanelBody title={__("Layout", "carkeek-blocks")}>
                <RadioControl
                    label={__("Layout Style")}
                    selected={postLayout}
                    options={[
                        { label: __("Grid"), value: "grid" },
                        { label: __("List"), value: "list"},
                    ]}
                    onChange={value =>
                        setAttributes({
                            postLayout: value
                        })
                    }
                />
                {postLayout == 'grid' &&
                <>
                    <RangeControl
                        label={__("Number of Columns", "carkeek-blocks")}
                        value={ columns }
                        onChange={ ( columns ) => setAttributes( { columns } ) }
                        min={1}
                        max={6}
                    />
                </>
                }
            </PanelBody>
            <PanelBody title={__("Data to display", "carkeek-blocks")}>
                <ToggleControl
                    label={__("Include Featured Image")}
                    checked={displayFeaturedImage}
                    onChange={value =>
                        setAttributes({ displayFeaturedImage: value })
                    }
                />

                {fieldSelect}

                <ToggleControl
                    label={__("Include Excerpt")}
                    checked={displayPostExcerpt}
                    onChange={value =>
                        setAttributes({ displayPostExcerpt: value })
                    }
                />
                {displayPostExcerpt && (
                        <RangeControl
                            label={__("Max number of words in excerpt")}
                            value={excerptLength}
                            onChange={value =>
                                setAttributes({ excerptLength: value })
                            }
                            min={10}
                            max={75}
                        />
                    )}
                <ToggleControl
                    label={__("Show Pagination")}
                    checked={showPagination}
                    onChange={ ( value ) => handlePaginationSettingChange( value ) }
                />
                <ToggleControl
                    label={__("Hide Block if Empty")}
                    checked={hideIfEmpty}
                    onChange={value =>
                        setAttributes({ hideIfEmpty: value })
                    }
                />
                { !hideIfEmpty&& (
                    <TextareaControl
                        label={__("Text to Display if Empty")}
                        value={emptyMessage}
                        onChange={value =>
                            setAttributes({ emptyMessage: value })
                        }
                    />
                )}

            </PanelBody>
            <PanelBody title={__("Responsive Layout", "carkeek-blocks")}  initialOpen={ false }>
            {postLayout == 'grid' &&
            <>
                <RangeControl
                    label={__("Columns Mobile", "carkeek-blocks")}
                    value={ columnsMobile }
                    onChange={ ( columnsMobile ) => setAttributes( { columnsMobile } ) }
                    min={1}
                    max={6}
                />
                <RangeControl
                    label={__("Columns Tablet", "carkeek-blocks")}
                    value={ columnsTablet }
                    onChange={ ( columnsTablet ) => setAttributes( { columnsTablet } ) }
                    min={1}
                    max={6}
                />
            </>
            }
             <ToggleControl
                label={__("Limit the number of posts displayed in Mobile/Tablet")}
                checked={limitItemsMobile}
                onChange={value =>
                    setAttributes({ limitItemsMobile: value })
                }
            />
            {limitItemsMobile &&
                <>
                <RangeControl
                    label={__("Items to show Mobile", "carkeek-blocks")}
                    value={ itemsMobile }
                    onChange={ ( itemsMobile ) => setAttributes( { itemsMobile } ) }
                    min={1}
                    max={6}
                />
                <RangeControl
                    label={__("Items to show Tablet", "carkeek-blocks")}
                    value={ itemsTablet }
                    help={__("Select -1 to show all")}
                    onChange={ ( itemsTablet ) => setAttributes( { itemsTablet } ) }
                    min={1}
                    max={6}
                />
                </>
            }
            </PanelBody>
        </InspectorControls>
        <InspectorAdvancedControls>
            <ToggleControl
                label={__("Prioritize Related Events")}
                checked={prioritizeRelated}
                help={__("If selected and placed on an event page, we will find events with similar tags and categories first. This is an intensize database search so only use if the standard filters are not getting what you want.", "carkeek-blocks")}
                onChange={ ( value ) => setAttributes( { prioritizeRelated: value } ) }
            />
        </InspectorAdvancedControls>
        </>
    );
}

export default postsInspector;