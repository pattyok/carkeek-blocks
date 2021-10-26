import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { isBlobURL } from '@wordpress/blob';
import { withSelect } from '@wordpress/data';
import {  useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { FocalPointPicker, PanelBody, Spinner } from "@wordpress/components";

import "./style.editor.css";
import icons from "../../resources/icons";

registerBlockType("carkeek-blocks/featured-image", {
    apiVersion: 2,
    title: __("Featured Image", "carkeek-blocks"),
    description: __(
        "Place the featured image within your page",
        "carkeek-blocks"
    ),
    icon: icons.featuredimage,
    category: "widgets",
    supports: {
        align: ["wide", "full", "left", "center", "right"],
        alignWide: true,
        anchor: false,
        spacing: true
    },
    styles: [
        {
            name: 'landscape',
            label: __( 'Landscape' ),
            isDefault: true
        },
        {
            name: 'square',
            label: __( 'Square' )
        },
        {
            name: 'portrait',
            label: __( 'Portrait' )
        },
        {
            name: 'no-crop',
            label: __( 'No Crop' )
        },
    ],
    attributes: {
        focalPoint: {
            type: "object"
        },
        blockId: {
            type: "string"
        }
    },
    edit: withSelect(
        ( select ) => {
            const { getEditedPostAttribute } = select( 'core/editor' );
            const { getMedia } = select( 'core' );
            const featuredImageId = getEditedPostAttribute( 'featured_media' );
            const featuredMedia = featuredImageId ? getMedia(featuredImageId) : null;
            return {
                featuredMedia
            };
        } ) ( props => {
        const blockProps = useBlockProps();
        const {
            featuredMedia,
            attributes,
            setAttributes,
            clientId
        } = props;
        const {
            focalPoint,
            blockId,
        } = attributes;
        if ( ! blockId ) {
            setAttributes( { blockId: clientId } );
        }
        let url, width, height;
        if ( featuredMedia && featuredMedia.source_url ) {
            url = featuredMedia.source_url;
            width = featuredMedia.width;
            height = featuredMedia.height;
        }

        let imageStyle = {};
        if (focalPoint) {
            imageStyle.objectPosition = `${focalPoint.x *
                100}% ${focalPoint.y * 100}%`;
        }

        let img = (
            <>
                <img
                    src={ url }
                    style = { imageStyle }
                    role = "presentation"
                />
                { isBlobURL( url ) && <Spinner /> }
            </>
        );

        return (
            <>
            { url ?

                <div { ...blockProps } >

                    <InspectorControls>
                        <PanelBody title={ __( 'Image settings' ) }>
                            <FocalPointPicker
                                label={__("Focal Point", "carkeek-blocks")}
                                url={ url }
                                dimensions={ { width, height } }
                                onChange={newFocalPoint =>
                                    setAttributes({
                                        focalPoint: newFocalPoint
                                    })
                                }
                                value={focalPoint}
                            />
                        </PanelBody>
                    </InspectorControls>
                    {img}
                 </div>
            :
                <div className="empty-block">
                    <div className="empty-block__icon">{icons.featuredimage}</div>
                    <div className="empty-block__content">
                    <p className="empty-block__title">{__('Featured Image Block.', 'carkeek-blocks')}</p>
                    <p className="empty-block__text">{__('Set the featured image in the Page Settings pane', 'carkeek-blocks')}</p>
                    </div>
                </div>
            }
            </>
        )
    }),
    save( ) {
        return null;
    }
});