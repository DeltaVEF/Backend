import {base64, code} from './../values/characters';

import {DateModule} from './../modules/date-module';
import {IdModule} from './../modules/id-module';
import {ResponseModule} from './../modules/response-module';

import {RoomModel} from './../models/mongoose/room';

export class RoomRoutes {
	constructor() {
		this.idModule = new IdModule(base64);
		this.codeModule = new IdModule(code);
	}

	async addRoom(context) {
		let room = new RoomModel();
		room._id = await this.idModule.generateUniqueId(11, RoomModel);
		room.title = context.request.body.title;
		room.code = this.codeModule.generateId(8);
		room.startDate = new Date(Date.now());

		try {
			await room.save();
			context.body = ResponseModule.genericResponse(false, 'Room saved successfully.');
		}
		catch (e) {
			context.status = 400;
			context.body = ResponseModule.genericResponse(true, e);
		}
	}

	async closeRoom(context) {
		let result = await RoomModel.update({_id: context.params.room_id, endDate: null}, {endDate: new Date(Date.now())}).exec();

		if (!result.nModified) {
			context.status = 500;
			context.body = ResponseModule.genericResponse(true, 'The room you\'re trying to close does not exist or is already closed.');
		}

		context.body = ResponseModule.genericResponse(false, 'Room successfully closed.');
	}

	async editRoom(context) {
	}

	async getRoom(context) {
		let room = await RoomModel.findById(context.params.room_id).exec();

		if (room != null)
			context.body = ResponseModule.genericDataResponse(false, room);
		else {
			context.status = 404;
			context.body = ResponseModule.genericResponse(true, 'This room does not exist.');
		}
	}
}
