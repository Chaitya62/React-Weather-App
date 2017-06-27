var path = require('path');

module.exports= {
  entry: './src/js/main.js',
  output: {
    path: __dirname,
    filename:  './app/js/main.js'
  },
  resolve:{
    alias: {
      App: path.resolve(__dirname,'./src/js/components/App.jsx')
    },
    extensions: ['.js','.jsx']
  },
  module: {
    loaders:[
      {
        test: /.jsx?/,
        loader: 'babel-loader',
        query: {
          presets: ['react','es2015']
        },
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
