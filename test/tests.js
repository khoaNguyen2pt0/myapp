const assert = require("chai").assert;
const sayHello = require("../index").sayHello;
const result = sayHello("Professor Walker");

describe("Index", function() {
  it("should return 'Welcome to our site, USER_NAME'", function() {
    assert.equal(result, "Welcome to our site, Professor Walker");
  });

  it("should be a string", function() {
    assert.typeOf(result, "string");
  });
});
