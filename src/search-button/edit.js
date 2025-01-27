import icons from './icons';

import { __ } from "@wordpress/i18n";
import {  useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl, RadioControl } from "@wordpress/components";

import './editor.scss';
function Edit( props ) {

        const {
            attributes,
            setAttributes
        } = props;
        const {
            label,
			alignment
        } = attributes;

		const blockProps = useBlockProps();
        return (
            <>

                <div { ...blockProps } >

                    <InspectorControls>
                        <PanelBody title={ __( 'Button settings' ) }>
                            <TextControl
								label={ __( 'Label' ) }
								value={ label }
								onChange={ ( value ) => setAttributes( { label: value } ) }
							/>
							<RadioControl
								label={ __( 'Label Alignment' ) }
								selected={ alignment }
								options={ [
									{ label: 'Before Icon', value: 'before' },
									{ label: 'After Icon', value: 'after' },
									{ label: 'Hidden', value: 'hidden' },
								] }
								onChange={ ( value ) => setAttributes( { alignment: value } ) }
							/>
                        </PanelBody>
                    </InspectorControls>
                    { label && alignment === 'before' &&
					<span class="header-search-label">{ label }</span>
					}
					<span class="header-search-icon">{ icons.search }</span>
					{ label && alignment === 'after' &&
					<span class="header-search-label">{ label }</span>
					}
                 </div>

            </>
        )
}
export default Edit;
