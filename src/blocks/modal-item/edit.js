import { ImageEdit } from "./image";

import {
    RichText,
    useBlockProps
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

function ModalItemEdit( props ) {

    //console.log(this.props);
    const { className, attributes, isSelected, clientId, setAttributes } = props;
    const { title, name, details, blockId } = attributes;

    if ( ! blockId ) {
        setAttributes( { blockId: clientId } );
    }
    const blockProps = useBlockProps();
    return(
        <div {...blockProps} >
            <div className={className}>
                <ImageEdit />
                <RichText
                    className={"ck-modal-name"}
                    tagName="div"
                    onChange={ ( name ) => setAttributes( { name } ) }
                    value={ name }
                    placeholder={__("Member Name", "carkeek-blocks")}
                    formatingControls={[]}
                />

                <RichText
                    className={"ck-modal-title"}
                    tagName="div"
                    onChange={ ( title ) => setAttributes( { title } ) }
                    value={title}
                    placeholder={isSelected ? __("Member Title", "carkeek-blocks") : null}
                    formatingControls={[]}
                />

                {isSelected &&
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
        </div>
    )
}


export default ModalItemEdit;


