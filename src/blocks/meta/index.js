import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { TextControl } from "@wordpress/components";

registerBlockType("carkeek-blocks/meta", {
    title: __(" Meta Block ", "carkeek-blocks"),

    description: __("Block for editing meta field", "carkeek-blocks"),

    icon: "admin-tools",

    category: "mytheme-category",

    attributes: {
        post_subtitle: {
            type: "string",
            source: "meta",
            meta: "_mytheme_blocks_post_subtitle"
        }
    },

    edit({ attributes, setAttributes }) {
        function onChange(value) {
            setAttributes({ post_subtitle: value });
        }
        return (
            <div>
                <TextControl
                    label={__("Post Subtitle", "carkeek-blocks")}
                    value={attributes.post_subtitle}
                    onChange={onChange}
                />
            </div>
        );
    },

    save() {
        return null;
    }
});
