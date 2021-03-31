
const { resolve } = require('path')

module.exports = function nuxtVtNotifications(moduleOptions) {
    const options = Object.assign({}, this.options.notify, moduleOptions)

    this.addPlugin({
        ssr: false,
        src: resolve(__dirname, 'plugin.js'),
        fileName: 'vt-notifications.js',
        options
    })
}

module.exports.meta = require('../package.json')