var buster = require('buster')
		assert = buster.referee.assert,
		sinon = require('sinon');
buster.spec.expose();

describe('parseFunc', function () {
	var parser;

	beforeEach(function () {
		parser = require('../tools/parseFunc')();
	});

	it('should not contain any functions by default', function () {
		assert.equals(parser.functions, {});
	});

	it('should be able to single functions', function () {
		parser.addFunction('test', 42);
		assert.equals(parser.functions.test, 42);
	});

	it('should be able to add multiple functions', function () {
		parser.addFunctions({
			'test': 42,
			'test2': 1337
		});
		assert.equals(parser.functions.test, 42);
		assert.equals(parser.functions.test2, 1337);
	});

	it('should return source if no functions are given', function () {
		var parsedText = parser.parse('test');
		assert.equals(parsedText, 'test');
	});

	it('should execute a function that is embedded in a text', function () {
		parser.addFunction('test', function () {
			return 42;
		});
		var parsedText = parser.parse('test {{test}} test');
		assert.equals(parsedText, 'test 42 test');
	});

	it('should execute functions with parameters given in text', function () {
		parser.addFunction('sum', function (a, b) {
			return parseInt(a) + parseInt(b);
		});
		var parsedText = parser.parse('test {{sum,1,2}} test');
		assert.equals(parsedText, 'test 3 test');
	});

	it('should parse all functions', function () {
		parser.addFunctions({
			'test': function () {return 42;},
			'test2': function () {return 1337;}
		});
		parsedText = parser.parse('foo{{test}} bar {{test2}}baz');
		assert.equals(parsedText, 'foo42 bar 1337baz');
	});

	it('should parse a redundant function only once', function () {
		var spy = sinon.stub().returns(42);
		parser.addFunction('test', spy);
		parsedText = parser.parse('foo{{test}} bar {{test}}baz');
		assert.equals(parsedText, 'foo42 bar 42baz');
		assert(spy.calledTwice);
	});

	it('should throw exception when unknown function is parsed', function () {
		assert.exception(parser.parse('{{test}}'));
	});
});