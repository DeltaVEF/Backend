import {KoaServer} from './rest/koa-server';

import mongoose from 'mongoose';
require('./models/mongoose/room');
require('./models/mongoose/user');

import {MarkerRoutes} from './routes/marker-routes';
import {RoomRoutes} from './routes/room-routes';

import {connectionStrings} from './connection/connection-strings';
import {port} from './values/connection';

class Server {
	constructor() {
		this.markerRoutes = new MarkerRoutes();
		this.roomRoutes = new RoomRoutes();

		this.server = new KoaServer('/api', port);
	}

	close() {
		this.server.close();
	}

	init() {
		this.server.init();
		mongoose.connect(connectionStrings.mongoose);

		this.server.addDeleteRequest('/rooms/:room_id/:marker_id', (context) => this.markerRoutes.deleteMarker(context));

		this.server.addGetRequest('/rooms/:room_id', (context) => this.roomRoutes.getRoom(context));

		this.server.addPostRequest('/rooms', (context) => this.roomRoutes.addRoom(context));
		this.server.addPostRequest('/rooms/:room_id/markers', (context) => this.markerRoutes.addMarker(context));

		this.server.addPutRequest('/rooms/:room_id/close', (context) => this.roomRoutes.closeRoom(context));
	}

	listen() {
		this.server.listen();
	}
}

let server = new Server();

server.init();
server.listen();

console.log(`Server listening on port ${port}`);
