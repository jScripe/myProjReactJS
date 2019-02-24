const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const paths = {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist')
};

module.exports = {
    context: paths.src, 
    entry: {
        app: './index'  
    },
    
    output: {
        path: paths.dist,  
        filename: '[name].bundle.js'  
    },
    
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'] 
    },

    devtool: 'inline-source-map', 
    
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                  process.env.NODE_ENV !== 'production'
                      ? 'style-loader'
                      : MiniCssExtractPlugin.loader,
                  'css-loader',
                  'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            } 
        ]
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }), 
    ],
    
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        port: 8080,
        historyApiFallback: true
    }
};
