import classnames from 'classnames';
import { RichText, useBlockProps } from "@wordpress/block-editor";
import { cleanForSlug } from "@wordpress/editor";

function ExtendedGallerySave ({ attributes }) {
    const { title,
        subtitle,
        images,
        blockId,
        hideTitle,
        showCaptions,
        displayAs,
        viewLimit,
        cropImages,
        linkImages,
        columns,
        columnsMobile,
        columnsTablet,
        horizontalAlign,
        limitView,
        imageLayout,
        mobileScroll,
        imageAlignment,
        autoPlay,
        slidesToScroll,
        slidesToScrollMobile,
        slidesToScrollTablet,
        slidesToShow,
        slidesToShowMobile,
        slidesToShowTablet,
        autoPlaySpeed,
        transitionSpeed,
        showDots} = attributes;
    //if we use blockId for the gallery id, and they duplicate the block, we get into trouble, so only use the blockId if they have not specified a title
    const galleryId = title ? cleanForSlug(title) : blockId;
    const isGallery = displayAs == 'gallery';
    const isCarousel = displayAs == 'carousel';
    const maybeCarousel = isCarousel || mobileScroll;
    const isLightbox = linkImages == 'lightbox';
    const blockStyle = classnames({
        'image-gallery': isGallery,
        'lightbox-gallery': isLightbox,
        'image-carousel': isCarousel,
    })
    const blockProps = useBlockProps.save({className: blockStyle} );

    const galleryStyle = classnames({
		'ck-blocks-gallery-grid': isGallery,
		[ `columns-${ columns }` ]: isGallery,
        [ `columns-m-${ columnsMobile }` ]: isGallery,
        [ `columns-t-${ columnsTablet }` ]: isGallery,
        [ `align${ horizontalAlign }` ]: isGallery,
		'fixed-images': cropImages,
        [ `fixed-images-${ imageLayout }` ]: cropImages,
        'mobile-scroll': mobileScroll,
        [ `image-align-${ imageAlignment }` ]: !cropImages,
        'has-captions': showCaptions && !isLightbox,
        'ck-carkeek-slider__slide-wrapper': isCarousel,
       'slider-carousel' : isCarousel,


	});


    return (
        <div { ...blockProps }>
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

                <ul
                className={galleryStyle}
                data-type={ maybeCarousel ? 'carousel' : undefined}
                data-title={title}
                id={`wrappergallery-${galleryId}`}
                data-autoplay={ maybeCarousel ? autoPlay : undefined}
                data-speed={ maybeCarousel ? autoPlaySpeed : undefined}
                data-slides={ maybeCarousel ? slidesToShow : undefined}
                data-slidesmobile={ maybeCarousel ? slidesToShowMobile : undefined}
                data-slidestablet={ maybeCarousel ? slidesToShowTablet : undefined}
                data-transitionspd={ maybeCarousel ? transitionSpeed : undefined}
                data-scroll={ maybeCarousel ? slidesToScroll : undefined}
                data-scrollmobile={ maybeCarousel ? slidesToScrollMobile : undefined}
                data-scrolltablet={ maybeCarousel ? slidesToScrollTablet : undefined}
                data-showdots={ maybeCarousel ? showDots : undefined}
                >
                { images.map( ( img, index ) => {
                    let imageStyle = {};

                    if (cropImages && img.focalPointX && img.focalPointY) {
                        imageStyle.objectPosition = `${img.focalPointX *
                            100}% ${img.focalPointY * 100}%`;
                    }
                    const itemStyle = classnames({
                        'ck-blocks-gallery-grid-item': true,
                        'ck-blocks-gallery-hidden': (limitView && index >= viewLimit),
                        'has-link': ((linkImages == 'custom' && img.linksto) || isLightbox )
                    })
                    let imagePack;
                    if (linkImages == 'lightbox') {
                        imagePack = (
                            <a href={img.fullUrl}  data-fancybox={`gallery-${galleryId}`} data-caption={img.caption}><img style={imageStyle} src={img.url} ></img></a>
                        );
                    } else {
                        const image = (
                            <>
                            <img
                                src={ img.url }
                                alt={ img.alt }
                                style={imageStyle}
                            />
                            </>
                        );
                        if (linkImages == 'custom' && img.linksto) {
                            const myProps = {
                                href: img.linksto,
                                target: ( img.linkTarget === '_blank' ) ? '_blank' : undefined,
                                rel: ( '_blank' === img.linkTarget ? 'noopener noreferrer' : undefined )
                            }
                            imagePack = (
                                <>
                                <a { ...myProps }>{image}</a>
                                {showCaptions &&
                                <figcaption>{img.caption}</figcaption>
                                }
                                </>
                            )
                        } else {
                            imagePack = (
                                <>
                                {image}
                                {showCaptions &&
                                <figcaption>{img.caption}</figcaption>
                                }
                                </>
                            )
                        }

                    }
                    return(
                    <li key={index} className={itemStyle}><figure>{imagePack}</figure></li>
                    )
                }
                ) }
              </ul>
        </div>
    )
}

export default ExtendedGallerySave;