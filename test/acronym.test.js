var buster = require('buster')
		assert = buster.referee.assert,
		refute = buster.referee.refute;
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
		beforeEach(function () {
			assert.equals(acronym.acronyms, {});
			parser.parse('{{acrodef,etacar,$\\eta$ Car,Eta Carinae}}');
		});

		it('can be used to add full definition for acronyms', function () {
			assert.equals(acronym.acronyms.etacar, {
				acronym: '$\\eta$ Car',
				full: 'Eta Carinae',
				used: false
			});
		});

		it('supports outputting as LaTeX', function () {
			process.env.FORMAT = 'latex';
			var parsedText = parser.parse('{{acrodef,etacar,$\\eta$ Car,Eta Carinae}}');
			assert.equals(parsedText, '\\acrodef{etacar}{@{$\\eta$ Car}@}{Eta Carinae}');
		});
	});

	describe('acronym', function () {
		beforeEach(function () {
			parser.parse('{{acronym,etacar,Eta Carinae}}');
		});

		it('can be used to add definitions for acronyms', function () {
			assert.equals(acronym.acronyms.etacar, {
				acronym: 'etacar',
				full: 'Eta Carinae',
				used: false
			});
		});

		it('supports outputting as LaTeX', function () {
			process.env.FORMAT = 'latex';
			var parsedText = parser.parse('{{acronym,etacar,Eta Carinae}}');
			assert.equals(parsedText, '\\acrodef{etacar}{@{etacar}@}{Eta Carinae}');
		});
	});

	describe('acresetall', function () {
		beforeEach(function () {
			acronym.addAcronym('foo', 'f', 'Foo');
			acronym.useAcronym('foo');
			assert(acronym.acronyms.foo.used);
			parser.parse('{{acresetall}}');
		});

		it('should reset uses of acronyms', function () {
			refute(acronym.acronyms.foo.used);
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

	describe('acf', function () {
		beforeEach(function () {
			acronym.addAcronym('dsn', 'DSN', 'Distributed Social Network');
		});

		it('should set status to used once parsed', function () {
			parser.parse('{{acf,dsn}}');
			assert.equals(acronym.acronyms.dsn.used, true);
		});

		it('supports outputting as LaTeX', function () {
			process.env.FORMAT = 'latex';
			var parsedText = parser.parse('{{acf,dsn}} test {{acf,dsn}}');
			assert.equals(parsedText, '\\acf{dsn} test \\acf{dsn}');
		});

		it('supports outputting as HTML', function () {
			process.env.FORMAT = 'html';
			var parsedText = parser.parse('{{acf,dsn}} test {{acf,dsn}}');
			assert.equals(parsedText, 'Distributed Social Network (DSN) test Distributed Social Network (DSN)');
		});
	});

	describe('acs', function () {
		beforeEach(function () {
			acronym.addAcronym('dsn', 'DSN', 'Distributed Social Network');
		});

		it('should set status to used once parsed', function () {
			parser.parse('{{acs,dsn}}');
			assert.equals(acronym.acronyms.dsn.used, true);
		});

		it('supports outputting as LaTeX', function () {
			process.env.FORMAT = 'latex';
			var parsedText = parser.parse('{{acs,dsn}} test {{acs,dsn}}');
			assert.equals(parsedText, '\\acs{dsn} test \\acs{dsn}');
		});

		it('supports outputting as HTML', function () {
			process.env.FORMAT = 'html';
			var parsedText = parser.parse('{{acs,dsn}} test {{acs,dsn}}');
			assert.equals(parsedText, '<abbr title="Distributed Social Network">DSN</abbr> test <abbr title="Distributed Social Network">DSN</abbr>');
		});
	});

	describe('acl', function () {
		beforeEach(function () {
			acronym.addAcronym('dsn', 'DSN', 'Distributed Social Network');
		});

		it('should set status to used once parsed', function () {
			parser.parse('{{acl,dsn}}');
			assert.equals(acronym.acronyms.dsn.used, true);
		});

		it('supports outputting as LaTeX', function () {
			process.env.FORMAT = 'latex';
			var parsedText = parser.parse('{{acl,dsn}} test {{acl,dsn}}');
			assert.equals(parsedText, '\\acl{dsn} test \\acl{dsn}');
		});

		it('supports outputting as HTML', function () {
			process.env.FORMAT = 'html';
			var parsedText = parser.parse('{{acl,dsn}} test {{acl,dsn}}');
			assert.equals(parsedText, 'Distributed Social Network test Distributed Social Network');
		});
	});

	describe('acp', function () {
		beforeEach(function () {
			acronym.addAcronym('dsn', 'DSN', 'Distributed Social Network');
		});

		it('should set status to used once parsed', function () {
			parser.parse('{{acp,dsn}}');
			assert.equals(acronym.acronyms.dsn.used, true);
		});

		it('supports outputting as LaTeX', function () {
			process.env.FORMAT = 'latex';
			var parsedText = parser.parse('{{acp,dsn}} test {{acp,dsn}}');
			assert.equals(parsedText, '\\acp{dsn} test \\acp{dsn}');
		});

		it('supports outputting as HTML', function () {
			process.env.FORMAT = 'html';
			var parsedText = parser.parse('{{acp,dsn}} test {{acp,dsn}}');
			assert.equals(parsedText, 'Distributed Social Networks (DSNs) test <abbr title="Distributed Social Networks">DSNs</abbr>');
		});
	});
});