/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
 import { useBlockProps, getColorObjectByColorValue, RichText } from '@wordpress/block-editor';
 import { select } from '@wordpress/data';

 /**
  * The save function defines the way in which the different attributes should
  * be combined into the final markup, which is then serialized by the block
  * editor into `post_content`.
  *
  * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
  *
  * @return {WPElement} Element to render.
  */
 export default function save( props ) {
	console.log(props);
	const{ attributes } = props;
	const{ textBefore, textAfter, numberVal, max, isPercentage, backgroundColor, color, customBackgroundColor, customColor } = attributes;

	//convert the color name to hex value for the stroke style
	let colorStyles = {};
	let bgStyles = {};
	if ( customColor !== undefined ) {
		colorStyles.stroke = customColor;
	} else if ( color !== undefined ) {
		colorStyles.stroke = 'var(--wp--preset--color--' + color + ')';
	}

	if ( customBackgroundColor !== undefined ) {
		bgStyles.stroke = customBackgroundColor;
	} else if ( backgroundColor !== undefined ) {
		bgStyles.stroke = 'var(--wp--preset--color--' + backgroundColor + ')';
	}

	const maxVal = isPercentage ? 100 : max;
	const r = 145;
	const circle = Math.PI * (r * 2);
	const pct = ((maxVal - numberVal) / maxVal) * circle;
	 const blockProps = useBlockProps.save();
		 return (
			<div {...blockProps}>
			<RichText.Content tagName="div" className={'ck-circle-counter--text before'} value={textBefore } />
			<div className={'ck-circle-counter--number'}>
				<span className={'ck-circle-counter--number-val'}>{numberVal}</span>
		   		{isPercentage && <span className={'ck-circle-counter--percentage'}>%</span>}
		   </div>
		   <RichText.Content tagName="div" className={'ck-circle-counter--text after'} value={textAfter } />
			<div className="ck-circle-counter--circle">
				<svg class="svg" viewBox="0 0 300 300" version="1.1" preserveAspectRatio="xMinYMin meet">
				<circle class="ck-bar-bg" r="145" cx="150" cy="150" stroke-width="10" style={bgStyles} fill="transparent" stroke-dasharray="911.06" stroke-dashoffset="0"></circle>
				<circle class="ck-bar" r="145" cx="150" cy="150" style={colorStyles} fill="transparent" stroke-dasharray="911.06" stroke-width="10" stroke-dashoffset={pct} transform="rotate(-90.1 150 150)"></circle>
			</svg>
		   </div>
		   </div>
		 );
 }
