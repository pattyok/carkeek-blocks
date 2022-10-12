const path = require('path');
const _MiniCssExtractPlugin = require('mini-css-extract-plugin');
const _ESLintPlugin = require('eslint-webpack-plugin');
const _StyleLintPlugin = require('stylelint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const _BrowserSyncPlugin = require('browser-sync-webpack-plugin')


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

const BrowserSyncPlugin = new _BrowserSyncPlugin({
    // browse to http://localhost:3000/ during development,
    // ./public directory is being served
    host: 'localhost',
    port: 3000,
    proxy: 'https://carkeek-theme-for-reuse.local'
  })


module.exports = {
    MiniCssExtractPlugin: MiniCssExtractPlugin,
    StyleLintPlugin: StyleLintPlugin,
    ESLintPlugin: ESLintPlugin,
    BrowserSyncPlugin: BrowserSyncPlugin,
    CleanWebpackPlugin: new CleanWebpackPlugin(),
};