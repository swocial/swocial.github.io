// implemented based on http://staff.science.uva.nl/~polko/HOWTO/LATEX/acronym.html
// am looking at http://mirrors.ctan.org/macros/latex/contrib/acronym/acronym.pdf, but haven't use for all functions

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
	Acronym.prototype.outputAcronym = function (label) {
		var ac = this.acronyms[label];
		switch(process.env.FORMAT) {
			case 'html':
				return util.format('<abbr title="%s">%s</abbr>', ac.full, ac.acronym)
			case 'latex':
				return util.format('\\acs{%s}', label);
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
	Acronym.prototype.outputFull = function (label) {
		var ac = this.acronyms[label];
		switch(process.env.FORMAT) {
			case 'html':
				return util.format('%s (%s)', ac.full, ac.acronym)
			case 'latex':
				return util.format('\\acf{%s}', label);
		}
		return '';
	};
	Acronym.prototype.outputLong = function (label) {
		var ac = this.acronyms[label];
		switch(process.env.FORMAT) {
			case 'html':
				return ac.full;
			case 'latex':
				return util.format('\\acl{%s}', label);
		}
		return '';
	};
	Acronym.prototype.outputPlural = function (label) {
		var ac = this.acronyms[label];
		switch(process.env.FORMAT) {
			case 'html':
				return ac.used
					? util.format('<abbr title="%ss">%ss</abbr>', ac.full, ac.acronym)
					: util.format('%ss (%ss)', ac.full, ac.acronym)
			case 'latex':
				return util.format('\\acp{%s}', label);
		}
		return '';
	};
	Acronym.prototype.resetAll = function () {
		for (var key in this.acronyms) {
			this.acronyms[key].used = false;
		}
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
		'acronym': function (label, full) {
			instance.addAcronym(label, label, full);
			return instance.outputDefinition(label);
		},
		'acresetall': function () {
			instance.resetAll();
		},
		'ac': function (label) {
			var ac = instance.output(label);
			instance.useAcronym(label);
			return ac;
		},
		'acf': function (label) {
			var acf = instance.outputFull(label);
			instance.useAcronym(label);
			return acf;
		},
		'acs': function (label) {
			var acs = instance.outputAcronym(label);
			instance.useAcronym(label);
			return acs;
		},
		'acl': function (label) {
			var acl = instance.outputLong(label);
			instance.useAcronym(label);
			return acl;
		},
		'acp': function (label) {
			var acp = instance.outputPlural(label);
			instance.useAcronym(label);
			return acp;
		}
	});
	return instance;
};