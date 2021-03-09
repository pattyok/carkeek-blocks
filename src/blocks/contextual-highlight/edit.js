import {
    InnerBlocks,
    RichText,
    useBlockProps
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

function ContextualHighlightText( props ) {

    const {
        attributes,
        setAttributes,
    } = props;
    const {
        headline,
    } = attributes;


    const blockProps = useBlockProps();

    return (
        <div { ...blockProps }>
            <RichText
                tagName="div" // The tag here is the element output and editable in the admin
                className={'highlight-headline'}
                value={ headline } // Any existing content, either from the database or an attribute default
                allowedFormats={ [ 'core/italic', 'core/link' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
                onChange={ ( headline ) => setAttributes( { headline } ) } // Store updated content as a block attribute
                placeholder={ __( 'Heading...' ) } // Display this text before any content has been added by the user
            />
            <InnerBlocks
                allowedBlocks={["core/paragraph", "core/heading", "core/buttons"]}
                templateLock={false}
                />
        </div>
    );
}

export default ContextualHighlightText;
