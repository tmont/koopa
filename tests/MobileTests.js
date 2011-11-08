var koopa = require('../src/koopa');
var data = require('./data');

module.exports = function Mobile_tests() {
	return [
		function Should_detect_ipad() {
			var info = koopa(data.mobile.ipad);

			data.util.assertKoopaProperty(info, 'mobile');
			data.util.assertKoopaProperty(info, 'ipad');
			data.util.assertKoopaProperty(info, 'ios');
		},

		function Should_detect_ipod() {
			var info = koopa(data.mobile.ipod);

			data.util.assertKoopaProperty(info, 'mobile');
			data.util.assertKoopaProperty(info, 'ipod');
			data.util.assertKoopaProperty(info, 'ios');
		},

		function Should_detect_iphone() {
			var info = koopa(data.mobile.iphone);

			data.util.assertKoopaProperty(info, 'mobile');
			data.util.assertKoopaProperty(info, 'iphone');
			data.util.assertKoopaProperty(info, 'ios');
		},

		function Should_detect_blackberry() {
			var info = koopa(data.mobile.blackberry);

			data.util.assertKoopaProperty(info, 'mobile');
			data.util.assertKoopaProperty(info, 'blackberry');
		},

		function Should_detect_android() {
			var info = koopa(data.mobile.android);

			data.util.assertKoopaProperty(info, 'mobile');
			data.util.assertKoopaProperty(info, 'android');
		},

		function Should_detect_web_os() {
			var info = koopa(data.mobile.webOs);

			data.util.assertKoopaProperty(info, 'mobile');
			data.util.assertKoopaProperty(info, 'webos');
		},

		function Should_detect_windows_phone() {
			var info = koopa(data.mobile.windowsPhone);

			data.util.assertKoopaProperty(info, 'mobile');
			data.util.assertKoopaProperty(info, 'windowsPhone');
		},

		function Should_detect_opera_mini() {
			var info = koopa(data.mobile.operaMini);

			data.util.assertKoopaProperty(info, 'mobile');
			data.util.assertKoopaProperty(info, 'operaMini');
		},

		function Should_detect_ie_mobile() {
			var info = koopa(data.mobile.ieMobile);

			data.util.assertKoopaProperty(info, 'mobile');
			data.util.assertKoopaProperty(info, 'iemobile');

			info = koopa(data.mobile.msieMobile);

			data.util.assertKoopaProperty(info, 'mobile');
			data.util.assertKoopaProperty(info, 'iemobile');
		},
	];
};