import parse from 'co-body';

import {base64, code} from './../values/characters';

import {DateModule} from './../modules/date-module';
import {IdModule} from './../modules/id-module';
import {SaveModule} from './../modules/save-module';
import {ResponseModule} from './../modules/response-module';

import {RoomModel} from './../models/mongoose/room';

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

			yield SaveModule.saveModel(this, 500, 'Room successfully created.', room);
		};
	}

	static closeRoom() {
		return function* () {
			try {
				let result = yield RoomModel.update({_id: this.params['room_id'], endDate: null}, {endDate: DateModule.newUTCDate()}).exec();

				if (!result.nModified)
					throw new Error('The room is already closed.');

				this.body = ResponseModule.createResponse(false, 'Room successfully closed.');
			} catch(e) {
				this.status = 500;
				this.body = ResponseModule.createResponse(true, e.message);
			}
		};
	}

	static editRoom() {
		return function* () {

		};
	}
}
