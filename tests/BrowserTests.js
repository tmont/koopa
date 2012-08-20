(function() {
	var expect = typeof(module) === 'undefined' ? window.expect : require('expect.js');
	var data = typeof(module) === 'undefined' ? window.koopaData : require('./data');
	var koopaDeref = typeof(module) === 'undefined' ? window.koopa : require('../src/koopa');

	describe('Browser tests', function() {
		describe('Firefox tests', (function(){
			function verifyCommonValues(info, majorVersion) {
				expect(info.browser).to.have.property('name', 'Firefox');
				expect(info).to.have.property('firefox', true);
				expect(info).to.have.property('firefox' + majorVersion, true);
			}

			return function() {
				it('Should detect Firefox on Windows', function() {
					verifyCommonValues(koopaDeref(data.firefox.windows), 6);
				});

				it('Should detect Firefox on Linux', function() {
					verifyCommonValues(koopaDeref(data.firefox.linux), 7);
				});

				it('Should detect Firefox on Mac', function() {
					verifyCommonValues(koopaDeref(data.firefox.mac), 4);
				});

				it('Should parse version', function() {
					var info = koopaDeref(data.firefox.threePartVersion);
					verifyCommonValues(info, 7);
					expect(info.browser.version).to.have.property('major', '7');
					expect(info.browser.version).to.have.property('minor', '0');
					expect(info.browser.version).to.have.property('rest', '1');
					expect(info.browser.version.toString()).to.equal('7.0.1');
				});

				it('Should parse versions with non-numeric values', function() {
					var info = koopaDeref(data.firefox.nonNumericVersion);
					verifyCommonValues(info, 6);
					expect(info.browser.version).to.have.property('major', '6');
					expect(info.browser.version).to.have.property('minor', '0a2');
					expect(info.browser.version.rest).to.be.empty();
					expect(info.browser.version.toString()).to.equal('6.0a2');
				});
			};
		}()));

		describe('Safari tests', (function() {
			function verifyCommonValues(info, majorVersion) {
				expect(info.browser).to.have.property('name', 'Safari');
				expect(info).to.have.property('safari', true);
				expect(info).to.have.property('safari' + majorVersion, true);
			}

			return function() {
				it('Should detect safari on Windows', function() {
					verifyCommonValues(koopaDeref(data.safari.windows), 5);
				});

				it('Should detect safari on Linux', function() {
					verifyCommonValues(koopaDeref(data.safari.linux), 5);
				});

				it('Should detect safari on Mac', function() {
					verifyCommonValues(koopaDeref(data.safari.mac), 5);
				});

				it('Should parse version', function() {
					var info = koopaDeref(data.safari.windows);
					verifyCommonValues(info, 5);
					expect(info.browser.version).to.have.property('major', '5');
					expect(info.browser.version).to.have.property('minor', '0');
					expect(info.browser.version).to.have.property('rest', '4');
					expect(info.browser.version.toString()).to.equal('5.0.4');
				});
			};
		}()));

		describe('IE tests', (function() {
			function verifyCommonValues(info, majorVersion) {
				expect(info.browser).to.have.property('name', 'MSIE');
				expect(info).to.have.property('ie', true);
				expect(info).to.have.property('ie' + majorVersion, true);
			}

			return function() {
				it('Should detect IE on Windows', function() {
					verifyCommonValues(koopaDeref(data.ie.ie9), 9);
				});

				it('Should parse version', function() {
					var info = koopaDeref(data.ie.ie8);
					verifyCommonValues(info, 8);
					expect(info.browser.version).to.have.property('major', '8');
					expect(info.browser.version).to.have.property('minor', '0');
					expect(info.browser.version).to.have.property('rest', '');
					expect(info.browser.version.toString()).to.equal('8.0');
				});
			};
		}()));
//
		describe('Chrome tests', (function() {
			function verifyCommonValues(info, majorVersion) {
				expect(info.browser).to.have.property('name', 'Chrome');
				expect(info).to.have.property('chrome', true);
				expect(info).to.have.property('chrome' + majorVersion, true);
				expect(info).to.not.have.property('safari');
			}

			return function() {
				it('Should detect chrome on Windows', function() {
					verifyCommonValues(koopaDeref(data.chrome.windows), 16);
				});

				it('Should detect chrome on Linux', function() {
					verifyCommonValues(koopaDeref(data.chrome.linux), 15);
				});

				it('Should detect chrome on Mac', function() {
					verifyCommonValues(koopaDeref(data.chrome.mac), 15);
				});

				it('Should parse version', function() {
					var info = koopaDeref(data.chrome.mac);
					verifyCommonValues(info, 15);
					expect(info.browser.version).to.have.property('major', '15');
					expect(info.browser.version).to.have.property('minor', '0');
					expect(info.browser.version).to.have.property('rest', '874.54');
					expect(info.browser.version.toString()).to.equal('15.0.874.54');
				});
			};
		}()));

		describe('Opera tests', (function() {
			function verifyCommonValues(info, majorVersion) {
				expect(info.browser).to.have.property('name', 'Opera');
				expect(info).to.have.property('opera', true);
				expect(info).to.have.property('opera' + majorVersion, true);
			}

			return function() {
				it('Should detect opera on Windows', function() {
					verifyCommonValues(koopaDeref(data.opera.windows), 12);
				});

				it('Should detect opera on Linux', function() {
					verifyCommonValues(koopaDeref(data.opera.linux), 11);
				});

				it('Should detect opera on Mac', function() {
					verifyCommonValues(koopaDeref(data.opera.mac), 10);
				});

				it('Should parse version', function() {
					var info = koopaDeref(data.opera.mac);
					expect(info.browser.version).to.have.property('major', '10');
					expect(info.browser.version).to.have.property('minor', '61');
					expect(info.browser.version).to.have.property('rest', '');
					expect(info.browser.version.toString()).to.equal('10.61');
				});

				it('Should parse old version', function() {
					var info = koopaDeref(data.opera.old);
					expect(info.browser.version).to.have.property('major', '9');
					expect(info.browser.version).to.have.property('minor', '63');
					expect(info.browser.version).to.have.property('rest', '');
					expect(info.browser.version.toString()).to.equal('9.63');
				});
			};
		}()));
	});
}());