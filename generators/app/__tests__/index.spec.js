describe('generator', function() {
  var assert = require('yeoman-assert');
  var helpers = require('yeoman-test');
  var path = require('path');

  before(function() {
    return helpers.run(path.join(__dirname, '../../app')) // Run the generator from the app directory
      .inDir(path.join(__dirname, './tmp'))               // Place generated files in a tmp directory
      .toPromise();
  });

  describe('createFileStructure', function() {
    it('generates an app directory', function() {
      assert.file('app');
    });
  });
});
