const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')

const APP_DIR = path.join(__dirname, 'src')
const BUILD_DIR = path.join(__dirname, 'dist')

const config = {
  devServer: {
    contentBase: './dist',
    hot: true,
    filename: 'app.js',
    lazy: true,
    port: 9002,
    publicPath: '/'
  },
  entry: {
    app: APP_DIR + '/index.tsx',
    vendor: [
      '@material-ui/core', '@redux-saga/core', 'connected-react-router', 'react', 'react-dom', 'react-redux', 'react-router', 'redux'
    ]
  },
  mode: process.env.NODE_ENV || 'production',
  module: {
    rules: [
      {
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        test: /\.(js|jsx|ts|tsx)$/
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          { loader: 'url-loader' }
        ]
      },
      {
        exclude: /node_modules/,
        include: APP_DIR,
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
          { loader: 'babel-loader' }
        ]
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: BUILD_DIR
  },
  optimization: {
    minimizer: [new TerserPlugin({})]
  },
  plugins: [
    new webpack.optimize.SplitChunksPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      mode: JSON.stringify(process.env.NODE_ENV)
    }),
  ],
  resolve: {
    alias: {
      actions: path.resolve(__dirname, 'src', 'actions'),
      components: path.resolve(__dirname, 'src', 'components'),
      reducers: path.resolve(__dirname, 'src', 'reducers'),
      selectors: path.resolve(__dirname, 'src', 'selectors'),
      theme: path.resolve(__dirname, 'src', 'theme')
    },
    extensions: ['.css', '.js', '.jsx', '.json', '.scss', '.ts', '.tsx'],
    modules: ['node_modules']
  }
}

module.exports = config
