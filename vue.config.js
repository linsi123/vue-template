const path = require('path')
const WebpackNotifierPlugin = require('webpack-notifier')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const mockService = require('utweb-mock-middleware')

function resolve(src) {
  return path.join(__dirname, './', src)
}


module.exports = {
  baseUrl: '/',
  // 是否在保存的时候使用 `eslint-loader` 进行检查。
  // 有效的值：`ture` | `false` | `"error"`
  // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
  lintOnSave: true,
  // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader`
  // 在多核机器下会默认开启。
  parallel: require('os').cpus().length > 1,

  // CSS 相关选项
  css: {
    // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
    // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
    extract: true,
    // 为所有的 CSS 及其预处理文件开启 CSS Modules。
    // 这个选项不会影响 `*.vue` 文件。
    modules: false
  },
  // 是否为生产环境构建生成 source map？
  productionSourceMap: false,
  // 配置 webpack-dev-server 行为。
  devServer: {
    port: 8070,
    before: app => {
      const BASE_MOCK_PATH = '/mock/';
      const ROUTER_PATH = '/mock/router.js';
      // app.use(mockService({ mockRoot: BASE_MOCK_PATH, routes: ROUTER_PATH}))
    }
  },
  configureWebpack: config => {
    // if (process.env.NODE_ENV === 'production') {
    //   // 为生产环境修改配置...
    //   if(process.env.npm_lifecycle_event === 'analyze'){
    //     config.plugins.push(
    //       new BundleAnalyzerPlugin()
    //     );
    //   }
    // }
    // 为开发环境修改配置...
    return {
      plugins: [new WebpackNotifierPlugin()],
      resolve: {
        extensions: ['.ts', '.vue'],
        alias: {
          '~': resolve('src/common')
        }
      }
    }
  }
}
