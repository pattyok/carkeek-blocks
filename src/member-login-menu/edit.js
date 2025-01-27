import icons from './icons';

import { __ } from "@wordpress/i18n";
import {  useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl, RadioControl, ToggleControl } from "@wordpress/components";

import './editor.scss';
function Edit( props ) {

        const {
            attributes,
            setAttributes
        } = props;
        const {
            label,
			alignment,
			showIcon,
			showUserName
        } = attributes;

		const blockProps = useBlockProps();
        return (
            <>

                <div { ...blockProps } >

                    <InspectorControls>
                        <PanelBody title={ __( 'Button settings' ) }>
							<ToggleControl
								label="Show User Name when Logged In"
								checked={ showUserName }
								onChange={ ( showUserName ) => setAttributes( { showUserName } ) }
							/>
							{ !showUserName &&
                            <TextControl
								label={ __( 'Logged In Label' ) }
								value={ label }
								onChange={ ( value ) => setAttributes( { label: value } ) }
							/>
			}
							<ToggleControl
								label="Show Icon"
								checked={ showIcon }
								onChange={ ( showIcon ) => setAttributes( { showIcon } ) }
							/>
							{showIcon &&
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
						}
                        </PanelBody>
                    </InspectorControls>
                    { label && alignment === 'before' &&
					<span class="member-menu-label">{ label }</span>
					}
					<span class="header-search-icon">{ icons.user }</span>
					{ label && alignment === 'after' &&
					<span class="member-menu-label">{ label }</span>
					}
                 </div>

            </>
        )
}
export default Edit;
