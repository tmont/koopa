var koopaDeref = typeof(module) === 'undefined' ? window.koopa : require('../src/koopa');
var data = typeof(module) === 'undefined' ? window.koopaData : require('./data');

function Engine_tests() {
	return [
		function Should_detect_gecko() {
			var info = koopaDeref(data.engine.gecko);
			data.util.assertKoopaProperty(info, 'gecko');
			data.util.assertKoopaProperty(info, 'gecko20100101');
		},

		function Should_detect_trident() {
			var info = koopaDeref(data.engine.trident);
			data.util.assertKoopaProperty(info, 'trident');
			data.util.assertKoopaProperty(info, 'trident5');
			data.util.assertKoopaProperty(info, 'trident5_0');
		},

		function Should_detect_webkit() {
			var info = koopaDeref(data.engine.webkit);
			data.util.assertKoopaProperty(info, 'webkit');
			data.util.assertKoopaProperty(info, 'webkit535');
			data.util.assertKoopaProperty(info, 'webkit535_2');
		},

		function Should_detect_presto() {
			var info = koopaDeref(data.engine.presto);
			data.util.assertKoopaProperty(info, 'presto');
			data.util.assertKoopaProperty(info, 'presto2');
			data.util.assertKoopaProperty(info, 'presto2_6');
		}
	];
}

if (typeof(module) === 'undefined') {
	Jarvis.run(Engine_tests);
} else {
	module.exports = Engine_tests;
}