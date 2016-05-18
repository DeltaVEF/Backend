import {ResponseModule} from './response-module';

export class SaveModule {
	static saveModel(context, errorCode, successMessage, model) {
		return function* () {
			try {
				yield model.save();
				context.body = ResponseModule.createResponse(false, successMessage);
			} catch(e) {
				context.status = errorCode || 500;
				context.body = ResponseModule.createResponse(true, e);
			}
		};
	}

	static updateModel(context, errorCode, successMessage, promise) {
		return function* () {
			
		};
	}
}
