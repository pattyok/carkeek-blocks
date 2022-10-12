import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import "./style.scss";
import "./editor.scss";
import edit from "./edit";
import icons from "./icons";

import metadata from './block.json';

registerBlockType( metadata, {
    icon: icons.featuredimage,
    edit: edit,
    save( ) {
        return null;
    }
});
