export class ResponseModule {
	static createResponse(error, data) {
		return { 'error': error, 'data': data };
	}
}
