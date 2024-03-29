import icons from './icons';

import { __ } from "@wordpress/i18n";
import { isBlobURL } from '@wordpress/blob';
import { withSelect } from '@wordpress/data';
import {  useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { FocalPointPicker, PanelBody, Spinner, SelectControl, ToggleControl } from "@wordpress/components";

function Edit( props ) {
	const blockProps = useBlockProps();
        const {
            featuredMedia,
            imageSizes,
            attributes,
            setAttributes,
            clientId
        } = props;
        const {
            focalPoint,
            blockId,
            imageSize,
            showCaption
        } = attributes;
        if ( ! blockId ) {
            setAttributes( { blockId: clientId } );
        }
        let url, width, height, caption;
        if ( featuredMedia && featuredMedia.source_url ) {
            url = featuredMedia.source_url;
            width = featuredMedia.width;
            height = featuredMedia.height;
            caption = featuredMedia.caption;
        }

        let imageStyle = {};
        if (focalPoint) {
            imageStyle.objectPosition = `${focalPoint.x *
                100}% ${focalPoint.y * 100}%`;
        }

        let sizeOptions = [];
        if (imageSizes) {
            sizeOptions = imageSizes.map(type => ({
                value: type.slug,
                label: type.name
            }));
            sizeOptions.unshift({value: 'default', label: 'Default'});
        }

        let img = (
            <>
                <img
                    src={ url }
                    style = { imageStyle }
                    role = "presentation"
                />
                { showCaption && caption && (
                    <div className="image-caption">{caption.raw}</div>
                )}
                { isBlobURL( url ) && <Spinner /> }
            </>
        );

        return (
            <>
            { url ?

                <div { ...blockProps } >

                    <InspectorControls>
                        <PanelBody title={ __( 'Image settings' ) }>
                            <FocalPointPicker
                                label={__("Focal Point", "carkeek-blocks")}
                                url={ url }
                                dimensions={ { width, height } }
                                onChange={newFocalPoint =>
                                    setAttributes({
                                        focalPoint: newFocalPoint
                                    })
                                }
                                value={focalPoint}
                            />
                            <ToggleControl
                                label={__("Show caption", "carkeek-blocks")}
                                onChange={value =>
                                    setAttributes({
                                        showCaption: value
                                    })
                                }
                                checked={showCaption}
                            />
                            <SelectControl
                                label={__("Image Size", "carkeek-blocks")}
                                onChange={value =>
                                    setAttributes({
                                        imageSize: value
                                    })
                                }
                                options={sizeOptions}
                                value={imageSize}
                            />
                        </PanelBody>
                    </InspectorControls>
                    {img}
                 </div>
            :
                <div className="wp-block empty-block">
                    <div className="empty-block__icon">{icons.featuredimage}</div>
                    <div className="empty-block__content">
                    <p className="empty-block__title">{__('Featured Image Block.', 'carkeek-blocks')}</p>
                    <p className="empty-block__text">{__('Set the featured image in the Page Settings pane', 'carkeek-blocks')}</p>
                    </div>
                </div>
            }
            </>
        )
}
export default withSelect(( select ) => {

	const { getEditedPostAttribute } = select( 'core/editor' );
	const { getMedia } = select( 'core' );
	const featuredImageId = getEditedPostAttribute( 'featured_media' );
	const { getSettings } = select( 'core/block-editor' );
	const { imageSizes } = getSettings();

	const featuredMedia = featuredImageId ? getMedia(featuredImageId) : null;
	return {
		featuredMedia,
		imageSizes
	};
})(Edit);
