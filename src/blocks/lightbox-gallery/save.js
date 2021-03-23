import { ImageSave } from "./image";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

function ModalItemSave ({ attributes }) {
    const { title, name, images, blockId } = attributes;
    const blockProps = useBlockProps.save();
    return (
        <div { ...blockProps }>
                <a className="ck-lightbox-featured-image" data-fancybox-trigger={`gallery-${blockId}`} href='javascript:;'>
                    <img src={images[0].url}></img>
                </a>

                <RichText.Content
                    className={"ck-lightbox-title"}
                    tagName="a"
                    data-fancybox={`gallery-${blockId}`}
                    href={ images[0].url }
                />

                {title && (
                    <RichText.Content
                        className={"ck-modal-item-title"}
                        tagName="p"
                        value={title}
                    />
                )}

                <div style={ { display: 'none' } }>
                { images.map( ( img, index ) => {

                    if (index > 0){
                        return(
                        <a href={img.url} key={index} data-fancybox={`gallery-${blockId}`} data-caption={img.caption}><img src={img.url} ></img></a>
                        )
                    }
                }
                ) }
              </div>
        </div>
    )
}

export default ModalItemSave;