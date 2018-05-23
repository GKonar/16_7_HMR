const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');
const plugins = [new HtmlWebpackPlugin({
    template: 'src/index.html',
    filename: 'index.html',
    inject: 'body'
})];



//webpack.config.js
module.exports = (env) => { // Ta funkcja jako parametr będzie zawierać środowisko, które przekażemy w CLI !!!!!
    if (env === 'production') {
        plugins.push(
            new OptimizeJsPlugin({
                sourceMap: false
            })
        )
    }
    return {
        mode: env || 'production', // dzięki zastosowaniu opcji env mamy większe możliwości modyfikacji 
        entry: './src/index.js', //wskazuje plik od którego zaczynamy proces kompilacji
        output: { // wskazuje na ścieżkę i nazwę pliku wejściowego
            path: path.resolve(__dirname, 'build'),
            filename: 'app.bundle.js'
        },
         module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: "babel-loader"
                },
                {
                    test: /\.css$/,
                    use: [ //Parametr use to odpowiednik pojedynczego loader. Przyjmuje on listę loaderów, przez które musi przejść plik .css, aby stać się modułem.
                        {loader: 'style-loader'},
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true
                            }
                        }
                    ]
                },
                {
                    test: /\.(html)$/,
                    use: {
                    loader: 'html-loader',
                    options: {
                    attrs: [':data-src']
                        }
                    }
                }
            ]
        },
        plugins
    }
};