module.exports = {
	firefox: {
		threePartVersion: 'Mozilla/5.0 (X11; Linux i686; rv:7.0.1) Gecko/20100101 Firefox/7.0.1',
		windows: 'Mozilla/5.0 (Windows NT 6.1; rv:6.0) Gecko/20110814 Firefox/6.0',
		linux: 'Mozilla/5.0 (X11; Linux i686; rv:7.0.1) Gecko/20100101 Firefox/7.0.1'
	},

	util: {
		assertOs: function(info, name) {
			Assert.that(info, Has.key(name));
			Assert.that(info, Has.property(name).TRUE());
		}
	}
};