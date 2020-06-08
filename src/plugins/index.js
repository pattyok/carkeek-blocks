/**
 * Internal dependencies
 */
import "./styles.editor.scss";
import PageHeaderSettings from "./settings";

/**
 * WordPress dependencies
 */
import { registerPlugin } from "@wordpress/plugins";

registerPlugin("carkeek-blocks-pageheader", {
    icon: false,
    render: PageHeaderSettings
});
