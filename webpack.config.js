const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: {
        index : './src/index.js'
    },
    output:{
        filename: '[name].js',
        path: path.join(__dirname, '/dist')
    },
    mode: "development",
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                use: ['babel-loader']
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"],
            },
            {
                test: /\.(svg|png|jpg)$/,
                use:
                  {
                    loader: 'file-loader',
                    options: {
                      name: 'public/[name].[ext]',
                      output: {
                        path: path.join(__dirname, 'public/images')
                      },
                      useRelativePath: true
                    }   
                  }
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "public/index.html",
            template: path.join(__dirname, 'src/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'public/[name].css'
        })
    ]
}