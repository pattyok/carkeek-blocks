import classnames from "classnames";
import { get } from "lodash";
import icons from '../../resources/icons';
import PostsInspector from './inspector';
import { ServerSideRender } from "@wordpress/editor";

import { withSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import {
    Spinner,
    Placeholder,
} from "@wordpress/components";
import { RichText, useBlockProps } from "@wordpress/block-editor";

function customArchiveEdit( props ) {

    const {
        posts,
        attributes,
        setAttributes,
        isSelected,
        clientId,
        name
    } = props;
    const {
        postLayout,
        postTypeSelected,
        hideIfEmpty,
        emptyMessage,
        headline,
        headlineLevel,
        blockId,
    } = attributes;
    if ( ! blockId ) {
        setAttributes( { blockId: clientId } );
    }
    const headlineStyle = 'h' + headlineLevel;

    const hasPosts = Array.isArray(posts) && posts.length;

    if (!hasPosts) {
        const message = hideIfEmpty ? __("No Posts Found: Block will not display") : emptyMessage;
        const noPostMessage =
            typeof postTypeSelected !== "undefined"
                ? message
                : __("Select a Post Type from the Block Settings");
        const showHeadline = isSelected || (headline && ! hideIfEmpty) ? true : false;
        return (
            <>
                <PostsInspector { ...props } />
                { showHeadline && (
                <RichText
                    tagName={ headlineStyle }
                    value={ headline }
                    onChange={ ( headline ) => setAttributes( { headline } ) }
                    placeholder={ __('Heading...')}
                    formattingControls={ [ ] }
                />
                ) }

                <Placeholder icon={icons.layout} label={ headline ? headline : __("Latest Posts")}>
                    {!Array.isArray(posts) ? <Spinner /> : noPostMessage}
                </Placeholder>
            </>
        );
    }

    const blockProps = useBlockProps();

    return (
        <>
            <PostsInspector { ...props } />
            <div
                { ...blockProps }
                className={ classnames(blockProps.className, {
                        "is-grid": postLayout === "grid",
                        "is-list": postLayout === "list",
                    }) }
            >
                { (isSelected || headline) && (
                <RichText
                    tagName={ headlineStyle }
                    value={ headline }
                    onChange={ ( headline ) => setAttributes( { headline } ) }
                    placeholder={ __('Heading...')}
                    formattingControls={ [ ] }
                />
                ) }
                <ServerSideRender
                    block={name}
                    attributes={props.attributes}
                />
                <p style={{textAlign: 'center', fontSize: '10px'}}>(Showing Recent {postTypeSelected}: Layout may differ on the published page.)</p>

            </div>
        </>
    );
}


export default withSelect((select, props) => {

    const { attributes } = props;
    const { numberOfPosts, postTypeSelected, taxonomySelected, taxTermsSelected, filterByTaxonomy, order, sortBy } = attributes;
    const { getEntityRecords, getMedia, getPostTypes, getTaxonomies } = select("core");
    const taxTerms = getEntityRecords('taxonomy', taxonomySelected, { per_page: -1 } );
    let query = { per_page: numberOfPosts, order: order.toLowerCase() , orderby: sortBy };
    if (filterByTaxonomy && taxonomySelected && taxTermsSelected) {
        query[taxonomySelected] = taxTermsSelected;
    }
    const latestPosts = getEntityRecords("postType", postTypeSelected, query);
    let taxonomies = getTaxonomies();
    taxonomies = !Array.isArray(taxonomies)
            ? taxonomies
            : taxonomies.filter(tax => tax.types.includes(postTypeSelected));


    return {
        postTypes: getPostTypes(),
        taxonomies: taxonomies,
        taxSelected:  Array.isArray(taxonomies) && taxonomies.length == 1 ? taxonomies[0] : taxonomySelected,
        taxTerms: taxTerms,
        posts: !Array.isArray(latestPosts)
            ? latestPosts
            : latestPosts.map(post => {
                  if (post.featured_media) {
                      const image = getMedia(post.featured_media);
                      let url = get(
                          image,
                          ["media_details", "sizes", "large", "sourc_url"],
                          null
                      );
                      if (!url) {
                          url = get(image, "source_url", null);
                      }
                      return { ...post, featuredImageSourceUrl: url };
                  }
                  return post;
              })
    };
})(customArchiveEdit);
