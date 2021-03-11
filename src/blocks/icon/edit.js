/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import Inspector from './inspector';
import Controls from './controls';
import svgs from './svgs';

/**
 * WordPress dependencies
 */
import { Component, Fragment } from '@wordpress/element';

/**
 * Set and export block values.
 */

class Edit extends Component {
	componentDidMount() {
		// Check if the icon is the default.
		if ( this.props.attributes.icon === '' ) {
			// Randomized the default icon when first added.
			//let defaultIcons = [ 'dollar-sign_regular', 'clipboard_regular', 'check-square_regular', 'book_regular', 'flag_regular', 'newspaper_regular', 'link_regular' ];
			let defaultIcons = [ 'dollar-sign', 'clipboard', 'check-square', 'book', 'flag', 'newspaper', 'link' ];

            const rand = defaultIcons[ Math.floor( Math.random() * defaultIcons.length ) ];
			this.props.setAttributes( { icon: rand } );
            this.props.setAttributes( { variation: 'regular' } );
		}
	}

	render() {
		const {
			attributes,
			className,
			isSelected,
		} = this.props;

		const {
			icon,
            variation,
			contentAlign,
		} = attributes;

		const classes = classnames( className, {
			[ `has-text-align-${ contentAlign }` ]: contentAlign,
		} );

		const selectedIcon = icon ? svgs[ icon ].variation[ variation ] : svgs.icons.icon;

		return (
			<Fragment>
				{ isSelected && (
					<Inspector
						{ ...this.props }
					/>
				) }
				{ isSelected && (
					<Controls
						{ ...this.props }
					/>
				) }
				<div className={ classes }>
                    <div className ="wp-block-carkeek-blocks-icon__inner">
						{ selectedIcon ? selectedIcon : null }
                    </div>
				</div>
			</Fragment>
		);
	}
}

export default  Edit;
