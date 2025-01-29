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
			showUserName,
			loggedinLabel,
			layout
        } = attributes;

		const blockProps = useBlockProps( {
			className: 'layout-' + layout
		});
        return (
            <>

                <div { ...blockProps } >

                    <InspectorControls>
                        <PanelBody title={ __( 'Button settings' ) }>
							<TextControl
								label={ __( 'Button Label' ) }
								value={ label }
								onChange={ ( label ) => setAttributes( { label } ) }
							/>
							<ToggleControl
								label="Show User Name when Logged In"
								checked={ showUserName }
								onChange={ ( showUserName ) => setAttributes( { showUserName } ) }
							/>
							{ !showUserName &&
                            <TextControl
								label={ __( 'Logged In Label' ) }
								value={ loggedinLabel }
								onChange={ ( loggedinLabel ) => setAttributes( { loggedinLabel } ) }
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
									onChange={ ( alignment ) => setAttributes( { alignment } ) }
								/>
							}
							<RadioControl
								label={ __( 'Layout' ) }
								selected={ layout }
								options={ [
									{ label: 'Horizontal', value: 'horizontal' },
									{ label: 'Vertical', value: 'vertical' }
								] }
								onChange={ ( layout ) => setAttributes( { layout } ) }
							/>
                        </PanelBody>
                    </InspectorControls>
                    { label && alignment === 'before' &&
					<span class="member-menu-label">{ label }</span>
					}
					<span class="header-user-icon">{ icons.user }</span>
					{ label && alignment === 'after' &&
					<span class="member-menu-label">{ label }</span>
					}
                 </div>

            </>
        )
}
export default Edit;
