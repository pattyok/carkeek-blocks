const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const FileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          outputPath: 'images',
          publicPath: 'images/',
          name: '[name].[ext]',
        },
      },
    ],
  };


const CSSLoader = {
  test: /\.css$/i,
  exclude: /node_modules/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: path.resolve(__dirname, '../dist/css/')
      }
    },
    {
      loader: 'css-loader',
      options: {importLoaders: 1},
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          config: path.resolve(__dirname, 'postcss.config.js'),
        },
      },
    },
  ],
};

const JSLoader = {
    test: /\.js$/i,
    exclude: /node_modules/,
    use: [
        {
        loader: 'babel-loader',
        options: {
            plugins: [
                "@babel/plugin-proposal-class-properties"
            ],
            presets: [
                "@babel/preset-env",
                [
                    "@babel/preset-react",
                    {
                        pragma: "wp.element.createElement",
                        pragmaFrag: "wp.element.Fragment",
                        // development: isDevelopment()
                    }
                ]
            ]
        }
    },
    "eslint-loader"
    ]
};

const FontLoader ={
  test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        outputPath: 'fonts',
          publicPath: 'fonts/',
          name: '[name].[ext]',
      }
    }
  ]
};

module.exports = {
    CSSLoader: CSSLoader,
    JSLoader: JSLoader,
    FileLoader: FileLoader,
    FontLoader: FontLoader
};