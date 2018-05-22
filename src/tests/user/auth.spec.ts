import { BaseTest } from '../BaseTest';

describe('/POST user/auth/', () => {

    const   test = new BaseTest(),
            random = Math.floor(Math.random() * 1000);
    
    const user = {
        name: 'test user',
        email: `test${random}@mailinator.com`,
        password: '123456'
    };


    it('it should register a new User', (done) => {
        test.chai.request(test.server)
            .post(`${test.route}user/auth/register`)
            .send(user)
            .end((err, res) => {
                res.status.should.equal(200);
                res.body.should.be.a('object');
                res.body.should.have.property('success');
                res.body.success.should.equal(true);
                done();
            });
    });

    it('it should return error message', (done) => {
        test.chai.request(test.server)
            .post(`${test.route}user/auth/register`)
            .send({})
            .end((err, res) => {
                res.status.should.equal(400);
                res.body.should.be.a('object');
                res.body.should.have.property('success');
                res.body.success.should.equal(false);
                res.body.should.have.property('message');
                done();
            });
    });

});
