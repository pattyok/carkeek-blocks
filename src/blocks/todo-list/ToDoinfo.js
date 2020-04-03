import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { withSelect } from "@wordpress/data";

let TodoCount = props => {
    return (
        <div>
            <p>Total: {props.total}</p>
            <p>To Do: {props.todo}</p>
            <p>Done: {props.done}</p>
        </div>
    );
};

TodoCount = withSelect(select => {
    return {
        total: select("carkeek-blocks/todo").getToDosNumber(),
        todo: select("carkeek-blocks/todo").getUnDoneToDosNumber(),
        done: select("carkeek-blocks/todo").getDoneToDosNumber()
    };
})(TodoCount);

registerBlockType("carkeek-blocks/todo-list-count", {
    title: __("Redux Todo Count", "carkeek-blocks"),

    description: __("Redux Todo Count", "carkeek-blocks"),

    icon: "editor-ul",

    category: "mytheme-category",

    edit() {
        return <TodoCount />;
    },

    save() {}
});
