import { PluginDocumentSettingPanel } from "@wordpress/edit-post";
import { __ } from "@wordpress/i18n";
import { CheckboxControl, FocalPointPicker } from "@wordpress/components";
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
            setFeaturedImageFocalPoint
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

        let focalPoint;
        if (!hideFeaturedImage && featuredMedia && featuredMedia.source_url) {
            const url = featuredMedia.source_url;
            const { width, height } = featuredMedia.media_details;
            focalPoint = (
                <FocalPointPicker
                    label={ __( 'Featured Image Focal Point' ) }
                    url={ url }
                    dimensions={ { width, height } }
                    value={ featuredImageFocalPoint }
                    onChange={ ( newFocalPoint ) =>
                        setFeaturedImageFocalPoint( newFocalPoint )
                    }
                />
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
                <div>
                    These settings may not be applied on all pages/posts.
                </div>
            </PluginDocumentSettingPanel>
    );
}

const applyWithSelect = withSelect( ( select )=> {
    const { getEditedPostAttribute } = select( 'core/editor' );
    const { getMedia } = select( 'core' );

    const hideTitle = getEditedPostAttribute('meta')['_carkeekblocks_title_hidden'];
    const hideFeaturedImage = getEditedPostAttribute('meta')['_carkeekblocks_featuredimage_hidden'];
    const featuredImageFocalPoint = getEditedPostAttribute( 'meta' )[ '_carkeekblocks_featured_image_focal_point' ];

    const featuredImageId = getEditedPostAttribute( 'featured_media' );
    const featuredMedia = featuredImageId ? getMedia(featuredImageId) : null;
    return {
            hideTitle,
            hideFeaturedImage,
            featuredMedia,
            featuredImageFocalPoint
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