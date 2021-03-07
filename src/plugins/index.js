/**
 * Internal dependencies
 */
import "./styles.global.editor.css";
import PageHeaderSettings from "./settings";

/**
 * WordPress dependencies
 */
import { registerPlugin } from "@wordpress/plugins";

registerPlugin("carkeek-blocks-pageheader", {
    icon: false,
    render: PageHeaderSettings
});
