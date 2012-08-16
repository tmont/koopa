(function() {
	var expect = typeof(module) === 'undefined' ? window.expect : require('expect.js');
	var data = typeof(module) === 'undefined' ? window.koopaData : require('./data');
	var koopaDeref = typeof(module) === 'undefined' ? window.koopa : require('../src/koopa');

	describe('Architecture tests', function() {
		it('Should treat amd64 as 64-bit', function() {
			expect(koopaDeref(data.arch.amd64)).to.have.property('sixtyFourBit', true);
		});
		it('Should treat x86_64 as 64-bit', function() {
			expect(koopaDeref(data.arch.x86_64)).to.have.property('sixtyFourBit', true);
		});
		it('Should treat wow64 as 64-bit', function() {
			expect(koopaDeref(data.arch.wow64)).to.have.property('sixtyFourBit', true);
		});
		it('Should treat win64 as 64-bit', function() {
			expect(koopaDeref(data.arch.win64)).to.have.property('sixtyFourBit', true);
		});
		it('Should treat Mac OS X >= 10.5 as 64-bit', function() {
			expect(koopaDeref(data.arch.osx10_4)).to.not.have.property('sixtyFourBit');
			expect(koopaDeref(data.arch.osx10_5)).to.have.property('sixtyFourBit', true);
			expect(koopaDeref(data.arch.osx10_6)).to.have.property('sixtyFourBit', true);
		});
	});
}());