const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    mode: 'development',
    entry: {
        indexBundle: './index',
    },
    context: `${__dirname}/static_src`,
    output: {

        // imgPath: `${__dirname}/media/images`,
        path: `${__dirname}/staticfiles/build`,
        filename: NODE_ENV === 'development' ? '[name].js' : '[name]-[hash].js',
        publicPath: '/staticfiles/build/',
        library: '[name]',
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: `${__dirname}/static_src`,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded',
            },
            {
                test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2)$/,
                loader: 'url-loader?limit=4096',
                options: {
                    imgPath:`${__dirname}/media/images`,
                    name: '[imgPath][name].[ext]',
                    // outputPath: 'images/'
                  }
            },
        ],
    },

    resolve: {
        modules: [`${__dirname}/static_src`, 'node_modules'],
        extensions: ['.js', '.jsx'],
    },

    watch: NODE_ENV === 'development',
    watchOptions: {
        aggregateTimeout: 100,
    },

    devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : false,

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new BundleTracker({ filename: './webpack-stats.json'}),
      ],
};


if (NODE_ENV !== 'development') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true,
            },
        })
    );
}
