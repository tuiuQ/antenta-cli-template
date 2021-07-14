import { Configuration } from "webpack";
import config from '../config'

export default {
  mode: 'development',
  devServer: {
    port: config.dev.port | 3000
  }
} as Configuration