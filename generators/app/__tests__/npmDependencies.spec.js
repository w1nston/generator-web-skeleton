describe('npmDependencies', function() {
  var assert = require('yeoman-assert');
  var npmDependencies = require('../npmDependencies.js');
  
  it('is a list', function() {
    assert.equal(npmDependencies.constructor, Array);
  });

  it('contains at least one dependency', function() {
    assert(npmDependencies.length > 0);
  });
});