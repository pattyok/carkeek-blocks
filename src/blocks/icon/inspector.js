/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import svg from './svgs';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button, Tooltip, ToggleControl } from '@wordpress/components';

/**
 * Module constants
 */
const NEW_TAB_REL = 'noreferrer noopener';


/**
 * Inspector controls
 */
class Inspector extends Component {
	constructor() {
		super( ...arguments );

		this.state = { filteredIcons: svg, searchValue: '', isSearching: false };

		this.onSetNewTab = this.onSetNewTab.bind( this );
	}


	onSetNewTab( shouldOpenNewTab ) {
		const { rel = '' } = this.props.attributes;
		const linkTarget = shouldOpenNewTab ? '_blank' : undefined;
		const linkRelAttributes = NEW_TAB_REL.split( ' ' );
		let updatedRel = rel;

		// Should open new tab and set block specified rel
		if ( shouldOpenNewTab && linkRelAttributes.filter( ( att ) => updatedRel.includes( att ) ).length === 0 ) {
			linkRelAttributes.forEach( ( att ) => {
				updatedRel = updatedRel.includes( att ) ? updatedRel : updatedRel = `${ updatedRel } ${ att }`;
			} );
		}

		// Should not open in new tab and should remove block specified rel
		if ( ! shouldOpenNewTab && linkRelAttributes.filter( ( att ) => updatedRel.includes( att ) ).length > 0 ) {
			linkRelAttributes.forEach( ( att ) => {
				updatedRel = updatedRel.replace( att, '' );
				updatedRel = updatedRel.trim();
			} );
		}

		this.props.setAttributes( {
			linkTarget,
			rel: updatedRel || undefined,
		} );
	}

	render() {
		const {
			attributes,
			setAttributes,
		} = this.props;

		const {
			icon,
            variation,
			href,
			linkTarget,
			rel,
		} = attributes;

		const filterList = ( event ) => {
			const filtered = {};

			this.setState( { searchValue: event, isSearching: true } );

			if ( event === '' ) {
				this.setState( { isSearching: false } );
			}

			const updatedList = Object.entries( svg ).filter( function( item ) {
				const text = item[ 0 ] + ' ' + item[ 1 ].keywords;
				return text.toLowerCase().search(
					event.toLowerCase() ) !== -1;
			} );

			updatedList.forEach( ( [ key ] ) => {
				filtered[ key ] = svg[ key ].icon;
			} );

			this.setState( { filteredIcons: filtered } );
		};

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Icon settings', 'coblocks' ) }>
						<TextControl
							type="text"
							autoComplete="off"
							label={ __( 'Icon search', 'coblocks' ) }
							value={ this.state.searchValue }
							className="coblocks-icon-types-list__search"
							onChange={ ( evt ) => {
								filterList( evt );
							} }
						/>
						<div className="carkeek-blocks-icon-types-list-wrapper">
							<ul className="block-editor-block-types-list carkeek-blocks-icon-types-list">
								{ ! this.state.isSearching
									? <li className="block-editor-block-types-list__list-item selected-svg">
										<Button
											className="editor-block-list-item-button"
											onClick={ () => {
												return false;
											} }
										>
											<span className="block-editor-block-types-list__item-icon">
												{ icon && svg[ icon ].icon }
											</span>
										</Button>
									</li>
									: null
								}
								{ Object.keys( this.state.filteredIcons ).length > 0
									? Object.keys( this.state.filteredIcons ).map( ( keyName, i ) => {
										return (
											<li key={ `editor-pblock-types-list-item-${ i }` } className={ classnames(
												'block-editor-block-types-list__list-item', {
												},
											) }>
												<Tooltip text={ ( svg[ keyName ].label ) ? svg[ keyName ].label : keyName }>
													<Button
														isSecondary
														isPrimary={ icon && icon === keyName }
														className="editor-block-list-item-button"
														onClick={ () => {
															setAttributes( { icon: keyName } );
                                                            setAttributes( { variation : svg[ keyName ].default });
														} }
													>
														<span className="block-editor-block-types-list__item-icon">
															{ icon && svg[ keyName ].icon }
														</span>
													</Button>
												</Tooltip>
											</li>
										);
									} )
									: <li className="no-results"> { __( 'No results found.', 'coblocks' ) } </li>
								}
							</ul>
						</div>
                        {icon &&
                        <div className="carkeek-blocks-icon-types-list-wrapper">
                            <div className="carkeek-blocks-label">{ __( 'Variations:', 'carkeek-blocks') } </div>
							<ul className="block-editor-block-types-list carkeek-blocks-icon-types-list">
                            { Object.keys( svg[ icon ].variation ).length > 0
									? Object.keys(  svg[ icon ].variation ).map( ( keyName, i ) => {

										return (
											<li key={ `editor-pblock-types-list-item-${ i }` } className={ classnames(
												'block-editor-block-types-list__list-item', {
												},
											) }>
												<Tooltip text={ ( keyName ) }>
													<Button
														isSecondary
														isPrimary={ variation && variation === keyName }
														className="editor-block-list-item-button"
														onClick={ () => {
															setAttributes( { variation: keyName } );
														} }
													>
														<span className="block-editor-block-types-list__item-icon">
															{ svg[ icon ].variation[ keyName ] }
														</span>
													</Button>
												</Tooltip>
											</li>
										);
									} )
									: <li className="no-results"> { __( 'No results found.', 'coblocks' ) } </li>
								}
                            </ul>
                        </div>
                        }
					</PanelBody>
					<PanelBody
						title={ __( 'Link settings', 'coblocks' ) }
						initialOpen={ false } >
						<TextControl
							label={ __( 'Link URL', 'coblocks' ) }
							value={ href || '' }
							onChange={ ( value ) => setAttributes( { href: value } ) }
							placeholder="https://" />
						<TextControl
							label={ __( 'Link rel', 'coblocks' ) }
							value={ rel || '' }
							onChange={ ( value ) => setAttributes( { rel: value } ) }
						/>
						<ToggleControl
							label={ linkTarget ? __( 'Opening in new tab', 'coblocks' ) : __( 'Open in new tab', 'coblocks' ) }
							onChange={ this.onSetNewTab }
							checked={ linkTarget === '_blank' } />
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;