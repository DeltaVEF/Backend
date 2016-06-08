export class IdModule {
	constructor(schema, length) {
		this.characters = '012356789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_';
		this.idLength = length;
		this.schema = schema;
	}

	static generateId(characters, length) {
		return new Promise((resolve) => {
			let id = '';

			for (let i = 0; i < length; i++)
				id += characters.charAt((characters.length - 1) * Math.random());

			resolve(id);
		});
	}

	generateUniqueId(callback) {
		let id = this.generateId();

		this.schema.count({_id: id}, (err, count) => {
			if (!count)
				callback(id);
			else
				this.generateUniqueId(callback);
		});
	}
}
