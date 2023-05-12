import icons from './icons';
import PostsInspector from './inspector';
import ServerSideRender from "@wordpress/server-side-render";
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';

import { withSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import {
    Placeholder,
} from "@wordpress/components";
import {  useBlockProps,  BlockControls } from "@wordpress/block-editor";

function customArchiveEdit( props ) {

    const {
        attributes,
        setAttributes,
        clientId,
        name
    } = props;
    const {
        postLayout,
        taxonomySelected,
        blockId,
    } = attributes;
    if ( ! blockId ) {
        setAttributes( { blockId: clientId } );
    }
    const blockProps = useBlockProps();

    if (!taxonomySelected) {
        const noPostMessage =__("Select a Taxonomy from the Block Settings");
        return (
            <div
            { ...blockProps } >
                <PostsInspector { ...props } />
                <Placeholder icon={icons.layout} label={ __("Related Events")}>
                    {noPostMessage}
                </Placeholder>
                </div>
        );
    }



    return (

        <div { ...blockProps } >
			<PostsInspector { ...props } />
                <BlockControls>
                    <ToolbarGroup label="Layout Options">
                        <ToolbarButton
                            icon={ icons.grid }
                            label="Grid Layout"
                            onClick={ () => setAttributes({ postLayout: "grid" })  }
                            isPrimary={postLayout === "grid" ? true : false}
                        />
                        <ToolbarButton
                            icon={ icons.listLayout }
                            label="List Layout"
                            onClick={ () => setAttributes({ postLayout: "list" })  }
                            isPrimary={postLayout === "list" ? true : false}
                        />
                    </ToolbarGroup>
            </BlockControls>

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
    const { getEntityRecords,  getTaxonomies } = select("core");

    let taxonomies = getTaxonomies({ per_page: -1 });
    taxonomies = !Array.isArray(taxonomies)
            ? taxonomies
            : taxonomies.filter(tax => tax.types.includes('tribe_events'));


    return {
        taxonomies: taxonomies,
        taxSelected:  Array.isArray(taxonomies) && taxonomies.length == 1 ? taxonomies[0] : taxonomySelected,
    };
})(customArchiveEdit);
