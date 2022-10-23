import HttpClient from '../http.client'

class ScanDataClient {
  constructor(httpClient) {
    this.httpClient = httpClient
  }

  async findAll() {
    return await this.httpClient.get()
  }
}

export default new ScanDataClient(new HttpClient('/scan-data'))
