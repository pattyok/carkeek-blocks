
import {
    RichText,
    useBlockProps,
    InspectorControls,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { PanelBody, CheckboxControl } from "@wordpress/components";
import { cleanForSlug } from "@wordpress/editor";
import Gallery from './gallery';

function LightboxGalleryEdit( props ) {

    //console.log(this.props);
    const { attributes, isSelected, clientId, setAttributes} = props;
    const { title, subtitle, images, blockId, linkFirstImage, hideTitle } = attributes;
    if ( ! blockId ) {
        setAttributes( { blockId: clientId } );
    }
    const blockProps = useBlockProps();
    const hasImages = !! images.length;



    function changeFirstImage( value ) {
        setAttributes({ linkFirstImage: value });
        if (!value) {
            setAttributes({ hideTitle: false });
        }
    }

    //if we use blockId for the gallery id, and they duplicate the block, we get into trouble, so only use the blockId if they have not specified a title
    const galleryId = title ? cleanForSlug(title) : blockId;

    function generateLink (title, galleryId) {
        return '<a href="javascript:;" data-title="' + title + '" data-fancybox-trigger="gallery-' + galleryId + '" class="is-style-cta">Link to Gallery</a>';
    }
    const generatedLink = generateLink(title, galleryId);

    function generateImage(image) {
        let imageStyle = {};
        if (image.focalPoint) {
            imageStyle.objectPosition = `${image.focalPoint.x *
                100}% ${image.focalPoint.y * 100}%`;
        }

        let img = (
            <>
                <img
                    src={ image.url }
                    style = { imageStyle }
                />
               </>
        );
        return img;
    }



    return(
        <div {...blockProps} >
            <InspectorControls>
                <PanelBody>
                    <CheckboxControl
                        label="Link first image to Lightbox"
                        checked={ linkFirstImage }
                        onChange={ changeFirstImage }
                    />
                    <CheckboxControl
                        label="Hide title"
                        checked={ hideTitle }
                        onChange={value =>
                            setAttributes({ hideTitle: value })
                        }
                        disabled={ !linkFirstImage }
                    />
                    <div>Add a link to this gallery from elsewhere on the page. {generatedLink}</div>
                </PanelBody>
            </InspectorControls>
            {hasImages && linkFirstImage && !isSelected &&
                <div className="ck-lightbox-featured">{ generateImage(images[0]) }</div>
            }
            {isSelected &&
            <>
                <Gallery
                    { ...props }
                />
            </>
            }
            <RichText
                className={"ck-lightbox-title"}
                tagName="div"
                onChange={ ( title ) => setAttributes( { title } ) }
                value={ title }
                placeholder={__("Title", "carkeek-blocks")}
                formatingControls={[]}
            />

            <RichText
                className={"ck-lightbox-subtitle"}
                tagName="div"
                onChange={ ( subtitle ) => setAttributes( { subtitle } ) }
                value={subtitle}
                placeholder={isSelected ? __("Sub-Title", "carkeek-blocks") : null}
                formatingControls={[]}
            />

        </div>
    )
}


export default LightboxGalleryEdit;


