const path = require('path')

module.exports = {
    // configurações otimidas
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src', 'components'),
            '@containers': path.resolve(__dirname, 'src', 'containers'),
            '@utils': path.resolve(__dirname, 'src', 'utils')
        }
    }
}
