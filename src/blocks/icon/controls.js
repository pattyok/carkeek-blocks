/**
* Internal dependencies
*/

/**
* WordPress dependencies
*/
import { Component, Fragment } from '@wordpress/element';
import { BlockControls, AlignmentToolbar } from '@wordpress/block-editor';

class Controls extends Component {
render() {
    const {
        attributes,
        setAttributes,
    } = this.props;

    const {
        contentAlign,
        hasContentAlign,
    } = attributes;

    return (
        <Fragment>
            { hasContentAlign && (
                <BlockControls>
                    <AlignmentToolbar
                        value={ contentAlign }
                        onChange={ ( nextContentAlign ) => setAttributes( { contentAlign: nextContentAlign } ) }
                    />
                </BlockControls>
            ) }
        </Fragment>
    );
}
}

export default Controls;

