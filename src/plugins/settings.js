import { Component } from "@wordpress/element";
import { PluginDocumentSettingPanel } from "@wordpress/edit-post";
import { __ } from "@wordpress/i18n";
import { CheckboxControl } from "@wordpress/components";
import { withSelect, withDispatch } from "@wordpress/data";
import { compose } from "@wordpress/compose";

class PageHeaderSettings extends Component {
    constructor() {
        super(...arguments);

        this.initialize = this.initialize.bind(this);
    }

    componentDidMount() {
        this.initialize();
    }

    componentDidUpdate() {
        this.initialize();
    }

    initialize() {
        const { hideTitle } = this.props;

        const titleBlock = document.querySelector(".editor-post-title__block");

        if (titleBlock) {
            const isHidden =
                typeof hideTitle !== "undefined" &&
                typeof hideTitle !== "undefined"
                    ? hideTitle
                    : false;
            const bodyClass = isHidden
                ? "carkeek-blocks-title-hidden"
                : "carkeek-blocks-title-visible";

            //remove existing class
            if (isHidden) {
                document.body.classList.remove("carkeek-blocks-title-visible");
            } else {
                document.body.classList.remove("carkeek-blocks-title-hidden");
            }

            document.body.classList.add(bodyClass);
        }
    }
    render() {
        const {
            hideTitle,
            setHideTitle,
            hideFeaturedImage,
            setHideFeaturedImage,
            posttype,
            featuredImage
        } = this.props;

        let hideImageCheckbox;
        if (featuredImage) {
            hideImageCheckbox = (
                <CheckboxControl
                    className="carkeek-hide-featured-image-label"
                    label="Hide Featured Image"
                    checked={hideFeaturedImage}
                    onChange={value => setHideFeaturedImage(value)}
                    help={
                        hideFeaturedImage
                            ? __(
                                  "The Featured Image is hidden on the rendered page.",
                                  "carkeek-blocks"
                              )
                            : __(
                                  "The Featured Image is visible on the rendered page.",
                                  "carkeek-blocks"
                              )
                    }
                />
            );
        }
        return (
            <PluginDocumentSettingPanel
                name="page-header-settings-panel"
                title="Page Header Settings"
                className="page-header-settings-panel"
            >
                <CheckboxControl
                    className="carkeek-hide-title-label"
                    label={__("Hide " + posttype + " Title", "carkeek-blocks")}
                    checked={hideTitle}
                    onChange={value => setHideTitle(value)}
                    help={
                        hideTitle
                            ? __(
                                  "Title is hidden on the rendered page.",
                                  "carkeek-blocks"
                              )
                            : null
                    }
                />
                {hideImageCheckbox}
            </PluginDocumentSettingPanel>
        );
    }
}

export default compose(
    withSelect(select => {
        return {
            hideTitle: select("core/editor").getEditedPostAttribute("meta")[
                "_carkeekblocks_title_hidden"
            ],
            hideFeaturedImage: select("core/editor").getEditedPostAttribute(
                "meta"
            )["_carkeekblocks_featuredimage_hidden"],
            featuredImage: select("core/editor").getEditedPostAttribute(
                "featured_media"
            ),
            posttype: select("core/editor").getEditedPostAttribute("type")
        };
    }),
    withDispatch(dispatch => {
        return {
            setHideTitle: hideTitle => {
                dispatch("core/editor").editPost({
                    meta: { _carkeekblocks_title_hidden: hideTitle }
                });
            },
            setHideFeaturedImage: hideFeaturedImage => {
                dispatch("core/editor").editPost({
                    meta: {
                        _carkeekblocks_featuredimage_hidden: hideFeaturedImage
                    }
                });
            }
        };
    })
)(PageHeaderSettings);
