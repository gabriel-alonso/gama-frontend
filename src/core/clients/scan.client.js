import HttpClient from '../http.client'

class ScanClient {
  constructor(httpClient) {
    this.httpClient = httpClient
  }

  async findAll() {
    return await this.httpClient.get()
  }
}

export default new ScanClient(new HttpClient('/scan'))
