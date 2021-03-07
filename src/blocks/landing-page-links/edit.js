import { Component } from "@wordpress/element";
import {
    URLInput,
    InnerBlocks,
    RichText
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import {
    TextControl,
} from "@wordpress/components";


class QuickLinkEdit extends Component {
    state = {
        selectedLink: null
    };

    componentDidUpdate(prevProps) {
        if (prevProps.isSelected && !this.props.isSelected) {
            this.setState({
                selectedLink: null
            });
        }
    }

    onChangeLinkTitle = linkTitle => {
        this.props.setAttributes({ linkTitle });
    };

    onChangeLink = linkUrl => {
        this.props.setAttributes({ linkUrl });
    };
    render() {
        const {
            attributes,
            isSelected,
            setAttributes,
        } = this.props;
        const {
            linkUrl,
            linkTitle,
            pageIntro,
        } = attributes;

        return (
            <>

                <div className={'wp-block-carkeek-blocks-page-link'}>

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
                                        onChange={this.onChangeLinkTitle}
                                        value={linkTitle}
                                        label={__(
                                            "Link Title",
                                            "carkeek-blocks"
                                        )}
                                    />

                                    <URLInput
                                        value={linkUrl}
                                        onChange={this.onChangeLink}
                                        label={__("Links To", "carkeek-blocks")}
                                    />
                                    <RichText
                                        className={'page-link--description'}
                                        tagName="div" // The tag here is the element output and editable in the admin
                                        value={ pageIntro } // Any existing content, either from the database or an attribute default
                                        allowedFormats={ [ 'core/bold', 'core/italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
                                        onChange={ ( pageIntro ) => setAttributes( { pageIntro } ) } // Store updated content as a block attribute
                                        placeholder={ __( 'Lorem ipsum...' ) } // Display this text before any content has been added by the user
                                    />
                                </>
                            :  <>
                            <div className="page-link">{ linkTitle ? linkTitle : 'Click to Edit' }</div>
                            <div className="page-link--description">{  pageIntro }</div>
                            </>
                            }
                        </>
                </div>
            </>
        );
    }
}

export default QuickLinkEdit;
