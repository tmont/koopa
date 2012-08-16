#!/usr/bin/env node

function usage() {
	console.log('usage: koopa [userAgentString]');
}

function help() {
	console.log('koopa 2.0.0');
	console.log(' by Tommy Montgomery');
	console.log();
	console.log('koopa is a user-agent parsing utility that reads in a user-agent string ');
	console.log('and spits out formatted JSON to stdout.');
	console.log();

	console.log('Usage: koopa [userAgentString]');
	console.log(' if userAgentString is not given then koopa reads from stdin');
	console.log();
	console.log('Example:');
	console.log(' koopa "Mozilla/5.0 (Windows; U; Windows NT 5.1; fr; rv:1.9.2b5) Gecko/20091204 Firefox/3.6b5"');
	console.log();
	console.log('Output:');
	console.log('{\n\
  "userAgent": "Mozilla/5.0 (Windows; U; Windows NT 5.1; fr; rv:1.9.2b5) Gecko/20091204 Firefox/3.6b5",\n\
  "firefox": true,\n\
  "windows": true,\n\
  "windowsXp": true,\n\
  "sixtyFourBit": true,\n\
  "firefox3": true,\n\
  "version": {\n\
    "major": "3",\n\
    "minor": "6b5",\n\
    "rest": ""\n\
  }\n\
}');

	console.log();
	console.log('Parse user agent from nginx log:');
	console.log(' tail -n 1 /var/log/nginx/access.log | php -r "echo end(fgetcsv(STDIN, 0, \' \'));" | koopa');
}

var userAgent = process.argv[2] || '';

function parseUserAgent() {
	if (!userAgent) {
		console.error('no user agent given');
		console.log();
		usage();
		process.exit(1);
	}
	var koopa = require('../src/koopa');
	var info = koopa(userAgent);
	var prettyInfo = JSON.stringify(info, null, 2);
	console.log(prettyInfo);
	process.exit(0);
}

if (!userAgent) {
	//read from stdin
	process.stdin.resume();
	process.stdin.setEncoding('utf8');
	process.stdin.on('data', function(chunk) {
		userAgent += chunk;
	});
	process.stdin.on('end', parseUserAgent);
} else if (userAgent === '--help' || userAgent === '-h') {
	help();
	process.exit(0);
	parseUserAgent();
}


