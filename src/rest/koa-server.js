import koa from 'koa';
import params from 'koa-strong-params';
import routing from 'koa-routing';

export class KoaServer {
	constructor(baseURL, port) {
		this.app = koa();
		this.baseURL = baseURL;
		this.port = port;
	}

	addDeleteRequest(url, middleware) {
		this.app.route(this.urlCreator(url)).delete(middleware);
	}

	addGetRequest(url, middleware) {
		this.app.route(this.urlCreator(url)).get(middleware);
	}

	addPostRequest(url, middleware) {
		this.app.route(this.urlCreator(url)).post(middleware);
	}

	addPutRequest(url, middleware) {
		this.app.route(this.urlCreator(url)).put(middleware);
	}

	init() {
		this.app.use(routing(this.app));
		this.app.use(params());
	}

	listen() {
		this.app.listen(this.port);
	}

	urlCreator(url) {
		return `${this.baseURL}${url}`;
	}
}
