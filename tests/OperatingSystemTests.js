var koopa = require('../src/koopa');
var data = require('./data');

module.exports = function Operating_system_tests() {
	return [
		function Linux_distro_tests() {
			return [
				function Should_detect_ubuntu_version_and_distro() {
					var info = koopa(data.linux.ubuntu);
					Assert.that(info, Has.key('ubuntu'));
					Assert.that(info, Has.property('ubuntu').TRUE());

					Assert.that(info, Has.key('linux'));
					Assert.that(info, Has.property('linux').TRUE());

					Assert.that(info, Has.key('ubuntu9_04'));
					Assert.that(info, Has.property('ubuntu9_04').TRUE());

					Assert.that(info, Has.key('jaunty'));
					Assert.that(info, Has.property('jaunty').TRUE());
				},

				function Should_detect_kubuntu_version_and_distro() {
					var info = koopa(data.linux.kubuntu);
					Assert.that(info, Has.key('kubuntu'));
					Assert.that(info, Has.property('kubuntu').TRUE());

					Assert.that(info, Has.key('linux'));
					Assert.that(info, Has.property('linux').TRUE());

					Assert.that(info, Has.key('kubuntu9_04'));
					Assert.that(info, Has.property('kubuntu9_04').TRUE());

					Assert.that(info, Has.key('jaunty'));
					Assert.that(info, Has.property('jaunty').TRUE());
				},

				function Should_detect_xubuntu_version_and_distro() {
					var info = koopa(data.linux.xubuntu);
					Assert.that(info, Has.key('xubuntu'));
					Assert.that(info, Has.property('xubuntu').TRUE());

					Assert.that(info, Has.key('linux'));
					Assert.that(info, Has.property('linux').TRUE());

					Assert.that(info, Has.key('xubuntu9_04'));
					Assert.that(info, Has.property('xubuntu9_04').TRUE());

					Assert.that(info, Has.key('jaunty'));
					Assert.that(info, Has.property('jaunty').TRUE());
				},

				function Should_detect_freebsd() {
					var info = koopa(data.linux.freeBsd);
					Assert.that(info, Has.key('freebsd'));
					Assert.that(info, Has.property('freebsd').TRUE());

					Assert.that(info, Has.key('linux'));
					Assert.that(info, Has.property('linux').TRUE());
				},

				function Should_detect_debian_version_and_distro() {
					var info = koopa(data.linux.debian);
					Assert.that(info, Has.key('debian'));
					Assert.that(info, Has.property('debian').TRUE());

					Assert.that(info, Has.key('linux'));
					Assert.that(info, Has.property('linux').TRUE());

					Assert.that(info, Has.key('debian3'));
					Assert.that(info, Has.property('debian3').TRUE());

					Assert.that(info, Has.key('debian3_0_rc2_2'));
					Assert.that(info, Has.property('debian3_0_rc2_2').TRUE());
				},

				function Should_detect_fedora_version_and_distro() {
					var info = koopa(data.linux.fedora);
					Assert.that(info, Has.key('fedora'));
					Assert.that(info, Has.property('fedora').TRUE());

					Assert.that(info, Has.key('linux'));
					Assert.that(info, Has.property('linux').TRUE());

					Assert.that(info, Has.key('fedora3'));
					Assert.that(info, Has.property('fedora3').TRUE());

					Assert.that(info, Has.key('fedora3_5_1_fc11'));
					Assert.that(info, Has.property('fedora3_5_1_fc11').TRUE());
				},

				function Should_detect_suse_version_and_distro() {
					var info = koopa(data.linux.suse);
					Assert.that(info, Has.key('suse'));
					Assert.that(info, Has.property('suse').TRUE());

					Assert.that(info, Has.key('linux'));
					Assert.that(info, Has.property('linux').TRUE());

					Assert.that(info, Has.key('suse3'));
					Assert.that(info, Has.property('suse3').TRUE());

					Assert.that(info, Has.key('suse3_0_1_2'));
					Assert.that(info, Has.property('suse3_0_1_2').TRUE());
				},

				function Should_detect_gentoo() {
					var info = koopa(data.linux.gentoo);
					Assert.that(info, Has.key('gentoo'));
					Assert.that(info, Has.property('gentoo').TRUE());

					Assert.that(info, Has.key('linux'));
					Assert.that(info, Has.property('linux').TRUE());
				},

				function Should_detect_centos_version_and_distro() {
					var info = koopa(data.linux.centos);
					Assert.that(info, Has.key('centos'));
					Assert.that(info, Has.property('centos').TRUE());

					Assert.that(info, Has.key('linux'));
					Assert.that(info, Has.property('linux').TRUE());

					Assert.that(info, Has.key('centos3'));
					Assert.that(info, Has.property('centos3').TRUE());

					Assert.that(info, Has.key('centos3_6_3_el5_centos'));
					Assert.that(info, Has.property('centos3_6_3_el5_centos').TRUE());
				},

				function Should_detect_red_hat_version_and_distro() {
					var info = koopa(data.linux.redHat);
					Assert.that(info, Has.key('redHat'));
					Assert.that(info, Has.property('redHat').TRUE());

					Assert.that(info, Has.key('linux'));
					Assert.that(info, Has.property('linux').TRUE());

					Assert.that(info, Has.key('redHat3'));
					Assert.that(info, Has.property('redHat3').TRUE());

					Assert.that(info, Has.key('redHat3_6_2_el5'));
					Assert.that(info, Has.property('redHat3_6_2_el5').TRUE());
				},

				function Should_detect_linux_mint_version_and_distro() {
					var info = koopa(data.linux.mint);
					Assert.that(info, Has.key('linuxMint'));
					Assert.that(info, Has.property('linuxMint').TRUE());

					Assert.that(info, Has.key('linux'));
					Assert.that(info, Has.property('linux').TRUE());

					Assert.that(info, Has.key('linuxMint7'));
					Assert.that(info, Has.property('linuxMint7').TRUE());

					Assert.that(info, Has.key('gloria'));
					Assert.that(info, Has.property('gloria').TRUE());
				}
			];
		},

		function Windows_nt_tests() {
			return [
				function Should_detect_windows_7() {
					var info = koopa(data.windows.win7);
					Assert.that(info, Has.key('windows'));
					Assert.that(info, Has.property('windows').TRUE());

					Assert.that(info, Has.key('windows7'));
					Assert.that(info, Has.property('windows7').TRUE());
				},

				function Should_detect_windows_xp() {
					var info = koopa(data.windows.winxp);
					Assert.that(info, Has.key('windows'));
					Assert.that(info, Has.property('windows').TRUE());

					Assert.that(info, Has.key('windowsXp'));
					Assert.that(info, Has.property('windowsXp').TRUE());
				},

				function Should_detect_windows_2000() {
					var info = koopa(data.windows.win2k);
					Assert.that(info, Has.key('windows'));
					Assert.that(info, Has.property('windows').TRUE());

					Assert.that(info, Has.key('windows2000'));
					Assert.that(info, Has.property('windows2000').TRUE());
				},

				function Should_detect_windows_vista() {
					var info = koopa(data.windows.vista);
					Assert.that(info, Has.key('windows'));
					Assert.that(info, Has.property('windows').TRUE());

					Assert.that(info, Has.key('windowsVista'));
					Assert.that(info, Has.property('windowsVista').TRUE());
				}
			];
		},

		function Mac_os_x_tests() {
			return [
				function Should_detect_os_x_version() {
					var info = koopa(data.mac.osx10_5);
					Assert.that(info, Has.key('macintosh'));
					Assert.that(info, Has.property('macintosh').TRUE());

					Assert.that(info, Has.key('macOsX'));
					Assert.that(info, Has.property('macOsX').TRUE());

					Assert.that(info, Has.key('macOsX10'));
					Assert.that(info, Has.property('macOsX10').TRUE());

					Assert.that(info, Has.key('macOsX10_5'));
					Assert.that(info, Has.property('macOsX10_5').TRUE());
				},

				function Should_detect_os_x_version_with_underscored_version() {
					var info = koopa(data.mac.osxUnderscores);
					Assert.that(info, Has.key('macintosh'));
					Assert.that(info, Has.property('macintosh').TRUE());

					Assert.that(info, Has.key('macOsX'));
					Assert.that(info, Has.property('macOsX').TRUE());

					Assert.that(info, Has.key('macOsX10'));
					Assert.that(info, Has.property('macOsX10').TRUE());

					Assert.that(info, Has.key('macOsX10_6_8'));
					Assert.that(info, Has.property('macOsX10_6_8').TRUE());
				},

				function Should_compute_codename() {
					Assert.that(koopa(data.mac.osx10_0), Has.property('cheetah').TRUE());
					Assert.that(koopa(data.mac.osx10_1), Has.property('puma').TRUE());
					Assert.that(koopa(data.mac.osx10_2), Has.property('jaguar').TRUE());
					Assert.that(koopa(data.mac.osx10_3), Has.property('panther').TRUE());
					Assert.that(koopa(data.mac.osx10_4), Has.property('tiger').TRUE());
					Assert.that(koopa(data.mac.osx10_5), Has.property('leopard').TRUE());
					Assert.that(koopa(data.mac.osx10_6), Has.property('snowLeopard').TRUE());
					Assert.that(koopa(data.mac.osx10_7), Has.property('lion').TRUE());
				}
			];
		}
	];

};