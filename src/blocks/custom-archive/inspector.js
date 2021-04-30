import { InspectorControls } from "@wordpress/block-editor";
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
        taxonomies,
        taxTerms,
        postTypes,
        attributes,
        setAttributes,
    } = props;
    const {
        numberOfPosts,
        displayPostExcerpt,
        excerptLength,
        postLayout,
        postTypeSelected,
        filterByTaxonomy,
        taxTermsSelected,
        taxonomySelected,
        hideIfEmpty,
        emptyMessage,
        headlineLevel,
        sortBy,
        order,
        columns,
        displayFeaturedImage,
        openAsModal,
        useHeadingTitle,showPublishDate,publishDateLocation,showTerms,taxQueryType,showPagination,learnMoreLinkTitle,showLearnMoreLink
    } = attributes;

    let ptOptions = [];
    if (postTypes) {
        ptOptions = postTypes.map(type => ({
            value: type.slug,
            label: type.name
        }));
    }
    if (!postTypeSelected) {
        const selectAnItem = { value: null, label: 'Select a Post Type'};
        ptOptions.unshift(selectAnItem);
    }

    let taxOptions = [];
    if (taxonomies) {
        taxOptions = taxonomies.map(type => ({
            value: type.slug,
            label: type.name
        }));
    }
    if (!taxonomySelected) {
        const selectAnItem = { value: null, label: 'Select a Taxonomy'};
        taxOptions.unshift(selectAnItem);
    }
    const postTypeSelect = (
        <SelectControl
            label={__("Post Type", "carkeek-blocks")}
            onChange={ ( postTypeSelected ) => setAttributes( { postTypeSelected } ) }
            options={ ptOptions }
            value={postTypeSelected}
        />
    );

    function handleTaxChange( value ){
        setAttributes( { filterByTaxonomy: value } );
        if (Array.isArray(taxonomies) && typeof taxonomies[0] === 'object' && taxonomies[0] !== null && taxonomies[0].slug !== undefined) {
            setAttributes({ taxonomySelected : taxonomies[0].slug});
        }
    }

    const taxonomySelect = (
        <>
            <ToggleControl
                label={__("Filter by Taxonomy")}
                checked={filterByTaxonomy}
                onChange={ ( value ) => handleTaxChange( value ) }
            />
            {filterByTaxonomy && (
            <>
                { taxonomies && taxonomies.length > 0
                ?
                <>
                <SelectControl
                    label={__("Select Taxonomy", "carkeek-blocks")}
                    onChange={ ( taxonomySelected ) => setAttributes( { taxonomySelected } ) }
                    options={ taxOptions }
                    value={taxonomySelected}
                />
                </>
                : <div className="ck-error">{__("There are no taxonomies assigned this post type.", "carkeek-blocks")}</div>
                }
                {taxonomySelected && (
                    <>
                    { taxTerms && taxTerms.length > 0
                    ? <SelectControl
                        multiple
                        label={__("Select Terms", "carkeek-blocks")}
                        onChange={ ( terms ) => setAttributes( { taxTermsSelected: terms.join(",") } ) }
                        options={
                            taxTerms &&
                            taxTerms.map(type => ({
                                value: type.id,
                                label: type.name
                            }))
                        }
                        value={taxTermsSelected && taxTermsSelected.split(',')}
                        help={__("To select multiple [shift]-click", "carkeek-blocks")}
                    />
                    : <div className="ck-error">{__("There are no terms assigned to this taxonomy.", "carkeek-blocks")}</div>
                    }
                    {taxTermsSelected && (taxTermsSelected.split(',').length > 1) &&
                        <RadioControl
                            label={__("Taxonomy Query Type")}
                            selected={taxQueryType}
                            options={[
                                { label: __("AND"), value: "AND"},
                                { label: __("OR"), value: "OR"},

                            ]}
                            onChange={value =>
                                setAttributes({
                                    taxQueryType: value
                                })
                            }
                        />
                    }
                    </>
                )}
            </>
            )}
        </>
    );


    return (
        <InspectorControls>
            <PanelBody title={__("Posts Settings", "carkeek-blocks")}>
                {postTypeSelect}
                {postTypeSelected && (
                    <> {taxonomySelect} </>
                )}
                <RangeControl
                    label={__("Number of Posts", "carkeek-blocks")}
                    value={numberOfPosts}
                    help={__("Select -1 to show all")}
                    onChange={ ( numberOfPosts ) => setAttributes( { numberOfPosts } ) }
                    min={-1}
                    max={21}
                />
                <SelectControl
                        label={__("Sort By", "carkeek-blocks")}
                        onChange={value =>
                            setAttributes({
                                sortBy: value
                            })
                        }
                        options={[
                            { label: __("Publish Date"), value: "date"},
                            { label: __("Title (alpha)"), value: "title"},
                            { label: __("Menu Order"), value: "menu_order"},
                            { label: __("Random"), value: "rand"}
                        ]}
                        value={sortBy}
                    />
                <RadioControl
                    label={__("Order")}
                    selected={order}
                    options={[
                        { label: __("ASC"), value: "ASC"},
                        { label: __("DESC"), value: "DESC"},

                    ]}
                    onChange={value =>
                        setAttributes({
                            order: value
                        })
                    }
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
                <ToggleControl
                    label={__("Open Content as Modal")}
                    checked={openAsModal}
                    onChange={value =>
                        setAttributes({ openAsModal: value })
                    }
                />
            </>
            }
            <ToggleControl
                    label={__("Show Pagination")}
                    checked={showPagination}
                    onChange={value =>
                        setAttributes({ showPagination: value })
                    }
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
            <PanelBody title={__("Item Style", "carkeek-blocks")}>
            <ToggleControl
                label={__("Use Heading tag for Titles")}
                checked={useHeadingTitle}
                onChange={value =>
                    setAttributes({ useHeadingTitle: value })
                }
            />
            {useHeadingTitle &&
                <RangeControl
                        label={__("Post Title Size", "carkeek-blocks")}
                        value={headlineLevel}
                        onChange={value =>
                            setAttributes({ headlineLevel: value })
                        }
                        min={2}
                        max={6}
                    />
            }
            <ToggleControl
                label={__("Show Taxonomy Terms")}
                checked={showTerms}
                onChange={value =>
                    setAttributes({ showTerms: value })
                }
            />

            <ToggleControl
                label={__("Show Published Date")}
                checked={showPublishDate}
                onChange={value =>
                    setAttributes({ showPublishDate: value })
                }
            />
            {showPublishDate &&
                <RadioControl
                label={__("Location of Date")}
                selected={publishDateLocation}
                options={ [
                    { label: 'Before Title', value: 'before' },
                    { label: 'After Title', value: 'after' },
                ] }
                onChange={value =>
                    setAttributes({ publishDateLocation: value })
                }
                />
            }
            <ToggleControl
                label={__("Include Featured Image")}
                checked={displayFeaturedImage}
                onChange={value =>
                    setAttributes({ displayFeaturedImage: value })
                }
            />

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
                    label={__("Show Read More Link")}
                    checked={showLearnMoreLink}
                    onChange={value =>
                        setAttributes({ showLearnMoreLink: value })
                    }
                />
                {showLearnMoreLink &&

                    <TextControl
                    label="Link Label"
                    value={ learnMoreLinkTitle }
                    onChange={value =>
                        setAttributes({ learnMoreLinkTitle: value })
                    }
                    />
                }
            </PanelBody>

        </InspectorControls>
    );
}

export default postsInspector;