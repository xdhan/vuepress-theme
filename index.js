// module.exports = {
//   // extend: '@vuepress/theme-default',
// }
const path = require('path')
module.exports = (option, context) => {
  return {
    enhanceAppFiles: path.resolve(__dirname, 'enhanceApp.js'),
    // chainWebpack(config, isServer) {
    //   // config 是一个 ChainableConfig 的实例
    //   config.module
    //     .rule('sass')
    //     .test(/\.s(c|a)ss$/)
    //     .use('vue-style-loader')
    //     .loader('vue-style-loader')
    //     .end()
    //     .use('css-loader')
    //     .loader('css-loader')
    //     .end()
    //     .use('sass-loader')
    //     .loader('sass-loader')
    //     .options(
    //       {
    //         implementation: require('sass'),
    //         fiber: require('fibers'),
    //         indentedSyntax: true, // optional
    //       },
    //       {
    //         implementation: require('sass'),
    //         sassOptions: {
    //           fiber: require('fibers'),
    //           indentedSyntax: true, // optional
    //         },
    //       }
    //     )
    //     .end()
    // },
  }
}
