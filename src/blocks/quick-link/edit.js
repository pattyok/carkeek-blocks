import {
    URLInput,
    InnerBlocks,
    useBlockProps
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import {
    TextControl,
} from "@wordpress/components";

function QuickLinkEdit( props ) {

    const {
        attributes,
        isSelected,
        setAttributes
    } = props;
    const {
        linkUrl,
        linkTitle,
    } = attributes;

    const linkStyle = linkTitle ? 'is-link' : 'is-placeholder';

    const blockProps = useBlockProps();

    return (
            <div { ...blockProps }>
                <InnerBlocks
                    allowedBlocks={["carkeek-blocks/icon"]}
                    template={[
                        ["carkeek-blocks/icon", {className: 'is-style-circled'}]
                    ]}
                    templateLock={true}
                />

                {isSelected ?
                <>
                        <TextControl
                            className={
                                "wp-block-carkeek-blocks-quick-link__title_edit"
                            }
                            onChange={ ( linkTitle ) => setAttributes( { linkTitle } ) }
                            value={linkTitle}
                            label={__(
                                "Link Title",
                                "carkeek-blocks"
                            )}
                        />

                        <URLInput
                            value={linkUrl}
                            onChange={ ( linkUrl ) => setAttributes( { linkUrl } ) }
                            label={__("Links To", "carkeek-blocks")}
                        />
                </>
                :   <div className={ `quick-link ${linkStyle} `} >{ linkTitle ? linkTitle : 'Click to Edit' }</div>
                }
            </div>
    );
}

export default QuickLinkEdit;
