import { PluginDocumentSettingPanel } from "@wordpress/editor";
import { __ } from "@wordpress/i18n";
import { CheckboxControl, FocalPointPicker, Button, RangeControl, ColorPalette } from "@wordpress/components";
import { withSelect, withDispatch } from "@wordpress/data";
import { compose } from "@wordpress/compose";
/* global ckBlocksVars */

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
            supportsOpacity,
            setFeaturedImageOpacity,
            featuredImageOpacity,
			setFeaturedImageColor,
			featuredImageColor,
			supportsColor,
            themeColors,
        } = props;
        const titleBlock = document.querySelector(".editor-visual-editor__post-title-wrapper");
        const defaultFocal = { x: 0.5, y: 0.5 }
        if (supportsOpacity && ( !featuredImageFocalPoint || typeof featuredImageFocalPoint !== 'object' ) ){
            setFeaturedImageFocalPoint( defaultFocal );
        }

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

            // Set title background color class from featured image color
            // Remove any existing background color classes
            Array.from(titleBlock.classList).forEach(className => {
                if (className.startsWith('has-') && className.includes('-background')) {
                    titleBlock.classList.remove(className);
                }
            });
            if (featuredImageColor) {
                // Add the background color class
                titleBlock.classList.add(`has-${featuredImageColor}-background-color`);
				titleBlock.classList.add(`has-background`);
            }
        }

        // console.log(featuredImageOpacity);
        // console.log(ckBlocksVars);
        // if (!featuredImageOpacity && featuredImageOpacity !== 0 ) {
        //     setFeaturedImageOpacity(ckBlocksVars.opacityDefault);
        // }


        function resetFocalPoint() {
            setFeaturedImageFocalPoint( defaultFocal );
        }

        let focalPoint, opacityPicker;
        if (!hideFeaturedImage && featuredMedia && featuredMedia.source_url) {
            const url = featuredMedia.source_url;
            const { width, height } = featuredMedia.media_details;
            const imageClasses = supportsOpacity ? `ck-focal-point-wrapper has-opacity` : '';
            focalPoint = (
                <div className={ imageClasses } style={{ "--focal-opacity": featuredImageOpacity }}>
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
                </div>
            )
            if (supportsOpacity) {
                opacityPicker = (
                    <>
                    <RangeControl
                    label = "Overlay Opacity"
                    value = { featuredImageOpacity }
                    onChange={ ( value ) =>
                        setFeaturedImageOpacity( value )
                    }
                    min = { 0 }
                    max = { 50 }
                    step = { 5 }
                    ></RangeControl>
                    </>
                )
            }
        }
		let headerColorPicker;
		if (supportsColor) {
			headerColorPicker = (
				<>
					<label style={{marginTop: '12px'}} class="components-base-control__label css-2o4jwd ej5x27r2" for="components-circular-option-picker-0">Header Color</label>
					<ColorPalette
						colors={themeColors}
						disableCustomColors={true}
						value={featuredImageColor ? themeColors.find(color => color.slug === featuredImageColor)?.color : null}
						onChange={(colorValue) => {

							if (colorValue === undefined || colorValue === null) {
								// Color was cleared
								setFeaturedImageColor(null);
							} else {
								// Find the color object by hex value
								const selectedColor = themeColors.find(color => color.color === colorValue);
								// Save the slug/name instead of hex value
								setFeaturedImageColor(selectedColor ? selectedColor.slug : null);
							}
						}}
						clearable={true}
					/>
				</>
			);
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
                {opacityPicker}
				{headerColorPicker}
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
    const { getSettings } = select( 'core/block-editor' );
    const settings = getSettings();
    const themeColors = settings.colors || [];
    
    const type = getEditedPostAttribute('type');
    const postType = getPostType( type );
    let supportsOpacity = false;
    let supportsMeta = false, hideTitle, hideFeaturedImage, featuredImageFocalPoint, featuredImageId, featuredMedia, featuredImageOpacity, featuredImageColor, supportsColor = false;
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


        //ckBlockVars are stored in site options and passed via wp_add_inline_script
        supportsOpacity = (ckBlocksVars && ckBlocksVars.supportsOpacity == 1) ? true : false;

        if (supportsOpacity) {
            featuredImageOpacity = getEditedPostAttribute( 'meta' )[ '_carkeekblocks_featured_image_opacity' ];
            //we set the default to 101 so we can distinguish 0 from false.
            if (featuredImageOpacity === 101){
                featuredImageOpacity = parseInt(ckBlocksVars.opacityDefault);
            }
        }

		if (ckBlocksVars && ckBlocksVars.supportsColor == 1) {
			supportsColor = true;
			featuredImageColor = getEditedPostAttribute( 'meta' )[ '_carkeekblocks_featured_image_color' ];
		}

    }
    return {
            hideTitle,
            hideFeaturedImage,
            featuredMedia,
            featuredImageFocalPoint,
            supportsMeta,
            featuredImageOpacity,
            supportsOpacity,
			supportsColor,
			featuredImageColor,
            themeColors,
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
            },
            setFeaturedImageOpacity: focalPoint => {
                editPost( { meta: { _carkeekblocks_featured_image_opacity: focalPoint } } );
            },
			setFeaturedImageColor: color => {;
                editPost( { meta: { _carkeekblocks_featured_image_color: color } } );
            }
        };
});

export default compose(
    applyWithSelect,
    applyWithDispatch,
)(PageHeaderSettings);