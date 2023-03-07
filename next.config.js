const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const withLess = require("next-with-less");

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    runtimeCaching,
  }
})

module.exports = withLess ({
  lessLoaderOptions: {}
})