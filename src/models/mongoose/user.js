import mongoose from 'mongoose';
import validators from 'mongoose-validators';

let Schema = mongoose.Schema;

/*
	General architecture of a Mongoose Schema, default is only allowed when it's used.
	<field>: { type: <type>, default: <default>, index: <boolean>, required: <boolean>, unique: <boolean>, dropDups: <boolean>, validate: [<validators>] }
	A field of the type Number differs, the use of either one is used when they're used.
	<field>: { type: Number, min: <number>, max: <number>, ... }
	References must be declared in the following way.
	<field>: { type: Schema.Types.ObjectId, ref: <collection>, ... }
	Validation is done by the mongoose-validators plugin. Custom validators must be declared after the requires.
*/

export let UserSchema = new Schema({
	_id: {type: String, index: true, required: true, unique: true, dropDups: true, validate: []},
	firstName: {type: String, index: true, required: true, unique: false, dropDups: false, validate: [validators.isLength(1, 128)]},
	lastName: {type: String, index: true, required: true, unique: false, dropDups: false, validate: [validators.isLength(1, 128)]}
});

export let UserModel = mongoose.model('Users', UserSchema);
