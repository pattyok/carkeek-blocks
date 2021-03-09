module.exports = {
    plugins: {
      'postcss-import': {},
      'postcss-preset-env': {
        browsers: 'last 2 versions',
        stage: 0,
      },
      'postcss-custom-media': {
        importFrom: [
          './src/resources/custom_media.css'
        ]
      },
      'postcss-custom-properties': {
        importFrom: [
          './src/resources/custom_properties.css'
        ]
      },
      'cssnano': {},
    },
  };