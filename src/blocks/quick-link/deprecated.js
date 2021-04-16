import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";


const deprecated = [
    {
        attributes: {
            linkTitle: {
                type: "string"
            },
            linkUrl: {
                type: "string",
                source: "attribute",
                selector: "a",
                attribute: "href"
            }
        },
        save: ({ attributes }) => {
            const {
                linkTitle,
                linkUrl,
            } = attributes;

            const blockProps = useBlockProps.save();

            return (
                <div {...blockProps} >
                        <a
                            className={
                                "ck-quick-link-icon-link"
                            }
                            href={linkUrl}
                        ><InnerBlocks.Content /></a>
                        <a
                            className={
                                "ck-quick-link"
                            }
                            href={linkUrl}
                        >
                                {linkTitle }
                        </a>
                </div>
            );
        },

    }
]

export default deprecated;