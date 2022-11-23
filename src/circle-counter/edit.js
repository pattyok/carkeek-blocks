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

 import { __experimentalNumberControl as NumberControl, PanelBody, ColorPalette, ToggleControl, RangeControl, RadioControl } from "@wordpress/components";


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
	const { attributes, setAttributes, setColor, setBackgroundColor, color, backgroundColor } = props;
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
					<PanelBody>
						<ToggleControl
							label="Express as a Percentage"
							checked={ isPercentage }
							onChange={ ( isPercentage ) => setAttributes( { isPercentage } ) }
						/>
						{ !isPercentage && (
						<NumberControl
							tagName="span"
							isShiftStepEnabled={ true }
							className={'ck-circle-counter--number'}
							onChange={ ( value ) => setAttributes( { max: parseInt(value) } ) }
							shiftStep={ 1 }
							value={ max }
							label={ __( 'Max Value', 'carkeek-blocks' ) }
						/>
						)}
						</PanelBody>
						<PanelColorSettings
							title={__('Color settings')}
							colorSettings={[
								{
									value: color.color,
									onChange: onChangeColor,
									label: __('Circle color')
								},
								{
									value: backgroundColor.color,
									onChange: onChangeBackgroundColor,
									label: __('Background color')
								},
							]}
						/>
					</InspectorControls>
			 <RichText
			 tagName="div"
				 value={ textBefore }
				 className={'ck-circle-counter--text before'}
				 onChange={ ( textBefore ) => setAttributes( { textBefore } ) }
				 placeholder={ __( 'Text before', 'carkeek-blocks' ) }
			 />
			 <NumberControl
			 	tagName="span"
				isShiftStepEnabled={ true }
				className={'ck-circle-counter--number'}
				onChange={ ( value ) => setAttributes( { numberVal: parseInt(value) } ) }
				shiftStep={ 1 }
				value={ numberVal }
				max={ maxVal }
				min={ 0 }
				isDragEnabled={ true }

			/>
			{isPercentage && <span className={'ck-circle-counter--percentage'}>%</span>}
			<RichText
			tagName="div"
				 value={ textAfter }
				 className={'ck-circle-counter--text after'}
				 onChange={ ( textAfter ) => setAttributes( { textAfter } ) }
				 placeholder={ __( 'Text after', 'carkeek-blocks' ) }
			 />
			 <div className="ck-circle-counter--circle">
			 <svg class="svg" viewBox="0 0 300 300" version="1.1" preserveAspectRatio="xMinYMin meet">
				<circle class="ck-bar-bg" r="145" cx="150" cy="150" stroke-width="10" stroke={backgroundColor.color} fill="transparent" stroke-dasharray="911.06" stroke-dashoffset="0"></circle>
				<circle class="ck-bar" r="145" cx="150" cy="150" stroke={color.color} fill="transparent" stroke-dasharray="911.06" stroke-width="10" stroke-dashoffset={pct} transform="rotate(-90.1 150 150)"></circle>
			</svg>
			</div>

		 </div>
	 );
 }

 export default withColors('backgroundColor', 'color')(Edit);
