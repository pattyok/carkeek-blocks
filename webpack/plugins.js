const path = require('path');
const _MiniCssExtractPlugin = require('mini-css-extract-plugin');
const _ESLintPlugin = require('eslint-webpack-plugin');
const _StyleLintPlugin = require('stylelint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
    chunkFilename: "[id].css",
        filename: chunkData => {
            return chunkData.chunk.name === "script"
                ? "style.css"
                : "[name].css";
        }
  });

const ESLintPlugin = new _ESLintPlugin({
    context: path.resolve(__dirname, '../src/js'),
    files: '**/*.js',
});

const StyleLintPlugin = new _StyleLintPlugin({
  context: path.resolve(__dirname, '../src/'),
  files: '**/*.css',
});


module.exports = {
    MiniCssExtractPlugin: MiniCssExtractPlugin,
    StyleLintPlugin: StyleLintPlugin,
    ESLintPlugin: ESLintPlugin,
    CleanWebpackPlugin: new CleanWebpackPlugin(),
};