var util = require('util');

module.exports = function (parser, options) {
	parser.addFunction('status', function (status) {
		status = parseInt(status);
    return util.format('*Status: [%s (%s)](%s%s)*', options.status[status], status, options.url, status);
	});
};