import edit from "./edit";
import icons from '../../resources/icons';
import metadata from './block.json';
import { registerBlockType } from "@wordpress/blocks";

registerBlockType( metadata, {
    icon: icons.layout,
    edit: edit,
    save() {
        return null;
    }
});
