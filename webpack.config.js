const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

var config = {
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: 'style!less!css'
      }
    ]
  },
  externals: {
    sweetalert2: 'sweetalert2'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    } )
  ]
};


module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + '/src/plugin.js'),
    output: {
      filename: 'vue-sweetalert2-component.min.js',
      libraryTarget: 'window',
      library: 'VueSweetAlert2Component',
    }
  }),
  merge(config, {
    entry: path.resolve(__dirname + '/src/SweetAlert.vue'),
    output: {
      filename: 'vue-sweetalert2-component.js',
      libraryTarget: 'umd',
      library: 'vue-sweetalert2-component',
      umdNamedDefine: true
    }
  })
];
