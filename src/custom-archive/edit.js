import icons from './icons';

import PostsInspector from './inspector';
import { ServerSideRender } from "@wordpress/server-side-render";
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
        postTypeSelected,
        blockId,
    } = attributes;
    if ( ! blockId ) {
        setAttributes( { blockId: clientId } );
    }
    const blockProps = useBlockProps();

    if (!postTypeSelected) {
        const noPostMessage =__("Select a Post Type from the Block Settings");
        return (
            <div
            { ...blockProps } >
                <PostsInspector { ...props } />
                <Placeholder icon={icons.layout} label={ __("Latest Posts")}>
                    {noPostMessage}
                </Placeholder>
                </div>
        );
    }



    return (

        <div { ...blockProps } >
                <PostsInspector { ...props } />
                <BlockControls>
					<ToolbarGroup>
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
    const { postTypeSelected, taxonomySelected } = attributes;
    const { getEntityRecords,  getPostTypes, getTaxonomies } = select("core");
    const { getSettings } = select( 'core/block-editor' );
    const taxTerms = getEntityRecords('taxonomy', taxonomySelected, { per_page: -1 } );
    const { imageSizes } = getSettings();

    let taxonomies = getTaxonomies({ per_page: -1 });
    taxonomies = !Array.isArray(taxonomies)
            ? taxonomies
            : taxonomies.filter(tax => tax.types.includes(postTypeSelected));


    return {
        postTypes: getPostTypes( { per_page: -1 } ),
        taxonomies: taxonomies,
        taxSelected:  Array.isArray(taxonomies) && taxonomies.length == 1 ? taxonomies[0] : taxonomySelected,
        taxTerms: taxTerms,
        imageSizes: imageSizes,
    };
})(customArchiveEdit);
