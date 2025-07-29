import { PluginSidebar } from "@wordpress/editor";
import { __ } from "@wordpress/i18n";
import { ToggleControl, PanelBody } from "@wordpress/components";
import { useSelect, useDispatch } from "@wordpress/data";

function CarkeekSidebar( ) {

    const groupOutlines = useSelect((select)=> {
        return select( 'core/edit-post' ).isFeatureActive( 'ckGroupOutlines' )
    });
    const columnOutlines = useSelect((select)=> {
        return select( 'core/edit-post' ).isFeatureActive( 'ckColumnOutlines' )
    });
    const blockOutlines = useSelect((select)=> {
        return select( 'core/edit-post' ).isFeatureActive( 'ckBlockOutlines' )
    });
    const { toggleFeature } = useDispatch( 'core/edit-post' );
    if ( groupOutlines ) {
        document.body.classList.add( 'is-group-lines-on' );
    } else {
        document.body.classList.remove( 'is-group-lines-on' );
    }
    if ( columnOutlines ) {
        document.body.classList.add( 'is-column-lines-on' );
    } else {
        document.body.classList.remove( 'is-column-lines-on' );
    }
    if ( blockOutlines ) {
        document.body.classList.add( 'is-block-lines-on' );
    } else {
        document.body.classList.remove( 'is-block-lines-on' );
    }
    return (
        <PluginSidebar
            name="carkeek-blocks-sidebar"
            icon="admin-settings"
            title={__("Carkeek Blocks")}
        >
            <PanelBody title={__("Editor Controls")}>
            <ToggleControl
                label={__("Outline Groups")}
                checked={ groupOutlines }
                help={__("Show outlines on Group Blocks in edit view")}
                onChange={ () => {
                    toggleFeature( 'ckGroupOutlines' );
                } }
            />
            <ToggleControl
                label={__("Outline Columns")}
                checked={ columnOutlines }
                help={__("Show outlines on Column Blocks in edit view")}
                onChange={ () => {
                    toggleFeature( 'ckColumnOutlines' );
                } }
            />
            <ToggleControl
                label={__("Outline All Blocks")}
                checked={ blockOutlines }
                help={__("Show outlines on all Blocks in edit view")}
                onChange={ () => {
                    toggleFeature( 'ckBlockOutlines' );
                } }
            />
            </PanelBody>


        </PluginSidebar>
    );
}

export default CarkeekSidebar;