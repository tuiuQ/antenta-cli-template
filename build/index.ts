import { merge } from 'webpack-merge'
import base from './webpack.base.config'
import dev from './webpack.dev.config'
import prod from './webpack.prod.config'
import { Configuration } from 'webpack'


export default (env: Record<string, boolean | string | number>): Configuration => {
  const isProd = env.production === true
  if (isProd) {
    return merge(base, prod)
  }
  return merge(base, dev)
}