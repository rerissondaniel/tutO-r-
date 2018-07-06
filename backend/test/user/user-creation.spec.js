const httpStatus = require('http-status-codes');
const expect = require('chai').expect;
const api = require('../util/api');
const userUtil = require('./util/user.util');
const baseUrl = require('../util/config').baseUrl;


describe('User creation tests', () => {

	beforeEach(async () => {
		await userUtil.removeAll();
	});

	it('should create user without name', async () => {
		const created = await api.post(`${baseUrl}/user`).send({email: 'jao@mail.com'});
		expect(created.status).to.equal(httpStatus.CREATED);
	});

	it('should create user with email and name', async () => {
		const created = await api.post(`${baseUrl}/user`).send({name: 'João', email: 'jao@mail.com'});
		expect(created.status).to.equal(httpStatus.CREATED);
		expect(created.body.name).to.equal('João');
		expect(created.body.email).to.equal('jao@mail.com');
	});

	it('should not create user without email', async () => {
		const created = await api.post(`${baseUrl}/user`).send({name: 'João'});
		expect(created.status).to.equal(httpStatus.BAD_REQUEST);
	});

	it('should not create user with duplicated email', async () => {
		await api.post(`${baseUrl}/user`).send({name: 'João', email: 'jao@mail.com'});
		const created = await api.post(`${baseUrl}/user`).send({name: 'João', email: 'jao@mail.com'});
		expect(created.status).to.equal(httpStatus.CONFLICT);
	});
});