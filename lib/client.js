"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Client = void 0;

const axios_1 = require("./helpers/axios");

const query_1 = require("./query");

class Client {
  constructor({
    appId,
    appKey,
    masterKey
  }) {
    this.axios = (0, axios_1.createAxios)({
      appId,
      appKey,
      masterKey
    });
    this.query = new query_1.Query();
  }

  get classesPath() {
    return !this.objectId ? `/classes/${this.className}` : `/classes/${this.className}/${this.objectId}`;
  }

  dataset(identifier) {
    const [className, objectId] = identifier.split('/');

    if (className) {
      this.className = className;
    }

    if (objectId) {
      this.objectId = objectId;
    }

    this.query.reset();
    return this;
  }

  create(data = {}) {
    return this.axios.post(this.classesPath, data);
  }

  update(data = {}) {
    return this.axios.put(this.classesPath, data, {
      params: this.query.values
    });
  }

  delete() {
    return this.axios.delete(this.classesPath, {
      params: this.query.values
    });
  }

  get() {
    return this.axios.get(this.classesPath, {
      params: this.query.values
    });
  }

  ids() {
    return this.select(['objectId']).get();
  }

  pluck(key) {
    return this.select([key]).get();
  }

  first(value = 1) {
    return this.order('createdAt').limit(value).get();
  }

  last(value = 1) {
    return this.order('-createdAt').limit(value).get();
  }

  where(values) {
    this.query.where(values);
    return this;
  }

  include(values) {
    this.query.include(values);
    return this;
  }

  select(values) {
    this.query.select(values);
    return this;
  }

  order(values) {
    this.query.order(values);
    return this;
  }

  count() {
    this.query.limit(0).count(1);
    return this.get();
  }

  limit(value) {
    this.query.limit(value);
    return this;
  }

  skip(value) {
    this.query.skip(value);
    return this;
  }

  offset(value) {
    this.query.offset(value);
    return this;
  }

  classes(className, objectId) {
    return objectId ? this.axios.get(`/classes/${className}/${objectId}`) : this.axios.get(`/classes/${className}`);
  }

  schemas(className) {
    return className ? this.axios.get(`/schemas/${className}`) : this.axios.get('/schemas');
  }

  date() {
    return this.axios.get('/date');
  }

  debug() {
    this.axios.interceptors.request.use(request => {
      const {
        method,
        url,
        params,
        data
      } = request;
      console.log({
        method,
        url,
        params,
        data
      });
      return request;
    });
  }

}

exports.Client = Client;