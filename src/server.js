import {KoaServer} from './rest/koa-server';

import {RoomRoutes} from './routes/room-routes';

import {baseURL, port} from './values/connection';

class Server {
	constructor() {
		this.server = new KoaServer(baseURL, port);
	}

	close() {
		this.server.close();
	}

	init() {
		this.server.init();

		this.server.addGetRequest('/', function* () {
			this.body = 'Hello world!';
		});

		this.server.addPostRequest('/rooms', RoomRoutes.addRoom());
		this.server.addPutRequest('/rooms/:room_id/close', RoomRoutes.closeRoom());
	}

	listen() {
		this.server.listen();
	}
}

let server = new Server();

server.init();
server.listen();

process.on('exit', () => server.close());
