const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    main: './lib/index.js',
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'amd',
    path: path.resolve(__dirname, 'public/'),
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: '../bundle-report.dev.html',
    }),
  ]
};
