const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = (env) => {
  const isProduction = env === 'production';
  //extrahovat vsechna zkompilovana scss a css z bundle.js do styles.css
  const CSSExtract = new ExtractTextPlugin('styles.css');
  
    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                //i v development pouzivat sourceMap aby se v konzoli dalo dohledat, odkud styl pochazi
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            { 
                test: /\.(png|jpg)$/, 
                loader: 'url-loader?limit=8192'
            },
            { test: /\.json$/, loader: 'json-loader' }
            ]
        },
        plugins: [CSSExtract],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            proxy: {'/api/**': {target: "http://127.0.0.1:3000"}},
            historyApiFallback: true
        }
    }
  };
