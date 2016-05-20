describe('generator', function() {
  var assert = require('yeoman-assert');
  var helpers = require('yeoman-test');
  var path = require('path');

  before(function() {
    return helpers
      .run(path.join(__dirname, '../../app'))
      .inTmpDir()
      .toPromise();
  });

  describe('createFileStructure', function() {
    it('generates an app directory', function() {
      assert.file('app');
    });

    it('generates a utils directory', function() {
      assert.file('utils');
    });

    describe('for actions', function() {
      it('generates a source directory', function() {
        assert.file('app/actions');
      });

      it('generates a test directory', function() {
        assert.file('app/actions/__tests__');
      });
    });

    describe('for constants', function() {
      it('generates a source directory', function() {
        assert.file('app/constants');
      });
    });

    describe('for containers', function() {
      it('generates a source directory', function() {
        assert.file('app/containers');
      });

      it('generates a test directory', function() {
        assert.file('app/containers/__tests__');
      });
    });

    describe('for components', function() {
      it('generates a source directory', function() {
        assert.file('app/components');
      });

      it('generates a test directory', function() {
        assert.file('app/components/__tests__');
      });
    });

    describe('for reducers', function() {
      it('generates a source directory', function() {
        assert.file('app/reducers');
      });

      it('generates a test directory', function() {
        assert.file('app/reducers/__tests__');
      });
    });
  });

  describe('generateFiles', function() {
    it('copies .babelrc from templates', function() {
      assert.file('./.babelrc');
      // TODO assert files are the same...
    });

    it('copies .eslintrc.js from templates', function() {
      assert.file('./.eslintrc.js');
      // TODO assert files are the same...
    });

    it('copies package.json from templates', function() {
      assert.file('package.json');
      // TODO assert files are the same...
    });

    it('copies spec-setup.js from templates', function() {
      assert.file('utils/spec-setup.js');
      // TODO assert files are the same...
    });

    it('copies webpack.config.js from templates', function() {
      assert.file('webpack.config.js');
      // TODO assert files are the same...
    });

    it('copies README.md from templates', function() {
      assert.file('README.md');
      // TODO assert files are the same...
    });

    it('copies index.html from templates', function() {
      assert.file('index.html');
      // TODO assert files are the same
    });

    it('copies index.js from templates', function() {
      assert.file('index.js');
      // TODO assert files are the same
    });
  });

  xdescribe('installNpmDependencies', function() {
    it('calls npmInstall with flag save set to true', function() {
      // TODO Use spy to see that this.npmInstall is called with correct dependencies
    });
  });

  xdescribe('installNpmDevDependencies', function() {
    it('calls npmInstall with flag saveDev set to true', function() {
      // TODO Use spy to see that this.npmInstall is called with correct dependencies
    });
  });
});
