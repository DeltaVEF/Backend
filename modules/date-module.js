'use strict'

let moment = require('moment');

class DateModule {
    static dateFormatOrDefault(date, format) {
        return (moment(date, format, true).isValid()) ? moment(date, format, true) : null;
    }

    static dateOrDefault(date) {
        return Date.parse(date) || null;
    }

    static isDateFormat(date, format) {
        return moment(date, format, true).isValid();
    }

    static toDate(date, format) {
        return moment(date, format, true);
    }

    static toUTCDate(date, format) {
        return moment.utc(date, format);
    }
}

module.exports = DateModule;
