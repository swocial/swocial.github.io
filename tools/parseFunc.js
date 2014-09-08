var extend = require('extend');

module.exports = function () {
	var Parser = function () {
		this.functions = {};
	};
	Parser.prototype.addFunction = function (name, fn) {
		this.functions[name] = fn;
	};
	Parser.prototype.addFunctions = function (fns) {
		extend(this.functions, fns);
	};
	Parser.prototype.parse = function (src) {
		var parse = function (parser) {
			var start = src.search(/\{\{/g);
			var end = src.search(/\}\}/g);
			if (start == -1 || end == -1) return false;
			var functionStr = src.substr(start, end - start + 2);
			var funcTokens = functionStr.substr(2, functionStr.length - 4).split(',');
			var funcName = funcTokens.shift();
			if (!parser.functions[funcName]) {
				throw new Error('Tried to parse unknown function: ' + funcName);
			}
			var result = parser.functions[funcName].apply(null, funcTokens);
			src = src.replace(functionStr, result);
			return true;
		};
		try {
			while(parse(this));
		} finally {
			return src;
		}
	};
	return new Parser();
};