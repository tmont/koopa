(function(){
	var expect = typeof(module) === 'undefined' ? window.expect : require('expect.js');
	var data = typeof(module) === 'undefined' ? window.koopaData : require('./data');
	var koopaDeref = typeof(module) === 'undefined' ? window.koopa : require('../src/koopa');

	describe('Operating system tests', function() {
		describe('Linux distro tests', function() {
			it('Should detect ubuntu version and distro', function() {
				var info = koopaDeref(data.linux.ubuntu);
				expect(info.os).to.have.property('family', 'Linux');
				expect(info.os).to.have.property('distro', 'Ubuntu');
				expect(info.os).to.have.property('name', 'jaunty');
				expect(info).to.have.property('ubuntu', true);
				expect(info).to.have.property('linux', true);
				expect(info).to.have.property('ubuntu9_04', true);
				expect(info).to.have.property('jaunty', true);
			});

			it('Should detect ubuntu version and distro', function() {
				var info = koopaDeref(data.linux.kubuntu);
				expect(info.os).to.have.property('family', 'Linux');
				expect(info.os).to.have.property('distro', 'Kubuntu');
				expect(info).to.have.property('kubuntu', true);
				expect(info).to.have.property('linux', true);
				expect(info).to.have.property('kubuntu9_04', true);
				expect(info).to.have.property('jaunty', true);
			});

			it('Should detect zubuntu version and distro', function() {
				var info = koopaDeref(data.linux.xubuntu);
				expect(info.os).to.have.property('family', 'Linux');
				expect(info.os).to.have.property('distro', 'Xubuntu');
				expect(info).to.have.property('xubuntu', true);
				expect(info).to.have.property('linux', true);
				expect(info).to.have.property('xubuntu9_04', true);
				expect(info).to.have.property('jaunty', true);
			});

			it('Should detect freebsd', function() {
				var info = koopaDeref(data.linux.freeBsd);
				expect(info.os).to.have.property('family', 'Linux');
				expect(info.os).to.have.property('distro', 'FreeBSD');
				expect(info).to.have.property('freebsd', true);
				expect(info).to.have.property('linux', true);
			});

			it('Should detect debian version', function() {
				var info = koopaDeref(data.linux.debian);
				expect(info.os).to.have.property('family', 'Linux');
				expect(info.os).to.have.property('distro', 'Debian');
				expect(info).to.have.property('debian', true);
				expect(info).to.have.property('linux', true);
				expect(info).to.have.property('debian3', true);
				expect(info).to.have.property('debian3_0_rc2_2', true);
			});

			it('Should detect fedora version', function() {
				var info = koopaDeref(data.linux.fedora);
				expect(info.os).to.have.property('family', 'Linux');
				expect(info.os).to.have.property('distro', 'Fedora');
				expect(info).to.have.property('fedora', true);
				expect(info).to.have.property('linux', true);
				expect(info).to.have.property('fedora3', true);
				expect(info).to.have.property('fedora3_5_1_fc11', true);
			});

			it('Should detect suse version', function() {
				var info = koopaDeref(data.linux.suse);
				expect(info.os).to.have.property('family', 'Linux');
				expect(info.os).to.have.property('distro', 'SUSE');
				expect(info).to.have.property('suse', true);
				expect(info).to.have.property('linux', true);
				expect(info).to.have.property('suse3', true);
				expect(info).to.have.property('suse3_0_1_2', true);
			});

			it('Should detect gentoo', function() {
				var info = koopaDeref(data.linux.gentoo);
				expect(info.os).to.have.property('family', 'Linux');
				expect(info.os).to.have.property('distro', 'Gentoo');
				expect(info).to.have.property('gentoo', true);
				expect(info).to.have.property('linux', true);
			});

			it('Should detect centos version', function() {
				var info = koopaDeref(data.linux.centos);
				expect(info.os).to.have.property('family', 'Linux');
				expect(info.os).to.have.property('distro', 'CentOS');
				expect(info).to.have.property('centos', true);
				expect(info).to.have.property('linux', true);
				expect(info).to.have.property('centos3', true);
				expect(info).to.have.property('centos3_6_3_el5_centos', true);
			});

			it('Should detect RedHat version', function() {
				var info = koopaDeref(data.linux.redHat);
				expect(info.os).to.have.property('family', 'Linux');
				expect(info.os).to.have.property('distro', 'Red Hat');
				expect(info).to.have.property('redHat', true);
				expect(info).to.have.property('linux', true);
				expect(info).to.have.property('redHat3', true);
				expect(info).to.have.property('redHat3_6_2_el5', true);
			});

			it('Should detect Linux Mint version and distro', function() {
				var info = koopaDeref(data.linux.mint);
				expect(info.os).to.have.property('family', 'Linux');
				expect(info.os).to.have.property('name', 'Gloria');
				expect(info.os).to.have.property('distro', 'Linux Mint');
				expect(info).to.have.property('linuxMint', true);
				expect(info).to.have.property('linux', true);
				expect(info).to.have.property('linuxMint7', true);
				expect(info).to.have.property('gloria', true);
			});
		});

		describe('Windows NT tests', function() {
			it('Should detect Windows 7', function() {
				var info = koopaDeref(data.windows.win7);
				expect(info.os).to.have.property('family', 'Windows');
				expect(info).to.have.property('windows', true);
				expect(info.os).to.have.property('name', 'Windows 7');
				expect(info).to.have.property('windows7', true);
			});

			it('Should detect Windows XP', function() {
				var info = koopaDeref(data.windows.winxp);
				expect(info.os).to.have.property('family', 'Windows');
				expect(info).to.have.property('windows', true);
				expect(info.os).to.have.property('name', 'Windows XP');
				expect(info).to.have.property('windowsXp', true);
			});

			it('Should detect Windows Vista', function() {
				var info = koopaDeref(data.windows.vista);
				expect(info.os).to.have.property('family', 'Windows');
				expect(info).to.have.property('windows', true);
				expect(info.os).to.have.property('name', 'Windows Vista');
				expect(info).to.have.property('windowsVista', true);
			});

			it('Should detect Windows 2000', function() {
				var info = koopaDeref(data.windows.win2k);
				expect(info.os).to.have.property('family', 'Windows');
				expect(info).to.have.property('windows', true);
				expect(info.os).to.have.property('name', 'Windows 2000');
				expect(info).to.have.property('windows2000', true);
			});

			it('Should detect Windows 8', function() {
				var info = koopaDeref(data.windows.win8);
				expect(info.os).to.have.property('family', 'Windows');
				expect(info).to.have.property('windows', true);
				expect(info.os).to.have.property('name', 'Windows 8');
				expect(info).to.have.property('windows8', true);
			});
		});

		describe('Mac OS X tests', function() {
			it('Should detect OS X version', function() {
				var info = koopaDeref(data.mac.osx10_5);
				expect(info).to.have.property('macintosh', true);
				expect(info.os).to.have.property('family', 'Macintosh');
				expect(info).to.have.property('macOsX', true);
				expect(info).to.have.property('macOsX10', true);
				expect(info).to.have.property('macOsX10_5', true);
			});

			it('Should detect OS X version with underscored version', function() {
				var info = koopaDeref(data.mac.osxUnderscores);
				expect(info).to.have.property('macintosh', true);
				expect(info.os).to.have.property('family', 'Macintosh');
				expect(info).to.have.property('macOsX', true);
				expect(info).to.have.property('macOsX10', true);
				expect(info).to.have.property('macOsX10_6_8', true);
			});

			it('Should compute codename', function() {
				var info = koopaDeref(data.mac.osx10_0);
				expect(info).to.have.property('cheetah', true);
				expect(info.os).to.have.property('name', 'Cheetah');

				info = koopaDeref(data.mac.osx10_1);
				expect(info).to.have.property('puma', true);
				expect(info.os).to.have.property('name', 'Puma');

				info = koopaDeref(data.mac.osx10_2);
				expect(info).to.have.property('jaguar', true);
				expect(info.os).to.have.property('name', 'Jaguar');

				info = koopaDeref(data.mac.osx10_3);
				expect(info).to.have.property('panther', true);
				expect(info.os).to.have.property('name', 'Panther');

				info = koopaDeref(data.mac.osx10_4);
				expect(info).to.have.property('tiger', true);
				expect(info.os).to.have.property('name', 'Tiger');

				info = koopaDeref(data.mac.osx10_5);
				expect(info).to.have.property('leopard', true);
				expect(info.os).to.have.property('name', 'Leopard');

				info = koopaDeref(data.mac.osx10_6);
				expect(info).to.have.property('snowLeopard', true);
				expect(info.os).to.have.property('name', 'Snow Leopard');

				info = koopaDeref(data.mac.osx10_7);
				expect(info).to.have.property('lion', true);
				expect(info.os).to.have.property('name', 'Lion');

				info = koopaDeref(data.mac.osx10_8);
				expect(info).to.have.property('mountainLion', true);
				expect(info.os).to.have.property('name', 'Mountain Lion');
			});
		});

		describe('Non-specific OS tests', function() {
			it('Should detect linux', function() {
				expect(koopaDeref(data.linux.noDistro)).to.have.property('linux', true);
			});
			it('Should detect windows', function() {
				expect(koopaDeref(data.windows.noDistro)).to.have.property('windows', true);
			});
			it('Should detect mac', function() {
				expect(koopaDeref(data.mac.noDistro)).to.have.property('macintosh', true);
			});
		});
	});
}());