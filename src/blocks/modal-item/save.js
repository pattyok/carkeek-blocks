import { ImageSave } from "./image";
import classnames from 'classnames';
import { RichText, useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

function ModalItemSave ({ attributes }) {
    const { title, name, details, blockId, hideImagePreview, hideTitlePreview, modalLayout, mailtoLink } = attributes;
    const blockProps = useBlockProps.save();
    return (
        <div { ...blockProps } className={ classnames(blockProps.className, {
            [ `pos-${ modalLayout }` ]: modalLayout,
            'has-image' : modalLayout !== 'image-hide'
        }) }>
            <div className="ck-modal-item" data-id={blockId}>
            { ! hideImagePreview &&
            <div className="ck-modal-item-image" data-toggle="modal" data-target={`#dialog-${blockId}`}>
                <ImageSave />
            </div>
            }
                <RichText.Content
                    className={"ck-modal-item-name"}
                    tagName="a"
                    value={name}
                    id={`title-${blockId}`}
                    data-toggle="modal"
                    data-target={`#dialog-${blockId}`}
                />

                {title && ! hideTitlePreview && (
                    <RichText.Content
                        className={"ck-modal-item-title"}
                        tagName="p"
                        value={title}
                    />
                )}
             </div>
             <div className="ck-modal-item-dialog modal fade" id={`dialog-${blockId}`} tabIndex="-1" role="dialog" aria-labelledby={`title-${blockId}`} aria-hidden="true">
                 <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                        <RichText.Content
                            className={"ck-modal-item-name"}
                            tagName="div"
                            value={name}
                        />

                        {title && (
                            <RichText.Content
                                className={"ck-modal-item-title"}
                                tagName="p"
                                value={title}
                            />
                        )}
                            {details && (
                                <RichText.Content
                                    className={"ck-modal-item-details"}
                                    tagName="div"
                                    value={details}
                                />
                            )}
                            {mailtoLink && (
                                <a className="ck-modal-item-mailto" href={`mailto:${mailtoLink}`}>Contact</a>
                            )}
                         </div>
                        <div className="modal-footer">
                            <button type="button" data-dismiss="modal">{__('Close', 'carkeek-blocks')}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalItemSave;