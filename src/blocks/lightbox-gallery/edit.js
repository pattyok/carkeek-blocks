
import {
    RichText,
    useBlockProps
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import Gallery from './gallery';

function LightboxGalleryEdit( props ) {

    //console.log(this.props);
    const { attributes, isSelected, clientId, setAttributes} = props;
    const { title, subtitle, images, blockId } = attributes;
    if ( ! blockId ) {
        setAttributes( { blockId: clientId } );
    }
    const blockProps = useBlockProps();
    return(
        <div {...blockProps} >
            <div className="ck-lightbox-featured"><img src={ images[0].url }></img></div>
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

            {isSelected &&
            <>
                <Gallery
                    { ...props }
                />
            </>
            }
        </div>
    )
}


export default LightboxGalleryEdit;


