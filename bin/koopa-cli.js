#!/usr/bin/env node
function usage() {
	console.log('usage: koopa userAgentString');
}

function help() {
	console.log('koopa 1.0.0');
	console.log(' by Tommy Montgomery');
	console.log();

	console.log('Usage: koopa userAgentString');
	console.log();
	console.log('Example:');
	console.log(' koopa "Mozilla/5.0 (Windows; U; Windows NT 5.1; fr; rv:1.9.2b5) Gecko/20091204 Firefox/3.6b5"');
	console.log('Output:');
	console.log('{\n\
  "userAgent": "Mozilla/5.0 (Windows; U; Windows NT 5.1; fr; rv:1.9.2b5) Gecko/20091204 Firefox/3.6b5",\n\
  "firefox": true,\n\
  "windows": true,\n\
  "windowsXp": true,\n\
  "sixtyFourBit": true,\n\
  "firefox3": true,\n\
  "cssPrefix": "moz",\n\
  "version": {\n\
    "major": "3",\n\
    "minor": "6b5",\n\
    "rest": ""\n\
  }\n\
}');
}

var userAgent = process.argv[2];
if (!userAgent) {
	console.error('koopa: no user agent string given\n');
	usage();
	process.exit(1);
}
if (userAgent === '--help' || userAgent === '-h') {
	help();
	process.exit(0);
}

var koopa = require('../src/koopa');
var info = koopa(userAgent);
var prettyInfo = JSON.stringify(info, null, 2);
console.log(prettyInfo);
process.exit(0);
