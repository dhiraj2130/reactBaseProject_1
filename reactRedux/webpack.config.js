var config = {
    entry: './public/src/index.js',

    output: {
        path:`${__dirname}/public`,
        filename: 'bundle.js',
        publicPath:'/'
    },

    devServer: {
        inline: true,
        port: 8095
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2015', 'react']
                }
            }, {
            test: /\.css$/,
            loader: 'style-loader'
          }, {
            test: /\.css$/,
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }

        ]
    }
}

module.exports = config;/**
 * Created by dhiraj on 27/12/2016.
 */
