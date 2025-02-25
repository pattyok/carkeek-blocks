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


function postsInspector(props) {
    const {
        taxonomies,
        taxTerms,
		taxTerms2,
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
		excludeChildPosts,
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
		modalVersion,
        useHeadingTitle,
        imageOrientation,
        imageSize,
		noLink,
		wholeLink,
        honorStickyPosts,
		appendPostTitle,
		headline,
		morePostsLink,
		morePostsLinkLabel,
		taxTermsIncludeExclude,
		useWithFilter,
		addAnotherTaxonomy,
		taxonomySelected2,
		taxTermsSelected2,
		taxTermsIncludeExclude2,
		taxQueryType2,
		taxQueryTypeCombined,
		postOffset,
		defaultFeaturedImage,
		defaultAltText,
		showTermsTax,
        showPublishDate, publishDateLocation, publishDatePrefix, showTerms, taxQueryType, showPagination, learnMoreLinkTitle, showLearnMoreLink, newWindow, addlContentBefore, addlContentAfter,
    } = attributes;

    let ptOptions = [];
    if (postTypes) {
        ptOptions = postTypes.map(type => ({
            value: type.slug,
            label: type.name
        }));
    }
    if (!postTypeSelected) {
        const selectAnItem = { value: null, label: 'Select a Post Type' };
        ptOptions.unshift(selectAnItem);
    }
    let sizeOptions = [];
    if (imageSizes) {
        sizeOptions = imageSizes.map(type => ({
            value: type.slug,
            label: type.name
        }));
        sizeOptions.unshift({ value: 'default', label: 'Default' });
    }

    let taxOptions = [];
    if (taxonomies) {
        taxOptions = taxonomies.map(type => ({
            value: type.slug,
            label: type.name
        }));
    }
    if (!taxonomySelected) {
        const selectAnItem = { value: null, label: 'Select a Taxonomy' };
        taxOptions.unshift(selectAnItem);
    }

    const postTypeSelect = (
        <SelectControl
            label={__("Post Type", "carkeek-blocks")}
            onChange={(postTypeSelected) => setAttributes({ postTypeSelected })}
            options={ptOptions}
            value={postTypeSelected}
        />
    );

    if (!columnsTablet) {
        setAttributes({
            columnsTablet: columns > 3 ? 3 : columns
        });
    }
    if (!columnsMobile) {
        setAttributes({
            columnsMobile: 1
        });
    }
    if (!headlineLevel) {
        setAttributes({
            headlineLevel: 2
        });
    }

    const [showGroupHierarchyOpt, setShowGroupHierarchyOpt] = useState(true);

    /** Set the tax selected on settings change */
    function handleTaxChange(value) {
        setAttributes({ filterByTaxonomy: value });
        if (Array.isArray(taxonomies) && typeof taxonomies[0] === 'object' && taxonomies[0] !== null && taxonomies[0].slug !== undefined) {
            setAttributes({ taxonomySelected: taxonomies[0].slug });
        }
    }

    function handleGroupSettingChange(value) {
        setAttributes({ groupListings: value });
        if (Array.isArray(taxonomies) && typeof taxonomies[0] === 'object' && taxonomies[0] !== null && taxonomies[0].slug !== undefined) {
            setAttributes({ groupTaxSelected: taxonomies[0].slug });
        }
    }
    function handlePaginationSettingChange(value) {
        setAttributes({ showPagination: value })
        setAttributes({ limitItemsMobile: false })
    }


    useEffect(() => {
        const tax = _.find(taxonomies, { slug: groupTaxSelected });
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
                onChange={(value) => handleTaxChange(value)}
            />
            {filterByTaxonomy && (
                <>
                    {taxonomies && taxonomies.length > 0
                        ?
                        <>
                            <SelectControl
                                label={__("Select Taxonomy", "carkeek-blocks")}
                                onChange={(taxonomySelected) => setAttributes({ taxonomySelected })}
                                options={taxOptions}
                                value={taxonomySelected}
                            />
                        </>
                        : <div className="ck-error">{__("There are no taxonomies assigned this post type.", "carkeek-blocks")}</div>
                    }
                    {taxonomySelected && (
                        <>
                            {taxTerms && taxTerms.length > 0
                                ? <SelectControl
                                    multiple
                                    label={__("Select Terms", "carkeek-blocks")}
                                    onChange={(terms) => setAttributes({ taxTermsSelected: terms.join(",") })}
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
							{taxTermsSelected &&
                                <RadioControl
                                    label={__("Include or Exclude Terms")}
                                    selected={taxTermsIncludeExclude}
                                    options={[
                                        { label: __("Include"), value: "include" },
                                        { label: __("Exclude"), value: "exclude" },

                                    ]}
                                    onChange={value =>
                                        setAttributes({
                                            taxTermsIncludeExclude: value
                                        })
                                    }
                                />
                            }

                            {taxTermsSelected && (taxTermsSelected.split(',').length > 1) &&
                                <RadioControl
                                    label={__("Taxonomy Query Type")}
                                    selected={taxQueryType}
                                    options={[
                                        { label: __("AND"), value: "AND" },
                                        { label: __("OR"), value: "OR" },

                                    ]}
                                    onChange={value =>
                                        setAttributes({
                                            taxQueryType: value
                                        })
                                    }
                                />
                            }
							{ taxOptions.length > 1 && taxTermsSelected &&
								<>
								<ToggleControl
									label={__("Add a Taxonomy Filter")}
									checked={addAnotherTaxonomy}
									onChange={(addAnotherTaxonomy) => setAttributes( {addAnotherTaxonomy} )}
								/>
								{ addAnotherTaxonomy &&
									<>
									<SelectControl
										label={__("Select Taxonomy", "carkeek-blocks")}
										onChange={(taxonomySelected2) => setAttributes({ taxonomySelected2 })}
										options={taxOptions}
										value={taxonomySelected2}
									/>
									{taxonomySelected2 &&
										<>
										{taxTerms2 && taxTerms2.length > 0
											? <SelectControl
												multiple
												label={__("Select Terms", "carkeek-blocks")}
												onChange={(terms) => setAttributes({ taxTermsSelected2: terms.join(",") })}
												options={
													taxTerms2 &&
													taxTerms2.map(type => ({
														value: type.id,
														label: type.name
													}))
												}
												value={taxTermsSelected2 && taxTermsSelected2.split(',')}
												help={__("To select multiple [shift]-click", "carkeek-blocks")}
											/>
											: <div className="ck-error">{__("There are no terms assigned to this taxonomy.", "carkeek-blocks")}</div>
										}
										{taxTermsSelected2 &&
											<RadioControl
												label={__("Include or Exclude Terms")}
												selected={taxTermsIncludeExclude2}
												options={[
													{ label: __("Include"), value: "include" },
													{ label: __("Exclude"), value: "exclude" },

												]}
												onChange={value =>
													setAttributes({
														taxTermsIncludeExclude2: value
													})
												}
											/>
										}

										{taxTermsSelected2 && (taxTermsSelected2.split(',').length > 1) &&
											<RadioControl
												label={__("Taxonomy Query Type For Second Taxonomy")}
												selected={taxQueryType2}
												options={[
													{ label: __("AND"), value: "AND" },
													{ label: __("OR"), value: "OR" },

												]}
												onChange={value =>
													setAttributes({
														taxQueryType2: value
													})
												}
											/>
										}
										{addAnotherTaxonomy && (taxTermsSelected2) &&
											<RadioControl
												label={__("Taxonomy Query Type For Both Taxonomies")}
												selected={taxQueryTypeCombined}
												options={[
													{ label: __("AND"), value: "AND" },
													{ label: __("OR"), value: "OR" },

												]}
												onChange={value =>
													setAttributes({
														taxQueryTypeCombined: value
													})
												}
											/>
										}
									</>
									}
									</>
								}
								</>
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
                <PanelBody title={__("Filter Settings", "carkeek-blocks")}>
                    {postTypeSelect}
                    {postTypeSelected && (
                        <> {taxonomySelect} </>
                    )}
				</PanelBody>
				<PanelBody title={__("Post Settings", "carkeek-blocks")} initialOpen={false}>
                    <RangeControl
                        label={__("Number of Posts", "carkeek-blocks")}
                        value={numberOfPosts}
                        help={__("Select -1 to show all")}
                        onChange={(numberOfPosts) => setAttributes({ numberOfPosts })}
                        min={-1}
                        max={21}
                    />
					{numberOfPosts > 0 &&
					<RangeControl
                        label={__("Offset Count", "carkeek-blocks")}
                        value={postOffset}
						help={__("Number of posts to skip before displaying", "carkeek-blocks")}
                        onChange={(postOffset) => setAttributes({ postOffset })}
                        min={0}
                        max={99}
                    />
				}

                    <SelectControl
                        label={__("Sort By", "carkeek-blocks")}
                        onChange={value =>
                            setAttributes({
                                sortBy: value
                            })
                        }
                        options={[
                            { label: __("Publish Date"), value: "date" },
                            { label: __("Title (alpha)"), value: "title" },
                            { label: __("Menu Order"), value: "menu_order" },
                            { label: __("Custom Field"), value: "meta_value" },
                            { label: __("Random"), value: "rand" }
                        ]}
                        value={sortBy}
                    />
                    {postTypeSelected == 'post' && (
                    <ToggleControl
                        label={__("Honor Sticky Posts")}
                        checked={honorStickyPosts}
                        help={__("If selected, sticky posts will be placed first", "carkeek-blocks")}
                        onChange={(honorStickyPosts) => setAttributes({ honorStickyPosts })}
                    />
                    )}
                    {sortBy == 'meta_value' &&
                        <TextControl
                            label="Custom Field"
                            value={sortByMeta}
                            onChange={value =>
                                setAttributes({ sortByMeta: value })
                            }
                        />
                    }
                    <RadioControl
                        label={__("Order")}
                        selected={order}
                        options={[
                            { label: __("ASC"), value: "ASC" },
                            { label: __("DESC"), value: "DESC" },

                        ]}
                        onChange={value =>
                            setAttributes({
                                order: value
                            })
                        }
                    />
                </PanelBody>
                <PanelBody title={__("Layout", "carkeek-blocks")} initialOpen={false}>
                    <RadioControl
                        label={__("Layout Style")}
                        selected={postLayout}
                        options={[
                            { label: __("Grid"), value: "grid" },
                            { label: __("List"), value: "list" },
							{ label: __("Fit Posts"), value: "fit" },
							{ label: __("Simple List (just titles)"), value: "ul" },
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
                                value={columns}
                                onChange={(columns) => setAttributes({ columns })}
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
							{openAsModal &&
								<RadioControl
								label={__("Modal Version")}
								selected={modalVersion}
								options={[
									{ label: __("v1"), value: "v1" },
									{ label: __("v2"), value: "v2" }
								]}
								onChange={value =>
									setAttributes({
										modalVersion: value
									})
								}
							/>
							}
                        </>
                    }

                    <ToggleControl
                        label={__("Show Pagination")}
                        checked={showPagination}
                        onChange={(value) => handlePaginationSettingChange(value)}
                    />
                    <ToggleControl
                        label={__("Group by Taxonomy Terms")}
                        checked={groupListings}
                        onChange={(value) => handleGroupSettingChange(value)}
                    />
                    <ToggleControl
                        label={__("Hide Block if Empty")}
                        checked={hideIfEmpty}
                        onChange={value =>
                            setAttributes({ hideIfEmpty: value })
                        }
                    />
                    {!hideIfEmpty &&
						<TextControl
						label="Empty Result Message"
						value={ emptyMessage }
						onChange={value =>
							setAttributes({ emptyMessage: value })
						}
						/>
					}
					{hideIfEmpty &&
					<>
						<TextControl
						label="Block Heading"
						value={ headline }
						onChange={value =>
							setAttributes({ headline: value })
						}
						/>
						<TextControl
						label="More Posts Link"
						value={ morePostsLink }
						onChange={value =>
							setAttributes({ morePostsLink: value })
						}
						/>
						<TextControl
						label="More Posts Link Label"
						value={ morePostsLinkLabel }
						onChange={value =>
							setAttributes({ morePostsLinkLabel: value })
						}
						/>
					</>
					}

                </PanelBody>
                {groupListings &&
                    <PanelBody title={__("Group Settings", "carkeek-blocks")} initialOpen={false}>
                        {taxonomies && taxonomies.length > 0
                            ?
                            <>
                                <SelectControl
                                    label={__("Select Taxonomy to Group By", "carkeek-blocks")}
                                    onChange={(groupTaxSelected) => setAttributes({ groupTaxSelected })}
                                    options={taxOptions}
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
				{postLayout !== 'ul' &&
                <PanelBody title={__("Item Style", "carkeek-blocks")} initialOpen={false}>
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
					{openAsModal == false &&
					<ToggleControl
						label={__("No Link to Post")}
						checked={noLink}
						onChange={value =>
							setAttributes({ noLink: value })
						}
					/>
					}
					<ToggleControl
						label={__("Link Entire Item")}
						checked={wholeLink}
						onChange={value =>
							setAttributes({ wholeLink: value })
						}
					/>
                    <ToggleControl
                        label={__("Show Taxonomy Terms")}
                        checked={showTerms}
                        onChange={value =>
                            setAttributes({ showTerms: value })
                        }
                    />
					{showTerms && (
						<SelectControl
							label={__("Select Taxonomy to Show", "carkeek-blocks")}
							onChange={(taxes) => setAttributes({ showTermsTax: taxes.join(",") })}
							options={taxOptions}
							value={showTermsTax?.split(',')}
							multiple
						/>

					)}

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
                                options={[
                                    { label: 'Before Title', value: 'before' },
                                    { label: 'After Title', value: 'after' },
                                ]}
                                onChange={value =>
                                    setAttributes({ publishDateLocation: value })
                                }
                            />
                            <TextControl
                                label="Publish Date Prefix"
                                value={publishDatePrefix}
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
                                    { label: __("Landscape 2:3"), value: "landscape" },
                                    { label: __("Landscape 3:4"), value: "landscape-34" },
									{ label: __("Landscape 3:5"), value: "landscape-35" },
                                    { label: __("Portrait 3:2"), value: "portrait" },
                                    { label: __("Portrait 4:3"), value: "portrait-43" },
                                    { label: __("Square 1:1"), value: "square" },
                                    { label: __("Circle 1:1"), value: "circle" },
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
							<TextControl
								label="Default Featured Image"
								help={__("Enter the URL of the default image to use if no featured image is set on the post.", "carkeek-blocks")}
								value={ defaultFeaturedImage }
								onChange={value =>
									setAttributes({ defaultFeaturedImage: value })
								}
							/>
							{defaultFeaturedImage &&
							<TextControl
								label="Default Image Alt Text"
								help={__("Enter the Alt text for the default image", "carkeek-blocks")}
								value={ defaultAltText }
								onChange={value =>
									setAttributes({ defaultAltText: value })
								}
							/>
							}
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
					<>
                        <TextControl
                            label="Link Label"
                            value={learnMoreLinkTitle}
                            onChange={value =>
                                setAttributes({ learnMoreLinkTitle: value })
                            }
                        />

							<ToggleControl
								label={__("Append Post Title to More Link")}
								checked={appendPostTitle}
								onChange={value =>
									setAttributes({ appendPostTitle: value })
								}
							/>
						</>
                    }
                </PanelBody>
				}
                <PanelBody title={__("Responsive Layout", "carkeek-blocks")} initialOpen={false}>
                    {postLayout == 'grid' &&
                        <>
                            <RangeControl
                                label={__("Columns Mobile", "carkeek-blocks")}
                                value={columnsMobile}
                                onChange={(columnsMobile) => setAttributes({ columnsMobile })}
                                min={1}
                                max={6}
                            />
                            <RangeControl
                                label={__("Columns Tablet", "carkeek-blocks")}
                                value={columnsTablet}
                                onChange={(columnsTablet) => setAttributes({ columnsTablet })}
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
                                value={itemsMobile}
                                onChange={(itemsMobile) => setAttributes({ itemsMobile })}
                                min={1}
                                max={6}
                            />
                            <RangeControl
                                label={__("Items to show Tablet", "carkeek-blocks")}
                                value={itemsTablet}
                                help={__("Select -1 to show all")}
                                onChange={(itemsTablet) => setAttributes({ itemsTablet })}
                                min={1}
                                max={6}
                            />
                        </>
                    }
                </PanelBody>
            </InspectorControls>
            <InspectorAdvancedControls>
			<ToggleControl
							label={__("Exclude Child Posts", "carkeek-blocks")}
							help={__(`If set to true, the block will only include top-level posts.`)}
							checked={excludeChildPosts}
							onChange={value =>
								setAttributes({ excludeChildPosts: value })
							}
						/>
                <ToggleControl
                    label={__("Open Links in New Window")}
                    checked={newWindow}
                    help={__("Should only be used when the content links externally.", "carkeek-blocks")}
                    onChange={(value) => setAttributes({ newWindow: value })}
                />
                <TextControl
                    label="Custom Meta Field Before Excerpt"
                    value={addlContentBefore}
                    onChange={value =>
                        setAttributes({ addlContentBefore: value })
                    }
                />
                <TextControl
                    label="Custom Meta Field After Excerpt"
                    value={addlContentAfter}
                    help={__("Enter the name of the metafield to display, enter multiples separated by a comma. Ask your developer for help identifying the correct meta field.", "carkeek-blocks")}
                    onChange={value =>
                        setAttributes({ addlContentAfter: value })
                    }
                />
				<RadioControl
					label={__("Use with Filter")}
					selected={useWithFilter}
					options={[
						{ label: 'None', value: '' },
						{ label: 'FacetWP', value: 'facetwp' },
					]}
					onChange={value =>
						setAttributes({ useWithFilter: value })
					}
				/>
            </InspectorAdvancedControls>
        </>
    );
}

export default postsInspector;
