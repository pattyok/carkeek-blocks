import classnames from 'classnames';
import {
    URLInput,
    InnerBlocks,
    RichText,
    useBlockProps
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import {
    TextControl,
} from "@wordpress/components";


export default function QuickLinkEdit( props ) {
    const {
        attributes,
        isSelected,
        setAttributes,
    } = props;
    const {
        linkUrl,
        linkTitle,
        pageIntro,
    } = attributes;

    const blockProps = useBlockProps();

    return (
        <>

            <div { ...blockProps }>

                    <>
                        <InnerBlocks
                            allowedBlocks={["carkeek-blocks/icon"]}
                            template={[
                                ["carkeek-blocks/icon", {className: 'is-style-small'}]
                            ]}
                            templateLock={true}
                        />

                    {isSelected ?
                        <>
                                <TextControl
                                    className={
                                        "wp-block-carkeek-blocks-page-link__title_edit"
                                    }
                                    onChange={ ( linkTitle ) => setAttributes( { linkTitle } ) }
                                    value={linkTitle}
                                    label={__(
                                        "Link Title",
                                        "carkeek-blocks"
                                    )}
                                />

                                <URLInput
                                    value={linkUrl}
                                    onChange={ ( linkUrl ) => setAttributes( { linkUrl } ) }
                                    label={__("Links To", "carkeek-blocks")}
                                />
                                <RichText
                                    className={'page-link--description'}
                                    tagName="div"
                                    value={ pageIntro }
                                    allowedFormats={ [ 'core/bold', 'core/italic' ] }
                                    onChange={ ( pageIntro ) => setAttributes( { pageIntro } ) }
                                    placeholder={ __( 'Add a description of the page...' ) }
                                />
                            </>
                        :  <>
                        <div className={ classnames('page-link', {
                            'has-link' : linkUrl
                        })}>{ linkTitle ? linkTitle : 'Click to Edit' }</div>
                        <div className="page-link-description">{  pageIntro }</div>
                        </>
                        }
                    </>
            </div>
        </>
    );
}



