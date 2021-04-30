import classnames from 'classnames';
import { RichText, useBlockProps } from "@wordpress/block-editor";
import { cleanForSlug } from "@wordpress/editor";

function LighboxGallerySave ({ attributes }) {
    const { title, subtitle, images, linkFirstImage, blockId, hideTitle, displayAs, viewLimit, cropImages, columns, limitView, imageLayout, scrollMobile} = attributes;
    const blockProps = useBlockProps.save();
    const hasImages = !! images.length;
    //if we use blockId for the gallery id, and they duplicate the block, we get into trouble, so only use the blockId if they have not specified a title
    const galleryId = title ? cleanForSlug(title) : blockId;
    const isGallery = displayAs == 'gallery';

    const galleryStyle = classnames({
		'ck-blocks-gallery-grid': isGallery,
		[ `columns-${ columns }` ]: isGallery,
		'fixed-images': isGallery && cropImages,
        'ck-blocks-gallery-hidden': !isGallery,
        [ `fixed-images-${ imageLayout }` ]: isGallery && cropImages,
        'mobile-scroll': scrollMobile
	})


    return (
        <div { ...blockProps }>
                {hasImages && linkFirstImage && !isGallery &&
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

                <ul className={galleryStyle} data-title={title} id={`wrappergallery-${galleryId}`}>
                { images.map( ( img, index ) => {

                    let imageStyle = {};
                    if (img.focalPointX && img.focalPointY) {
                        imageStyle.objectPosition = `${img.focalPointX *
                            100}% ${img.focalPointY * 100}%`;
                    }
                    const itemStyle = classnames({
                        'ck-blocks-gallery-grid-item': true,
                        'ck-blocks-gallery-hidden': (limitView && index >= viewLimit)
                    })
                    return(
                    <li key={index} className={itemStyle}> <a href={img.url}  data-fancybox={`gallery-${galleryId}`} data-caption={img.caption}><img style={imageStyle} src={img.thumbUrl} ></img></a></li>
                    )
                }
                ) }
              </ul>
        </div>
    )
}

export default LighboxGallerySave;