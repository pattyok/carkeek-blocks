import {
    URLInput,
    InnerBlocks,
    useBlockProps,
    RichText,
    InspectorControls
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";


function QuickLinkEdit( props ) {

    const {
        attributes,
        setAttributes
    } = props;
    const {
        linkUrl,
        richText,
    } = attributes;

    const blockProps = useBlockProps();

    return (
            <div { ...blockProps }>
                 <InspectorControls>
                    <PanelBody>
                    <URLInput
                            value={linkUrl}
                            onChange={ ( linkUrl ) => setAttributes( { linkUrl } ) }
                            label={__("Links To", "carkeek-blocks")}
                        />
                    </PanelBody>
                </InspectorControls>
                <InnerBlocks
                    allowedBlocks={["carkeek-blocks/icon"]}
                    template={[
                        ["carkeek-blocks/icon", {className: 'is-style-circled'}]
                    ]}
                    templateLock={true}
                />
                <RichText
                    tagName = 'p'
                    value={ richText }
                    className={'ck-icon-link-text'}
                    onChange={ ( richText ) => setAttributes( { richText } ) }
                    placeholder={ __('Click to Edit...')}
            />
            </div>
    );
}

export default QuickLinkEdit;
