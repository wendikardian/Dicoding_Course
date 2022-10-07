const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry : "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use : [
                    {
                        loader: "style-loader"
                    },{
                        loader : "css-loader"
                    }
                ]
            },{
                test: /\.js$/,
                use : [
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template : "./src/index.html",
            filename : "index.html",
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
        }
        })
    ], optimization: {
    minimize: true,
    minimizer: [
        new HtmlMinimizerPlugin({
        minimizerOptions: {
            collapseWhitespace: true,
        },
        minify: (data, minimizerOptions) => {
            const htmlMinifier = require("html-minifier-terser");
            const [input] = Object.entries(data);

            return {
                code: htmlMinifier.minify(input, minimizerOptions),
                warnings: [],
                errors: [],
            };
        },
        }),
    ],
    }
}