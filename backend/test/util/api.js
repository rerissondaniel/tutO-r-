const app = require('../../app.js');
const supertest = require('supertest');
const api = supertest(app);

module.exports = api;