var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {},
  // output:{
  //   filename: "bundle.js",
  //   path: path.join(__dirname, 'dist'),
  //   publicPath: './dist/'
  // },
  module: {
    loaders: [
      { test: /\.json$/, loader: "json-loader" },
      { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.(scss|sass)$/, loader: 'style!css!sass' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=public/icons/[name].[ext]" }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'client/app/common/workers/*.worker.js',
        to: '[name].[ext]'
      },
      // {
      //   from: 'node_modules/@turf/turf/turf.min.js',
      //   to: 'turf.min.js'
      // }, 
      {
        from: 'node_modules/rbush/rbush.min.js',
        to: 'rbush.min.js'
      }, {
        from: 'client/app/common/vendor/*.js',
        to: '[name].js'
      }, {
        from : 'client/app/common/data/*.*',
        to: '[name].[ext]'
      }
    ]),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jQuery'
    }),
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inject: 'body',
      hash: true
    }),

    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
      }
    })
  ]
};
