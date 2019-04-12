const webpackMerge = require('webpack-merge')
const { execSync } = require('child_process')

module.exports = (api, projectOptions) => {
  // api.chainWebpack(webpackConfig => {
  //   // 通过 webpack-chain 修改 webpack 配置
  //   webpackConfig
  //     .entry('index')
  //     .add('app.ts')
  //     .end()
  //   // Modify out
  // })
  // 修改 webpack 配置
  // 或返回通过 webpack-merge 合并的配置对象
  // api.configureWebpack(webpackConfig => {
  //   const res = webpackMerge(webpackConfig, {
  //     entry: {
  //       app: ['./src/app.ts']
  //     }
  //   })
  //   return res
  // })

  api.registerCommand(
    'analyze',
    {
      description: 'start analyze server'
    },
    args => {
      // 注册 `vue-cli-service test`

      // resolve webpack config
      const webpackConfig = api.resolveWebpackConfig()
      const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

      webpackConfig.plugins = webpackConfig.plugins.push(new BundleAnalyzerPlugin())

      execSync(`yarn run build`)
    }
  )
}
module.exports.defaultModes = {
  analyze: 'production'
}
