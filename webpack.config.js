const path = require('path');
//const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports ={
    mode:'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    // plugins:[
    //     new HtmlWebPackPlugin({
    //         template:'./dist/index.html',
    //     })
    // ],

    module:{
        rules:[
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};