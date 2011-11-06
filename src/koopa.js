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
	function getDefaultVersionInfo(regex, name) {
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

	var koopa = {
		userAgent: userAgent
	};

	//browser
	var match;
	if (match = /\b(?:MS(IE)|(Firefox)|(Chrome)|(Opera))\b/i.exec(userAgent)) {
		koopa[toCamelCase(match[1])] = true;
	}

	//chrome identifies as safari
	koopa.safari = !koopa.chrome && /\bSafari\b/i.test(userAgent);

	//os
	if (match = /\b(Linux|Windows|Mac)\b/i.exec(userAgent)) {
		koopa[toCamelCase(match[1])] = true;
	}

	//mobile os
	if (match = /\b(Android|Windows Phone|webOs)\b/i.exec(userAgent)) {
		koopa[toCamelCase(match[1])] = true;
		koopa.mobile = true;
	}

	//mobile browser
	if (match = /\b(?:(iP(?:ad|od|hone))|(Blackberry)|((?:MS)?IEMobile)|(Opera Mini)\b/i.exec(userAgent)) {
		koopa[toCamelCase(match[1])] = true;
		koopa.ios = koopa.ipad || koopa.iphone || koopa.ipod;
		koopa.mobile = true;
	}

	var version = '';
	if (koopa.ie) {
		version = getDefaultVersionInfo(/\bMSIE ([a-z\d.]+)\b/i, 'ie');
		koopa.cssPrefix = 'ms';
	} else if (koopa.firefox) {
		version = getDefaultVersionInfo(/\bFirefox\/([a-z\d.]+)\b/i, 'ie');
		koopa.cssPrefix = 'moz';
	} else if (koopa.chrome) {
		version = getDefaultVersionInfo(/\bChrome\/([a-z\d.]+)\b/i, 'chrome');
		koopa.cssPrefix = 'webkit';
	} else if (koopa.safari) {
		version = getDefaultVersionInfo(/\bVersion\/([a-z\d.]+)\b/i, 'safari');
		koopa.cssPrefix = 'webkit';
	} else if (koopa.opera) {
		version = getDefaultVersionInfo(/\bVersion\/([a-z\d.]+)\b/i, 'opera');
		if (!version) {
			//older versions of opera
			version = getDefaultVersionInfo(/\bOpera\/([a-z\d.]+)\b/i, 'opera');
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