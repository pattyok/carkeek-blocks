import "./style.editor.css";
import "./parent";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit";
import { InnerBlocks, RichText } from "@wordpress/block-editor";

const attributes = {
    linkTitle: {
        type: "string"
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
        selector: ".page-link--description",
    }
};

registerBlockType("carkeek-blocks/page-link", {
    title: __("Landing Page Links", "carkeek-blocks"),

    description: __(
        "Icon and Link to place on landing pages  ",
        "carkeek-blocks"
    ),

    icon: "admin-links",

    parent: ["carkeek-blocks/page-links"],

    supports: {
        reusable: false,
        html: false
    },

    category: "widgets",

    keywords: [__("link", "carkeek-blocks"), __("page", "carkeek-blocks"), __("landing page", "carkeek-blocks"), __("icon", "carkeek-blocks")],

    attributes,

    save: ({ attributes, className }) => {
        const {
            linkTitle,
            linkUrl,
            pageIntro,
        } = attributes;

        return (
            <div className={className}>
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
