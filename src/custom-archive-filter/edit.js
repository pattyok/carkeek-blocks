import { TextControl } from '@wordpress/components';

import { withSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import {
    Placeholder,
	PanelBody,
	RadioControl,
    SelectControl,
} from "@wordpress/components";

import {  useBlockProps,  InspectorControls } from "@wordpress/block-editor";
import { useEffect, useState } from "@wordpress/element";

function customArchiveFilterEdit( props ) {

    const {
        attributes,
        setAttributes,
        clientId,
        name,taxonomies, taxTerms
    } = props;

    const {
        taxonomySelected,
		taxTermsSelected,
		taxTermsIncludeExclude,
		termOption,
		filterLabel
    } = attributes;

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

	const [showTerms, setShowTerms] = useState( taxTerms );
	useEffect(() => {
        if (taxTerms && taxTerms.length > 0 ){
			if (termOption == "some" && taxTermsSelected && taxTermsSelected.length > 0) {
				if (taxTermsIncludeExclude == "include") {
					setShowTerms(taxTerms.filter(term => taxTermsSelected.includes(term.id.toString())));
				} else {
					setShowTerms(taxTerms.filter(term => !taxTermsSelected.includes(term.id.toString())));
				}
			} else {
				setShowTerms(taxTerms);
			}
		}
    }, [taxTermsSelected, termOption, taxTermsIncludeExclude, taxTerms]);


    const taxonomySelect = (
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
			<RadioControl
				label={__("All Terms or Specific Terms?")}
				selected={termOption}
				options={[
					{ label: __("All"), value: "all" },
					{ label: __("Some"), value: "some" },

				]}
				onChange={value =>
					setAttributes({
						termOption: value
					})
				}
			/>
			{termOption == "some" && (
				<>
					{taxTerms && taxTerms.length > 0
						? <SelectControl
							multiple
							label={__("Select Terms", "carkeek-blocks")}
							onChange={(terms) => setAttributes({ taxTermsSelected: terms })}
							options={
								taxTerms &&
								taxTerms.map(type => ({
									value: type.id,
									label: type.name
								}))
							}
							value={taxTermsSelected}
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
				</>
			)

				}

			</>
        )}
</>
    );

    const blockProps = useBlockProps();

    return (

        <div { ...blockProps } >

			<InspectorControls>
				<PanelBody title={__("Filter Settings", "carkeek-blocks")}>
					{taxonomySelect}
				</PanelBody>
				<PanelBody title={__("Layout Settings", "carkeek-blocks")}>
					<TextControl
						label="Filter Label"
						value={filterLabel}
						onChange={value =>
							setAttributes({ filterLabel: value })
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div className="ck-filter-label">{filterLabel}</div>
			<div>
			{taxonomySelected
			? <>
				{showTerms && showTerms.length > 0
					? <div className="ck-term-filters">

						{showTerms.map(term => (
							<span key={term.id} className="ck-term-filter">
								{term.name}
							</span>
						))}
					</div>
					: <div className="ck-error">{__("There are no terms assigned to this taxonomy.", "carkeek-blocks")}</div>
				}
			</>
			: <div className="ck-error">{__("Please select a taxonomy.", "carkeek-blocks")}</div>
		}
			</div>
        </div>
    );
}


export default withSelect((select, props) => {
	const { attributes } = props;
	const { taxonomySelected } = attributes;
    const { getEntityRecords, getTaxonomies } = select("core");
    const taxTerms = getEntityRecords('taxonomy', taxonomySelected, { per_page: -1 } );
    let taxonomies = getTaxonomies({ per_page: -1 });

    return {
        taxonomies: taxonomies,
        taxSelected:  Array.isArray(taxonomies) && taxonomies.length == 1 ? taxonomies[0] : taxonomySelected,
        taxTerms: taxTerms,
    };
})(customArchiveFilterEdit);
