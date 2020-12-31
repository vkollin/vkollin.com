const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const autoprefixer = require('autoprefixer')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const imageminMozjpeg = require('imagemin-mozjpeg')

const isDevelopment = true

const config = {
    mode: isDevelopment ? 'development' : 'production',
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.css', '.scss'],
    },
    entry: {
        index: path.join(__dirname, 'assets/index.jsx')
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[fullhash].js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: isDevelopment ? '[name].css' : '[name].[fullhash].css',
            chunkFilename: isDevelopment ? '[id].css' : '[id].[fullhash].css',
        }),
        new CleanWebpackPlugin({cleanStaleWebpackAssets: !isDevelopment}),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html')
        }),
        new ImageminPlugin({

            pngquant: {quality: [0.5, 0.5]},
            plugins: [imageminMozjpeg({quality: 50})]
        })
    ],

    optimization: {
        minimizer: [new TerserPlugin(), new OptimizeCssAssetsPlugin({})],
        splitChunks: {
            chunks: 'all',
            maxAsyncRequests: 10,
            maxInitialRequests: 6,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                },
                default: {
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    },

    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                ident: 'postcss',
                                plugins: [autoprefixer]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(j|t)sx?$/,
                exclude: /(node_modules|prod)/,
                use: ["babel-loader"],
            },
            {
                test: /\.(png|svg|jpg|gif)$/i,
                use: ['file-loader']
            },
            {
                test: /\.html$/,
                use: [{loader: 'html-loader'}]
            },
        ]
    }
}

if (isDevelopment) {
    configdevtool = 'eval-cheap-source-map';
    config.devServer = {contentBase: path.join(__dirname, 'dist'), port: 3000, hot: true}
}

module.exports = config
