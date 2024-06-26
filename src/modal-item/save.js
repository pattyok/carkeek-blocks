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

			<a href="javascript:;" class="ck-modal-item-image" aria-controls={`dialog-${blockId}`}>
                <ImageSave />
            </a>
            }
                <RichText.Content
                    className={"ck-modal-item-name"}
                    tagName="a"
                    value={name}
                    id={`title-${blockId}`}
					aria-controls={`dialog-${blockId}`}
                />

                {title && ! hideTitlePreview && (
                    <RichText.Content
                        className={"ck-modal-item-title"}
                        tagName="p"
                        value={title}
                    />
                )}
             </div>
			 <div class="ck-modal-item-dialog modal2 modal--animate-scale js-modal" id={`dialog-${blockId}`} >

                    <div className="modal__content">
                        <div className="modal-header">
							<button class="modal__close-btn modal__close-btn--inner mc4-hide@md js-modal__close js-tab-focus">
								<svg class="mc4-icon mc4-icon--xs" viewBox="0 0 16 16">
								<title>Close modal window</title>
								<g stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
									<line x1="13.5" y1="2.5" x2="2.5" y2="13.5"></line>
									<line x1="2.5" y1="2.5" x2="13.5" y2="13.5"></line>
								</g>
								</svg>
							</button>
                        </div>
                        <div className="modal-body">
                        <div className="ck-modal-item-header">
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
                        </div>
                            {details && (
                                <RichText.Content
                                    className={"ck-modal-item-details"}
                                    tagName="div"
                                    value={details}
                                />
                            )}
                            {mailtoLink && (
                                <a className="ck-modal-item-mailto arrow-link" href={`mailto:${mailtoLink}`}>Contact</a>
                            )}
                         </div>
						 <footer class="modal-footer">
				<button class="modal__close-btn modal__close-btn--outer js-modal__close js-tab-focus">

					Close


  				</button>
				</footer>
                    </div>
                </div>
        </div>
    )
}

export default ModalItemSave;
