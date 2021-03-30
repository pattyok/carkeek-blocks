import "./style.editor.css";
import edit from './edit';
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import icons from "../../resources/icons";

const attributes = {
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
}

registerBlockType("carkeek-blocks/carkeek-slider", {
    apiVersion: 2,

    title: __("Block Slider", "carkeek-blocks"),

    description: __(
        "Make a slideshow of inner blocks",
        "carkeek-blocks"
    ),

    icon: icons.slider,

    category: "widgets",

    supports: {
        align: ["wide", "full"],
        anchor: true
    },
    attributes,

    keywords: [
        __("slider", "carkeek-blocks"),
        __("slide", "carkeek-blocks"),
        __("gallery", "carkeek-blocks")
    ],

    edit,

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
});