(function(){
	var expect = typeof(module) === 'undefined' ? window.expect : require('expect.js');
	var data = typeof(module) === 'undefined' ? window.koopaData : require('./data');
	var koopaDeref = typeof(module) === 'undefined' ? window.koopa : require('../src/koopa');

	describe('Engine tests', function() {
		it('Should detect Gecko', function() {
			var info = koopaDeref(data.engine.gecko);
			expect(info).to.have.property('gecko', true);
			expect(info).to.have.property('gecko20100101', true);
		});

		it('Should detect Trident', function() {
			var info = koopaDeref(data.engine.trident);
			expect(info).to.have.property('trident', true);
			expect(info).to.have.property('trident5', true);
			expect(info).to.have.property('trident5_0', true);
		});

		it('Should detect webkit', function() {
			var info = koopaDeref(data.engine.webkit);
			expect(info).to.have.property('webkit', true);
			expect(info).to.have.property('webkit535', true);
			expect(info).to.have.property('webkit535_2', true);
		});

		it('Should detect presto', function() {
			var info = koopaDeref(data.engine.presto);
			expect(info).to.have.property('presto', true);
			expect(info).to.have.property('presto2', true);
			expect(info).to.have.property('presto2_6', true);
		});

		it('Should parse engine version with non-numeric version', function() {
			var info = koopaDeref(data.engine.nonNumericVersion);
			expect(info).to.have.property('webkit', true);
			expect(info).to.have.property('webkit534', true);
			expect(info).to.have.property('webkit534_1_', true);
		});
	});
}());