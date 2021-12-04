module.exports = {
  // lintOnSave: false,
  publicPath: './',
  productionSourceMap: false,
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'your project name'
        return args
      })
  },
  devServer: {
    port: 3000
  }
}
