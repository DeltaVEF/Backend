export class IdModule {
	constructor(characterSet) {
		this._characterSet = characterSet;
	}

	/**
	* Generates an ID of the specified length.
	*
	* @method generateId
	* @param {Number} Length of the ID
	* @return {String} Returns the id based on the current character set
	*/
	generateId(length) {
		let id = '';

		for (let i = 0; i < length; i++) {
			let index = Math.round((this._characterSet.length - 1) * Math.random());

			id += this._characterSet.charAt(index);
		}

		return id;
	}

	/**
	* Generates an ID of the specified length.
	*
	* @method generateUniqueId
	* @param {Model} Model of where the function should search for existing ID's
	* @return {Promise} Promise of the ID which is going to be returned when it
	* is verified that it is unique.
	*/
	generateUniqueId(length, model) {
		return new Promise((resolve) => this._recursiveIdGeneration(resolve, length, model));
	}

	async _recursiveIdGeneration(resolve, length, model) {
		let id = this.generateId(length);

		if (!await this.lookupId(model, id))
			resolve(id);
		else
			this._recursiveIdGeneration(resolve, length, model);
	}

	async lookupId(model, id) {
		let count = await model.findById(id).count().exec();
		return count > 0;
	}

	set characterSet(value) {
		this._characterSet = value;
	}
}
