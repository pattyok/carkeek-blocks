
import { __ } from "@wordpress/i18n";
import { RichText, InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import { select } from "@wordpress/data";


export default function CollapseSectionEdit( props ) {
    const { attributes, setAttributes, clientId } = props;
    const { title, inheritedHeaderStyle } = attributes;

    if (!inheritedHeaderStyle) {
        var parent = select('core/block-editor').getBlockParents(clientId);
        const parentAtts = select('core/block-editor').getBlockAttributes(parent);
        setAttributes( { inheritedHeaderStyle: parentAtts.headerStyle } )
    }

    const
    allowedBlocks = [
        'core/paragraph',
        'core/heading',
        'core/list',
        'core/image',
        'carkeek-blocks/custom-link-list'
    ],
    template = [
        [ 'core/paragraph', { placeholder: 'Enter panel content...' } ],
    ];

    const blockProps = useBlockProps();
        // Update the child block's attributes

        return (
            <div { ...blockProps}>
            <RichText
                tagName = { inheritedHeaderStyle }
                value={ title }
                className={'ck-accordion-button'}
                onChange={ ( title ) => setAttributes( { title } ) }
                placeholder={ __('Section Heading...')}
            />
            <div className="ck-accordion-panel">
            <InnerBlocks
                className={'ck-accordion-inner-blocks'}
                allowedBlocks = { allowedBlocks }
                template = { template }
            />
            </div>
        </div>
    )
}


