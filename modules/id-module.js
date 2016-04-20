'use strict'

class IdModule {
    constructor(schema, length) {
        this.characters = '012356789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_';
        this.idLength = length;
        this.schema = schema;
    }

    generateId() {
        let id = '';

        for (let i = 0; i < this.idLength; i++)
            id += this.characters.charAt((this.characters.length - 1) * Math.random());

        return id;
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

module.exports = IdModule;
