import { InspectorControls, __experimentalLinkControl as LinkControl } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import {
    RangeControl,
    PanelBody,
    ToggleControl,
    RadioControl,
    SelectControl,
    TextControl
} from "@wordpress/components";


function postsInspector( props ){
    const {
        taxonomies,
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
        taxonomySelected,
		excludeChildPosts,
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
        fillTheSlots,
        useHeadingTitle,
        imageOrientation,
		childTermsOnly,
		hideIfEmpty,
		emptyMessage,
		headline,
		morePostsLink,
		morePostsLinkLabel,
		wholeLink,
        showPublishDate,publishDateLocation,showTerms,showPagination,learnMoreLinkTitle,showLearnMoreLink,matchAllTerms
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


    return (
        <InspectorControls>
            <PanelBody title={__("Posts Settings", "carkeek-blocks")}>
                {postTypeSelect}
                {postTypeSelected && (
					<>
                    { taxonomies && taxonomies.length > 0
						?
						<>
						<SelectControl
							label={__("Select a Taxonomy", "carkeek-blocks")}
							onChange={ ( terms ) => setAttributes( { taxonomySelected: terms } ) }
							options={ taxOptions }
							value={taxonomySelected}
							help={__("Select a taxonomy on which to build the relationship", "carkeek-blocks")}
						/>
						<ToggleControl
							label={__("Match on Child Terms Only", "carkeek-blocks")}
							help={__(`Match only on child terms of the selected taxonomy. If no child terms are found, the parent terms will be used.`)}
							checked={childTermsOnly}
							onChange={value =>
								setAttributes({ childTermsOnly: value })
							}
						/>
						<ToggleControl
							label={__("Match all terms", "carkeek-blocks")}
							help={__(`Match all terms, if not set we'll find any matching terms.`)}
							checked={matchAllTerms}
							onChange={value =>
								setAttributes({ matchAllTerms: value })
							}
						/>
						<ToggleControl
							label={__("Exclude Child Posts", "carkeek-blocks")}
							help={__(`If set to true, the block will will only include top-level posts.`)}
							checked={excludeChildPosts}
							onChange={value =>
								setAttributes({ excludeChildPosts: value })
							}
						/>
					</>
						: <div className="ck-error">{__("There are no taxonomies assigned this post type.", "carkeek-blocks")}</div>
					}
					</>
                )}
                <RangeControl
                    label={__("Number of Posts", "carkeek-blocks")}
                    value={numberOfPosts}
                    help={__("Select -1 to show all")}
                    onChange={ ( numberOfPosts ) => setAttributes( { numberOfPosts } ) }
                    min={-1}
                    max={21}
                />
                { numberOfPosts !== -1 &&
                    <ToggleControl
                        label={__("Fill the slots with posts ")}
                        help={__(`If less than ${numberOfPosts} are found go find more (unrelated) posts?`)}
                        checked={fillTheSlots}
                        onChange={value =>
                            setAttributes({ fillTheSlots: value })
                        }
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
                    value={ columns }
                    onChange={ ( columns ) => setAttributes( { columns } ) }
                    min={1}
                    max={6}
                />
            </>
            }
			<ToggleControl
				label={__("Hide Entire Block if no posts found")}
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
			{postLayout !== 'ul' &&
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
				label={__("Link Entire Item")}
				checked={wholeLink}
				onChange={value =>
					setAttributes({ wholeLink: value })
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
            {displayFeaturedImage &&
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
			}
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
    );
}

export default postsInspector;
