/**
 * Internal dependencies
 */
import "./editor.scss";
import PageHeaderSettings from "./settings";
import CarkeekSidebar from "./sidebar";
/**
 * WordPress dependencies
 */
import { registerPlugin } from "@wordpress/plugins";

//This was breaking Events when we turned off the block editor

registerPlugin("carkeek-blocks-pageheader", {
    icon: false,
    render: PageHeaderSettings
});

registerPlugin("carkeek-blocks-sidebar", {
    icon: false,
    render: CarkeekSidebar
});
