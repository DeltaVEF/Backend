import moment from 'moment';

export class DateModule {
	/**
	 * Format a date to the specified format. If the date is not valid, it will
	 * return null.
	 *
	 * @param  {Date}
	 * @param  {String} Specified format the date will be translated to. Prefer-
	 * ably the ISO 8601 format.
	 * @param  {Boolean} Strict mode: whether to exactly look for string or
	 * loosely translate text to a date.
	 * @return {Date} Date in the specified format or null.
	 */
	static dateFormatOrDefault(date, format, strict) {
		return (moment(date, format, strict).isValid()) ? moment(date, format, strict) : null;
	}

	/**
	 * Format a date to the specified format. If the date is not valid, it will
	 * return the current date in the format specified.
	 *
	 * @param  {Date}
	 * @param  {String} Specified format the date will be translated to. Prefer-
	 * ably the ISO 8601 format.
	 * @param  {Boolean} Strict mode: whether to exactly look for string or
	 * loosely translate text to a date.
	 * @return {Date} Date in the specified format.
	 */
	static dateFormatOrNow(date, format, strict) {
		return (moment(date, format, strict).isValid()) ? moment(date, format, strict) : moment();
	}
}
