var page = require('./page');
var mainPage = Object.create(page, {
	navigator: {
		get: function() {
			return element(by.css('#rubric-nav'));
		}
	},

	isMainPage: {
		value: function() {
			return this.navigator.isPresent();
		}
	}
});
module.exports = mainPage;