import HttpClient from '../http.client'

class RequestClient {
  constructor(httpClient) {
    this.httpClient = httpClient
  }

  async findAll() {
    return await this.httpClient.get()
  }
}

export default new RequestClient(new HttpClient('/requests'))
