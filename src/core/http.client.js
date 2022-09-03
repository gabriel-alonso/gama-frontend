import axios from 'axios'

export default class HttpClient {
  constructor(basePath = '') {
    this.request = axios.create({
      baseURL: process.env.VUE_APP_API_URL + basePath
    })
  }

  async get(path, query = {}) {
    return await this.request.get(path, query)
  }
}
