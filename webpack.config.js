var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.join(__dirname, 'node_modules');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('commons','commons.js');  // 生成common.js公共代码文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {  // 输入文件入口
        app: './entry/app'
    },
    output: {  // 输出文件出口
        path: path.join(__dirname, 'bundle'),
        filename: '[name].bundle.js',
        publicPath:'http://localhost/workspace/github/product_blog/bundle/'
    },
    module: {  // 资源加载器
        loaders: [
            { test: /\.less$/, loader: 'style!css!autoprefixer!less?strictMath&noIeCompat'},
            { test: /\.css$/, loader: 'style!css'},
            { test: /\.(js|jsx)$/, loader: 'babel-loader'},
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'},
            { test: /\.(eot|ttf|svg|woff|woff2)$/, loader: "file-loader!url-loader" },
            { test: /[\\\/]node_modules[\\\/]modernizr[\\\/]bin[\\\/]modernizr\.js$/,
                loader: "imports?this=>window!exports?window.Modernizr" }
        ]
    },
    externals: {  // 兼容外部第三方库
        'jquery': 'jQuery',
        'react': 'React',
        'react-router': 'ReactRouter'
    },
    resolve: {  // 省略文件扩展名
        extensions: ['', '.js', '.json', '.css', '.jsx', '.less'],
        alias: {}
    },
    plugins: [  // 需要运行的插件
        commonsPlugin,
        new ExtractTextPlugin("[name].css")
    ]
};
