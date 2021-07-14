export default {
  build: {
    env: require('./prod.env')
  },
  dev: {
    env: require('./dev.env'),
    port: 3000
  }
}