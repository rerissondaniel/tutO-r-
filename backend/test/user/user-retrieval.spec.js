const httpStatus = require('http-status-codes');
const expect = require('chai').expect;
const api = require('../util/api');
const userUtil = require('./util/user.util');
const baseUrl = require('../util/config').baseUrl;


describe('User creation tests', () => {

	beforeEach(async () => {
		await userUtil.removeAll();
	});

	it('should get user', async () => {
		await api.post(`${baseUrl}/user`).send({name: 'João', email: 'jao@mail.com'});
		const result = await api.get(`${baseUrl}/user`).set({authorization: 'BAAHUu0P68SD6F1S jao@mail.com'}).send();
		expect(result.status).to.equal(httpStatus.OK);
		expect(result.body.name).to.equal('João');
		expect(result.body.email).to.equal('jao@mail.com');
	});

	it('should get user', async () => {
		const result = await api.get(`${baseUrl}/user`).set({authorization: 'BAAHUu0P68SD6F1S jao@mail.com'}).send();
		expect(result.status).to.equal(httpStatus.NOT_FOUND);
	});
});