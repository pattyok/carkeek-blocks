import { registerPlugin } from "@wordpress/plugins";
import {
    PluginSidebar,
    PluginSidebarMoreMenuItem,
    PluginPostStatusInfo,
    PluginPrePublishPanel,
    PluginPostPublishPanel,
    PluginBlockSettingsMenuItem
} from "@wordpress/edit-post";
import { __ } from "@wordpress/i18n";

registerPlugin("carkeek-blocks-sidebar", {
    icon: "smiley",
    render: () => {
        return (
            <>
                <PluginSidebarMoreMenuItem target="carkeek-blocks-sidebar">
                    {__("Meta Options", "carkeek-blocks")}
                </PluginSidebarMoreMenuItem>
                <PluginSidebar
                    name="carkeek-blocks-sidebar"
                    icon="admin-post"
                    title={__("Meta Options", "carkeek-blocks")}
                >
                    ljljljlj
                </PluginSidebar>
                <PluginPostStatusInfo>
                    Hello Plugin Post Status
                </PluginPostStatusInfo>
                <PluginPrePublishPanel
                    title="test pre publish"
                    initialOpen={true}
                >
                    Hello Plugin Pre Publish
                </PluginPrePublishPanel>
                <PluginPostPublishPanel
                    title="test post publish"
                    initialOpen={true}
                >
                    Hello Plugin Post Publish
                </PluginPostPublishPanel>
                <PluginBlockSettingsMenuItem
                    icon="twitter"
                    label="Hello"
                    onClick={() => alert(true)}
                >
                    Hello Plugin Post Publish
                </PluginBlockSettingsMenuItem>
            </>
        );
    }
});
