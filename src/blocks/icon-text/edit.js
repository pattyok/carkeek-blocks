import classnames from 'classnames';
import {
    URLInput,
    InnerBlocks,
    useBlockProps,
    RichText,
    InspectorControls
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { PanelBody, SelectControl } from "@wordpress/components";


function QuickLinkEdit( props ) {

    const {
        attributes,
        setAttributes
    } = props;
    const {
        linkUrl,
        richText,
        alignItems,
    } = attributes;

    const classes = classnames( {
        [ `align-${ alignItems }` ]: alignItems,
    } );

    const blockProps = useBlockProps( { className: classes } );

    return (
            <div { ...blockProps }>
                 <InspectorControls>
                    <PanelBody>
                    <SelectControl
                        label="Align Items"
                        value={ alignItems }
                        options={ [
                            { label: 'Left', value: 'left' },
                            { label: 'Right', value: 'right' },
                            { label: 'Center', value: 'center' },
                        ] }
                        onChange={ ( alignItems ) => {
                            setAttributes( { alignItems } );
                        } }
                    />
                    <URLInput
                            value={linkUrl}
                            onChange={ ( linkUrl ) => setAttributes( { linkUrl } ) }
                            label={__("Link Icon To", "carkeek-blocks")}
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
