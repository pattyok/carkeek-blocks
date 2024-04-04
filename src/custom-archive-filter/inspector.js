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
        attributes,
		setAttributes,
    } = props;
    const {
        taxTermsSelected,
        taxonomySelected,
		taxTermsIncludeExclude

    } = attributes;






    return (
		<InspectorControls>

		</InspectorControls>
    );
}

export default postsInspector;
