import { InspectorControls, InspectorAdvancedControls } from "@wordpress/block-editor";
import _ from "lodash";
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
import { useEffect, useState } from "@wordpress/element";


function postsInspector( props ){
    const {
        taxonomies,
        taxTerms,
        postTypes,
        attributes,
        setAttributes,
        imageSizes,
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
        groupListings,
        groupTaxSelected,
        groupHideParents,
        groupHideEmpty,
        hideIfEmpty,
        emptyMessage,
        headlineLevel,
        sortBy,
        sortByMeta,
        order,
        columns,
        columnsMobile,
        columnsTablet,
        limitItemsMobile,
        itemsMobile,
        itemsTablet,
        displayFeaturedImage,
        openAsModal,
        useHeadingTitle,
        imageOrientation,
        imageSize,
        showPublishDate,publishDateLocation,publishDatePrefix,showTerms,taxQueryType,showPagination,learnMoreLinkTitle,showLearnMoreLink, newWindow, addlContentBefore, addlContentAfter,
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
    let sizeOptions = [];
    if (imageSizes) {
        sizeOptions = imageSizes.map(type => ({
            value: type.slug,
            label: type.name
        }));
        sizeOptions.unshift({value: 'default', label: 'Default'});
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

    if (!columnsTablet) {
        setAttributes( {
            columnsTablet : columns > 3 ? 3 : columns
        } );
    }
    if (!columnsMobile) {
        setAttributes( {
            columnsMobile : 1
        } );
    }
    if (!headlineLevel) {
        setAttributes( {
            headlineLevel : 2
        } );
    }

    const [showGroupHierarchyOpt, setShowGroupHierarchyOpt] = useState(true);

    /** Set the tax selected on settings change */
    function handleTaxChange( value ){
        setAttributes( { filterByTaxonomy: value } );
        if (Array.isArray(taxonomies) && typeof taxonomies[0] === 'object' && taxonomies[0] !== null && taxonomies[0].slug !== undefined) {
            setAttributes({ taxonomySelected : taxonomies[0].slug});
        }
    }

    function handleGroupSettingChange( value ){
        setAttributes( { groupListings: value } );
        if (Array.isArray(taxonomies) && typeof taxonomies[0] === 'object' && taxonomies[0] !== null && taxonomies[0].slug !== undefined) {
            setAttributes({ groupTaxSelected : taxonomies[0].slug});
        }
    }
    function handlePaginationSettingChange( value ){
        setAttributes({ showPagination: value })
        setAttributes({ limitItemsMobile: false })
    }


    useEffect( () => {
        const tax = _.find(taxonomies, {slug: groupTaxSelected});
        if (tax) {
            setShowGroupHierarchyOpt(tax.hierarchical);
        } else {
            setShowGroupHierarchyOpt(false);
        }
    }, [groupTaxSelected, taxonomies]);

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
        <>
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
                            { label: __("Custom Field"), value: "meta_value"},
                            { label: __("Random"), value: "rand"}
                        ]}
                        value={sortBy}
                    />
                {sortBy == 'meta_value' &&
                    <TextControl
                    label="Custom Field"
                    value={ sortByMeta }
                    onChange={value =>
                        setAttributes({ sortByMeta: value })
                    }
                    />
                }
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
            <PanelBody title={__("Layout", "carkeek-blocks")} initialOpen={ false }>
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
                    onChange={ ( value ) => handlePaginationSettingChange( value ) }
                />
            <ToggleControl
                label={__("Group by Taxonomy Terms")}
                checked={groupListings}
                onChange={ ( value ) => handleGroupSettingChange( value ) }
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
            {groupListings &&
            <PanelBody title={__("Group Settings", "carkeek-blocks")}  initialOpen={ false }>
                { taxonomies && taxonomies.length > 0
                ?
                <>
                <SelectControl
                    label={__("Select Taxonomy to Group By", "carkeek-blocks")}
                    onChange={ ( groupTaxSelected ) => setAttributes( { groupTaxSelected } ) }
                    options={ taxOptions }
                    value={groupTaxSelected}
                />
                {showGroupHierarchyOpt &&
                    <ToggleControl
                        label={__("Hide Parent Terms")}
                        checked={groupHideParents}
                        onChange={value =>
                            setAttributes({ groupHideParents: value })
                        }
                    />
                }
                <ToggleControl
                        label={__("Hide Empty Terms")}
                        checked={groupHideEmpty}
                        onChange={value =>
                            setAttributes({ groupHideEmpty: value })
                        }
                    />
                </>
                : <div className="ck-error">{__("There are no taxonomies assigned this post type.", "carkeek-blocks")}</div>
                }
            </PanelBody>
            }
            <PanelBody title={__("Item Style", "carkeek-blocks")}  initialOpen={ false }>
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
                <>
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
                <TextControl
                    label="Publish Date Prefix"
                    value={ publishDatePrefix }
                    help={__("Text to display before publish date")}
                    onChange={value =>
                        setAttributes({ publishDatePrefix: value })
                    }
                    />
                </>
            }
            <ToggleControl
                label={__("Include Featured Image")}
                checked={displayFeaturedImage}
                onChange={value =>
                    setAttributes({ displayFeaturedImage: value })
                }
            />
            {displayFeaturedImage &&
            <>
            <SelectControl
                label={__("Image Orientation", "carkeek-blocks")}
                onChange={value =>
                    setAttributes({
                        imageOrientation: value
                    })
                }
                options={[
                    { label: __("Landscape 2:3"), value: "landscape"},
                    { label: __("Landscape 3:4"), value: "landscape-34"},
                    { label: __("Portrait 3:2"), value: "portrait"},
                    { label: __("Portrait 4:3"), value: "portrait-43"},
                    { label: __("Square 1:1"), value: "square"},
                ]}
                value={imageOrientation}
            />
            <SelectControl
                label={__("Image Size", "carkeek-blocks")}
                onChange={value =>
                    setAttributes({
                        imageSize: value
                    })
                }
                options={sizeOptions}
                value={imageSize}
            />
            </>
            }
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
                    min={-1}
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
            {!showPagination &&
             <ToggleControl
                label={__("Limit the number of posts displayed in Mobile/Tablet")}
                checked={limitItemsMobile}
                onChange={value =>
                    setAttributes({ limitItemsMobile: value })
                }
            />
            }
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
                label={__("Open Links in New Window")}
                checked={newWindow}
                help={__("Should only be used when the content links externally.", "carkeek-blocks")}
                onChange={ ( value ) => setAttributes( { newWindow: value } ) }
            />
            <TextControl
                label="Custom Meta Field Before Excerpt"
                value={ addlContentBefore }
                onChange={value =>
                    setAttributes({ addlContentBefore: value })
                }
            />
            <TextControl
                label="Custom Meta Field After Excerpt"
                value={ addlContentAfter }
                help={__("Enter the name of the metafield to display, enter multiples separated by a comma. Ask your developer for help identifying the correct meta field.", "carkeek-blocks")}
                onChange={value =>
                    setAttributes({ addlContentAfter: value })
                }
            />
        </InspectorAdvancedControls>
    </>
    );
}

export default postsInspector;