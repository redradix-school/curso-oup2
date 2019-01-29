const configs = {
  develop: {
    apiUrl: 'http://localhost:3001'
  }
}

const env = process.env.NODE_ENV
const activeConfig = (configs[env] || configs.develop)
export default activeConfig
