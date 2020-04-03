import edit from "./edit";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import "./ToDoInfo";

registerBlockType("carkeek-blocks/todo-list", {
    title: __(" Redux Todo List ", "carkeek-blocks"),
    description: __("A todo list.", "carkeek-blocks"),
    icon: "editor-ul",
    category: "mytheme-category",
    edit,
    save() {
        return null;
    }
});
