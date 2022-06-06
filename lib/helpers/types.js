"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.op = exports.pointer = exports.latlng = exports.isoDate = void 0;

function isoDate(date) {
  return {
    __type: 'Date',
    iso: date.toISOString()
  };
}

exports.isoDate = isoDate;

function latlng(latitude, longitude) {
  return {
    __type: 'GeoPoint',
    latitude,
    longitude
  };
}

exports.latlng = latlng;

function pointer(className, objectId) {
  return {
    __type: 'Pointer',
    className,
    objectId
  };
}

exports.pointer = pointer;

function increment(value = 1) {
  return {
    __op: 'Increment',
    amount: value
  };
}

function decrement(value = 1) {
  return {
    __op: 'Decrement',
    amount: value
  };
}

function deleteProperty() {
  return {
    __op: 'Delete'
  };
}

function addRelation(className, objectId) {
  return {
    __op: 'AddRelation',
    objects: [{
      __type: 'Pointer',
      className,
      objectId
    }]
  };
}

function removeRelation(className, objectId) {
  return {
    __op: 'RemoveRelation',
    objects: [{
      __type: 'Pointer',
      className,
      objectId
    }]
  };
}

exports.op = {
  increment,
  decrement,
  deleteProperty,
  addRelation,
  removeRelation
};