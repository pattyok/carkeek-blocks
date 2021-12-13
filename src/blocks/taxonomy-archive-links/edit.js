import icons from '../../resources/icons';
import PostsInspector from './inspector';
import { ServerSideRender } from "@wordpress/editor";

import { withSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import {
    Placeholder,
} from "@wordpress/components";
import {  useBlockProps } from "@wordpress/block-editor";

function customArchiveEdit( props ) {

    const {
        attributes,
        name
    } = props;
    const {
        taxonomySelected,
    } = attributes;

    const blockProps = useBlockProps();

    if (!taxonomySelected) {
        const noPostMessage =__("Select a Taxonomy Type from the Block Settings");
        return (
            <div
            { ...blockProps } >
                <PostsInspector { ...props } />
                <Placeholder icon={icons.layout} label={ __("Taxonomy Terms")}>
                    {noPostMessage}
                </Placeholder>
                </div>
        );
    }



    return (

        <div { ...blockProps } >
            <PostsInspector { ...props } />

            <ServerSideRender
                block={name}
                attributes={props.attributes}
            />


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
})(customArchiveEdit);
