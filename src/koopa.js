(function(name, definition) {
	if (typeof(module) === 'undefined') {
		definition = definition(window.navigator.userAgent.toString());
		
		if (typeof(jQuery) !== 'undefined') {
			jQuery[name] = definition;
		} else {
			window[name] = definition;
		}
	} else {
		module.exports = definition;
	}
}('koopa', function(userAgent) {
	var koopa = {
		userAgent: userAgent
	};
	
	function parseVersion(regex, name) {
		var version = (regex.exec(userAgent) || [])[1] || '';
		var majorVersion = version.split('.')[0];
		majorVersion && (koopa[name + majorVersion] = true);
		return version;
	}

	function toCamelCase(string) {
		var words = string.split(' ');
		var newString = words.shift().toLowerCase();
		for (var i = 0, word; i < words.length; i++) {
			word = words[i].toLowerCase();
			newString += word.charAt(0).toUpperCase() + word.substring(1);
		}

		return newString;
	}

	//browser
	var match;
	if (match = /\b(?:MS(IE)|(Firefox)|(Chrome)|(Opera))\b/i.exec(userAgent)) {
		koopa[toCamelCase(match[1] || match[2] || match[3] || match[4])] = true;
	}

	//chrome identifies as safari
	koopa.safari = !koopa.chrome && /\bSafari\b/i.test(userAgent);

	//specific os
	if (match = /\bWindows NT ([\d.]+)?\b/i.exec(userAgent)) {
		koopa.windows = true;
		if (match[1]) {
			switch (match[1]) {
				case 6.1: koopa.windows7 = true; break;
				case 6.0: koopa.windowsVista = true; break;
				case 5.1: koopa.windowsXp = true; break;
				case 6.2: koopa.windows8 = true; break;
				case 5.0: koopa.windows2000 = true; break;
			}
		}

		if (/\b(?:WOW|win|x)64|\b/i.test(userAgent)) {
			koopa.sixtyFourBit = true;
		}
	}

	if (match = /\bMac OS X ([\w.]+)?\b/i.exec(userAgent)) {
		koopa.macintosh = true;
		koopa.macOsX = true;
		if (match[1]) {
			if (match[1].indexOf('_') === -1) {
				match[1] = match[1].split('.');
			} else {
				match[1] = match[1].split('_');
			}
			koopa['macOsX' + match[1].join('_')] = true;
			koopa['macOsX' + match[1][0]] = true;
			if (match[1][1]) {
				koopa['macOsX' + match[1][0] + '_' + match[1][1]] = true;
				if (match[1][1] >= 5) {
					koopa.sixtyFourBit = true;
				}
			}
		}
	}

	//specific linux distro
	if (match = /\bFreeBSD|[KX]?Ubuntu|Red Hat|Linux Mint|SUSE|Gentoo|CentOS|Fedora|Debian\b/i.exec(userAgent)) {
		koopa.linux = true;
		koopa[toCamelCase([match[1]])] = true;
		if (match = /(ubuntu|Linux Mint)\/([\d.]) \((\w+)\)/i.exec(match[1])) {
			koopa[match[1] + match[2]] = true;
			koopa[match[3]] = true;
		} else if (match = /\b(Red Hat|SUSE|CentOS|Fedora|Debian)[\/\-](.+?)\b/i.exec(match[1])) {
			var distro = toCamelCase(match[1]);
			match[2] = match[2].split('.');
			koopa[distro + match[2].join('_')] = true;
			if (match[2][0]) {
				koopa[distro + match[2][0]] = true;
				koopa[distro + match[2][0] + '_' + match[2][1]] = true;
			}
		}

		if (/\bx86_64|amd64\b/i.test(userAgent)) {
			koopa.sixtyFourBit = true;
		}
	}

	//catch-all os
	if (!koopa.windows && !koopa.macintosh && !koopa.linux && (match = /\b(Linux|Windows|Macintosh)\b/i.exec(userAgent))) {
		koopa[toCamelCase(match[1])] = true;
	}

	//mobile os
	if (match = /\b(Android|Windows Phone|webOs)\b/i.exec(userAgent)) {
		koopa[toCamelCase(match[1])] = true;
		koopa.mobile = true;
	}

	//mobile browser
	if (match = /\b(?:(iP(?:ad|od|hone))|(Blackberry)|((?:MS)?IEMobile)|(Opera Mini))\b/i.exec(userAgent)) {
		koopa[toCamelCase(match[1] || match[2] || match[3] || match[4])] = true;
		koopa.ios = koopa.ipad || koopa.iphone || koopa.ipod;
		koopa.mobile = true;
	}

	var version = '';
	if (koopa.ie) {
		version = parseVersion(/\bMSIE ([a-z\d.]+)\b/i, 'ie');
		koopa.cssPrefix = 'ms';
	} else if (koopa.firefox) {
		version = parseVersion(/\bFirefox\/([a-z\d.]+)\b/i, 'firefox');
		koopa.cssPrefix = 'moz';
	} else if (koopa.chrome) {
		version = parseVersion(/\bChrome\/([a-z\d.]+)\b/i, 'chrome');
		koopa.cssPrefix = 'webkit';
	} else if (koopa.safari) {
		version = parseVersion(/\bVersion\/([a-z\d.]+)\b/i, 'safari');
		koopa.cssPrefix = 'webkit';
	} else if (koopa.opera) {
		version = parseVersion(/\bVersion\/([a-z\d.]+)\b/i, 'opera');
		if (!version) {
			//older versions of opera
			version = parseVersion(/\bOpera\/([a-z\d.]+)\b/i, 'opera');
		}

		koopa.cssPrefix = 'o';
	}

	var versionParts = version.split('.');
	koopa.version = {
		major: versionParts[0],
		minor: versionParts[1],
		rest: versionParts.slice(2).join('.'),
		toString: function() {
			return version;
		}
	};

	return koopa;
}));