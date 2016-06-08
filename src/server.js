import mongoose from 'mongoose';

import {KoaServer} from './rest/koa-server';

import {RoomRoutes} from './routes/room-routes';

import {database} from './connection/connection-strings';
import {baseURL, port} from './values/connection';

class Server {
	constructor() {
		this.server = new KoaServer(baseURL, port);
	}

	accept() {
		mongoose.connect(database);

		this.server.listen();
	}

	close() {
		mongoose.disconnect();

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
}

let server = new Server();

server.init();
server.accept();

process.on('exit', () => server.close());
