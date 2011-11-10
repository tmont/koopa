var koopaDeref = typeof(module) === 'undefined' ? window.koopa : require('../src/koopa');
var data = typeof(module) === 'undefined' ? window.koopaData : require('./data');

function Miscellaneous_tests() {
	return [
		function Should_handle_empty_user_agent() {
			if (typeof(window) !== 'undefined') {
				Assert.ignore('koopa on the browser uses navigator.userAgent');
			}

			var info = koopaDeref();
			Assert.that(info, Has.key('userAgent'));
			Assert.that(info.userAgent, Is.undefined());

			Assert.that(info, Has.key('version'));
			Assert.that(info.version, Has.key('major'));
			Assert.that(info.version, Has.property('major').identicalTo(''));
			Assert.that(info.version, Has.key('minor'));
			Assert.that(info.version, Has.property('minor').identicalTo(''));
			Assert.that(info.version, Has.key('rest'));
			Assert.that(info.version, Has.property('rest').identicalTo(''));
		}
	];
}

if (typeof(module) === 'undefined') {
	Jarvis.run(Miscellaneous_tests);
} else {
	module.exports = Miscellaneous_tests;
}