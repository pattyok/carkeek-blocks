/* internal dependencies */
import icons from "./icons";
/**
 * WordPress dependencies
 */
import parse from 'html-react-parser';

const svgs = {};



// Disable reason: Mutation within execution context - no return value.
// eslint-disable-next-line array-callback-return

Object.entries( icons ).filter( function( item ) {

  let customIcon = {
    label: icons[ item[ 0 ] ].label,
    keywords: icons[ item[ 0 ] ].search.terms,
    variation: {}
  }
  icons[ item[ 0 ] ].styles.forEach( function( style, index )  {
    let newIcon = icons[ item[ 0 ] ].svg[ style ].raw;
    newIcon = ( newIcon ).replace( '<svg', '<svg data-ckblocks-custom-icon="true" role="img" aria-hidden="true" focusable="false"' );
    if ( index == 0 || style =='regular' ) {
      customIcon.icon = parse( newIcon );
      customIcon.default = style;
    }
    customIcon.variation[ style ] = parse( newIcon );
  });

  svgs[ item[ 0 ] ] = customIcon;

} );


export default svgs;