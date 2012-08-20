(function(){
	var expect = typeof(module) === 'undefined' ? window.expect : require('expect.js');
	var data = typeof(module) === 'undefined' ? window.koopaData : require('./data');
	var koopaDeref = typeof(module) === 'undefined' ? window.koopa : require('../src/koopa');

	describe('Mobile tests', function() {
		it('Should detect iPad', function() {
			var info = koopaDeref(data.mobile.ipad);
			expect(info).to.have.property('mobile', true);
			expect(info).to.have.property('ipad', true);
			expect(info).to.have.property('ios', true);
		});

		it('Should detect iPod', function() {
			var info = koopaDeref(data.mobile.ipod);
			expect(info).to.have.property('mobile', true);
			expect(info).to.have.property('ipod', true);
			expect(info).to.have.property('ios', true);
		});

		it('Should detect iPhone', function() {
			var info = koopaDeref(data.mobile.iphone);
			expect(info).to.have.property('mobile', true);
			expect(info).to.have.property('iphone', true);
			expect(info).to.have.property('ios', true);
		});

		it('Should detect Blackberry', function() {
			var info = koopaDeref(data.mobile.blackberry);
			expect(info).to.have.property('mobile', true);
			expect(info).to.have.property('blackberry', true);
		});

		it('Should detect WebOS', function() {
			var info = koopaDeref(data.mobile.webOs);
			expect(info).to.have.property('mobile', true);
			expect(info).to.have.property('webos', true);
		});

		it('Should detect Android', function() {
			var info = koopaDeref(data.mobile.android);
			expect(info).to.have.property('mobile', true);
			expect(info).to.have.property('android', true);
		});

		it('Should detect Windows Phone', function() {
			var info = koopaDeref(data.mobile.windowsPhone);
			expect(info).to.have.property('mobile', true);
			expect(info).to.have.property('windowsPhone', true);
		});

		it('Should detect Opera Mini', function() {
			var info = koopaDeref(data.mobile.operaMini);
			expect(info).to.have.property('mobile', true);
			expect(info).to.have.property('operaMini', true);
		});

		it('Should detect IE mobile', function() {
			var info = koopaDeref(data.mobile.ieMobile);
			expect(info).to.have.property('mobile', true);
			expect(info).to.have.property('iemobile', true);

			info = koopaDeref(data.mobile.msieMobile);
			expect(info).to.have.property('mobile', true);
			expect(info).to.have.property('iemobile', true);
		});
	});
}());