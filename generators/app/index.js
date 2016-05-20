'use strict';

var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');
var dependencies = require('./npmDependencies');
var devDependencies = require('./npmDevDependencies');

module.exports = generators.Base.extend({

  constructor: function() {
    generators.Base.apply(this, arguments);

    var that = this; // eslint-disable-line vars-on-top
    this.copyTemplateFile = function copyTemplateFile(filename, variables) {
      that.fs.copyTpl(
        that.templatePath(filename),
        that.destinationPath(filename),
        variables
      );
    };
  },

  createFileStructure: function() {
    mkdirp('app/actions/__tests__');
    mkdirp('app/constants');
    mkdirp('app/containers/__tests__');
    mkdirp('app/components/__tests__');
    mkdirp('app/reducers/__tests__');
    mkdirp('utils');
  },

  generateFiles: function() {
    this.copyTemplateFile('.babelrc');
    this.copyTemplateFile('.eslintrc.js');
    this.copyTemplateFile('package.json', { projectName: this.appname });
    this.copyTemplateFile('utils/spec-setup.js');
    this.copyTemplateFile('webpack.config.js');
    this.copyTemplateFile('README.md', { title: this.appname });
    this.copyTemplateFile('index.html', { projectName: this.appname });
    this.copyTemplateFile('index.js');
  },

  installDependencies: function() {
    this.npmInstall(dependencies, { save: true });
  },

  installDevDependencies: function() {
    this.npmInstall(devDependencies, { saveDev: true });
  }
});
