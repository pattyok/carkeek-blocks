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
	const{ attributes, } = props;
	const { align, direction, color, backgroundColor, barLength, barThickness, textBeforeVal, textBeforeGoal, numberVal, numberValGoal, expressAs, textAfterVal, textAfterGoal, isPercentage, animate } = attributes;

	let lineStyle = {};
	let spanStyle = {};
	let blockStyle = {};
	let prefix = '';
	let suffix = '';
	const pct = ((numberVal / numberValGoal) * 100);
	onChangeExpressAs( expressAs );
	onChangeDirection( direction );

	const addCommas = function( n ){

		const rgx = /(\d+)(\d{3})/;
		n += '';
		const x  = n.split('.');
		let x1 = x[0];
		let x2 = x.length > 1 ? '.' + x[1] : '';

		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + ',' + '$2');
		}
		return x1 + x2;
	};

	function onChangeDirection( value ) {

		if ( value == 'horizontal' ) {
			lineStyle = { maxWidth: barLength + 'px', height: barThickness + 'px' };
			spanStyle = { height: barThickness + 'px', width: pct + '%' };
			blockStyle = { maxWidth: barLength + 'px' };
			if (animate) {
				spanStyle.width = '0';
			}
		} else {
			lineStyle = { width: barThickness + 'px', maxHeight: barLength + 'px' };
			spanStyle = { width: barThickness + 'px', height: pct + '%' };
			blockStyle = { maxHeight: barLength + 'px' };
			if (animate) {
				spanStyle.height = '0';
			}
		}
	}

	function onChangeExpressAs( value ) {
		prefix = '';
		suffix = '';
		if (value == 'percent') {
			suffix = '%';
		} else if (value == 'dollar') {
			prefix = '$';
		}
	}
	const displayVal = animate ? 0 : numberVal;

	 const blockProps = useBlockProps.save(
		{
			className: `ck-line-chart-${direction} pct-${pct} animate-${animate}`,
		}
	 );
		 return (
			<div {...blockProps} data-progress={`${numberVal}`} data-goal={`${numberValGoal}`} data-type={expressAs} >
				<div className="ck-line-chart--text" style={blockStyle}>
						<span className="ck-line-chart--current">{textBeforeVal} <span className="value">{prefix}<span className="ck-chart--number">{displayVal}</span>{suffix}</span> {textAfterVal}</span>
						<span className="ck-line-chart--goal">{textBeforeGoal} <span className="value">{prefix}<span className="ck-chart--goal">{addCommas(numberValGoal)}</span>{suffix}</span> {textAfterGoal}</span>
				</div>
				<div className={`ck-line-chart--line has-${backgroundColor}-background-color layout-${direction}`} style={lineStyle}>
					<span className={`has-${color}-background-color  ck-bar`} style={spanStyle}></span>
				</div>
		   </div>
		 );
 }
