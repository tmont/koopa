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
		match,
		temp,
		prefix,
		distro,
		koopa = {
			userAgent: userAgent,
			os: {
				family: '',
				name: '',
				distro: '',
				version: {}
			},
			browser: {
				name: '',
				version: {
					major: '',
					minor: '',
					rest: ''
				}
			},
			engine: {
				name: '',
				version: {
					major: '',
					minor: '',
					rest: ''
				}
			}
		};

	function getVersionInfo(versionString, delimiter) {
		delimiter = delimiter || '.';
		var versionParts = versionString.split(delimiter);
		return {
			major: versionParts[0] || '',
			minor: versionParts[1] || '',
			rest: versionParts.slice(2).join(delimiter),
			toString: function() {
				return versionString;
			}
		};
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

	function setVersionInfo(prefix, version) {
		if (version.major) {
			koopa[prefix + version.major] = true;
			if (version.minor) {
				koopa[prefix + version.major + '_' + version.minor] = true;
			}
		}

		var versionString = version.toString();
		if (versionString) {
			koopa[prefix + versionString.replace(/\W/g, '_')] = true;
		}
	}

	//specific os
	if (match = /\bWindows NT ([\d.]+)?\b/i.exec(userAgent)) {
		koopa.windows = true;
		koopa.os.family = 'windows';
		koopa.os.version = getVersionInfo(match[1], '.');
		temp = koopa.os.version.major + '.' + koopa.os.version.minor;
		if (temp !== '.') {
			switch (temp) {
				case '6.1': koopa.windows7     = true; koopa.os.name = 'Windows 7';     break;
				case '6.0': koopa.windowsVista = true; koopa.os.name = 'Windows Vista'; break;
				case '5.1': koopa.windowsXp    = true; koopa.os.name = 'Windows XP';    break;
				case '6.2': koopa.windows8     = true; koopa.os.name = 'Windows 8';     break;
				case '5.0': koopa.windows2000  = true; koopa.os.name = 'Windows 2000';  break;
			}
		}

		if (/\b(?:WOW|win|x)64|\b/i.test(userAgent)) {
			koopa.sixtyFourBit = true;
		}
	}

	if (match = /\bMac OS X ([\w.]+)?\b/i.exec(userAgent)) {
		prefix = 'macOsX';
		koopa.macintosh = true;
		koopa.os.family = 'Macintosh';

		koopa[prefix]= true;
		if (match[1]) {
			koopa.os.version = getVersionInfo(match[1], match[1].indexOf('_') === -1 ? '.' : '_');
			setVersionInfo(prefix, koopa.os.version);
			if (koopa.os.version.minor) {
				if (koopa.os.version.minor >= 5) {
					koopa.sixtyFourBit = true;
				}

				switch (koopa.os.version.minor) {
					case '7': koopa.lion        = true; koopa.os.name = 'Lion';         break;
					case '6': koopa.snowLeopard = true; koopa.os.name = 'Snow Leopard'; break;
					case '5': koopa.leopard     = true; koopa.os.name = 'Leopard';      break;
					case '4': koopa.tiger       = true; koopa.os.name = 'Tiger';        break;
					case '3': koopa.panther     = true; koopa.os.name = 'Panther';      break;
					case '2': koopa.jaguar      = true; koopa.os.name = 'Jaguar';       break;
					case '1': koopa.puma        = true; koopa.os.name = 'Puma';         break;
					case '0': koopa.cheetah     = true; koopa.os.name = 'Cheetah';      break;
				}
			}
		}
	}

	//specific linux distro
	if (match = /\b(FreeBSD|[KX]?Ubuntu|Red Hat|Linux Mint|SUSE|Gentoo|CentOS|Fedora|Debian)\b/i.exec(userAgent)) {
		koopa.linux = true;
		koopa.os.family = 'Linux';
		koopa.os.distro = match[1];
		
		distro = toCamelCase(match[1]);
		koopa[distro] = true;
		if (temp = /\b([kx]?ubuntu|Linux Mint)\/(.+?) \((\w+?)\)/i.exec(userAgent)) {
			koopa.os.version = getVersionInfo(temp[2], '.');
			setVersionInfo(distro, koopa.os.version);
			koopa[toCamelCase(temp[3])] = true;
			koopa.os.name = temp[3]; //Jaunty, Gloria, etc.
		} else if (temp = /\b(Red Hat|SUSE|CentOS|Fedora|Debian)[\/-]([^)\s]+)/i.exec(userAgent)) {
			koopa.os.version = getVersionInfo(temp[2], '.');
			setVersionInfo(distro, koopa.os.version);
		}

		if (/\b(?:x86_64|amd64)\b/i.test(userAgent)) {
			koopa.sixtyFourBit = true;
		}
	}

	//catch-all os
	if (!koopa.windows && !koopa.macintosh && !koopa.linux && (match = /\b(Linux|Windows|Macintosh)\b/i.exec(userAgent))) {
		koopa[toCamelCase(match[1])] = true;
		koopa.os.family = match[1];
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

	//browser
	if (!koopa.mobile && (match = /\b(MSIE|Firefox|Chrome|Opera)\b/i.exec(userAgent))) {
		prefix = toCamelCase(match[1]);
		if (prefix === 'msie') {
			prefix = 'ie';
		}

		koopa[prefix] = true;
		koopa.browser.name = match[1];
	}

	//chrome identifies as safari
	if (!koopa.chrome && /\bSafari\b/i.test(userAgent)) {
		koopa.safari = true;
		koopa.browser.name = 'Safari';
	}

	if (koopa.ie) {
		if (match = /\bMSIE ([a-z\d.]+)\b/i.exec(userAgent)) {
			koopa.browser.version = getVersionInfo(match[1], '.');
			koopa['ie' + koopa.browser.version.major] = true;
		}
	} else if (koopa.firefox || koopa.chrome) {
		if (match = /\b(Firefox|Chrome)\/([a-z\d.]+)\b/i.exec(userAgent)) {
			koopa.browser.version = getVersionInfo(match[2], '.');
			koopa[toCamelCase(match[1]) + koopa.browser.version.major] = true;
		}
	} else if (koopa.safari) {
		if (match = /\bVersion\/([a-z\d.]+)\b/i.exec(userAgent)) {
			koopa.browser.version = getVersionInfo(match[1], '.');
			koopa['safari' + koopa.browser.version.major] = true;
		}
	} else if (koopa.opera) {
		if (match = /\bVersion\/([a-z\d.]+)\b/i.exec(userAgent)) {
			koopa.browser.version = getVersionInfo(match[1], '.');
			koopa['opera' + koopa.browser.version.major] = true;
		}
		if (!version) {
			//older versions of opera
			if (match = /\bVersion\/([a-z\d.]+)\b/i.exec(userAgent)) {
				koopa.browser.version = getVersionInfo(match[1], '.');
				koopa['safari' + koopa.browser.version.major] = true;
			} else if (match = /\bOpera\/([a-z\d.]+)\b/i.exec(userAgent)) {
				koopa.browser.version = getVersionInfo(match[1], '.');
				koopa['opera' + koopa.browser.version.major] = true;
			}
		}
	}

	//rendering engine
	if (match = /\b(Trident|Gecko|AppleWebKit|Presto)\/(.+?)(?:\s|$|;|\))/i.exec(userAgent)) {
		prefix = toCamelCase(match[1]);
		if (prefix === 'applewebkit') {
			prefix = 'webkit';
		}
		koopa[prefix] = true;
		koopa.engine.name = prefix;
		koopa.engine.version = getVersionInfo(match[2], '.');
		setVersionInfo(prefix, koopa.engine.version);
	}

	return koopa;
}));