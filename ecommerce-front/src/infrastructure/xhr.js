import axios from 'axios'

export default ({ apiUrl }) => ({
  async get(path, params) {
    const { data } = await axios.get(apiUrl.concat(path), params)
    return data
  },
  async post(path, body) {
    const { data } = await axios.post(apiUrl.concat(path), body)
    return data
  },
  async put(path, body) {
    const { data } = await axios.put(apiUrl.concat(path), body)
    return data
  },
  async delete(path) {
    const { data } = await axios.delete(apiUrl.concat(path))
    return data
  }
})
