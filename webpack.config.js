const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const Dotenv = require("dotenv-webpack");

const devMode = process.env.NODE_ENV !== "production";
console.log("DevMode: ", devMode);

const plugins = [
    new Dotenv({
        systemvars: true,
    }),
    new HTMLWebpackPlugin({
        template: path.resolve(__dirname, "./public/index.html"),
        inject: "body",
        minify: !devMode,
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: devMode ? "[name].css" : "[name].[contenthash].css",
    }),
];
if (devMode) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
}

const optimization = () => {
    const config = {};
    if (!devMode) {
        config.minimizer = [new CssMinimizerPlugin(), new TerserPlugin()];
    }
    return config;
};

const cssLoaders = (extra) => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {},
        },
    ];
    if (extra) {
        loaders.push(extra);
    }
    return loaders;
};

const babelOptions = (preset) => {
    const opts = {
        presets: ["@babel/preset-react"],
    };
    if (preset) {
        opts.presets.push(preset);
    }
    return opts;
};

module.exports = {
    plugins,
    context: path.resolve(__dirname, "src"),
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    },
    mode: "development",
    entry: {
        main: ["@babel/polyfill", "./index.js"],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
    },
    experiments: {
        topLevelAwait: true,
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                mode: "local",
                                localIdentName:
                                    "[name]__[local]__[hash:base64:5]",
                                auto: /\.module\.\w+$/i,
                            },
                        },
                    },
                    "sass-loader",
                ],
            },


            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: babelOptions(),
                },
            },
            {
                test: /\jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: [
                            "@babel/preset-react",
                            "@babel/plugin-syntax-top-level-await",
                        ],
                    },
                },
            },
        ],
    },
    optimization: optimization(),
    devServer: {
        compress: true,
        port: 3000,
        hot: devMode,
        historyApiFallback: true,
    },

    devtool: devMode ? "source-map" : false,
};
