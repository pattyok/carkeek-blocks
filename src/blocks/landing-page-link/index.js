import "./style.editor.css";
import { registerBlockType } from "@wordpress/blocks";
import icons from "../../resources/icons";
import { __ } from "@wordpress/i18n";
import edit from "./edit";
import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";

const attributes = {
    linkTitle: {
        type: "string",
        sourcer:"html",
        selector: ".ck-page-link"
    },
    linkUrl: {
        type: "string",
        source: "attribute",
        selector: "a",
        attribute: "href"
    },
    pageIntro: {
        type: "string",
        source: "html",
        selector: ".ck-page-link-description",
    }
};

registerBlockType("carkeek-blocks/page-link", {
    apiVersion: 2,

    title: __("Landing Page Link", "carkeek-blocks"),

    description: __(
        "Icon and Link to place on landing pages  ",
        "carkeek-blocks"
    ),

    icon: icons.pageLinks,

    parent: ["carkeek-blocks/page-links"],

    supports: {
        reusable: false,
        html: false
    },

    category: "widgets",

    keywords: [__("link", "carkeek-blocks"), __("page", "carkeek-blocks"), __("landing page", "carkeek-blocks"), __("icon", "carkeek-blocks")],

    attributes,

    save: ({ attributes }) => {
        const {
            linkTitle,
            linkUrl,
            pageIntro,
        } = attributes;

        const blockProps = useBlockProps.save();

        return (
            <div { ...blockProps } >
                    <a
                        className={
                            "ck-page-link-icon-link"
                        }
                        href={linkUrl}
                    ><InnerBlocks.Content /></a>
                    <a
                        className={
                            "ck-page-link"
                        }
                        href={linkUrl}
                    >
                            {linkTitle }
                    </a>
                    <RichText.Content className="ck-page-link-description" tagName="div" value={ pageIntro } />
            </div>
        );
    },

    edit
});
