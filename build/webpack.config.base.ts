import { Configuration } from 'webpack'
import { resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'


export default {
  entry: './src/index.ts',
  output: {
    filename: '[name].js',
    path: resolve(__dirname, '../dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
} as Configuration