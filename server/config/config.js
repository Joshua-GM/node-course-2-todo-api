var env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
	var config = require('./config.json');

	var envConfig = config[env];

	// Object keys return keys in arrays
	Object.keys(envConfig).forEach((key) =>{
		process.env[key] = envConfig[key];
	});
}
	
