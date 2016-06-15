export class DateValidators {
	/**
	 * Checks if the date is before now.
	 *
	 * @param  {Date} Date field.
	 * @return {Boolean} Returns true if the date is before now. Otherwise false.
	 */
	static isBeforeNow(value) {
		return value < Date.now();
	}

	/**
	 * Checks if the date is before now or null.
	 *
	 * @param  {Date} Date field.
	 * @return {Boolean} Returns true if the date is before now or null.
	 * Otherwise false.
	 */
	static isBeforeNowOrNull(value) {
		return value < Date.now() || value === null;
	}
}
