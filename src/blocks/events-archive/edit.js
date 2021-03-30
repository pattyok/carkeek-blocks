import classnames from "classnames";
import icons from '../../resources/icons';
import PostsInspector from './inspector';
import { ServerSideRender } from "@wordpress/editor";
import { Toolbar, ToolbarButton } from '@wordpress/components';
import { withSelect } from "@wordpress/data";
import {  useBlockProps,  BlockControls } from "@wordpress/block-editor";

function customArchiveEdit( props ) {

    const {
        attributes,
        setAttributes,
        name
    } = props;

    const blockProps = useBlockProps();

    return (

            <>
                <PostsInspector { ...props } />
                <BlockControls>
                    <Toolbar label="Layout Options">
                        <ToolbarButton
                            icon={ icons.grid }
                            label="Grid Layout"
                            onClick={ () => setAttributes({ postLayout: "grid" })  }
                            isPrimary={attributes.postLayout === "grid" ? true : false}
                        />
                        <ToolbarButton
                            icon={ icons.listLayout }
                            label="List Layout"
                            onClick={ () => setAttributes({ postLayout: "list" })  }
                            isPrimary={attributes.postLayout === "list" ? true : false}
                        />
                    </Toolbar>
            </BlockControls>
            <div
                { ...blockProps }
                className={ classnames(blockProps.className, {
                        "is-grid": attributes.postLayout === "grid",
                        "is-list": attributes.postLayout === "list",
                    }) }
            >
                <ServerSideRender
                    block={name}
                    attributes={props.attributes}
                />

            </div>
        </>
    );
}


export default withSelect((select) => {

    const { getEntityRecords } = select("core");
    const catTerms = getEntityRecords('taxonomy', 'tribe_events_cat', { per_page: -1 } );
    const catTags = getEntityRecords('taxonomy', 'post_tag', { per_page: -1 } );


    return {
        catTags: catTags,
        catTerms: catTerms,
    };
})(customArchiveEdit);
