"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cloud = void 0;

const client_1 = require("./client");

class Cloud {
  constructor({
    appId,
    appKey,
    masterKey,
    prefix,
    debug
  }) {
    this.client = new client_1.Client({
      appId,
      appKey,
      masterKey
    });
    this.prefix = prefix || 'lux_';

    if (this.debugOn() || debug) {
      this.client.debug();
    }
  }

  dataset(identifier) {
    return this.client.dataset(`${this.prefix}${identifier}`);
  }

  debugOn() {
    return process.env.DEBUG === 'axios';
  }

}

exports.Cloud = Cloud;