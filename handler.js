'use strict';

const create = require('./handlers/create');
const del = require('./handlers/delete');
const getAll = require('./handlers/getAll');
const update = require('./handlers/update');

// using del as `delete` is a reserved word
module.exports = {
  create,
  delete: del,
  getAll,
  update,
};