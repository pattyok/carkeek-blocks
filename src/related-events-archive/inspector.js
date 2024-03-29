import EventFields from './fields';
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
        showPublishDate,publishDateLocation,showTerms,showPagination,learnMoreLinkTitle,showLearnMoreLink
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
                    { taxonomies && taxonomies.length > 0 &&
						<>
						<SelectControl
							multiple
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
						</>
                }
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
			<EventFields { ...props } />
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
    );
}

export default postsInspector;
