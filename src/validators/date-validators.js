export class DateValidators {
	static isBeforeNow(value) {
		return value < Date.now();
	}

	static isBeforeNowOrNull(value) {
		return value < Date.now() || value === null;
	}
}
