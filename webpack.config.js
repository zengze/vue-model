const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const IS_ENV = process.env.NODE_ENV == 'production'

var plugins = []
if (IS_ENV) { //生产环境
    plugins.push(new webpack.DefinePlugin({
        'process.env': { //设置成生产环境
            NODE_ENV: '"production"'
        }
    }))
}

plugins.push(
    new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
        filename: './index.html', //生成的html存放路径，相对于 path
        template: './src/index.html', //html模板路径
    })
)

module.exports = {
    devServer: {
      inline: true,
      hot: true,
      port: 5000,
      //代理
      proxy: {
        '/zz': {
          target: 'http://localhost:5001/',
          changeOrigin: true,
          pathRewrite: {
              '^/zz': ''
          }
        }
      }
    },
    plugins,
    //编译入口文件
    entry: {
      'main': './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js?[hash]' //编译后的文件名
    },
    module: {
      rules: [
            {
                test: /\.js(x)*$/,
                exclude: /^node_modules$/,
                use: 'babel-loader'
            },
            {
                test: /\.vue$/,
                exclude: /^node_modules$/,
                use: 'vue-loader'
            },
            {
                test: /\.(css|less)/,
                exclude: /^node_modules$/,
                use: [
                  "style-loader",
                  "css-loader",
                  "less-loader"
                ]
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /^node_modules$/,
                use: 'url-loader?limit=2000&name=[name].[ext]' //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
            },
            {
                test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
                exclude: /^node_modules$/,
                use: 'file-loader?name=[name].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'], //后缀名自动补全
        alias: {
          '@': path.resolve(__dirname, './src'),
          vue: 'vue/dist/vue.js' //webpack打包时，需要设置别名
        }
    }
}
