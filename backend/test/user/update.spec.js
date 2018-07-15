const httpStatus = require('http-status-codes');
const expect = require('chai').expect;
const api = require('../util/api');
const userUtil = require('./util/user.util');
const baseUrl = require('../util/config').baseUrl;


describe('User update tests', () => {

	before(async () => {
		await userUtil.removeAll();
	});

	it('should update user with authorization', async () => {
		const user = await getUser();

		user.name = 'rerisson';
		user.handles = [{handle: 'rerissondaniel', judge: 'codeforces'}];

		const result = await api.put(`${baseUrl}/user`)
			.set({authorization: 'BAAHUu0P68SD6F1S jao@mail.com'})
			.send(user);

		expect(result.status).to.equal(httpStatus.OK);
		expect(result.body.name).to.equal('rerisson');
		expect(result.body.handles[0].handle).to.equal('rerissondaniel');
		expect(result.body.handles[0].judge).to.equal('codeforces');
	});

	it('should not update without authorization', async () => {
		const user = await getUser();
		user.name = 'rerisson';

		const result = await api.put(`${baseUrl}/user`)
			.send(user);

		expect(result.status).to.equal(httpStatus.UNAUTHORIZED);
	});

	it('should not update with wrong email authorization', async () => {
		const user = await getUser();
		user.name = 'rerisson';

		const result = await api.put(`${baseUrl}/user`)
			.set({authorization: 'BAAHUu0P68SD6F1S rer@mail.com'})
			.send(user);

		expect(result.status).to.equal(httpStatus.NOT_FOUND);
	});

	async function getUser() {
		const res = await api.post(`${baseUrl}/user`).send({name: 'João', email: 'jao@mail.com'});
		return res.body;
	}
});