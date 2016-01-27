// Mocha - Framework of Unit/Integration tests.
var assert = require('assert');
// Supertest - HTTP Requisitions with basic assertions.
var request = require('supertest');
// should.js - Assertions API
var User = require('./../model/user.js');
    should = require('should'),
    url = "http://localhost:3000",
    dataset = [
      new User("First", "Test", "first.test", "first.test@test.com", 20, "Igaraçu do Tietê", "Male"),
      new User("Second", "Test", "second.test", "second.test@test.com", 20, "Igaraçu do Tietê", "Male"),
    ];

describe('Routing', function() {
  describe('Users', function() {

    it('should POST users returning 201 status code', function(done) {
      dataset.forEach(function(entry) {
        request(url)
          .post('/users')
          .send(entry)
          .expect(201);
      });
      done();
    });

    // it('should GET users returning 200 status code', function(done) {
    //   request(url)
    //   .get('/users')
    //   .expect(200)
    //   .expect('Content-Type', /json/)
    //   .end(function(err, res) {
    //     if (err) throw err;
    //     res.body.length.should.be.exactly(2); // Two users returned as data.
    //     done();
    //   });
    // });
  });
});
