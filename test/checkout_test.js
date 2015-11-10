var expect = require('chai').expect;
var supertest = require('supertest');
var api = supertest("http://localhost:3000");

describe('Checkout index page', function(){
  it("should respond with 200", function(done){
    api.get("/checkouts/new").expect(200, done);
  });
});