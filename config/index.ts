import prod from './prod.env'
import dev from './dev.env'

export default {
  NODE_ENV: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  build: {
    env: prod
  },
  dev: {
    env: dev,
    port: 8080
  }
}