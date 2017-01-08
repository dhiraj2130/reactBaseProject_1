var config = {
    entry: './src/app/components/app.js',

    output: {
        path:'./',
        filename: 'bundle.js',
    },

    devServer: {
        inline: true,
        port: 8090
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',

                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}

module.exports = config;/**
 * Created by dhiraj on 27/12/2016.
 */
