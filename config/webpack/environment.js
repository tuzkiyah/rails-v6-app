const { environment } = require('@rails/webpacker')

const webpack = require('webpack')
environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquert/src/jquery',
    jQuery: 'jquert/src/jquery',
    Popper: ['popper.js', 'default']
  })
)

module.exports = environment
