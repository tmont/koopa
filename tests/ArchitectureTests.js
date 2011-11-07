var koopa = require('../src/koopa');
var data = require('./data');

module.exports = function Architecture_tests() {
	return [
		function Should_treat_amd64_as_64_bit() {
			var info = koopa(data.arch.amd64);
			Assert.that(info, Has.key('sixtyFourBit'));
			Assert.that(info, Has.property('sixtyFourBit').TRUE());
		},

		function Should_treat_x86_64_as_64_bit() {
			var info = koopa(data.arch.x86_64);
			Assert.that(info, Has.key('sixtyFourBit'));
			Assert.that(info, Has.property('sixtyFourBit').TRUE());
		},

		function Should_treat_win64_64_as_64_bit() {
			var info = koopa(data.arch.win64);
			Assert.that(info, Has.key('sixtyFourBit'));
			Assert.that(info, Has.property('sixtyFourBit').TRUE());
		},

		function Should_treat_mac_osx_greater_than_or_equal_to_10_5_as_64_bit() {
			var info = koopa(data.arch.osx10_6);
			Assert.that(info, Has.key('sixtyFourBit'));
			Assert.that(info, Has.property('sixtyFourBit').TRUE());

			info = koopa(data.arch.osx10_5);
			Assert.that(info, Has.key('sixtyFourBit'));
			Assert.that(info, Has.property('sixtyFourBit').TRUE());

			info = koopa(data.arch.osx10_4);
			Assert.that(info, Has.no.key('sixtyFourBit'));
		}
	];
};