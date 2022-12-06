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
 import { useBlockProps, RichText, InspectorControls, PanelColorSettings, withColors } from '@wordpress/block-editor';

 import { __experimentalNumberControl as NumberControl, PanelBody, TextControl, ToggleControl } from "@wordpress/components";

 import ServerSideRender from '@wordpress/server-side-render';

 import './editor.scss';
 /**
  * The edit function describes the structure of your block in the context of the
  * editor. This represents what the editor will render when the block is used.
  *
  * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
  *
  * @return {WPElement} Element to render.
  */
function Edit( props ) {
	const { name, attributes, setAttributes, setColor, setBackgroundColor, color, backgroundColor } = props;
	const { textBefore, numberVal, max, textAfter, isPercentage, colorHex} = attributes;
	const maxVal = isPercentage ? 100 : max;
	const r = 145;
	const circle = Math.PI * (r * 2);
	const pct = ((maxVal - numberVal) / maxVal) * circle;

	function onChangeColor( value ) {
		setColor( value );
		setAttributes( { colorHex: value } );
	}

	function onChangeBackgroundColor( value ) {
		setBackgroundColor( value );
		setAttributes( { backgroundColorHex: value } );
	}

	 const blockProps = useBlockProps();
		 // Update the child block's attributes

		 return (
			 <div { ...blockProps}>
				 <InspectorControls>
					<PanelBody title={__('Text & Number settings')}>
						<TextControl
							label="Text Before Number"
							value={ textBefore }
							onChange={ ( textBefore ) => setAttributes( { textBefore } ) }
						/>
						<NumberControl
							isShiftStepEnabled={ true }
							onChange={ ( numberVal ) => setAttributes( { numberVal: parseInt(numberVal) } ) }
							shiftStep={ 1 }
							value={ numberVal }
							label={ __( 'Number', 'carkeek-blocks' ) }
						/>
						<ToggleControl
							label="Express as a Percentage"
							checked={ isPercentage }
							onChange={ ( isPercentage ) => setAttributes( { isPercentage } ) }
						/>
						{ !isPercentage && (
						<NumberControl
							isShiftStepEnabled={ true }
							onChange={ ( value ) => setAttributes( { max: parseInt(value) } ) }
							shiftStep={ 1 }
							value={ max }
							label={ __( 'Max Value', 'carkeek-blocks' ) }
						/>)}
						<TextControl
							label="Text After Number"
							value={ textAfter }
							onChange={ ( textAfter ) => setAttributes( { textAfter } ) }
						/>

						</PanelBody>
						<PanelColorSettings
							title={__('Color settings')}
							colorSettings={[
								{
									value: color.color,
									onChange: onChangeColor,
									label: __('Highlight color')
								},
								{
									value: backgroundColor.color,
									onChange: onChangeBackgroundColor,
									label: __('Background color')
								},
							]}
						/>
					</InspectorControls>
					<ServerSideRender
						block={name}
						attributes={ attributes }
					/>

		 </div>
	 );
 }

 export default withColors('backgroundColor', 'color')(Edit);
