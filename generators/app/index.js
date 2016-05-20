'use strict';

var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');

module.exports = generators.Base.extend({

  createFileStructure: function() {
    mkdirp('app');
  }
});
