export class ResponseModule {
	/**
	 * Generate the specified response format the REST API.
	 *
	 * @param  {Boolean} True if error occurred.
	 * @param  {Object} Response message.
	 * @return {Object} Suitable response in the chosen format.
	 */
	static genericResponse(error, message) {
		return {
			error,
			data: {
				message
			}
		};
	}

	/**
	 * Generate the specified response format the REST API.
	 *
	 * @param  {Boolean} True if error occurred.
	 * @param  {Object} Response message.
	 * @return {Object} Suitable response in the chosen format.
	 */
	static genericDataResponse(error, data) {
		return {
			error,
			data
		};
	}
}
