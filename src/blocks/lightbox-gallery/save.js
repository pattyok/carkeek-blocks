import { RichText, useBlockProps } from "@wordpress/block-editor";

function LighboxGallerySave ({ attributes }) {
    const { title, subtitle, images, blockId, linkFirstImage, hideTitle } = attributes;
    const blockProps = useBlockProps.save();
    return (
        <div { ...blockProps }>
                {linkFirstImage &&
                <a className="ck-lightbox-featured-image" data-title={title} data-fancybox-trigger={`gallery-${blockId}`} href='javascript:;'>
                    <img src={images[0].url}></img>
                </a>
                }

                {!hideTitle &&
                <>
                    <RichText.Content
                        className={"ck-lightbox-title"}
                        tagName="a"
                        data-fancybox-trigger={`gallery-${blockId}`}
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
                    <a href={img.url} key={index} data-fancybox={`gallery-${blockId}`} data-caption={img.caption}><img src={img.url} ></img></a>
                    )
                }
                ) }
              </div>
        </div>
    )
}

export default LighboxGallerySave;