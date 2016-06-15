import {base64} from './../values/characters';

import {DateModule} from './../modules/date-module';
import {IdModule} from './../modules/id-module';
import {ResponseModule} from './../modules/response-module';

import {RoomModel} from './../models/mongoose/room';

import {roomMarkerInsertionQuery, roomMarkerRemovalQuery} from './../values/update-queries';

export class MarkerRoutes {
	constructor() {
		this.idModule = new IdModule(base64);
	}

	async addMarker(context) {
		let query = roomMarkerInsertionQuery(context.params.room_id, this.idModule.generateId(11), new Date(Date.now()), context.request.body.text || null, context.request.body.author);
		let result = await RoomModel.update(query.conditions, query.update).exec();

		if (!result.nModified) {
			context.status = 500;
			context.body = ResponseModule.genericResponse(true, 'The room you\'re trying to add a marker to does not exist.');
		}

		context.body = ResponseModule.genericResponse(false, 'Marker was successfully added to the room.');
	}

	async changeMarker(context) {

	}

	async deleteMarker(context) {
		let query = roomMarkerRemovalQuery(context.params.room_id, context.params.marker_id);
		let result = await RoomModel.update(query.conditions, query.update).exec();

		if (!result.nModified) {
			context.status = 500;
			context.body = ResponseModule.genericResponse(true, 'The room you\'re trying to remove a marker from does not exist.');
		}

		context.body = ResponseModule.genericResponse(false, 'Marker was successfully removed from the room.');
	}
}
