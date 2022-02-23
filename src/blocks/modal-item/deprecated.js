import { ImageSave } from "./image";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import classnames from 'classnames';
import { __ } from "@wordpress/i18n";

const deprecated = [
    {
        attributes: {
            name: {
                type: "string",
                source: "html",
                selector: ".ck-modal-item-name"
            },
            title: {
                type: "string",
                source: "html",
                selector: ".ck-modal-item-title"
            },
            details: {
                type: "string",
                source: "html",
                selector: ".ck-modal-item-details"
            },
            blockId: {
                type: "string",
                source: "attribute",
                selector: '.ck-modal-item',
                attribute: 'data-id'
            },
            hideImagePreview: {
                type: 'boolean',
                default: false
            },
            hideTitlePreview: {
                type: 'boolean',
                default: false
            }
        },
        save({ attributes } ) {
            const { title, name, details, blockId, hideImagePreview, hideTitlePreview, modalLayout } = attributes;
    const blockProps = useBlockProps.save();
    return (
        <div { ...blockProps } className={ classnames(blockProps.className, {
            [ `pos-${ modalLayout }` ]: modalLayout,
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
                        <ImageSave />

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
                                    tagName="p"
                                    value={details}
                                />
                            )}
                         </div>
                        <div className="modal-footer">
                            <a data-dismiss="modal">{__('Close', 'carkeek-blocks')}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        }
    },
    {
        attributes: {
            name: {
                type: "string",
                source: "html",
                selector: ".ck-modal-item-name"
            },
            title: {
                type: "string",
                source: "html",
                selector: ".ck-modal-item-title"
            },
            details: {
                type: "string",
                source: "html",
                selector: ".ck-modal-item-details"
            },
            blockId: {
                type: "string",
                source: "attribute",
                selector: '.ck-modal-item',
                attribute: 'data-id'
            },
            hideImagePreview: {
                type: 'boolean',
                default: false
            },
            hideTitlePreview: {
                type: 'boolean',
                default: false
            }
        },
        save({ attributes } ) {
            const { title, name, details, blockId, hideImagePreview, hideTitlePreview } = attributes;
            const blockProps = useBlockProps.save();
            return (
                <div { ...blockProps }>
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
                                <ImageSave />

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
                                            tagName="p"
                                            value={details}
                                        />
                                    )}
                                 </div>
                                <div className="modal-footer">
                                    <a data-dismiss="modal">{__('Close', 'carkeek-blocks')}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    },
    {
        attributes: {
            name: {
                type: "string",
                source: "html",
                selector: ".ck-modal-item-name"
            },
            title: {
                type: "string",
                source: "html",
                selector: ".ck-modal-item-title"
            },
            details: {
                type: "string",
                source: "html",
                selector: ".ck-modal-item-details"
            },
            blockId: {
                type: "string",
                source: "attribute",
                selector: '.ck-modal-item',
                attribute: 'data-id'
            },
        },
        save({ attributes } ) {
            const { title, name, details, blockId } = attributes;
            const blockProps = useBlockProps.save();
            return (
                <div { ...blockProps }>
                    <div className="ck-modal-item" data-id={blockId}>
                    <div className="ck-modal-item-image" data-toggle="modal" data-target={`#dialog-${blockId}`}>
                        <ImageSave />
                    </div>

                        <RichText.Content
                            className={"ck-modal-item-name"}
                            tagName="a"
                            value={name}
                            id={`title-${blockId}`}
                            data-toggle="modal"
                            data-target={`#dialog-${blockId}`}
                        />

                        {title && (
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
                                <ImageSave />

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
                                            tagName="p"
                                            value={details}
                                        />
                                    )}
                                </div>
                                <div className="modal-footer">
                                    <a data-dismiss="modal">{__('Close', 'carkeek-blocks')}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
]

export default deprecated;