module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/',
    assetsDir: 'assets',
    productionSourceMap: false
}