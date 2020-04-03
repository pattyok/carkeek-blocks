import { registerBlockType, createBlock } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { InnerBlocks, InspectorControls } from "@wordpress/editor";
import { panelBody, RangeControl } from "@wordpress/components";

const attributes = {
    columns: {
        type: "number",
        default: 2
    }
};

registerBlockType("carkeek-blocks/team-members", {
    title: __("Team Members", "carkeek-blocks"),

    description: __("Block showing a Team Members.", "carkeek-blocks"),

    icon: "grid-view",

    category: "mytheme-category",

    supports: {
        html: false,
        align: ["wide", "full"]
    },

    transforms: {
        from: [
            {
                type: "block",
                blocks: ["core/gallery"],
                transform: ({ columns, images }) => {
                    let inner = images.map(({ alt, id, url }) =>
                        createBlock("carkeek-blocks/team-member", {
                            alt,
                            id,
                            url
                        })
                    );
                    return createBlock(
                        "carkeek-blocks/team-members",
                        {
                            columns: columns
                        },
                        inner
                    );
                }
            },
            {
                type: "block",
                blocks: ["core/image"],
                isMultiBlock: true,
                transform: attributes => {
                    let inner = attributes.map(({ alt, id, url }) =>
                        createBlock("carkeek-blocks/team-member", {
                            alt,
                            id,
                            url
                        })
                    );
                    return createBlock(
                        "carkeek-blocks/team-members",
                        {
                            columns: 3
                        },
                        inner
                    );
                }
            }
        ]
    },

    keywords: [
        __("team", "carkeek-blocks"),
        __("member", "carkeek-blocks"),
        __("person", "carkeek-blocks")
    ],

    attributes,

    edit({ className, attributes, setAttributes }) {
        const { columns } = attributes;
        return (
            <div className={`${className} has-${columns}-columns`}>
                <InspectorControls>
                    <panelBody>
                        <RangeControl
                            label={__("column", "carkeek-blocks")}
                            value={columns}
                            onChange={columns => setAttributes({ columns })}
                            min={1}
                            max={6}
                        />
                    </panelBody>
                </InspectorControls>
                <InnerBlocks
                    allowedBlocks={["carkeek-blocks/team-member"]}
                    template={[
                        ["carkeek-blocks/team-member"],
                        ["carkeek-blocks/team-member"]
                    ]}
                />
            </div>
        );
    },

    save({ attributes }) {
        const { columns } = attributes;
        return (
            <div className={`has-${columns}-columns`}>
                <InnerBlocks.Content />
            </div>
        );
    }
});
