import { PluginDocumentSettingPanel } from "@wordpress/edit-post";
import { __ } from "@wordpress/i18n";
import { CheckboxControl, FocalPointPicker, Button } from "@wordpress/components";
import { withSelect, withDispatch } from "@wordpress/data";
import { compose } from "@wordpress/compose";


function PageHeaderSettings( props ) {
        const {
            hideTitle,
            setHideTitle,
            hideFeaturedImage,
            setHideFeaturedImage,
            featuredMedia,
            featuredImageFocalPoint,
            setFeaturedImageFocalPoint,
            supportsMeta,
        } = props;
        const titleBlock = document.querySelector(".editor-post-title__block");

        if (titleBlock) {
            const isHidden =
                typeof hideTitle !== "undefined" &&
                typeof hideTitle !== "undefined"
                    ? hideTitle
                    : false;
            const bodyClass = isHidden
                ? "carkeek-blocks-title-hidden"
                : "carkeek-blocks-title-visible";

            //remove existing class
            if (isHidden) {
                document.body.classList.remove("carkeek-blocks-title-visible");
            } else {
                document.body.classList.remove("carkeek-blocks-title-hidden");
            }

            document.body.classList.add(bodyClass);
        }

        function resetFocalPoint() {
            const newFocal = { x: 0.5, y: 0.5 }
            setFeaturedImageFocalPoint( newFocal );
        }

        let focalPoint;
        if (!hideFeaturedImage && featuredMedia && featuredMedia.source_url) {
            const url = featuredMedia.source_url;
            const { width, height } = featuredMedia.media_details;
            focalPoint = (
                <>
                    <FocalPointPicker
                        label={ __( 'Featured Image Focal Point' ) }
                        url={ url }
                        dimensions={ { width, height } }
                        value={ featuredImageFocalPoint }
                        onChange={ ( newFocalPoint ) =>
                            setFeaturedImageFocalPoint( newFocalPoint )
                        }
                    />
                    <Button variant="secondary" className={ 'is-secondary' } onClick={ resetFocalPoint }>Reset FocalPoint</Button>
                </>
            )
        }

        const hideImageCheckbox = (
            <CheckboxControl
                className="carkeek-hide-featured-image-label"
                label="Hide Featured Image"
                checked={hideFeaturedImage}
                onChange={value => setHideFeaturedImage(value)}
                help={
                    hideFeaturedImage
                        ? __(
                                "The Featured Image is hidden on the rendered page.",
                                "carkeek-blocks"
                            )
                        : __(
                                "The Featured Image is visible on the rendered page.",
                                "carkeek-blocks"
                            )
                }
            />
        );

        return (
            <PluginDocumentSettingPanel
                name="page-header-settings-panel"
                title="Page Header Settings"
                className="page-header-settings-panel"
            >
            {supportsMeta &&
                <>
                <CheckboxControl
                    className="carkeek-hide-title-label"
                    label={__("Hide Page Title", "carkeek-blocks")}
                    checked={hideTitle}
                    onChange={value => setHideTitle(value)}
                    help={
                        hideTitle
                            ? __(
                                    "Title is hidden on the rendered page.",
                                    "carkeek-blocks"
                                )
                            : null
                    }
                />
                {hideImageCheckbox}
                {focalPoint}
                <p></p>
                <p>
                    These settings may not be applied on all pages/posts.
                </p>
                </>
            }
            { !supportsMeta &&
                <p>Not supported for this post type. If you want to use this feature on this post, let your site admin know that this post type must support &#39;custom-fields&#39;.</p>
            }
            </PluginDocumentSettingPanel>
    );
}

const applyWithSelect = withSelect( ( select )=> {
    const { getEditedPostAttribute } = select( 'core/editor' );
    const { getMedia, getPostType } = select( 'core' );
    const type = getEditedPostAttribute('type');
    const postType = getPostType( type );
    let supportsMeta = false, hideTitle, hideFeaturedImage, featuredImageFocalPoint, featuredImageId, featuredMedia;
    if (postType && postType.supports['custom-fields'] && postType.supports['custom-fields']){
        supportsMeta = true;
    }
    if (supportsMeta) {
    //post types need to support custom fields for this to work - if missing or js errors check for that
    hideTitle = getEditedPostAttribute('meta')['_carkeekblocks_title_hidden'];
    hideFeaturedImage = getEditedPostAttribute('meta')['_carkeekblocks_featuredimage_hidden'];
    featuredImageFocalPoint = getEditedPostAttribute( 'meta' )[ '_carkeekblocks_featured_image_focal_point' ];

    featuredImageId = getEditedPostAttribute( 'featured_media' );
    featuredMedia = featuredImageId ? getMedia(featuredImageId) : null;

    }
    return {
            hideTitle,
            hideFeaturedImage,
            featuredMedia,
            featuredImageFocalPoint,
            supportsMeta,
        };
});
const applyWithDispatch = withDispatch( ( dispatch ) => {
    const { editPost } = dispatch( 'core/editor' );

    return {
            setHideTitle: hideTitle => {
                editPost({
                    meta: { _carkeekblocks_title_hidden: hideTitle }
                });
            },
            setHideFeaturedImage: hideFeaturedImage => {
                editPost({
                    meta: {
                        _carkeekblocks_featuredimage_hidden: hideFeaturedImage
                    }
                });
            },
            setFeaturedImageFocalPoint: focalPoint => {
                editPost( { meta: { _carkeekblocks_featured_image_focal_point: focalPoint } } );
            }
        };
});

export default compose(
    applyWithSelect,
    applyWithDispatch,
)(PageHeaderSettings);