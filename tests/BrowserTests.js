var koopaDeref = typeof(module) === 'undefined' ? window.koopa : require('../src/koopa');
var data = typeof(module) === 'undefined' ? window.koopaData : require('./data');

function Browser_tests() {
	return [
		function Firefox_tests() {
			function verifyCommonValues(info, majorVersion) {
				data.util.assertKoopaProperty(info, 'firefox');
				data.util.assertKoopaProperty(info, 'firefox' + majorVersion);
				Assert.that(info, Has.key('cssPrefix'));
				Assert.that(info, Has.property('cssPrefix').equalTo('moz'));
			}

			return [
				function Should_detect_firefox_on_windows() {
					verifyCommonValues(koopaDeref(data.firefox.windows), 6);
				},

				function Should_detect_firefox_on_linux() {
					verifyCommonValues(koopaDeref(data.firefox.linux), 7);
				},

				function Should_detect_firefox_on_mac() {
					verifyCommonValues(koopaDeref(data.firefox.mac), 4);
				},

				function Should_parse_version() {
					verifyCommonValues(koopaDeref(data.firefox.threePartVersion), 7);

					Assert.that(koopaDeref(data.firefox.threePartVersion).version, Has.property('major').equalTo(7));
					Assert.that(koopaDeref(data.firefox.threePartVersion).version, Has.property('minor').equalTo(0));
					Assert.that(koopaDeref(data.firefox.threePartVersion).version, Has.property('rest').equalTo(1));
					Assert.that(koopaDeref(data.firefox.threePartVersion).version.toString(), Is.equalTo('7.0.1'));
				},

				function Should_parse_version_with_non_numeric_values() {
					verifyCommonValues(koopaDeref(data.firefox.nonNumericVersion), 6);

					Assert.that(koopaDeref(data.firefox.nonNumericVersion).version, Has.property('major').equalTo(6));
					Assert.that(koopaDeref(data.firefox.nonNumericVersion).version, Has.property('minor').equalTo('0a2'));
					Assert.that(koopaDeref(data.firefox.nonNumericVersion).version, Has.property('rest').empty());
					Assert.that(koopaDeref(data.firefox.nonNumericVersion).version.toString(), Is.equalTo('6.0a2'));
				}
			];
		},

		function Safari_tests() {
			function verifyCommonValues(info, majorVersion) {
				data.util.assertKoopaProperty(info, 'safari');
				data.util.assertKoopaProperty(info, 'safari' + majorVersion);
				Assert.that(info, Has.key('cssPrefix'));
				Assert.that(info, Has.property('cssPrefix').equalTo('webkit'));
			}

			return [
				function Should_detect_safari_on_windows() {
					verifyCommonValues(koopaDeref(data.safari.windows), 5);
				},

				function Should_detect_safari_on_mac() {
					verifyCommonValues(koopaDeref(data.safari.mac), 5);
				},

				function Should_detect_safari_on_linuxc() {
					verifyCommonValues(koopaDeref(data.safari.linux), 5);
				},

				function Should_parse_version() {
					var info = koopaDeref(data.safari.windows);
					verifyCommonValues(info, 5);

					Assert.that(info.version, Has.property('major').equalTo(5));
					Assert.that(info.version, Has.property('minor').equalTo(0));
					Assert.that(info.version, Has.property('rest').equalTo(4));
					Assert.that(info.version.toString(), Is.equalTo('5.0.4'));
				}
			];
		},

		function IE_tests() {
			function verifyCommonValues(info, majorVersion) {
				data.util.assertKoopaProperty(info, 'ie');
				data.util.assertKoopaProperty(info, 'ie' + majorVersion);
				Assert.that(info, Has.key('cssPrefix'));
				Assert.that(info, Has.property('cssPrefix').equalTo('ms'));
			}

			return [
				function Should_detect_ie() {
					verifyCommonValues(koopaDeref(data.ie.ie9), 9);
				},

				function Should_parse_version() {
					var info = koopaDeref(data.ie.ie8);
					verifyCommonValues(info, 8);

					Assert.that(info.version, Has.property('major').equalTo(8));
					Assert.that(info.version, Has.property('minor').equalTo(0));
					Assert.that(info.version, Has.property('rest').empty());
					Assert.that(info.version.toString(), Is.equalTo('8.0'));
				}
			];
		},

		function Chrome_tests() {
			function verifyCommonValues(info, majorVersion) {
				data.util.assertKoopaProperty(info, 'chrome');
				data.util.assertKoopaProperty(info, 'chrome' + majorVersion);
				Assert.that(info, Has.no.key('safari')); //should never identify as safari
				Assert.that(info, Has.key('cssPrefix'));
				Assert.that(info, Has.property('cssPrefix').equalTo('webkit'));
			}

			return [
				function Should_detect_chrome_on_windows() {
					verifyCommonValues(koopaDeref(data.chrome.windows), 16);
				},

				function Should_detect_chrome_on_mac() {
					verifyCommonValues(koopaDeref(data.chrome.mac), 15);
				},

				function Should_detect_chrome_on_linux() {
					verifyCommonValues(koopaDeref(data.chrome.linux), 15);
				},

				function Should_parse_version() {
					var info = koopaDeref(data.chrome.mac);
					verifyCommonValues(info, 15);

					Assert.that(info.version, Has.property('major').equalTo(15));
					Assert.that(info.version, Has.property('minor').equalTo(0));
					Assert.that(info.version, Has.property('rest').equalTo('874.54'));
					Assert.that(info.version.toString(), Is.equalTo('15.0.874.54'));
				}
			];
		},

		function Opera_tests() {
			function verifyCommonValues(info, majorVersion) {
				data.util.assertKoopaProperty(info, 'opera');
				data.util.assertKoopaProperty(info, 'opera' + majorVersion);
				Assert.that(info, Has.key('cssPrefix'));
				Assert.that(info, Has.property('cssPrefix').equalTo('o'));
			}

			return [
				function Should_detect_opera_on_windows() {
					verifyCommonValues(koopaDeref(data.opera.windows), 12);
				},

				function Should_detect_opera_on_mac() {
					verifyCommonValues(koopaDeref(data.opera.mac), 10);
				},

				function Should_detect_opera_on_linux() {
					verifyCommonValues(koopaDeref(data.opera.linux), 11);
				},

				function Should_parse_version() {
					var info = koopaDeref(data.opera.mac);

					Assert.that(info.version, Has.property('major').equalTo(10));
					Assert.that(info.version, Has.property('minor').equalTo(61));
					Assert.that(info.version, Has.property('rest').empty());
					Assert.that(info.version.toString(), Is.equalTo('10.61'));
				},

				function Should_parse_old_version() {
					var info = koopaDeref(data.opera.old);

					Assert.that(info.version, Has.property('major').equalTo(9));
					Assert.that(info.version, Has.property('minor').equalTo(63));
					Assert.that(info.version, Has.property('rest').empty());
					Assert.that(info.version.toString(), Is.equalTo('9.63'));
				}
			];
		}
	];
}

if (typeof(module) === 'undefined') {
	Jarvis.run(Browser_tests);
} else {
	module.exports = Browser_tests;
}