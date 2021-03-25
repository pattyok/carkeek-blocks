import { RichText, useBlockProps } from "@wordpress/block-editor";
import { cleanForSlug } from "@wordpress/editor";

function LighboxGallerySave ({ attributes }) {
    const { title, subtitle, images, linkFirstImage, blockId, hideTitle } = attributes;
    const blockProps = useBlockProps.save();
    const hasImages = !! images.length;
    //if we use blockId for the gallery id, and they duplicate the block, we get into trouble, so only use the blockId if they have not specified a title
    const galleryId = title ? cleanForSlug(title) : blockId;
    return (
        <div { ...blockProps }>
                {hasImages && linkFirstImage &&
                <a className="ck-lightbox-featured-image" data-title={title} data-fancybox-trigger={`gallery-${galleryId}`} href='javascript:;'>
                    <img src={images[0].thumbUrl} alt={images[0].alt}></img>
                </a>
                }

                {!hideTitle &&
                <>
                    <RichText.Content
                        className={"ck-lightbox-title"}
                        tagName="a"
                        data-fancybox-trigger={`gallery-${galleryId}`}
                        href='javascript:;'
                        data-title={title}
                        value={title}
                    />

                    {subtitle && (
                        <RichText.Content
                            className={"ck-lightbox-subtitle"}
                            tagName="p"
                            value={subtitle}
                        />
                    )}
                </>
                }

                <div style={ { display: 'none' } }>
                { images.map( ( img, index ) => {
                    return(
                    <a href={img.url} key={index} data-fancybox={`gallery-${galleryId}`} data-caption={img.caption}><img src={img.thumbUrl} ></img></a>
                    )
                }
                ) }
              </div>
        </div>
    )
}

export default LighboxGallerySave;