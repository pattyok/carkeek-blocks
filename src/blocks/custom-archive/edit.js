import classnames from "classnames";
import { get, invoke } from "lodash";

import { Component, RawHTML } from "@wordpress/element";
import { withSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import {
    RangeControl,
    PanelBody,
    ToggleControl,
    RadioControl,
    Spinner,
    Placeholder,
    ToolbarGroup,
    SelectControl
} from "@wordpress/components";
import { InspectorControls, BlockControls } from "@wordpress/block-editor";

class CustomArchiveEdit extends Component {
    onChangeNumberOfPosts = numberOfPosts => {
        this.props.setAttributes({ numberOfPosts });
    };

    onChangePostType = postTypeSelected => {
        this.props.setAttributes({ postTypeSelected });
    };

    render() {
        const {
            posts,
            postTypes,
            className,
            attributes,
            setAttributes
        } = this.props;
        const {
            numberOfPosts,
            displayPostContent,
            displayPostTitle,
            displayPostContentRadio,
            excerptLength,
            displayFeaturedImage,
            postLayout,
            postsToShow,
            postTypeSelected
        } = attributes;
        const icons = {
            pin: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="black"
                    width="18px"
                    height="18px"
                >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z" />
                </svg>
            ),
            list: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="black"
                    width="18px"
                    height="18px"
                >
                    <g fill="none">
                        <path d="M0 0h24v24H0V0z" />
                        <path d="M0 0h24v24H0V0z" opacity=".87" />
                    </g>
                    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
                </svg>
            ),
            grid: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="black"
                    width="18px"
                    height="18px"
                >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z" />
                </svg>
            )
        };
        const postTypeSelect = (
            <SelectControl
                label={__("Post Type", "carkeek-blocks")}
                onChange={this.onChangePostType}
                options={
                    postTypes &&
                    postTypes.map(type => ({
                        value: type.slug,
                        label: type.name
                    }))
                }
                value={postTypeSelected}
            />
        );
        const inspectorControls = (
            <InspectorControls>
                <PanelBody title={__("Posts Settings", "carkeek-blocks")}>
                    {postTypeSelect}
                    <RangeControl
                        label={__("Number of Posts", "carkeek-blocks")}
                        value={numberOfPosts}
                        onChange={this.onChangeNumberOfPosts}
                        min={1}
                        max={10}
                    />
                    <ToggleControl
                        label={__("Show Post Title")}
                        checked={displayPostTitle}
                        onChange={value =>
                            setAttributes({ displayPostTitle: value })
                        }
                    />
                    <ToggleControl
                        label={__("Post content")}
                        checked={displayPostContent}
                        onChange={value =>
                            setAttributes({ displayPostContent: value })
                        }
                    />

                    {displayPostContent && (
                        <RadioControl
                            label={__("Show:")}
                            selected={displayPostContentRadio}
                            options={[
                                { label: __("Excerpt"), value: "excerpt" },
                                {
                                    label: __("Full post"),
                                    value: "full_post"
                                }
                            ]}
                            onChange={value =>
                                setAttributes({
                                    displayPostContentRadio: value
                                })
                            }
                        />
                    )}
                    {displayPostContent &&
                        displayPostContentRadio === "excerpt" && (
                            <RangeControl
                                label={__("Max number of words in excerpt")}
                                value={excerptLength}
                                onChange={value =>
                                    setAttributes({ excerptLength: value })
                                }
                                min={10}
                                max={30}
                            />
                        )}

                    <ToggleControl
                        label={__("Display featured image")}
                        checked={displayFeaturedImage}
                        onChange={value =>
                            setAttributes({ displayFeaturedImage: value })
                        }
                    />
                </PanelBody>
            </InspectorControls>
        );

        const hasPosts = Array.isArray(posts) && posts.length;

        if (!hasPosts) {
            const noPostMessage =
                typeof postTypeSelected !== "undefined"
                    ? __("No Posts Found")
                    : __("Select a Post Type from the Block Settings");
            return (
                <>
                    {inspectorControls}

                    <Placeholder icon={icons.pin} label={__("Latest Posts")}>
                        {!Array.isArray(posts) ? <Spinner /> : noPostMessage}
                    </Placeholder>
                </>
            );
        }

        //removing posts should be instant
        const displayPosts =
            posts.length > postsToShow ? posts.slice(0, postsToShow) : posts;

        const layoutControls = [
            {
                icon: icons.list,
                title: __("List view"),
                onClick: () => setAttributes({ postLayout: "list" }),
                isActive: postLayout === "list"
            },
            {
                icon: icons.grid,
                title: __("Grid view"),
                onClick: () => setAttributes({ postLayout: "grid" }),
                isActive: postLayout === "grid"
            }
        ];
        return (
            <>
                {inspectorControls}
                <BlockControls>
                    <ToolbarGroup controls={layoutControls} />
                </BlockControls>
                <div
                    className={classnames(className, {
                        "wp-block-ck-custom_posttype__list": true,
                        "is-grid": postLayout === "grid",
                        "is-list": postLayout === "list"
                    })}
                >
                    <ul>
                        {displayPosts.map(post => {
                            const titleTrimmed = invoke(post, [
                                "title",
                                "rendered",
                                "trim"
                            ]);
                            let excerpt = post.excerpt.rendered;

                            const excerptElement = document.createElement(
                                "div"
                            );
                            excerptElement.innerHTML = excerpt;

                            excerpt =
                                excerptElement.textContent ||
                                excerptElement.innerText ||
                                "";
                            const imageSourceUrl = post.featuredImageSourceUrl;

                            const imageClasses = classnames({
                                "wp-block-ck-custom_posttype__featured-image": true
                            });

                            const postExcerpt = (
                                <>
                                    {excerpt
                                        .trim()
                                        .split(" ", excerptLength)
                                        .join(" ")}
                                    {/* translators: excerpt truncation character, default …  */}
                                    <a
                                        href={post.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {__("Read more")}
                                    </a>
                                </>
                            );

                            return (
                                <li key={post.id}>
                                    {displayFeaturedImage && (
                                        <div className={imageClasses}>
                                            {imageSourceUrl && (
                                                <img
                                                    src={imageSourceUrl}
                                                    alt=""
                                                />
                                            )}
                                        </div>
                                    )}
                                    {displayPostTitle && (
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={post.link}
                                        >
                                            {titleTrimmed ? (
                                                <RawHTML>
                                                    {titleTrimmed}
                                                </RawHTML>
                                            ) : (
                                                __("(no title)")
                                            )}
                                        </a>
                                    )}
                                    {displayPostContent &&
                                        displayPostContentRadio ===
                                            "excerpt" && (
                                            <div className="wp-block-ck-custom_posttype__post-excerpt">
                                                {postExcerpt}
                                            </div>
                                        )}
                                    {displayPostContent &&
                                        displayPostContentRadio ===
                                            "full_post" && (
                                            <div className="wp-block-ck-custom_posttype__post-full-content">
                                                <RawHTML key="html">
                                                    {post.content.raw.trim()}
                                                </RawHTML>
                                            </div>
                                        )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </>
        );
    }
}

export default withSelect((select, props) => {
    const { attributes } = props;
    const { numberOfPosts, postTypeSelected } = attributes;
    const { getEntityRecords, getMedia, getPostTypes } = select("core");
    let query = { per_page: numberOfPosts };
    const latestPosts = getEntityRecords("postType", postTypeSelected, query);

    return {
        postTypes: getPostTypes(),
        posts: !Array.isArray(latestPosts)
            ? latestPosts
            : latestPosts.map(post => {
                  if (post.featured_media) {
                      const image = getMedia(post.featured_media);
                      let url = get(
                          image,
                          ["media_details", "sizes", "large", "sourc_url"],
                          null
                      );
                      if (!url) {
                          url = get(image, "source_url", null);
                      }
                      return { ...post, featuredImageSourceUrl: url };
                  }
                  return post;
              })
    };
})(CustomArchiveEdit);
