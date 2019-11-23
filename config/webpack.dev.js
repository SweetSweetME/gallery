const path = require("path");
const webpack = require('webpack');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // 入口：有并且可以有多个
    entry: {
        // 这里思考为什么是./ 而不是../ 考虑这个文件是在package.json的文件中执行 package.json 和 src 同级
        main: ["./src/index.js"]
    },
    // 打包环境：开发 & 生产
    mode: "development",
    // 出口：有且只能有一个
    output: {
        filename: "[name]-bundle.js",
        // 这里怎么又../ 了呢 不理解？
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    // 本地服务器
    devServer: {
        contentBase: "dist", // 浏览器从这个文件中寻找index.html
        // hot: true,  // 没什么用？？？？？
        overlay: true // 编译出错时，页面也报bug
    },
    // 本地调试工具
    devtool: "source-map",
    // 各种loader
    module: {
        rules: [
            // js loader
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ],
                exclude: /node_modules/
            },
            // less loader
            {
                test: /\.(less)|(css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader"
                    },
                    {
                        loader: "less-loader"
                    }

                ]
            },
            // html-loader 解析html 里的图片
            {
                test: /\.html$/,
                use: [
                    // {
                    //     loader: "file-loader",
                    //     options: {
                    //         name: "[name].html"
                    //     }
                    // },
                    // {
                    //     loader: "extract-loader"
                    // },
                    {
                        loader: "html-loader",
                        options: {
                            attrs: ["img:src"]
                        }
                    }
                ]
            },
            // 图片loader
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "images/[name].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    // 各种解析文件名、文件后缀解析、别名设置
    resolve: {
        alias: {
            // 组件目录别名 COMP
            COMP: path.resolve(__dirname, '../src/components')
        }
    },
    // 各种插件
    plugins: [
        // 提供全局变量
        new webpack.ProvidePlugin({
            LO: 'lodash'
        }),
        // src 里的 index.html 打包时到 dist里面
        // 还需要用到loader
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        }),
        // 从js中提取出css name即输出的默认main 加上这个时需要去掉style-loader的使用
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
}