export class ResponseModule {
	static createResponse(error, data) {
		return { 'error': error, 'data': data };
	}

	static createDatabaseQueryResponse(error, errorCode, data, res) {
		if (error)
			return res.status(errorCode).json(ResponseModule.createResponse(true, JSON.stringify(error)));

		return res.status(200).json(ResponseModule.createResponse(false, data));
	}

	static createDatabaseSaveResponse(error, errorCode, successMessage, res) {
		if (error)
		{
			return res.status(errorCode).json(ResponseModule.createResponse(true, JSON.stringify(error)));
		}

		return res.status(200).json(ResponseModule.createResponse(false, successMessage));
	}
}
