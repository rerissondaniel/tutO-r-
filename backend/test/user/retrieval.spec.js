const httpStatus = require('http-status-codes');
const expect = require('chai').expect;
const api = require('../util/api');
const userUtil = require('./util/user.util');
const messages = require('../../src/utils/system-messages');
const baseUrl = require('../util/config').baseUrl;


describe('User retrieval tests', () => {

	beforeEach(async () => {
		await userUtil.removeAll();
	});

	it('should get existing user with authorization', async () => {
		await api.post(`${baseUrl}/user`).send({name: 'João', email: 'jao@mail.com'});
		const result = await api.get(`${baseUrl}/user`).set({authorization: 'BAAHUu0P68SD6F1S jao@mail.com'}).send();
		expect(result.status).to.equal(httpStatus.OK);
		expect(result.body.name).to.equal('João');
		expect(result.body.email).to.equal('jao@mail.com');
	});

	it('should not get non existent user', async () => {
		const result = await api.get(`${baseUrl}/user`).set({authorization: 'BAAHUu0P68SD6F1S jao@mail.com'}).send();
		expect(result.status).to.equal(httpStatus.NOT_FOUND);
	});

	it('should not get user without authorization', async () => {
		const result = await api.get(`${baseUrl}/user`).send();
		expect(result.res.statusMessage).to.equal(messages.Unauthorized);
	});
});