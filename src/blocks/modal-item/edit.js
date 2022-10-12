import { ImageEdit } from "./image";
import { hasSelectedInnerBlock } from "../../resources/shared";
import classnames from 'classnames';

import {
    RichText,
    useBlockProps,
    InspectorControls
} from "@wordpress/block-editor";

import { PanelBody, RadioControl, ToggleControl, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

function ModalItemEdit( props ) {

    //console.log(this.props);
    const { attributes, isSelected, clientId, setAttributes } = props;
    const { title, name, details, blockId, hideImagePreview, hideTitlePreview, modalLayout, mailtoLink } = attributes;

    if ( ! blockId ) {
        setAttributes( { blockId: clientId } );
    }
    const blockProps = useBlockProps();

    return(
        <div {...blockProps}
        className={ classnames(blockProps.className, {
            [ `pos-${ modalLayout }` ]: modalLayout,
        }) }>
            <InspectorControls>
                <PanelBody>
                <ToggleControl
                    label={__("Hide Image in Preview")}
                    checked={ hideImagePreview }
                    onChange={value =>
                        setAttributes({ hideImagePreview: value })
                    }
                />

                <ToggleControl
                    label={__("Hide Title in Preview")}
                    checked={ hideTitlePreview }
                    onChange={value =>
                        setAttributes({ hideTitlePreview: value })
                    }
                />
                <RadioControl
                    label="Modal Window Image Layout"
                    help="Control the size of the image in the modal view"
                    selected={ modalLayout }
                    options={ [
                        { label: 'Large', value: 'image-large' },
                        { label: 'Small', value: 'image-small' },
                        { label: 'Hide', value: 'image-hide' },
                    ] }
                    onChange={value =>
                        setAttributes({ modalLayout: value })
                    }
                />
                </PanelBody>
            </InspectorControls>

            { (!hideImagePreview || isSelected || hasSelectedInnerBlock(props)) &&
                <ImageEdit />
            }
                <RichText
                    className={"ck-modal-name"}
                    tagName="div"
                    onChange={ ( name ) => setAttributes( { name } ) }
                    value={ name }
                    placeholder={__("Member Name", "carkeek-blocks")}
                    formatingCowithoutInteractiveFormatting={true}
                    allowedFormats={[]}
                />
                { (!hideTitlePreview || isSelected || hasSelectedInnerBlock(props)) &&
                <RichText
                    className={"ck-modal-title"}
                    tagName="div"
                    onChange={ ( title ) => setAttributes( { title } ) }
                    value={title}
                    placeholder={isSelected ? __("Member Title", "carkeek-blocks") : null}
                    allowedFormats={[]}
                    withoutInteractiveFormatting={true}
                />
                }

                { (isSelected || hasSelectedInnerBlock(props)) &&
                <>
                    <TextControl
                        value={mailtoLink}
                        className="block-editor-media-placeholder__url-input-field"
                        onChange={ ( mailtoLink ) => setAttributes( { mailtoLink } ) }
                        label={__("Email Address", "carkeek-blocks")}
                    />
                    <RichText
                        className={"ck-modal-details"}
                        tagName="div"
                        multiline="p"
                        onChange={ ( details ) => setAttributes( { details } ) }
                        value={details}
                        placeholder={__("Member Details", "carkeek-blocks")}
                        preserveWhiteSpace={true}
                    />
                </>
                }
        </div>
    )
}


export default ModalItemEdit;


