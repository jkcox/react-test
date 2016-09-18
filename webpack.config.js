const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    './app/index.js',
  ],
  devtool: "source-map",
  output: {
    path: __dirname + '/dist',
    /*publicPath: 'http://mycdn.com/', // This is used to generate URLs to e.g. images */
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        //{ test: /\.scss$/, exclude: /(node_modules|bower_components)/, loader: ExtractTextPlugin.extract("style", "css!postcss!sass") },
        //loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './app'))
        loader: ExtractTextPlugin.extract("style", "css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass")

      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192' // inline base64 URLs for <=8k images, direct URLs for the rest
      }
    ]
  },
  //sassLoader: {
  //includePaths: [path.resolve(__dirname, './app')]
// },
 postcss: [autoprefixer({browsers: ['last 2 versions']})],
  resolve: {
     extensions: ['', '.js', '.jsx', '.css', '.scss'],
     modulesDirectories: ['node_modules']
 },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
}
/*
const noop = x => x;
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const WebPackConfig = {
    entry: {
      "bundle": "./public/js/index.js"
    },
    devtool: "source-map",
    output: {
        path: __dirname + "/public/dist",
        filename: "[name].js"
    },
    module: {
        loaders: [
            { test: /\.hbs$/, exclude: /(node_modules|bower_components)/, loader: "raw"},
            { test: /\.scss$/, exclude: /(node_modules|bower_components)/, loader: ExtractTextPlugin.extract("style", "css!postcss!sass") },
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel',
              query: {
                presets: ['react', 'es2015']
              }
            }
        ]
    },
    postcss: [
        autoprefixer({ browsers: ['last 2 versions'] })
    ],
    plugins: [
        new ExtractTextPlugin("styles.css"),
        process.ENV === 'production' ?
          new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            include: /\.min\.js$/,
            compress: {
              drop_debugger: true
            },
            output: { comments: false }
          })
        : noop
    ],
    resolve: {
      alias: {
        styles: __dirname + "/public/scss"
      }
    }
};

module.exports = WebPackConfig;
*/
