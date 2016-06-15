import chai from 'chai';

import mongoose from 'mongoose';

import {ArtistModel} from './../../src/models/mongoose/artist-model';

import {IdModule} from './../../src/modules/id-module';

import {base64} from './../../src/values/character-sets';
import {connectionStrings} from './../../src/connection/connection-strings';

let assert = chai.assert;

mongoose.connect(connectionStrings.mongoose);

describe('IdModule', () => {
	describe('#generateId', () => {
		it('Should return an id of 9 characters containing characters a-z, A-Z, 0-9, - and _', () => {
			let idModule = new IdModule(base64);
			let regex = new RegExp('^[a-zA-Z0-9-_]{9}');

			for (let i = 0; i < 100; i++)
			{
				assert.equal(true, regex.test(idModule.generateId(9)));
			}
		});
	});

	describe('#generateUniqueId', () => {
		it('Should generate an unique id based on the fact that and id was previously generated', async () => {
			let idModule = new IdModule(base64);
			let regex = new RegExp('^[a-zA-Z0-9-_]{9}');
			let id = await idModule.generateUniqueId(9, ArtistModel);

			assert.equal(true, regex.test(id));
		});
	});

	describe('#lookupId', () => {
		it('Should look up an existing id of an existing document', async () => {
			let idModule = new IdModule(base64);

			let count = await idModule.lookupId(ArtistModel, 'v3DRyZC');
			assert.equal(true, count);

			count = await idModule.lookupId(ArtistModel, '-');
			assert.equal(false, count);
		});
	});
});
