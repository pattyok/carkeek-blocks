import { ImageEdit } from "./image";
import { hasSelectedInnerBlock } from "../../resources/shared";
import classnames from 'classnames';

import {
    RichText,
    useBlockProps,
    InspectorControls,
} from "@wordpress/block-editor";

import { PanelBody, RadioControl, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

function ModalItemEdit( props ) {

    //console.log(this.props);
    const { attributes, isSelected, clientId, setAttributes } = props;
    const { title, name, details, blockId, hideImagePreview, hideTitlePreview, modalLayout } = attributes;

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
                    formatingControls={[]}
                />
                { (!hideTitlePreview || isSelected || hasSelectedInnerBlock(props)) &&
                <RichText
                    className={"ck-modal-title"}
                    tagName="div"
                    onChange={ ( title ) => setAttributes( { title } ) }
                    value={title}
                    placeholder={isSelected ? __("Member Title", "carkeek-blocks") : null}
                    formatingControls={[]}
                />
                }

                { (isSelected || hasSelectedInnerBlock(props)) &&
                <>
                    <RichText
                        className={"ck-modal-details"}
                        tagName="p"
                        onChange={ ( details ) => setAttributes( { details } ) }
                        value={details}
                        placeholder={__("Member Details", "carkeek-blocks")}
                        formatingControls={[]}
                    />
                </>
                }
        </div>
    )
}


export default ModalItemEdit;


