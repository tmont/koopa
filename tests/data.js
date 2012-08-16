(function(name, definition) {
	if (typeof(module) === 'undefined') {
		window[name] = definition();
	} else {
		module.exports = definition();
	}
}('koopaData', function() {
	return {
		firefox: {
			threePartVersion: 'Mozilla/5.0 (X11; Linux i686; rv:7.0.1) Gecko/20100101 Firefox/7.0.1',
			windows: 'Mozilla/5.0 (Windows NT 6.1; rv:6.0) Gecko/20110814 Firefox/6.0',
			linux: 'Mozilla/5.0 (X11; Linux i686; rv:7.0.1) Gecko/20100101 Firefox/7.0.1',
			mac: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:2.0b8) Gecko/20100101 Firefox/4.0b8',
			nonNumericVersion: 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:6.0a2) Gecko/20110612 Firefox/6.0a2'
		},

		engine: {
			gecko: 'Mozilla/5.0 (X11; Linux i686; rv:7.0.1) Gecko/20100101 Firefox/7.0.1',
			webkit: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/535.2 (KHTML, like Gecko) Chrome/15.0.874.54 Safari/535.2',
			presto: 'Opera/9.80 (Macintosh; Intel Mac OS X; U; nl) Presto/2.6.30 Version/10.61',
			trident: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)',
			nonNumericVersion: 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; en) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.337 Mobile Safari/534.1'
		},

		linux: {
			noDistro: 'Mozilla/5.0 (X11; Linux i686; rv:7.0.1) Gecko/20100101 Firefox/7.0.1',
			freeBsd: 'Mozilla/5.0 (X11; FreeBSD amd64; rv:5.0) Gecko/20100101 Firefox/5.0',
			ubuntu: 'Mozilla/5.0 (X11; U; Linux x86_64; zh-TW; rv:1.9.0.13) Gecko/2009080315 Ubuntu/9.04 (jaunty) Firefox/3.0.13',
			xubuntu: 'Mozilla/5.0 (X11; U; Linux x86_64; zh-TW; rv:1.9.0.13) Gecko/2009080315 Xubuntu/9.04 (jaunty) Firefox/3.0.13',
			kubuntu: 'Mozilla/5.0 (X11; U; Linux x86_64; zh-TW; rv:1.9.0.13) Gecko/2009080315 Kubuntu/9.04 (jaunty) Firefox/3.0.13',
			debian: 'Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9) Gecko/2008062908 Firefox/3.0 (Debian-3.0~rc2-2)',
			fedora: 'Mozilla/5.0 (X11; U; Linux i686; sk; rv:1.9.1) Gecko/20090630 Fedora/3.5-1.fc11 Firefox/3.0',
			suse: 'Mozilla/5.0 (X11; U; Linux i686; tr-TR; rv:1.9.0) Gecko/2008061600 SUSE/3.0-1.2 Firefox/3.0',
			gentoo: 'Mozilla/5.0 (X11; U; Linux Gentoo; pl-PL; rv:1.8.1.7) Gecko/20070914 Firefox/2.0.0.7',
			centos: 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.2.7) Gecko/20100726 CentOS/3.6-3.el5.centos Firefox/3.6.7',
			redHat: 'Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.2.20) Gecko/20110804 Red Hat/3.6-2.el5 Firefox/3.6.20',
			mint: 'Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.1.1) Gecko/20090716 Linux Mint/7 (Gloria) Firefox/3.5.1'
		},

		windows: {
			win7: 'Mozilla/5.0 (Windows NT 6.1; rv:6.0) Gecko/20110814 Firefox/6.0',
			winxp: 'Mozilla/5.0 (Windows; U; Windows NT 5.1; fr; rv:1.9.2b5) Gecko/20091204 Firefox/3.6b5',
			win8: 'Mozilla/5.0 (Windows NT 6.2; WOW64; rv:5.0) Gecko/20100101 Firefox/5.0',
			win2k: 'Mozilla/5.0 (Windows; U; Windows NT 5.0; ru; rv:1.9.1.13) Gecko/20100914 Firefox/3.5.13',
			vista: 'Mozilla/5.0 (Windows; U; Windows NT 6.0; ru; rv:1.9.1.13) Gecko/20100914 Firefox/3.5.13',
			noDistro: 'Mozilla/5.0 (Windows; U; ru; rv:1.9.1.13) Gecko/20100914 Firefox/3.5.13'
		},

		arch: {
			amd64: 'Mozilla/5.0 (X11; FreeBSD amd64; rv:5.0) Gecko/20100101 Firefox/5.0',
			x86_64: 'Mozilla/5.0 (X11; U; Linux x86_64; zh-TW; rv:1.9.0.13) Gecko/2009080315 Xubuntu/9.04 (jaunty) Firefox/3.0.13',
			wow64: 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:6.0a2) Gecko/20110612 Firefox/6.0a2',
			win64: 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:5.0) Gecko/20110619 Firefox/5.0',
			osx10_4: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.4; en-US; rv:1.9.2) Gecko/20091218 Firefox 3.6b5',
			osx10_5: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.2) Gecko/20091218 Firefox 3.6b5',
			osx10_6: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; en-US; rv:1.9.2) Gecko/20091218 Firefox 3.6b5'
		},

		mac: {
			osx10_0: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.0; en-US; rv:1.9.2) Gecko/20091218 Firefox 3.6b5',
			osx10_1: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.1; en-US; rv:1.9.2) Gecko/20091218 Firefox 3.6b5',
			osx10_2: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.2; en-US; rv:1.9.2) Gecko/20091218 Firefox 3.6b5',
			osx10_3: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.3; en-US; rv:1.9.2) Gecko/20091218 Firefox 3.6b5',
			osx10_4: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.4; en-US; rv:1.9.2) Gecko/20091218 Firefox 3.6b5',
			osx10_5: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.2) Gecko/20091218 Firefox 3.6b5',
			osx10_6: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; en-US; rv:1.9.2) Gecko/20091218 Firefox 3.6b5',
			osx10_7: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.7; en-US; rv:1.9.2) Gecko/20091218 Firefox 3.6b5',
			osx10_7: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.8; en-US; rv:1.9.2) Gecko/20091218 Firefox 3.6b5',
			osxUnderscores: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1',
			noDistro: 'Mozilla/5.0 (Macintosh; U; en-US; rv:1.9.2) Gecko/20091218 Firefox 3.6b5'
		},

		mobile: {
			ipad: 'Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10',
			blackberry: 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; en) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.337 Mobile Safari/534.1',
			android: 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; Nexus One Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
			iphone: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_1_2 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7D11 Safari/528.16',
			ieMobile: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; DELL; Venue Pro)',
			msieMobile: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; MSIEMobile 6.0) USCCHTC6875',
			ipod: 'Mozilla/5.0 (iPod; U; iPhone OS 2_0 like Mac OS X; en-us) AppleWebKit/525.17 (KHTML, like Gecko) Version/3.1 Mobile/5A240d Safari/5525.7',
			operaMini: 'Opera/9.80 (J2ME/MIDP; Opera Mini/4.1.15082/22.414; U; en) Presto/2.5.25 Version/10.54',
			webOs: 'Mozilla/5.0 (webOS/1.0; U; en-US) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Pre/1.0',
			windowsPhone: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; DELL; Venue Pro)'
		},

		safari: {
			mac: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1',
			windows: 'Mozilla/5.0 (Windows; U; Windows NT 6.1; tr-TR) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27',
			linux: 'Mozilla/5.0 (X11; U; Linux x86_64; en-us) AppleWebKit/531.2+ (KHTML, like Gecko) Version/5.0 Safari/531.2+'
		},

		chrome: {
			mac: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/535.2 (KHTML, like Gecko) Chrome/15.0.874.54 Safari/535.2',
			windows: 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.6 (KHTML, like Gecko) Chrome/16.0.897.0 Safari/535.6',
			linux: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.2 (KHTML, like Gecko) Ubuntu/11.04 Chromium/15.0.871.0 Chrome/15.0.871.0 Safari/535.2'
		},

		opera: {
			windows: 'Opera/9.80 (Windows NT 6.1; U; es-ES) Presto/2.9.181 Version/12.00',
			linux: 'Opera/9.80 (X11; Linux i686; U; hu) Presto/2.9.168 Version/11.50',
			mac: 'Opera/9.80 (Macintosh; Intel Mac OS X; U; nl) Presto/2.6.30 Version/10.61',
			old: 'Opera/9.63 (Windows NT 6.1; U; hu) Presto/2.1.1'
		},

		ie: {
			ie9: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)',
			ie8: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; GTB6; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; OfficeLiveConnector.1.4; OfficeLivePatch.1.3)',
			ie7: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.04506.30)'
		},

		util: {
			assertKoopaProperty: function(info, name) {
				Assert.that(info, Has.key(name));
				Assert.that(info, Has.property(name).TRUE());
			}
		}
	};
}));