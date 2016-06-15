import chai from 'chai';

import {ResponseModule} from './../../src/modules/response-module';

let assert = chai.assert;

describe('ResponseModule', () => {
	describe('#genericResponse', () => {
		it('Should return a generic message response', () => {
			assert.deepEqual(ResponseModule.genericResponse(false, 'Test deep equals false'), {
				error: false,
				data: {
					message: 'Test deep equals false'
				}
			});

			assert.deepEqual(ResponseModule.genericResponse(true, 'Test deep equals true'), {
				error: true,
				data: {
					message: 'Test deep equals true'
				}
			});

			assert.notDeepEqual(ResponseModule.genericResponse(false, 'Test deep equals true'), {
				error: true,
				data: {
					message: 'Test deep equals true'
				}
			});

			assert.notDeepEqual(ResponseModule.genericResponse(false, 'Test deep equals true'), {
				error: false,
				data: {
					message: 'Test'
				}
			});

			assert.notDeepEqual(ResponseModule.genericResponse(false, 'Test deep equals true'), {
				error: true,
				data: {
					message: 'Test'
				}
			});
		});
	});
});
