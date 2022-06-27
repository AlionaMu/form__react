export default class Service {
	_apiBase = 'https://jsonplaceholder.typicode.com';

	async createApi(method, url, body = null) {
    const response = await fetch(this._apiBase+url, {
      method,
      body: body ? JSON.stringify(body) : null,
      headers: {
          'Content-Type': 'application/json'
      },
    });
    return await response;
  }

	async getUsers() {
		return this.createApi('GET', '/users');
	}

	async addUser(body) {
		return this.createApi('POST', '/users', body);
	}
}

export const service = new Service();