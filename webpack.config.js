const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv'); //its inside module.exports
const fs = require('fs'); // to check if the file exists


module.exports = (env) => {
    console.log('env je: ', env)
    //extrahovat vsechna zkompilovana scss a css z bundle.js do styles.css
    const CSSExtract = new ExtractTextPlugin('styles.css');
    


      // Get the root path (assuming your webpack config is in the root of your project!)
    const currentPath = path.join(__dirname);
    
    // Create the fallback path (the production .env) if other files dont exist
    const basePath = currentPath + '/.env';

    // We're concatenating the environment name to our filename to specify the correct env file! its based in package.json script eg as --env.ENVIRONMENT=development
    const envPath = basePath + '.' + env.ENVIRONMENT;

    // Check if the file exists, otherwise fall back to the production .env
    const finalPath = fs.existsSync(envPath) ? envPath : basePath;

    // Set the path parameter in the dotenv config
    //dotenv.config() takes variables in .env file and makes them into key: pair and saves them to parsed property(argument is path to .env file)
    const fileEnv = dotenv.config({ path: finalPath }).parsed;



    //envKeys creates new object and changes key name from envVarName to 'process.env.envVarName'
    //this compiles environment variables so they get values defined in .env file and can be used in React code
    const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
        return prev;
    }, {});






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
        plugins: [
            CSSExtract,
            new webpack.DefinePlugin(envKeys)
        ],
        devtool: envKeys['process.env.NODE_ENV'] === 'production' ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            proxy: {'/api/**': {target: "http://127.0.0.1:3002"}},
            historyApiFallback: true
        }
    }
  };
