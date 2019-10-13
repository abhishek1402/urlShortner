var should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    api = supertest('http://localhost:8080/api/url');

describe('shortner post valid url and shortcode', function () {
    it('should return a 200 response with valid shortcode', function (done) {
        var random = Math.random()
        api.post('/shorten')
        .send({
            url:`example${random}.com`,
            shortcode:"example"
        })
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err,res){
                expect(res.body.data.shortcode).to.not.equal(null)
                done()
            })
    });
});

describe('shortner post valid url without shortcode', function () {
    it('should return a 200 response ', function (done) {
        var random = Math.random()
        api.post('/shorten')
        .send({
            url:`example${random}.com`,
        })
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err,res){
                expect(res.body.data.shortcode).to.not.equal(null)
                done()
            })
    });
});

describe('shortner post without url without shortcode', function () {
    it('should return a 200 response ', function (done) {
        var random = Math.random()
        api.post('/shorten')
        .send({
          
        })
            .set('Accept', 'application/json')
            .expect(401,done)
           
    });
});

describe('shortner get url for short code', function () {
    var random = Math.random()
    before(function(done){
        api.post('/shorten')
        .send({
            url:`google${random}.com`,
            shortcode:"example"
        })
        .set('Accept', 'application/json')
        .end((err,res)=>{
          done();
        })
    })
    it('should return a 301 response', function (done) {
        api.get(`/example`)
            .set('Accept', 'application/json')
            .expect(200, done);
    });

    it('random shortcode should return a 401 response', function (done) {
        api.get(`/example${random}`)
            .set('Accept', 'application/json')
            .expect(401, done);
    });
});



describe('shortner get stat for short code', function () {
    var random = Math.random()
    before(function(done){
        api.post('/shorten')
        .send({
            url:`google${random}.com`,
            shortcode:"example"
        })
        .set('Accept', 'application/json')
        .end((err,res)=>{
          done();
        })
    })
    it('should return a 200 response', function (done) {
        api.get(`/example/stats`)
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err,res){
                expect(res.body.data.url).to.not.equal(null)
                done()
            })
    });

    it('random shortcode should return a 401 response', function (done) {
        api.get(`/example${random}/stats`)
            .set('Accept', 'application/json')
            .expect(401, done);
    });
});