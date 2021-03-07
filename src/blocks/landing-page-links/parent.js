import { registerBlockType, createBlock } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { InnerBlocks  } from "@wordpress/block-editor";
import { dispatch } from "@wordpress/data";
import icons from "../../resources/icons";


const attributes = {
    align: {
        type: "string",
    },
};

registerBlockType("carkeek-blocks/page-links", {
    title: __("Landing Page Links", "carkeek-blocks"),

    description: __(
        "Block showing a list of page links to be displayed on a landing page",
        "carkeek-blocks"
    ),

    icon: icons.landingPage,

    category: "widgets",

    supports: {
        html: false,
        align: ["wide", "full"]
    },

    keywords: [
        __("links", "carkeek-blocks"),
        __("icons", "carkeek-blocks"),
        __("landing", "carkeek-blocks"),
        __("icon", "carkeek-blocks"),
        __("page", "carkeek-blocks")
    ],

    attributes,

    edit({ className, clientId }) {
        return (
            <div className={ className }>
                <div className={'wp-blocks-carkeek-page-links__inner-blocks'}>
                <InnerBlocks
                    allowedBlocks={["carkeek-blocks/page-link"]}
                    template={[
                        ["carkeek-blocks/page-link"],
                    ]}
                    templateLock={false}
                    orientation="horizontal"
                    renderAppender={ () => (
                        <button className="custom-appender" onClick={() => {
							dispatch('core/block-editor').insertBlocks(createBlock('carkeek-blocks/page-link'), 9999, clientId);
						}}>
							{__('Add Link')}
                        </button>
                    )}
                />
                </div>
            </div>
        );
    },

    save() {
        return (
            <div>
                <div className="wp-blocks-carkeek-page-links__inner-blocks">
                    <InnerBlocks.Content />
                </div>
            </div>
        );
    }
});
