const path = require('path');
const loaders = require('./loaders');
const webpack = require('webpack'); // to access built-in plugins
const plugins = require('./plugins');

module.exports = {
    entry: {
        editor: "./src/editor.js",
        script: "./src/script.js",
        plugins_editor: "./src/plugins_editor.js"
    },
    module: {
        rules: [
            loaders.JSLoader,
            loaders.CSSLoader,
            loaders.FileLoader,
            loaders.FontLoader
        ]
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "../dist"),
    },
    plugins: [
        new webpack.ProgressPlugin(),
        plugins.CleanWebpackPlugin,
        plugins.ESLintPlugin,
        plugins.StyleLintPlugin,
        plugins.MiniCssExtractPlugin,
    ],
    externals: {
        jquery: "jQuery",
        lodash: "lodash",
        "@wordpress/blocks": ["wp", "blocks"],
        "@wordpress/i18n": ["wp", "i18n"],
        "@wordpress/editor": ["wp", "editor"],
        "@wordpress/block-editor": ["wp", "blockEditor"],
        "@wordpress/components": ["wp", "components"],
        "@wordpress/element": ["wp", "element"],
        "@wordpress/blob": ["wp", "blob"],
        "@wordpress/data": ["wp", "data"],
        "@wordpress/html-entities": ["wp", "htmlEntities"],
        "@wordpress/compose": ["wp", "compose"],
        "@wordpress/plugins": ["wp", "plugins"],
        "@wordpress/edit-post": ["wp", "editPost"],
        "@wordpress/icons": ["wp", "icons"],
        "@wordpress/core-data": ["wp", "coreData"]
    }
};