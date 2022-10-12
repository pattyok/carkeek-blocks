import "./styles.editor.css";
import edit from "./edit";
import icons from '../../resources/icons';

import { registerBlockType } from "@wordpress/blocks";

import metadata from './block.json';

registerBlockType( metadata, {

    icon: icons.layout,

    edit: edit,

    save() {
        return null;
    }
});
