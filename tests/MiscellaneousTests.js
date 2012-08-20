(function(){
	var expect = typeof(module) === 'undefined' ? window.expect : require('expect.js');
	var data = typeof(module) === 'undefined' ? window.koopaData : require('./data');
	var koopaDeref = typeof(module) === 'undefined' ? window.koopa : require('../src/koopa');

	describe('Miscellaneous tests', function() {
		it('Should handle empty user-agent', function() {
			if (typeof(window) !== 'undefined') {
				//on the browser it uses navigator.userAgent so it'll never be empty
				return;
			}

			var info = koopaDeref();
			expect(info).to.have.property('userAgent', undefined);
			expect(info).to.have.property('browser');
			expect(info.browser).to.have.property('version');
			expect(info.browser.version).to.have.property('major', '');
			expect(info.browser.version).to.have.property('minor', '');
			expect(info.browser.version).to.have.property('rest', '');
		});
	});
}());