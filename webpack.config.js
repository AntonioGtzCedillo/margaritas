const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const outputDir = "./build";

module.exports = (env, argv) => {
  const isProduction =  argv.mode === 'production'

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, outputDir),
      filename: "main.js",
    },
    plugins: [
      new HtmlWebpackPlugin({
       template: './src/index.html'
      }),
    ],
    watch: !isProduction,
    module: {
      rules: [
        {
          test: /\.css/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.js/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      ]
    }
  }
}