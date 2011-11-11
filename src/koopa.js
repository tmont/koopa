(function(name, definition) {
	if (typeof(module) === 'undefined') {
		if (typeof(jQuery) !== 'undefined') {
			jQuery[name] = definition;
		} else {
			window[name] = definition;
		}
	} else {
		module.exports = definition;
	}
}('koopa', function(userAgent) {
	if (!userAgent && typeof(window) !== 'undefined') {
		userAgent = window.navigator.userAgent.toString();
	}

	var version = '',
		versionParts,
		match,
		temp,
		prefix,
		distro,
		koopa = {
			userAgent: userAgent
		};

	function parseVersion(regex, name) {
		var version = (regex.exec(userAgent) || [])[1] || '';
		var majorVersion = version.split('.')[0];
		majorVersion && (koopa[name + majorVersion] = true);
		return version;
	}

	function toCamelCase(string) {
		var words = (string + '').split(' ');
		var newString = words.shift().replace(/\W/g, '_').toLowerCase();
		for (var i = 0, word; i < words.length; i++) {
			word = words[i].replace(/\W/g, '_').toLowerCase();
			newString += word.charAt(0).toUpperCase() + word.substring(1);
		}

		return newString;
	}

	//browser
	if (match = /\b(?:MS(IE)|(Firefox)|(Chrome)|(Opera))\b/i.exec(userAgent)) {
		koopa[toCamelCase(match[1] || match[2] || match[3] || match[4])] = true;
	}

	//chrome identifies as safari
	if (!koopa.chrome && /\bSafari\b/i.test(userAgent)) {
		koopa.safari = true;
	}

	//specific os
	if (match = /\bWindows NT ([\d.]+)?\b/i.exec(userAgent)) {
		koopa.windows = true;
		if (match[1]) {
			temp = match[1].split('.').slice(0, 2).join('.');
			switch (temp) {
				case '6.1': koopa.windows7 = true; break;
				case '6.0': koopa.windowsVista = true; break;
				case '5.1': koopa.windowsXp = true; break;
				case '6.2': koopa.windows8 = true; break;
				case '5.0': koopa.windows2000 = true; break;
			}
		}

		if (/\b(?:WOW|win|x)64|\b/i.test(userAgent)) {
			koopa.sixtyFourBit = true;
		}
	}

	if (match = /\bMac OS X ([\w.]+)?\b/i.exec(userAgent)) {
		prefix = 'macOsX';
		koopa.macintosh = true;
		koopa[prefix]= true;
		if (match[1]) {
			if (match[1].indexOf('_') === -1) {
				match[1] = match[1].split('.');
			} else {
				match[1] = match[1].split('_');
			}
			koopa[prefix + match[1].join('_')] = true;
			koopa[prefix + match[1][0]] = true;
			if (match[1][1]) {
				koopa[prefix + match[1][0] + '_' + match[1][1]] = true;
				if (match[1][1] >= 5) {
					koopa.sixtyFourBit = true;
				}

				switch (match[1][1]) {
					case '7': koopa.lion = true; break;
					case '6': koopa.snowLeopard = true; break;
					case '5': koopa.leopard = true; break;
					case '4': koopa.tiger = true; break;
					case '3': koopa.panther = true; break;
					case '2': koopa.jaguar = true; break;
					case '1': koopa.puma = true; break;
					case '0': koopa.cheetah = true; break;
				}
			}
		}
	}

	//specific linux distro
	if (match = /\b(FreeBSD|[KX]?Ubuntu|Red Hat|Linux Mint|SUSE|Gentoo|CentOS|Fedora|Debian)\b/i.exec(userAgent)) {
		koopa.linux = true;
		distro = toCamelCase(match[1]);
		koopa[distro] = true;
		if (temp = /\b([kx]?ubuntu|Linux Mint)\/(.+?) \((\w+?)\)/i.exec(userAgent)) {
			koopa[toCamelCase(temp[1] + temp[2])] = true;
			koopa[toCamelCase(temp[3])] = true;
		} else if (temp = /\b(Red Hat|SUSE|CentOS|Fedora|Debian)[\/\-]([^)\s]+)/i.exec(userAgent)) {
			temp[2] = temp[2].split('.');
			koopa[distro + toCamelCase(temp[2].join('_'))] = true;
			if (temp[2][0]) {
				koopa[distro + toCamelCase(temp[2][0])] = true;
				if (temp[2][1]) {
					koopa[distro + toCamelCase(temp[2][0] + '_' + temp[2][1])] = true;
				}
			}
		}

		if (/\b(?:x86_64|amd64)\b/i.test(userAgent)) {
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
	if (match = /\b(?:(iP(?:ad|od|hone))|(Blackberry)|(?:(?:MS)?(IEMobile))|(Opera Mini))\b/i.exec(userAgent)) {
		koopa[toCamelCase(match[1] || match[2] || match[3] || match[4])] = true;
		if (koopa.ipad || koopa.iphone || koopa.ipod) {
			koopa.ios = true;
		}

		koopa.mobile = true;
	}

	if (koopa.ie) {
		version = parseVersion(/\bMSIE ([a-z\d.]+)\b/i, 'ie');
	} else if (koopa.firefox) {
		version = parseVersion(/\bFirefox\/([a-z\d.]+)\b/i, 'firefox');
	} else if (koopa.chrome) {
		version = parseVersion(/\bChrome\/([a-z\d.]+)\b/i, 'chrome');
	} else if (koopa.safari) {
		version = parseVersion(/\bVersion\/([a-z\d.]+)\b/i, 'safari');
	} else if (koopa.opera) {
		version = parseVersion(/\bVersion\/([a-z\d.]+)\b/i, 'opera');
		if (!version) {
			//older versions of opera
			version = parseVersion(/\bOpera\/([a-z\d.]+)\b/i, 'opera');
		}
	}

	versionParts = version.split('.');
	koopa.version = {
		major: versionParts[0],
		minor: versionParts[1] || '',
		rest: versionParts.slice(2).join('.'),
		toString: function() {
			return version;
		}
	};

	return koopa;
}));