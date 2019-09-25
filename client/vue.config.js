module.exports = {
  outputDir: '../build',
  assetsDir: 'public',
  devServer: {
    proxy: {
      '/api': {
        logLevel: 'debug',
        target: 'http://localhost:3000'
      }
    }
  }
}
