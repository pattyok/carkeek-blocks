import "./editor.scss";

import edit from "./edit";
import save from "./save";
import deprecated from "./deprecated";

import icons from "./icons";

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import metadata from "./block.json";

registerBlockType(metadata, {

    icon: icons.lightbox,

    keywords: [
        __("lightbox", "carkeek-blocks"),
        __("gallery", "carkeek-blocks"),
    ],

    save,

    edit,

    deprecated
});
