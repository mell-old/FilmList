const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const server = require('./../server/server.js');
const should = chai.should;
chai.use(chaiHttp);
let data;
describe('REST API', () => {
    describe('/GET', () => {
        it('get list films', function (done) {
            chai.request('http://localhost:3001')
                .get('/get')
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    console.log(res.res.text);
                    done();
                });
        });
        it('get sort asc films', function (done) {
            chai.request('http://localhost:3001')
                .get('/sort')
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    console.log(res.res.text);
                    done();
                });
        });
    });
    describe('/POST', () => {
        it('create new film', function (done) {
            chai.request('http://localhost:3001')
                .post('/create').send(`Title="TEST1234"&ReleaseYears=1897&Format=DVD&Stars="TEST12345"`)
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    data = JSON.parse(res.res.text);
                    console.log(data);
                    done();
                });
        });
        it('find past film (name)', function (done) {
            chai.request('http://localhost:3001')
                .post('/find').send(`Title=${data.Title}`)
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    console.log(res.res.text);
                    const dataCurrent = JSON.parse(res.res.text);
                    console.log(dataCurrent);
                    done();
                });
        });
        it('find past film (stars)', function (done) {
            chai.request('http://localhost:3001')
                .post('/find').send(`Stars=${data.Stars}`)
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    console.log(res.res.text);
                    const dataCurrent = JSON.parse(res.res.text);
                    console.log(dataCurrent);
                     // expect(dataCurrent.Stars).to.equal(data.Stars);
                    done();
                });
        });
    });
    describe('/DELETE', () => {
        it('delete past create film', function (done) {
            chai.request('http://localhost:3001')
                .delete('/delete/' + data._id)
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    console.log(data._id);
                    expect(res.res.text).to.equal(`Note ${data._id} deleted!`);
                    console.log(res.res.text);
                    done();
                });
        });
    });
});