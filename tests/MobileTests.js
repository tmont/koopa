(function(){

	var koopaDeref = typeof(module) === 'undefined' ? window.koopa : require('../src/koopa');
	var data = typeof(module) === 'undefined' ? window.koopaData : require('./data');

	var suite = Jarvis.suite('Mobile tests', [
		function Should_detect_ipad() {
			var info = koopaDeref(data.mobile.ipad);

			data.util.assertKoopaProperty(info, 'mobile');
			data.util.assertKoopaProperty(info, 'ipad');
			data.util.assertKoopaProperty(info, 'ios');
		},

		function Should_detect_ipod() {
			var info = koopaDeref(data.mobile.ipod);

			data.util.assertKoopaProperty(info, 'mobile');
			data.util.assertKoopaProperty(info, 'ipod');
			data.util.assertKoopaProperty(info, 'ios');
		},

		function Should_detect_iphone() {
			var info = koopaDeref(data.mobile.iphone);

			data.util.assertKoopaProperty(info, 'mobile');
			data.util.assertKoopaProperty(info, 'iphone');
			data.util.assertKoopaProperty(info, 'ios');
		},

		function Should_detect_blackberry() {
			var info = koopaDeref(data.mobile.blackberry);

			data.util.assertKoopaProperty(info, 'mobile');
			data.util.assertKoopaProperty(info, 'blackberry');
		},

		function Should_detect_android() {
			var info = koopaDeref(data.mobile.android);

			data.util.assertKoopaProperty(info, 'mobile');
			data.util.assertKoopaProperty(info, 'android');
		},

		function Should_detect_web_os() {
			var info = koopaDeref(data.mobile.webOs);

			data.util.assertKoopaProperty(info, 'mobile');
			data.util.assertKoopaProperty(info, 'webos');
		},

		function Should_detect_windows_phone() {
			var info = koopaDeref(data.mobile.windowsPhone);

			data.util.assertKoopaProperty(info, 'mobile');
			data.util.assertKoopaProperty(info, 'windowsPhone');
		},

		function Should_detect_opera_mini() {
			var info = koopaDeref(data.mobile.operaMini);

			data.util.assertKoopaProperty(info, 'mobile');
			data.util.assertKoopaProperty(info, 'operaMini');
		},

		function Should_detect_ie_mobile() {
			var info = koopaDeref(data.mobile.ieMobile);

			data.util.assertKoopaProperty(info, 'mobile');
			data.util.assertKoopaProperty(info, 'iemobile');

			info = koopaDeref(data.mobile.msieMobile);

			data.util.assertKoopaProperty(info, 'mobile');
			data.util.assertKoopaProperty(info, 'iemobile');
		},
	]);


	if (typeof(module) === 'undefined') {
		Jarvis.run(suite);
	} else {
		module.exports = suite;
	}

}());