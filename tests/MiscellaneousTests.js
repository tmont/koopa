(function(){
	var koopaDeref = typeof(module) === 'undefined' ? window.koopa : require('../src/koopa');

	var suite = Jarvis.suite('Miscellaneous tests', [
		function Should_handle_empty_user_agent() {
			if (typeof(window) !== 'undefined') {
				Assert.ignore('koopa on the browser uses navigator.userAgent');
			}

			var info = koopaDeref();
			Assert.that(info, Has.key('userAgent'));
			Assert.that(info.userAgent, Is.undefined());

			Assert.that(info, Has.key('browser'));
			Assert.that(info.browser, Has.key('version'));
			Assert.that(info.browser.version, Has.key('major'));
			Assert.that(info.browser.version, Has.property('major').identicalTo(''));
			Assert.that(info.browser.version, Has.key('minor'));
			Assert.that(info.browser.version, Has.property('minor').identicalTo(''));
			Assert.that(info.browser.version, Has.key('rest'));
			Assert.that(info.browser.version, Has.property('rest').identicalTo(''));
		}
	]);

	if (typeof(module) === 'undefined') {
		Jarvis.run(suite);
	} else {
		module.exports = suite;
	}
}());