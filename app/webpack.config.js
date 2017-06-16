const path = require('path');
const ngtools = require('@ngtools/webpack');

module.exports = {
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            'mylib': '../lib/dist/index.js'
        }
    },
    entry: './src/main.ts',
    output: {
        path: path.join(process.cwd(), 'dist'),
        publicPath: 'dist/',
        filename: "bundle.js"
    },
    plugins: [
      new ngtools.AotPlugin({
          tsConfigPath: './tsconfig.json',
          mainPath: './src/main.ts',
          skipCodeGeneration: true
      })
    ],
    module: {
        loaders: [
          {
              test: /\.ts$/,
              loader: '@ngtools/webpack'
          }
        ]
    },
    devServer: {
        historyApiFallback: true
    }
};