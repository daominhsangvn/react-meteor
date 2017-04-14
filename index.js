Object.defineProperty(exports, "__esModule", {
  value: true
});

if (typeof window.process === 'undefined') {
    window.process = {};
}

exports.default = require('./src/Meteor');
exports.Accounts = require('./src/Meteor').Accounts;
