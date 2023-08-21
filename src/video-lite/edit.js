/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
 import { __ } from '@wordpress/i18n';

 /**
  * React hook that is used to mark the block wrapper element.
  * It provides all the necessary props like the class name.
  *
  * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
  */
 import { useBlockProps, BlockControls, InspectorControls, InnerBlocks } from '@wordpress/block-editor';

 import {  TextControl, Button, ToolbarGroup, ToolbarButton, PanelBody } from "@wordpress/components";

 import { useState } from "@wordpress/element";


 import ServerSideRender from '@wordpress/server-side-render';

 import '@justinribeiro/lite-youtube';
 import '@slightlyoff/lite-vimeo';


 import './editor.scss';
 /**
  * The edit function describes the structure of your block in the context of the
  * editor. This represents what the editor will render when the block is used.
  *
  * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
  *
  * @return {WPElement} Element to render.
  */

/** https://awhitepixel.com/blog/wordpress-gutenberg-add-image-select-custom-block/ */

function Edit( props ) {
	const { attributes, setAttributes, name } = props;
	const { videoId, source, videoUrl } = attributes;
	const editMode = ( videoId && source ) ? false : true;

	const [isEditing, setEditing] = useState( editMode );
	const [isError, setError] = useState( false );


	const setVideoId = ( videoUrl ) => {
		if ( videoUrl ) {
			const url = new URL( videoUrl );
			const path = url.pathname.split( '/' );
			let videoId = path[ path.length - 1 ];

			if ( url.hostname.includes( 'youtu.be' ) ) {
				setAttributes( { source: 'youtube' } );
				setAttributes( { videoId } );
				setError( false );
			} else if ( url.hostname == 'vimeo.com' ) {
				setAttributes( { source: 'vimeo' } );
				setError( false );
				setAttributes( { videoId } );
			} else if ( url.hostname.includes( 'youtube.com' ) ) {
				setAttributes( { source: 'youtube' } );
				const params = url.searchParams;
				const youtubeId = params.get( 'v' );
				if ( youtubeId ) {
					setError( false );
					setAttributes( { videoId: youtubeId } );
				} else {
					setError( true );
					setAttributes( { videoId: '' } );
				}
			} else {
				setError( true );
				setAttributes( { youtubeId: '' } );
			}
			setEditing( false );
		}
	}

	const onSelectMedia = (media) => {
		setAttributes({
			mediaId: media.id,
			mediaUrl: media.url
		});
	}

	const removeMedia = () => {
		props.setAttributes({
			mediaId: 0,
			mediaUrl: ''
		});
	}

	const template = [
        [ 'core/paragraph', { align: 'center', placeholder: 'Enter video caption...' } ],
    ];

	const ToolbarEdit = () => {
		return (
			<ToolbarGroup>
				<ToolbarButton
					icon="edit"
					label="Edit Video"
					onClick={ () => setEditing( !isEditing ) }
				/>
			</ToolbarGroup>
		);
	}
	if ( ! videoId || isEditing) {
		return (
			<div { ...useBlockProps() }>
				<BlockControls>
					<ToolbarEdit />
				</BlockControls>
				<div className="video-lite-wrapper">
				<h3>Lite Video Embed</h3>
				<p>Enter the URL of your video in one of the formats as shown below</p>
					<ul><li><strong>Vimeo</strong> https://vimeo.com/123456789</li>
					<li><strong>Youtube</strong> https://youtu.be/a123b456 OR https://www.youtube.com/watch?v=a123b456</li></ul>
				<TextControl
					label="Video URL"
					value={ videoUrl }
					onChange={ ( videoUrl ) => setAttributes( { videoUrl } ) }
				/>
				{isError && (
					<p className="error">Sorry, that does not look like a properly formed Vimeo or Youtube Url.</p>
				)}
				<Button
					onClick={ () => setVideoId( videoUrl ) }
				>
					{ __( 'Set Video' ) }
				</Button>
				</div>
			</div>
		);
	} else {
		return (
			<div { ...useBlockProps() }>
				<BlockControls>
					<ToolbarEdit />
				</BlockControls>
				<InspectorControls>
					<PanelBody
						title={ __( 'Backround Image' ) }
						initialOpen={ true }
					>

					</PanelBody>
				</InspectorControls>
				<ServerSideRender
					block={name}
					attributes={ attributes }
				/>
				<InnerBlocks
					className={'ck-video-lite-inner-blocks'}
					template = { template }
				/>
			</div>
		);
	}
 }

 export default Edit;
