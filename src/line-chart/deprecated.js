
import { useBlockProps, getColorObjectByColorValue, RichText } from '@wordpress/block-editor';
import { select } from '@wordpress/data';

const deprecated = [
	{
		attributes: {
			numberVal: {
			  type: "number",
			  default: 0
			},
			numberValGoal: {
			  type: "number",
			  default: 0
			},
			expressAs: {
			  type: "string",
			  default: "dollar"
			},
			textBeforeVal: {
			  type: "string",
			  default: ""
			},
			textAfterVal: {
			  type: "string",
			  default: ""
			},
			textBeforeGoal: {
			  type: "string",
			  default: ""
			},
			textAfterGoal: {
			  type: "string",
			  default: ""
			},
			color: {
			  type: "string"
			},
			customColor: {
			  type: "string"
			},
			colorHex: {
			  type: "string",
			  default: "#000000"
			},
			backgroundColor: {
			  type: "string"
			},
			customBackgroundColor: {
			  type: "string"
			},
			backgroundColorHex: {
			  type: "string",
			  default: "rgba(0, 0, 0, 0)"
			},
			className: {
			  type: "string"
			},
			animate: {
			  type: "boolean",
			  default: true
			},
			barLength: {
			  type: "string",
			  default: "300"
			},
			barThickness: {
			  type: "string",
			  default: "20"
			},
			direction: {
			  type: "string",
			  default: "horizontal"
			},
			align: {
			  type: "string",
			  default: "center"
			}
		},
		save( props ) {
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
					blockStyle = { width: barLength + 'px' };
					if (animate) {
						spanStyle.width = '0';
					}
				} else {
					lineStyle = { width: barThickness + 'px', maxHeight: barLength + 'px' };
					spanStyle = { width: barThickness + 'px', height: pct + '%' };
					blockStyle = { height: barLength + 'px' };
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
	}
];

export default deprecated;
