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

					data.util.assertOs(info, 'windows');
				},

				function Should_detect_firefox_on_linux() {
					var info = koopa(data.firefox.linux);
					verifyCommonValues(info, 7);

					data.util.assertOs(info, 'linux');
				},

				function Should_parse_version() {
					var info = koopa(data.firefox.threePartVersion);
					verifyCommonValues(info, 7);

					Assert.that(info.version, Has.property('major').equalTo(7));
					Assert.that(info.version, Has.property('minor').equalTo(0));
					Assert.that(info.version, Has.property('rest').equalTo(1));
					Assert.that(info.version.toString(), Is.equalTo('7.0.1'));
				}
			];
		}
	];
};