const configs = {
  develop: {
    port: 3001
  }
}

const env = process.env.NODE_ENV
module.exports = (configs[env] || configs.develop)
