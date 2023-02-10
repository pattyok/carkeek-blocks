import { InspectorControls } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import {
    PanelBody,
    RadioControl,
    SelectControl,
    ToggleControl
} from "@wordpress/components";


function postsInspector( props ){
    const {
        taxonomies,
        attributes,
        setAttributes,
    } = props;
    const {
        taxonomySelected,
        sortBy,
        order,
        relevantToPost,
		linkToCategory,
		displayAs,
		separator,
		showBullets,
		listLabel
          } = attributes;


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

    const taxonomySelect = (
        <>
        { taxonomies && taxonomies.length > 0
            ?
            <>
            <SelectControl
                label={__("Select a Taxonomy", "carkeek-blocks")}
                onChange={ ( terms ) => setAttributes( { taxonomySelected: terms } ) }
                options={ taxOptions }
                value={taxonomySelected}
                help={__("Select a taxonomy to display its terms", "carkeek-blocks")}
            />
            </>
            : <div className="ck-error">{__("There are no available taxonomies.", "carkeek-blocks")}</div>
        }
        </>
    );


    return (
        <InspectorControls>
            <PanelBody title={__("Posts Settings", "carkeek-blocks")}>
                {taxonomySelect}
                <SelectControl
                        label={__("Sort By", "carkeek-blocks")}
                        help={__("If it seems that your sorting selections aren't working, check for a taxonomy terms order plugin, if installed, you can manage the sort there.", "carkeek-blocks")}
                        onChange={value =>
                            setAttributes({
                                sortBy: value
                            })
                        }
                        options={[
                            { label: __("Title (alpha)"), value: "name"},
                            { label: __("Menu Order"), value: "menu_order"},
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
                 <ToggleControl
                    label="Limit to current post"
                    checked={ relevantToPost }
                    onChange={value =>
                        setAttributes({ relevantToPost: value })
                    }
                />
				<ToggleControl
                    label="Link items to category archive"
                    checked={ linkToCategory }
                    onChange={value =>
                        setAttributes({ linkToCategory: value })
                    }
                />
            </PanelBody>
			<PanelBody title={__("Layout Style", "carkeek-blocks")}>
			<TextControl
				label="Label"
				value={ listLabel }
				onChange={value =>
					setAttributes({ listLabel: value })
				}
			/>
			<SelectControl
				label={__("Display As", "carkeek-blocks")}
				onChange={value =>
					setAttributes({
						displayAs: value
					})
				}
				options={[
					{ label: __("Vertical List"), value: "list"},
					{ label: __("Horizontal (inline) List"), value: "inline"},
				]}
				value={displayAs}
			/>
			{ displayAs === 'inline' &&
				<SelectControl
					label={__("Separator", "carkeek-blocks")}
					onChange={value =>
						setAttributes({
							separator: value
						})
					}
					options={[
						{ label: __("Comma (,)"), value: "comma"},
						{ label: __("Bullet (&#8226;)"), value: "bullet"},
						{ label: __("Pipe (|)"), value: "pipe"},
					]}
					value={separator}
				/>
			}
			{ displayAs === 'list' &&
				<ToggleControl
					label="Include bullets?"
					checked={ showBullets }
					onChange={value =>
						setAttributes({ showBullets: value })
					}
				/>
			}

			</PanelBody>



        </InspectorControls>
    );
}

export default postsInspector;
