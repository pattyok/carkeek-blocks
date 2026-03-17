import { useBlockProps, InspectorControls, BlockControls, MediaPlaceholder, MediaUpload, MediaUploadCheck, PanelColorSettings } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { PanelBody, RangeControl, ToggleControl, TextControl, Button, FocalPointPicker, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { useRef, useLayoutEffect, useState } from '@wordpress/element';
import { useMergeRefs } from '@wordpress/compose';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const {
		beforeImageId,
		beforeImageUrl,
		beforeImageAlt,
		beforeFocalX,
		beforeFocalY,
		afterImageId,
		afterImageUrl,
		afterImageAlt,
		afterFocalX,
		afterFocalY,
		showLabels,
		beforeLabel,
		afterLabel,
		initialPosition,
		blockHeight,
		sliderColor,
		dividerWidth,
		dividerColor,
	} = attributes;

	const containerRef = useRef( null );
	const [ containerWidth, setContainerWidth ] = useState( 0 );

	useLayoutEffect( () => {
		const el = containerRef.current;
		if ( ! el ) return;

		const update = () => setContainerWidth( el.offsetWidth );
		update();

		const ro = new ResizeObserver( update );
		ro.observe( el );
		return () => ro.disconnect();
	}, [] );

	const blockProps = useBlockProps( { className: 'cd-image-container ck-ic-editor' } );
	// Merge Gutenberg's internal selection ref with our ResizeObserver ref
	const combinedRef = useMergeRefs( [ blockProps.ref, containerRef ] );

	const hasBothImages = beforeImageUrl && afterImageUrl;

	const containerStyle = {
		height: hasBothImages ? blockHeight + 'px' : 'auto',
		'--ck-ic-divider-width': dividerWidth + 'px',
		'--ck-ic-divider-color': dividerColor,
	};

	// Image 2 (after) is the base layer — right side, full cover.
	const img2BaseStyle = {
		objectFit: 'cover',
		objectPosition: `${ afterFocalX * 100 }% ${ afterFocalY * 100 }%`,
		width: '100%',
		height: '100%',
		display: 'block',
	};

	// Image 1 (before) is the clip layer — left side, absolute + containerWidth for focal point.
	const img1ClipStyle = {
		objectFit: 'cover',
		objectPosition: `${ beforeFocalX * 100 }% ${ beforeFocalY * 100 }%`,
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100%',
		width: containerWidth ? containerWidth + 'px' : '100%',
		maxWidth: 'none',
		display: 'block',
	};

	function onSelectBefore( media ) {
		setAttributes( {
			beforeImageId: media.id,
			beforeImageUrl: media.url,
			beforeImageAlt: media.alt || '',
		} );
	}

	function onSelectAfter( media ) {
		setAttributes( {
			afterImageId: media.id,
			afterImageUrl: media.url,
			afterImageAlt: media.alt || '',
		} );
	}

	function removeBefore() {
		setAttributes( { beforeImageId: undefined, beforeImageUrl: '', beforeImageAlt: '' } );
	}

	function removeAfter() {
		setAttributes( { afterImageId: undefined, afterImageUrl: '', afterImageAlt: '' } );
	}

	function swapImages() {
		setAttributes( {
			beforeImageId: afterImageId,
			beforeImageUrl: afterImageUrl,
			beforeImageAlt: afterImageAlt,
			beforeFocalX: afterFocalX,
			beforeFocalY: afterFocalY,
			beforeLabel: afterLabel,
			afterImageId: beforeImageId,
			afterImageUrl: beforeImageUrl,
			afterImageAlt: beforeImageAlt,
			afterFocalX: beforeFocalX,
			afterFocalY: beforeFocalY,
			afterLabel: beforeLabel,
		} );
	}

	return (
		<figure { ...blockProps } ref={ combinedRef } style={ containerStyle }>
			{ hasBothImages && (
				<BlockControls>
					<ToolbarGroup>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ onSelectBefore }
								allowedTypes={ [ 'image' ] }
								value={ beforeImageId }
								render={ ( { open } ) => (
									<ToolbarButton
										icon="images-alt2"
										label={ __( 'Replace Image 1', 'carkeek-blocks' ) }
										onClick={ open }
									>
										{ __( 'Image 1', 'carkeek-blocks' ) }
									</ToolbarButton>
								) }
							/>
						</MediaUploadCheck>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ onSelectAfter }
								allowedTypes={ [ 'image' ] }
								value={ afterImageId }
								render={ ( { open } ) => (
									<ToolbarButton
										icon="images-alt2"
										label={ __( 'Replace Image 2', 'carkeek-blocks' ) }
										onClick={ open }
									>
										{ __( 'Image 2', 'carkeek-blocks' ) }
									</ToolbarButton>
								) }
							/>
						</MediaUploadCheck>
						<ToolbarButton
							icon="randomize"
							label={ __( 'Swap Images', 'carkeek-blocks' ) }
							onClick={ swapImages }
						/>
					</ToolbarGroup>
				</BlockControls>
			) }
			<InspectorControls>
				<PanelBody title={ __( 'Image 1', 'carkeek-blocks' ) } initialOpen={ true }>
					{ beforeImageUrl ? (
						<>
							<FocalPointPicker
								label={ __( 'Focal Point', 'carkeek-blocks' ) }
								url={ beforeImageUrl }
								value={ { x: beforeFocalX, y: beforeFocalY } }
								onChange={ ( fp ) =>
									setAttributes( { beforeFocalX: fp.x, beforeFocalY: fp.y } )
								}
							/>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={ onSelectBefore }
									allowedTypes={ [ 'image' ] }
									value={ beforeImageId }
									render={ ( { open } ) => (
										<Button
											variant="secondary"
											onClick={ open }
											style={ { marginTop: '8px', marginRight: '8px' } }
										>
											{ __( 'Replace', 'carkeek-blocks' ) }
										</Button>
									) }
								/>
							</MediaUploadCheck>
							<Button
								variant="link"
								isDestructive
								onClick={ removeBefore }
								style={ { marginTop: '8px' } }
							>
								{ __( 'Remove', 'carkeek-blocks' ) }
							</Button>
						</>
					) : (
						<p className="ck-ic-no-image">
							{ __( 'Add Image 1 in the block area.', 'carkeek-blocks' ) }
						</p>
					) }
				</PanelBody>

				<PanelBody title={ __( 'Image 2', 'carkeek-blocks' ) } initialOpen={ true }>
					{ afterImageUrl ? (
						<>
							<FocalPointPicker
								label={ __( 'Focal Point', 'carkeek-blocks' ) }
								url={ afterImageUrl }
								value={ { x: afterFocalX, y: afterFocalY } }
								onChange={ ( fp ) =>
									setAttributes( { afterFocalX: fp.x, afterFocalY: fp.y } )
								}
							/>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={ onSelectAfter }
									allowedTypes={ [ 'image' ] }
									value={ afterImageId }
									render={ ( { open } ) => (
										<Button
											variant="secondary"
											onClick={ open }
											style={ { marginTop: '8px', marginRight: '8px' } }
										>
											{ __( 'Replace', 'carkeek-blocks' ) }
										</Button>
									) }
								/>
							</MediaUploadCheck>
							<Button
								variant="link"
								isDestructive
								onClick={ removeAfter }
								style={ { marginTop: '8px' } }
							>
								{ __( 'Remove', 'carkeek-blocks' ) }
							</Button>
						</>
					) : (
						<p className="ck-ic-no-image">
							{ __( 'Add Image 2 in the block area.', 'carkeek-blocks' ) }
						</p>
					) }
				</PanelBody>

				<PanelBody title={ __( 'Slider Settings', 'carkeek-blocks' ) } initialOpen={ true }>
					<RangeControl
						label={ __( 'Initial Position (%)', 'carkeek-blocks' ) }
						value={ initialPosition }
						onChange={ ( value ) => setAttributes( { initialPosition: value } ) }
						min={ 0 }
						max={ 100 }
						step={ 1 }
					/>
					<RangeControl
						label={ __( 'Block Height (px)', 'carkeek-blocks' ) }
						value={ blockHeight }
						onChange={ ( value ) => setAttributes( { blockHeight: value } ) }
						min={ 100 }
						max={ 800 }
						step={ 10 }
					/>
					<RangeControl
						label={ __( 'Divider Width (px)', 'carkeek-blocks' ) }
						value={ dividerWidth }
						onChange={ ( value ) => setAttributes( { dividerWidth: value } ) }
						min={ 0 }
						max={ 30 }
						step={ 1 }
						help={ __( 'Set to 0 to hide the divider line.', 'carkeek-blocks' ) }
					/>
					<ToggleControl
						label={ __( 'Show Labels', 'carkeek-blocks' ) }
						checked={ showLabels }
						onChange={ ( value ) => setAttributes( { showLabels: value } ) }
					/>
					{ showLabels && (
						<>
							<TextControl
								label={ __( 'Image 1 Label', 'carkeek-blocks' ) }
								value={ beforeLabel }
								onChange={ ( value ) => setAttributes( { beforeLabel: value } ) }
							/>
							<TextControl
								label={ __( 'Image 2 Label', 'carkeek-blocks' ) }
								value={ afterLabel }
								onChange={ ( value ) => setAttributes( { afterLabel: value } ) }
							/>
						</>
					) }
				</PanelBody>

				<PanelColorSettings
					title={ __( 'Colors', 'carkeek-blocks' ) }
					initialOpen={ false }
					colorSettings={ [
						{
							value: sliderColor,
							onChange: ( value ) => setAttributes( { sliderColor: value || '#dc717d' } ),
							label: __( 'Handle Color', 'carkeek-blocks' ),
						},
						{
							value: dividerColor,
							onChange: ( value ) => setAttributes( { dividerColor: value || '#ffffff' } ),
							label: __( 'Divider Color', 'carkeek-blocks' ),
						},
					] }
				/>
			</InspectorControls>

			{ /* Setup state: one or both images missing */ }
			{ ! hasBothImages && (
				<div className="ck-ic-setup">
					<div className="ck-ic-setup-panel">
						{ beforeImageUrl ? (
							<MediaUploadCheck>
								<MediaUpload
									onSelect={ onSelectBefore }
									allowedTypes={ [ 'image' ] }
									value={ beforeImageId }
									render={ ( { open } ) => (
										<button
											className="ck-ic-setup-replace"
											onClick={ open }
										>
											<img
												src={ beforeImageUrl }
												alt={ beforeImageAlt }
												className="ck-ic-setup-thumb"
											/>
											<span className="ck-ic-setup-label">
												{ __( 'Image 1 — click to replace', 'carkeek-blocks' ) }
											</span>
										</button>
									) }
								/>
							</MediaUploadCheck>
						) : (
							<MediaUploadCheck>
								<MediaPlaceholder
									icon="format-image"
									labels={ { title: __( 'Image 1', 'carkeek-blocks' ) } }
									onSelect={ onSelectBefore }
									accept="image/*"
									allowedTypes={ [ 'image' ] }
								/>
							</MediaUploadCheck>
						) }
					</div>
					<div className="ck-ic-setup-panel">
						{ afterImageUrl ? (
							<MediaUploadCheck>
								<MediaUpload
									onSelect={ onSelectAfter }
									allowedTypes={ [ 'image' ] }
									value={ afterImageId }
									render={ ( { open } ) => (
										<button
											className="ck-ic-setup-replace"
											onClick={ open }
										>
											<img
												src={ afterImageUrl }
												alt={ afterImageAlt }
												className="ck-ic-setup-thumb"
											/>
											<span className="ck-ic-setup-label">
												{ __( 'Image 2 — click to replace', 'carkeek-blocks' ) }
											</span>
										</button>
									) }
								/>
							</MediaUploadCheck>
						) : (
							<MediaUploadCheck>
								<MediaPlaceholder
									icon="format-image"
									labels={ { title: __( 'Image 2', 'carkeek-blocks' ) } }
									onSelect={ onSelectAfter }
									accept="image/*"
									allowedTypes={ [ 'image' ] }
								/>
							</MediaUploadCheck>
						) }
					</div>
				</div>
			) }

			{ /* Preview state: both images set */ }
			{ hasBothImages && (
				<>
					{ /* Image 2 — base layer, right side */ }
					<img
						src={ afterImageUrl }
						alt={ afterImageAlt }
						style={ img2BaseStyle }
					/>
					{ showLabels && (
						<span className="cd-image-label" data-type="original">
							{ afterLabel }
						</span>
					) }
					{ /* Replace Image 2 button — right side */ }
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ onSelectAfter }
							allowedTypes={ [ 'image' ] }
							value={ afterImageId }
							render={ ( { open } ) => (
								<Button
									className="ck-ic-replace-btn ck-ic-replace-btn--right"
									onClick={ open }
									variant="secondary"
								>
									{ __( 'Replace Image 2', 'carkeek-blocks' ) }
								</Button>
							) }
						/>
					</MediaUploadCheck>
					{ /* Image 1 — clip layer, left side */ }
					<div
						className="cd-resize-img is-preview"
						style={ { width: initialPosition + '%' } }
					>
						<img
							src={ beforeImageUrl }
							alt={ beforeImageAlt }
							style={ img1ClipStyle }
						/>
						{ showLabels && (
							<span className="cd-image-label cd-image-label--visible" data-type="modified">
								{ beforeLabel }
							</span>
						) }
						{ /* Replace Image 1 button — left side */ }
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ onSelectBefore }
								allowedTypes={ [ 'image' ] }
								value={ beforeImageId }
								render={ ( { open } ) => (
									<Button
										className="ck-ic-replace-btn ck-ic-replace-btn--left"
										onClick={ open }
										variant="secondary"
									>
										{ __( 'Replace Image 1', 'carkeek-blocks' ) }
									</Button>
								) }
							/>
						</MediaUploadCheck>
					</div>
					<span
						className="cd-divider cd-divider--preview"
						style={ { left: initialPosition + '%' } }
					></span>
					<span
						className="cd-handle cd-handle--preview"
						style={ {
							left: initialPosition + '%',
							backgroundColor: sliderColor,
						} }
					></span>
				</>
			) }
		</figure>
	);
}
