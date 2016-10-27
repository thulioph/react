var config;

config = {
    entry: './App.js', // arquivo de entrada da aplicação
    output: {
        filename: 'build/bundle.js' // arquivo que será gerado
    },
    module: {
        loaders: [
            {
                test: /\.js$/, // todos os arquivos .js serão testados
                exclude: /node_modules/, // node_modules não estará nos testes
                loader: 'babel', // o babel será responsável pelo transpiler
                query: {
                    presets: ['es2015', 'react'] // o babel irá compilar o react
                }
            }
        ]
    }
}

module.exports = config;