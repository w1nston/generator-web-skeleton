describe('stringUtils', function() {
  var stringUtils = require('../stringUtils');
  var assert = require('yeoman-assert');
  
  describe('camelCase', function() {
    describe('when string contains hyphens', function() {
      var testString = 'name-with-hyphens';

      it('treats hyphens as spaces', function() {
        assert.equal(stringUtils.camelCase(testString), 'nameWithHyphens');
      });
    });

    describe('when string contains spaces', function() {
      var testString = 'name with spaces';

      it('removes spaces', function() {
        assert.equal(stringUtils.camelCase(testString), 'nameWithSpaces');
      });
    });

    describe('when string is already camel case', function() {
      var testString = 'nameWithCamelCase';

      it('keeps the camel casing', function() {
        assert.equal(stringUtils.camelCase(testString), 'nameWithCamelCase');
      });
    });

    describe('when string is all capital letters', function() {
      var testString = 'NAMEWITHALLCAPITALLETTERS';

      it('makes it all lowercase', function() {
        assert.equal(stringUtils.camelCase(testString), 'namewithallcapitalletters');
      });
    });

    describe('when string begins with a capital letter', function() {
      var testString = 'NameIsCapitalized';

      it('makes the initial letter lowercase', function() {
        assert.equal(stringUtils.camelCase(testString), 'nameIsCapitalized');
      });
    });

    describe('when string is empty', function() {
      var testString = '';
      
      it('returns empty string', function() {
        assert.equal(stringUtils.camelCase(testString), '');
      });
    });

    describe('when string is undefined', function() {
      var testString = undefined;

      it('returns empty string', () => {
        assert.equal(stringUtils.camelCase(testString), '');
      });
    });
  });
});
