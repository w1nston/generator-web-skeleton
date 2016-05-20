describe('the templates directory', function() {
  var assert = require('yeoman-assert');
  var fs = require('fs');
  var path = require('path');

  it('contains a webpack.config.js file', function() {
    assert.file(getFile('webpack.config.js'));
  });

  it('contains an .eslintrc.js file', function() {
    assert.file(getFile('.eslintrc.js'));
  });

  it('contains a package.json file', function() {
    assert.file(getFile('package.json'));
  });

  it('contains a .babelrc file', function() {
    assert.file(getFile('.babelrc'));
  });

  it('contains an index.html file', function() {
    assert.file(getFile('index.html'));
  });

  it('contains an index.js file', function() {
    assert.file(getFile('index.js'));
  });

  it('contains a README.md file', function() {
    assert.file(getFile('README.md'));
  });

  it('contains a utils directory', function() {
    assert.file(getFile('utils'));
  });

  describe('the utils directory', function() {
    it('contains a spec-setup.js file', function() {
      assert.file(getFile('utils/spec-setup.js'));
    });
  });

  function getFile(filename) {
    return path.join(__dirname, '../' + filename);
  }
});
