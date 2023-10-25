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

 import { __experimentalNumberControl as NumberControl, PanelBody, TextControl, ToggleControl, RadioControl } from "@wordpress/components";

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
	const { name, attributes, setAttributes, setColor, setBackgroundColor, color, backgroundColor, clientId } = props;
	const { direction, barLength, barThickness, textBeforeVal, textBeforeGoal, numberVal, numberValGoal, expressAs, textAfterVal, textAfterGoal, isPercentage, animate } = attributes;

	const pct = ((numberVal / numberValGoal) * 100);

	function onChangeColor( value ) {
		setColor( value );
		setAttributes( { colorHex: value } );
	}

	function onChangeBackgroundColor( value ) {
		setBackgroundColor( value );
		setAttributes( { backgroundColorHex: value } );
	}

	let barLengthLabel = '';
	let barThickLabel = '';
	let blockStyle = {};
	let lineStyle = {};
	let spanStyle = {};

	onChangeDirection( direction );

	function onChangeDirection( value ) {
		setAttributes( { direction: value } );
		if ( value == 'horizontal' ) {
			barLengthLabel = 'Width';
			barThickLabel = 'Height';
			lineStyle = { maxWidth: barLength + 'px', height: barThickness + 'px' };
			spanStyle = { height: barThickness + 'px', width: pct + '%' };
			blockStyle = { width: barLength + 'px' };
		} else {
			barLengthLabel = 'Height';
			barThickLabel = 'Width';
			lineStyle = { width: barThickness + 'px', maxHeight: barLength + 'px' };
			spanStyle = { width: barThickness + 'px', height: pct + '%' };
			blockStyle = { height: barLength + 'px' };
		}
	}

	let prefix = '';
	let suffix = '';
	onChangeExpressAs( expressAs );
	function onChangeExpressAs( value ) {
		setAttributes( { expressAs: value } );
		prefix = '';
		suffix = '';
		if (value == 'percent') {
			suffix = '%';
		} else if (value == 'dollar') {
			prefix = '$';
		}
	}
	// if ( customBackgroundColor !== undefined ) {
	// 	bgStyles.stroke = customBackgroundColor;
	// } else if ( backgroundColor !== undefined ) {
	// 	bgStyles.stroke = 'var(--wp--preset--color--' + backgroundColor + ')';
	// }

	 const blockProps = useBlockProps(
		 {
			 className: `ck-line-chart-${direction} animate-${animate}  pct-${pct}`,
		 }
	 );
		 // Update the child block's attributes

		 return (
			 <div { ...blockProps} style={blockStyle}>
				 <InspectorControls>
					<PanelBody title={__('Value settings')}>

						<NumberControl
							isShiftStepEnabled={ true }
							onChange={ ( numberVal ) => setAttributes( { numberVal: parseInt(numberVal) } ) }
							shiftStep={ 1 }
							value={ numberVal }
							label={ __( 'Current Value', 'carkeek-blocks' ) }
						/>

						<NumberControl
							isShiftStepEnabled={ true }
							onChange={ ( value ) => setAttributes( { numberValGoal: parseInt(value) } ) }
							shiftStep={ 1 }
							value={ numberValGoal }
							label={ __( 'Goal', 'carkeek-blocks' ) }
						/>
						<RadioControl
							label="Express #s as"
							selected={ expressAs }
							options={ [
								{ label: 'Dollars', value: 'dollar' },
								{ label: 'Percentage', value: 'percent' },
								{ label: 'Plain', value: 'plain' },
							] }
							onChange={ ( value ) => onChangeExpressAs( value ) }
						/>
						</PanelBody>
						<PanelBody title={__('Text Settings')}>
						<TextControl
							label="Text Before Current Value"
							value={ textBeforeVal }
							onChange={ ( textBeforeVal ) => setAttributes( { textBeforeVal } ) }
						/>
						<TextControl
							label="Text After Current Value"
							help="Use this to add a suffix to the number, e.g. %"
							value={ textAfterVal }
							onChange={ ( textAfterVal ) => setAttributes( { textAfterVal } ) }
						/>
						<TextControl
							label="Text Before Goal Value"
							value={ textBeforeGoal }
							onChange={ ( textBeforeGoal ) => setAttributes( { textBeforeGoal } ) }
						/>
						<TextControl
							label="Text After Goal Value"
							help="Use this to add a suffix to the number, e.g. %"
							value={ textAfterGoal }
							onChange={ ( textAfterGoal ) => setAttributes( { textAfterGoal } ) }
						/>



						</PanelBody>
						<PanelBody title={__('Layout')}>

							{/* <RadioControl
								label="Orientation"
								selected={ direction }
								options={ [
									{ label: 'Horizontal', value: 'horizontal' },
									{ label: 'Vertical', value: 'vertical' },
								] }
								onChange={ ( direction ) => setAttributes( { direction } ) }
							/> */}
							<NumberControl
								isShiftStepEnabled={ true }
								onChange={ ( barLength ) => setAttributes( { barLength } ) }
								shiftStep={ 1 }
								value={ barLength }
								label={ barLengthLabel }
							/>
							<NumberControl
								isShiftStepEnabled={ true }
								onChange={ ( barThickness ) => setAttributes( { barThickness } ) }
								shiftStep={ 1 }
								value={ barThickness }
								label={ barThickLabel }
							/>

						<ToggleControl
							label="Animate on Scroll into View"
							checked={ animate }
							onChange={ ( animate ) => setAttributes( { animate } ) }
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

			    <div className="ck-line-chart--text" style={blockStyle}>
						<span className="ck-line-chart--current">{textBeforeVal} <span className="value">{prefix}{numberVal}{suffix}</span> {textAfterVal}</span>
						<span className="ck-line-chart--goal">{textBeforeGoal} <span className="value">{prefix}{numberValGoal}{suffix}</span> {textAfterGoal}</span>
				</div>
				<div className={`ck-line-chart--line ${backgroundColor.class} layout-${direction}`} style={lineStyle}>
					<span className={`has-${color.slug}-background-color`} data-progress={`${numberVal}`} style={spanStyle}></span>
				</div>
		   </div>

	 );
 }

 export default withColors('backgroundColor', 'color')(Edit);
