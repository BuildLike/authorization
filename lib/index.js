const debug = require('debug')('authorization:full');

debug('Exported @authorization/full');
exports = {
	Client: require('@authorization/client'),
	Server: require('@authorization/server')
};
