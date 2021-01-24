module.exports = {
  pages: {
    index: {
      entry: 'example/main.js',
      template: 'public/index.html'
    }
  },
  publicPath: './',
  outputDir: 'exampleDist',
  filenameHashing: true,
  lintOnSave: true,
  productionSourceMap: false
}
