import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";

const deprecated = [
    {
        attributes: {
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
        },
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

    }
]

export default deprecated;