
import {
    RichText,
    useBlockProps,
    InspectorControls,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { PanelBody, CheckboxControl, RadioControl, RangeControl, TextControl, ToggleControl } from "@wordpress/components";
import { cleanForSlug } from "@wordpress/editor";
import Gallery from './gallery';

function LightboxGalleryEdit( props ) {

    //console.log(this.props);
    const { attributes, isSelected, clientId, setAttributes} = props;
    const { title, subtitle, images, blockId, linkFirstImage, hideTitle, displayAs, columns, cropImages, limitView, viewLimit, imageLayout } = attributes;
    if ( ! blockId ) {
        setAttributes( { blockId: clientId } );
    }
    const blockProps = useBlockProps();
    const hasImages = !! images.length;
    const isGallery = displayAs == 'gallery';


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
                    <RadioControl
                        label="Display on page as"
                        selected={ displayAs }
                        options={ [
                            { label: 'Single Image', value: 'single' },
                            { label: 'Gallery', value: 'gallery' },
                        ] }
                        onChange={value =>
                            setAttributes({ displayAs: value })
                        }
                    />
                    {displayAs =='single' &&
                        <CheckboxControl
                            label="Link first image to Lightbox"
                            checked={ linkFirstImage }
                            onChange={ changeFirstImage }
                        />
                    }
                    </PanelBody>
                    {displayAs =='gallery' &&
                        <>
                        <PanelBody title="Gallery">
                            <RangeControl
                                label="Columns"
                                value={ columns }
                                onChange={ ( columns ) => setAttributes( { columns } ) }
                                min={ 1 }
                                max={ 6 }
                                step={ 1 }
                            />
                            <ToggleControl
                                label="Crop Images"
                                help={ "Crop the images in the page view to a uniform size"}
                                checked={ cropImages }
                                onChange={ ( cropImages ) => setAttributes( { cropImages } ) }
                            />
                            {cropImages &&
                            <RadioControl
                                label="Image Layout"
                                selected={ imageLayout }
                                options={ [
                                    { label: 'Landscape', value: 'landscape' },
                                    { label: 'Portrait', value: 'portrait' },
                                    { label: 'Square', value: 'square' },
                                ] }
                                onChange={value =>
                                    setAttributes({ imageLayout: value })
                                }
                            />
                            }
                            <ToggleControl
                                label="Limit Initial View"
                                help={ "Limit the gallery view on the page to a number (all images will be accessible from the lightbox)"}
                                checked={ limitView }
                                onChange={ ( limitView ) => setAttributes( { limitView } ) }
                            />
                            { limitView &&
                            <RangeControl
                                label="Number of images to show on page"
                                value={ viewLimit }
                                onChange={ ( viewLimit ) => setAttributes( { viewLimit } ) }
                                min={ columns }
                                step={ columns }
                            />
                            }
                            </PanelBody>
                        </>
                    }
                    <PanelBody title="Lightbox">
                    <TextControl
                        label="Title"
                        value={ title }
                        help="Provide a unique title for your lightbox."
                        onChange={ ( title ) => setAttributes( { title } ) }
                    />
                    <TextControl
                        label="Sub Title"
                        value={ subtitle }
                        help="Provide an optional subtitle for your lightbox."
                        onChange={ ( subtitle ) => setAttributes( { subtitle } ) }
                    />
                    <CheckboxControl
                        label="Hide title"
                        checked={ hideTitle }
                        onChange={value =>
                            setAttributes({ hideTitle: value })
                        }
                    />
                    <div>Add a link to this gallery from elsewhere on the page. {generatedLink}</div>
                    </PanelBody>
            </InspectorControls>
            {hasImages && linkFirstImage && !isSelected && !isGallery &&
                <div className="ck-lightbox-featured">{ generateImage(images[0]) }</div>
            }
            {(isSelected || isGallery) &&
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


