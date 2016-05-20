describe('npmDevDependencies', function() {
  var assert = require('yeoman-assert');
  var npmDevDependencies = require('../npmDevDependencies');

  it('is a list', function() {
    assert.equal(npmDevDependencies.constructor, Array);
  });

  it('contains at least one development dependency', function() {
    assert(npmDevDependencies.length > 0);
  });
});