import chai from 'chai';

import {DateModule} from './../src/modules/date-module';

let assert = chai.assert;

describe('DateModule', () => {
	describe('#dateFormatOrDefault', () => {
		it('Should return a date parsed in the format YYYY-MM-DD or return null', () => {
			let dateString = '2016-06-13';
			let dateStringReversed = '13-06-2016';

			assert.deepEqual(new Date('2016-06-13 00:00:00'), DateModule.dateFormatOrDefault(dateString, 'YYYY-MM-DD', true).toDate());
			assert.deepEqual(new Date('2016-06-13 00:00:00'), DateModule.dateFormatOrDefault(dateString, 'YYYY-MM-DD', false).toDate());

			assert.deepEqual(null, DateModule.dateFormatOrDefault(dateStringReversed, 'YYYY-MM-DD', true));
			//Demonstrates unstable behaviour of not using strict mode
			assert.deepEqual(new Date('2013-06-20 00:00:00'), DateModule.dateFormatOrDefault(dateStringReversed, 'YYYY-MM-DD', false).toDate());
		});
	});

	describe('#dateFormatOrNow', () => {
		it('Should return a date parsed in the format YYYY-MM-DD or return now', () => {
			let dateString = '2016-06-13';
			let dateStringReversed = '13-06-2016';

			assert.deepEqual(new Date('2016-06-13 00:00:00'), DateModule.dateFormatOrNow(dateString, 'YYYY-MM-DD', true).toDate());
			assert.deepEqual(new Date('2016-06-13 00:00:00'), DateModule.dateFormatOrNow(dateString, 'YYYY-MM-DD', false).toDate());

			assert.isTrue(dateMargin(new Date(Date.now()), DateModule.dateFormatOrNow(dateStringReversed, 'YYYY-MM-DD', true).toDate(), 5));
			//Demonstrates unstable behaviour of not using strict mode
			assert.deepEqual(new Date('2013-06-20 00:00:00'), DateModule.dateFormatOrNow(dateStringReversed, 'YYYY-MM-DD', false).toDate());
		});
	});
});

function dateMargin(dateOne, dateTwo, margin) {
	return Math.abs(dateOne - dateTwo) < margin;
}
