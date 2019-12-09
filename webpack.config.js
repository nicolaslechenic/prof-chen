const path = require("path");
const extractTextPlugin = require("extract-text-webpack-plugin");

const cssLoaders =
    [
        {
            loader: 'css-loader',
            options: {
                importLoaders: 1
            }
        }
    ];

let config = {
    entry: './src/Chen.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: cssLoaders
                })
            },
            {
                test: /\.scss$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [...cssLoaders, 'sass-loader']
                })
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/fonts/'
                }
            },
            {
                test: /\.(png|svg|jpe?g|gif)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: { limit: 8192 }
                    },
                    {
                        loader: 'img-loader',
                        options: { enabled: false }
                    }
                ]
            }
        ]
    },
    plugins: [
        new extractTextPlugin({
            filename: 'application.min.css',
            disable: true
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules')
        ]
    }
};

module.exports = config;