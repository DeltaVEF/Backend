'use strict'

let moment = require('moment');

module.exports = {
    isBeforeNow: function(value) {
        return value < Date.now();
    },

    isBeforeNowOrNull: function(value) {
        return value < Date.now() || value === null;
    }
}
