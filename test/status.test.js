var buster = require('buster')
		assert = buster.referee.assert;
buster.spec.expose();

describe('status', function () {
	var parser;
	
	beforeEach(function () {
		parser = require('../tools/parseFunc')();
		require('../tools/status')(parser, {
			status: ['test'],
			url: 'test#'
		});
	});

	it('should add its methods to parser', function () {
		assert(parser.functions.status);
	});

	it('should return valid text', function () {
		var parsedText = parser.parse("{{status,0}}");
		assert.equals(parsedText, "*Status: [test (0)](test#0)*");
	});
});