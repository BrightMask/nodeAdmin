const path = require('path');
module.exports = {
  // 项目入口文件 支持 str | [] | {}
  entry: path.resolve(__dirname, './app.js'),
  // 项目出口 
  output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'main.js'
  },
  // 打包环境 默认是生产环境 production
  // 如果是开发环境 这里需要换成 development
  // 接下来为了观察打包后的文件，使用 development
  mode: 'development',
  // 模块 这些选项决定了如何处理项目中的不同类型的模块。
  module: {
      rules: [
          {
              test: /\.css$/,
              use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
              ]
          },
          {
              test: /\.(png|jpg|gif)$/,
              use: [
                  {
                      loader: 'file-loader',
                      options: {},
                  },
              ],
          }
      ]

  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
        filename: resolve('./../dist/index.html'), // html模板的生成路径
        template: 'index.html',//html模板
        inject: true, // true：默认值，script标签位于html文件的 body 底部
        hash: true, // 在打包的资源插入html会加上hash
        //  html 文件进行压缩
        minify: {
            removeComments: true,               //去注释
            collapseWhitespace: true,           //压缩空格
            removeAttributeQuotes: true         //去除属性引用
        }
    })
    
  ],
  // 是否开启 source-map
  devtool: 'cheap-module-eval-source-map'
}
