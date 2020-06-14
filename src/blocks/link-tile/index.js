import "./style.editor.scss";
import "./parent";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit";
import { getColorClassName } from "@wordpress/block-editor";
import classnames from "classnames";

const attributes = {
    title: {
        type: "string"
    },
    imgId: {
        type: "number"
    },
    imgUrl: {
        type: "string"
    },
    linkTitle: {
        type: "string"
    },
    linkUrl: {
        type: "string",
        source: "attribute",
        selector: "a",
        attribute: "href"
    },
    backgroundColor: {
        type: "string",
        default: "theme-green"
    },
    textColor: {
        type: "string"
    },
    focalPoint: {
        type: "object"
    }
};

registerBlockType("carkeek-blocks/link-tile", {
    title: __("Link Tile", "carkeek-blocks"),

    description: __(
        " Block that displays a link with an image background and hover state. ",
        "carkeek-blocks"
    ),

    icon: "admin-links",

    parent: ["carkeek-blocks/link-tiles"],

    supports: {
        reusable: false,
        html: false
    },

    category: "widgets",

    keywords: [__("link", "carkeek-blocks"), __("tile", "carkeek-blocks")],

    attributes,

    save: ({ attributes, className }) => {
        const {
            title,
            imgUrl,
            linkTitle,
            linkUrl,
            backgroundColor,
            focalPoint
        } = attributes;
        const imageStyle = {
            backgroundImage: `url( ${imgUrl} )`
        };
        if (focalPoint) {
            imageStyle.backgroundPosition = `${focalPoint.x *
                100}% ${focalPoint.y * 100}%`;
        }
        const backgroundClass = getColorClassName(
            "background-color",
            backgroundColor
        );
        const classes = classnames(className, {
            [backgroundClass]: backgroundClass,
            "wp-block-column": true
        });
        return (
            <div className={classes}>
                {imgUrl && (
                    <a
                        className={
                            "wp-block-carkeek-blocks-link-tile__link wp-block-carkeek-blocks-link-tile__inner"
                        }
                        href={linkUrl}
                    >
                        <div
                            style={imageStyle}
                            className={
                                "wp-block-carkeek-blocks-link-tile__img wp-block-carkeek-blocks-link-tile__inner"
                            }
                        >
                            <span className="link-tile__title">{title}</span>
                        </div>
                        <span className="link-tile__hover_title">
                            {linkTitle ? linkTitle : title}
                        </span>
                    </a>
                )}
            </div>
        );
    },

    edit
});
