import parse from 'co-body';

import {base64, code} from './../values/characters';

import {DateModule} from './../modules/date-module';
import {IdModule} from './../modules/id-module';

import {RoomModel} from './../models/mongoose/room-schema';

export class RoomRoutes {
	static addRoom() {
		return function* () {
			let data = yield parse(this, {
				limit: '512b'
			});

			let room = new RoomModel();
			room['_id'] = yield IdModule.generateId(base64, 11);
			room['title'] = data.title;
			room['code'] = yield IdModule.generateId(code, 8);
			room['startDate'] = DateModule.newUTCDate();

			this.body = room;
		};
	}

	static closeRoom() {
		return function* () {
			this.body = this.params;
		};
	}

	static editRoom() {
		return function* () {

		};
	}
}
