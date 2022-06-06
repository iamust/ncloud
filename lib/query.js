"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Query = void 0;

class Query {
  constructor() {
    this.state = {};
  }

  get values() {
    if (!this.state.where) {
      return this.state;
    }

    return Object.assign(Object.assign({}, this.state), {
      where: JSON.stringify(this.state.where)
    });
  }

  where(values) {
    this.state.where = Object.assign(Object.assign({}, this.state.where), values);
    return this;
  }

  include(values) {
    this.state.include = Array.isArray(values) ? values.join(',') : values;
    return this;
  }

  select(values) {
    this.state.keys = values.join(',');
    return this;
  }

  order(values) {
    this.state.order = Array.isArray(values) ? values.join(',') : values;
    return this;
  }

  count(value) {
    this.state.count = value;
    return this;
  }

  limit(value) {
    this.state.limit = Math.max(0, value);
    return this;
  }

  skip(value) {
    return this.offset(value);
  }

  offset(value) {
    this.state.skip = Math.max(0, value);
    return this;
  }

  reset() {
    this.state = {};
    return this;
  }

}

exports.Query = Query;