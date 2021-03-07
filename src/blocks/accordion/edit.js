
import { __ } from "@wordpress/i18n";
import { RichText, InnerBlocks, useBlockProps } from "@wordpress/block-editor";


export default function CollapseSectionEdit( props ) {
    const { attributes, setAttributes } = props;
    const { title } = attributes;
    const
    allowedBlocks = [
        'core/paragraph',
        'core/heading',
        'core/list',
        'core/image'
    ],
    template = [
        [ 'core/paragraph', { placeholder: 'Enter panel content...' } ],
    ];
    const blockProps = useBlockProps();
    return(
        <div {...blockProps} >
            <RichText
                tagName = "div"
                value={ title }
                className={'ck-accordion-button'}
                onChange={ ( title ) => setAttributes( { title } ) }
                placeholder={ __('Section Heading...')}
            />

            <InnerBlocks
                className={'ck-accordion-inner-blocks'}
                allowedBlocks = { allowedBlocks }
                template = { template }
            />
        </div>
    )
}


