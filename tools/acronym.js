var util = require('util');

module.exports = function (parser) {
	var Acronym = function () {
		this.acronyms = {};
	};
	Acronym.prototype.addAcronym = function (label, acronym, full) {
		this.acronyms[label] = {
			acronym: acronym,
			full: full,
			used: false
		};
	};
	Acronym.prototype.output = function (label) {
		var ac = this.acronyms[label];
		switch(process.env.FORMAT) {
			case 'html':
				return ac.used
					? util.format('<abbr title="%s">%s</abbr>', ac.full, ac.acronym)
					: util.format('%s (%s)', ac.full, ac.acronym)
			case 'latex':
				return util.format('\\ac{%s}', label);
		}
		return '';
	};
	Acronym.prototype.outputDefinition = function (label) {
		var ac = this.acronyms[label];
		switch(process.env.FORMAT) {
			case 'latex':
				return util.format('\\acrodef{%s}{@{%s}@}{%s}', label, ac.acronym, ac.full);
		}
		return '';
	};
	Acronym.prototype.useAcronym = function (label) {
		this.acronyms[label].used = true;
	};
	var instance = new Acronym();
	parser.addFunctions({
		'acrodef': function (label, acronym, full) {
			instance.addAcronym(label, acronym, full);
			return instance.outputDefinition(label);
		},
		'acronym': function () {

		},
		'acresetall': function () {

		},
		'ac': function (label) {
			var ac = instance.output(label);
			instance.useAcronym(label);
			return ac;
		},
		'acf': function () {

		},
		'acs': function () {

		},
		'acl': function () {

		},
		'acp': function () {

		}
	});
	return instance;
};