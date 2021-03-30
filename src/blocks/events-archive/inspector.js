import { InspectorControls } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import {
    RangeControl,
    PanelBody,
    ToggleControl,
    RadioControl,
    SelectControl,
    TextareaControl
} from "@wordpress/components";


function postsInspector( props ){
    const {
        catTerms,
        catTags,
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
        catTermsSelected,
        catTagsSelected,
        displayField1,
        displayField2,
        displayField3,
        hideIfEmpty,
        emptyMessage,
        headlineLevel,
        columns,
        displayFeaturedImage,
    } = attributes;

    //Handling these as individual attributes until I have time to figure out arrays.
    const availFields = [
        { label: 'Select a Field', value: '' },
        { label: 'Start Date', value: 'startdate' },
        { label: 'Organizer', value: 'organizer' },
        { label: 'Venue', value: 'venue' },
    ];

    const fieldSelect = (
        <>
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
        </>
    );


    return (
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
                <RangeControl
                    label={__("Heading Size", "carkeek-blocks")}
                    value={headlineLevel}
                    onChange={value =>
                        setAttributes({ headlineLevel: value })
                    }
                    min={2}
                    max={6}
                />
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
        </InspectorControls>
    );
}

export default postsInspector;