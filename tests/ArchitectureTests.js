(function() {
	var koopaDeref = typeof(module) === 'undefined' ? window.koopa : require('../src/koopa');
	var data = typeof(module) === 'undefined' ? window.koopaData : require('./data');

	var suite = Jarvis.suite('Architecture tests', [
		function Should_treat_amd64_as_64_bit() {
			data.util.assertKoopaProperty(koopaDeref(data.arch.amd64), 'sixtyFourBit');
		},

		function Should_treat_x86_64_as_64_bit() {
			data.util.assertKoopaProperty(koopaDeref(data.arch.x86_64), 'sixtyFourBit');
		},

		function Should_treat_win64_as_64_bit() {
			data.util.assertKoopaProperty(koopaDeref(data.arch.win64), 'sixtyFourBit');
		},

		function Should_treat_wow64_as_64_bit() {
			data.util.assertKoopaProperty(koopaDeref(data.arch.wow64), 'sixtyFourBit');
		},

		function Should_treat_mac_osx_greater_than_or_equal_to_10_5_as_64_bit() {
			data.util.assertKoopaProperty(koopaDeref(data.arch.osx10_6), 'sixtyFourBit');
			data.util.assertKoopaProperty(koopaDeref(data.arch.osx10_5), 'sixtyFourBit');
			Assert.that(koopaDeref(data.arch.osx10_4), Has.no.key('sixtyFourBit'));
		}
	]);

	if (typeof(module) === 'undefined') {
		Jarvis.run(suite);
	} else {
		module.exports = suite;
	}
}());