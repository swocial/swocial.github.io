var buster = require('buster')
		assert = buster.referee.assert;
buster.spec.expose();

describe('acronym', function () {
	var parser, acronym;

	beforeEach(function () {
		parser = require('../tools/parseFunc')();
		acronym = require('../tools/acronym')(parser);
	});

	it('should add its methods to parser', function () {
		assert(parser.functions.acrodef);
		assert(parser.functions.acronym);
		assert(parser.functions.acresetall);
		assert(parser.functions.ac);
		assert(parser.functions.acf);
		assert(parser.functions.acs);
		assert(parser.functions.acl);
		assert(parser.functions.acp);
	});

	describe('acrodef', function () {
		it('should not contain any acronyms by default', function () {
			assert.equals(acronym.acronyms, {});
		});

		it('can be used to add full definition for acronyms', function () {
			parser.parse('{{acrodef,etacar,$\\eta$ Car,Eta Carinae}}');
			assert.equals(acronym.acronyms.etacar, {
				acronym: '$\\eta$ Car',
				full: 'Eta Carinae',
				used: false
			});
		});

		it('supports outputting as LaTeX', function () {
			process.env.FORMAT = 'latex';
			var parsedText = parser.parse('{{acrodef,etacar,$\\eta$ Car,Eta Carinae}}');
			assert.equals(parsedText, '\\acrodef{etacar}[$\\eta$ Car]{Eta Carinae}');
		});
	});

	describe('ac', function () {
		beforeEach(function () {
			acronym.addAcronym('foo', 'f', 'Foo');
		});

		it('should set status to used once parsed', function () {
			parser.parse('{{ac,foo}}');
			assert.equals(acronym.acronyms.foo.used, true);
		});

		it('supports outputting as LaTeX', function () {
			process.env.FORMAT = 'latex';
			var parsedText = parser.parse('{{ac,foo}} test {{ac,foo}}');
			assert.equals(parsedText, '\\ac{foo} test \\ac{foo}');
		});

		it('supports outputting as HTML', function () {
			process.env.FORMAT = 'html';
			var parsedText = parser.parse('{{ac,foo}} test {{ac,foo}}');
			assert.equals(parsedText, 'Foo (f) test <abbr title="Foo">f</abbr>');
		});
	});
});