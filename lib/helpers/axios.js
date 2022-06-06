"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAxios = void 0;

const axios_1 = __importDefault(require("axios"));

function apiUrl(appId) {
  return `https://${appId.slice(0, 8)}.api.lncldglobal.com`;
}

function createAxios({
  appId,
  appKey,
  masterKey
}) {
  return axios_1.default.create({
    baseURL: `${apiUrl(appId)}/1.1`,
    headers: {
      'X-LC-Id': appId,
      'X-LC-Key': `${masterKey},master`
    }
  });
}

exports.createAxios = createAxios;