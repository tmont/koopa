var koopa = require('../src/koopa');
var data = require('./data');

module.exports = function Browser_tests() {
	return [
		function Firefox_tests() {
			function verifyCommonValues(info, majorVersion) {
				Assert.that(info, Has.key('firefox'));
				Assert.that(info, Has.property('firefox').TRUE());

				Assert.that(info, Has.key('firefox' + majorVersion));
				Assert.that(info, Has.property('firefox' + majorVersion).TRUE());

				Assert.that(info, Has.key('cssPrefix'));
				Assert.that(info, Has.property('cssPrefix').equalTo('moz'));
			}
			return [
				function Should_detect_firefox_on_windows() {
					var info = koopa(data.firefox.windows);
					verifyCommonValues(info, 6);

					data.util.assertKoopaProperty(info, 'windows');
				},

				function Should_detect_firefox_on_linux() {
					var info = koopa(data.firefox.linux);
					verifyCommonValues(info, 7);

					data.util.assertKoopaProperty(info, 'linux');
				},

				function Should_parse_version() {
					var info = koopa(data.firefox.threePartVersion);
					verifyCommonValues(info, 7);

					Assert.that(info.version, Has.property('major').equalTo(7));
					Assert.that(info.version, Has.property('minor').equalTo(0));
					Assert.that(info.version, Has.property('rest').equalTo(1));
					Assert.that(info.version.toString(), Is.equalTo('7.0.1'));
				},

				function Should_parse_version_with_non_numeric_values() {
					var info = koopa(data.firefox.nonNumericVersion);
					verifyCommonValues(info, 6);

					Assert.that(info.version, Has.property('major').equalTo(6));
					Assert.that(info.version, Has.property('minor').equalTo('0a2'));
					Assert.that(info.version, Has.property('rest').empty());
					Assert.that(info.version.toString(), Is.equalTo('6.0a2'));
				}
			];
		},

		function Safari_tests() {
			function verifyCommonValues(info, majorVersion) {
				Assert.that(info, Has.key('safari'));
				Assert.that(info, Has.property('safari').TRUE());

				Assert.that(info, Has.key('safari' + majorVersion));
				Assert.that(info, Has.property('safari' + majorVersion).TRUE());

				Assert.that(info, Has.key('cssPrefix'));
				Assert.that(info, Has.property('cssPrefix').equalTo('webkit'));
			}
			return [
				function Should_detect_safari_on_windows() {
					var info = koopa(data.safari.windows);
					verifyCommonValues(info, 5);

					data.util.assertKoopaProperty(info, 'windows');
				},

				function Should_detect_safari_on_mac() {
					var info = koopa(data.safari.macintosh);
					verifyCommonValues(info, 5);

					data.util.assertKoopaProperty(info, 'macintosh');
				},

				function Should_parse_version() {
					var info = koopa(data.safari.windows);
					verifyCommonValues(info, 5);

					Assert.that(info.version, Has.property('major').equalTo(5));
					Assert.that(info.version, Has.property('minor').equalTo(0));
					Assert.that(info.version, Has.property('rest').equalTo(4));
					Assert.that(info.version.toString(), Is.equalTo('5.0.4'));
				}
			];
		}
	];
};