/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
import svgs from './svgs';

const save = ( { attributes, className } ) => {
	const {
		icon,
        variation,
		contentAlign,
		href,
		linkTarget,
		rel,
	} = attributes;



	const classes = classnames( className, {
		[ `has-text-align-${ contentAlign }` ]: contentAlign,
	} );


	return (
		<div className={ classes }>
			<div className={ 'wp-block-carkeek-blocks-icon__inner' }>
				{ typeof icon !== 'undefined' &&
					( href
						? <a href={ href } target={ linkTarget } rel={ rel }>
							{ svgs[ icon ] && svgs[ icon ].variation[ variation ] }
						</a>
						: svgs[ icon ] && svgs[ icon ].variation[ variation ]
					)
				}
			</div>
		</div>
	);
};

export default save;