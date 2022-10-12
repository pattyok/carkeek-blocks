/**
 * External dependencies
 */
import classnames from "classnames";

 /**
  * WordPress dependencies
  */
  import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

const deprecated = [
    {
        attributes: {
            autoPlay: {
                type: 'boolean',
                default: true
            },
            autoPlaySpeed: {
                type: 'number',
                default: 3000,
            },
            sliderType: {
                type: 'string',
                default: 'single'
            },
            slidesToShow: {
                type: 'number',
                default: 3
            },
            slidesToScroll: {
                type: 'number',
                default: 3
            },
            slidesToShowMobile: {
                type: 'number',
                default: 1
            },
            slidesToScrollMobile: {
                type: 'number',
                default: 1
            },
            carousel: {
                type: 'boolean',
                default: false
            },
            transitionType: {
                type: 'string',
                default: 'slide',
            },
            transitionSpeed: {
                type: 'number',
                default: 3000,
            },
            showDots: {
                type: 'boolean',
                default: false,
            },
            arrowNavigation: {
                type: 'string',
                default: 'desktop-only',
            },
            innerBlockType: {
                type: "string",
                default: 'carkeek-blocks/fixed-image'
            },
            textOverlay: {
                type: 'boolean',
                default: false
            },
            headerText: {
                type: 'string',
                source: 'html',
                selector: 'h1'
            },
            desktopText: {
                type: 'string',
                source: 'html',
                selector: '.desktop-text'
            }
        },
        save({ attributes } ) {
            const{ autoPlay, autoPlaySpeed, slidesToShow, showDots, transitionType, arrowNavigation, transitionSpeed, sliderType, slidesToScroll, slidesToScrollMobile, slidesToShowMobile } = attributes;
            const classes = classnames( {
                [ `slider-${ sliderType }` ]: sliderType,
                [ `arrows-${ arrowNavigation }` ]: arrowNavigation
            } );
            const blockProps = useBlockProps.save({ className: classes })
            return (
                <div {...blockProps}>
                    <div className="ck-carkeek-slider__slide-wrapper"
                    data-autoplay={autoPlay}
                    data-speed={autoPlaySpeed}
                    data-type={sliderType}
                    data-slides={slidesToShow}
                    data-slidesmobile={slidesToShowMobile}
                    data-transition={transitionType}
                    data-transitionspd={transitionSpeed}
                    data-scroll={slidesToScroll}
                    data-scrollmobile={slidesToScrollMobile}
                    data-showdots={showDots}
                    data-arrows={arrowNavigation}>
                    <InnerBlocks.Content />
                    </div>
                </div>
            );
        }
    },
    {
        attributes: {
    autoPlay: {
        type: 'boolean',
        default: true
    },
    autoPlaySpeed: {
        type: 'number',
        default: 3000,
    },
    sliderType: {
        type: 'string',
        default: 'single'
    },
    slidesToShow: {
        type: 'number',
        default: 3
    },
    slidesToScroll: {
        type: 'number',
        default: 3
    },
    slidesToShowMobile: {
        type: 'number',
        default: 1
    },
    slidesToScrollMobile: {
        type: 'number',
        default: 1
    },
    carousel: {
        type: 'boolean',
        default: false
    },
    transitionType: {
        type: 'string',
        default: 'slide',
    },
    transitionSpeed: {
        type: 'number',
        default: 3000,
    },
    showDots: {
        type: 'boolean',
        default: false,
    },
    innerBlockType: {
        type: "string",
        default: 'carkeek-blocks/fixed-image'
    },
    textOverlay: {
        type: 'boolean',
        default: false
    },
    headerText: {
        type: 'string',
        source: 'html',
        selector: 'h1'
    },
    desktopText: {
        type: 'string',
        source: 'html',
        selector: '.desktop-text'
    }
},
save({ attributes } ) {
        const{ autoPlay, autoPlaySpeed, slidesToShow, showDots, transitionType, transitionSpeed, sliderType, slidesToScroll, slidesToScrollMobile, slidesToShowMobile } = attributes;
        const classes = classnames( {
            [ `slider-${ sliderType }` ]: sliderType
        } );
        const blockProps = useBlockProps.save({ className: classes })
        return (
            <div {...blockProps}>
                <div className="ck-carkeek-slider__slide-wrapper"
                data-autoplay={autoPlay}
                data-speed={autoPlaySpeed}
                data-type={sliderType}
                data-slides={slidesToShow}
                data-slidesmobile={slidesToShowMobile}
                data-transition={transitionType}
                data-transitionspd={transitionSpeed}
                data-scroll={slidesToScroll}
                data-scrollmobile={slidesToScrollMobile}
                data-showdots={showDots}>
                <InnerBlocks.Content />
                </div>
            </div>
        );
    }
    },
    {
        attributes: {
            autoPlay: {
                type: 'boolean',
                default: true
            },
            autoPlaySpeed: {
                type: 'number',
                default: 3000,
            },
            sliderType: {
                type: 'string',
                default: 'single'
            },
            slidesToShow: {
                type: 'number',
                default: 3
            },
            slidesToScroll: {
                type: 'number',
                default: 3
            },
            carousel: {
                type: 'boolean',
                default: false
            },
            transitionType: {
                type: 'string',
                default: 'slide',
            },
            transitionSpeed: {
                type: 'number',
                default: 3000,
            },
            showDots: {
                type: 'boolean',
                default: false,
            },
            innerBlockType: {
                type: "string",
                default: 'carkeek-blocks/fixed-image'
            },
            textOverlay: {
                type: 'boolean',
                default: false
            },
            headerText: {
                type: 'string',
                source: 'html',
                selector: 'h1'
            },
            desktopText: {
                type: 'string',
                source: 'html',
                selector: '.desktop-text'
            }

        },
        save({ attributes } ) {
            const{ autoPlay, autoPlaySpeed, slidesToShow, showDots, transitionType, transitionSpeed, sliderType, slidesToScroll } = attributes;
            const blockProps = useBlockProps.save()
            return (
                <div {...blockProps}>
                    <div className="ck-carkeek-slider__slide-wrapper"
                    data-autoplay={autoPlay}
                    data-speed={autoPlaySpeed}
                    data-type={sliderType}
                    data-slides={slidesToShow}
                    data-transition={transitionType}
                    data-transitionspd={transitionSpeed}
                    data-scroll={slidesToScroll}
                    data-showdots={showDots}>
                    <InnerBlocks.Content />
                    </div>
                </div>
            );
        }
    }
]

export default deprecated;