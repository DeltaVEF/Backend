import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import etag from 'koa-etag';
import router from 'koa-router';

export class KoaServer {
	constructor(baseURL, port) {
		this.app = new Koa();
		this._baseURL = baseURL;
		this._port = port;
		this.router = router();
	}

	/**
	 * Gracefully closes the current server instance.
	 */
	close() {
		this.serverInstance.close();
	}

	/**
	 * Add middleware to the specified DELETE endpoint. The method will always
	 * prefix the current base URL variable to the endpoint. If /api is the
	 * baseURL and /test the url parameter, the result will be /api/test.
	 *
	 * @param {String} Endpoint URL.
	 * @param {Function} Middleware function which will be executed when the
	 * endpoint is called.
	 */
	addDeleteRequest(url, middleware) {
		this.router.delete(this.urlCreator(url), middleware);
	}

	/**
	 * Add middleware to the specified GET endpoint. The method will always
	 * prefix the current base URL variable to the endpoint. If /api is the
	 * baseURL and /test the url parameter, the result will be /api/test.
	 *
	 * @param {String} Endpoint URL.
	 * @param {Function} Middleware function which will be executed when the
	 * endpoint is called.
	 */
	addGetRequest(url, middleware) {
		this.router.get(this.urlCreator(url), middleware);
	}

	/**
	 * Add middleware to the specified POST endpoint. The method will always
	 * prefix the current base URL variable to the endpoint. If /api is the
	 * baseURL and /test the url parameter, the result will be /api/test.
	 *
	 * @param {String} Endpoint URL.
	 * @param {Function} Middleware function which will be executed when the
	 * endpoint is called.
	 */
	addPostRequest(url, middleware) {
		this.router.post(this.urlCreator(url), middleware);
	}

	/**
	 * Add middleware to the specified PUT endpoint. The method will always
	 * prefix the current base URL variable to the endpoint. If /api is the
	 * baseURL and /test the url parameter, the result will be /api/test.
	 *
	 * @param {String} Endpoint URL.
	 * @param {Function} Middleware function which will be executed when the
	 * endpoint is called.
	 */
	addPutRequest(url, middleware) {
		this.router.put(this.urlCreator(url), middleware);
	}

	set baseURL(baseUrl) {
		this._baseURL = baseUrl;
	}

	/**
	 * Initialises all middleware which is used by the REST API.
	 */
	init() {
		this.app.use(bodyParser());
		this.app.use(etag());
		this.app.use(this.router.routes());
		this.app.use(this.router.allowedMethods());
	}

	/**
	 * Starts the server.
	 */
	listen() {
		this.serverInstance = this.app.listen(this._port);
	}

	/**
	 * Registers middleware which needs to be executed before an endpoint needs
	 * to be executed. If you register middleware on /api and call /api/test,
	 * the registered middleware will execute.
	 *
	 * @param  {String} URL of endpoint.
	 * @param  {Function} Middleware which will be executed when URL is called.
	 */
	registerMiddlewareOnRoute(route, middleware) {
		this.router.use(route, middleware);
	}

	urlCreator(url) {
		return `${this._baseURL}${url}`;
	}
}
