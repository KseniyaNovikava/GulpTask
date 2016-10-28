const assert = require('assert');
var page = require('./page');
var userPage = Object.create(page, {
	username: {
		get: function() {
			return element(by.css('div.input.data-login>div:nth-child(1)>div>strong'));
		}
	},
	email: {
		get: function() {
			return element(by.css('div.input.data-login>div:nth-child(2)>div>strong'));
		}
	},
	viewProfile: {
		get: function() {
			return element(by.css('a.aftr-dev-link'));
		}
	},
	checkUserLoginInfo: {
		value: function(login, email) {
			var EC = protractor.ExpectedConditions;
			_this = this;
			return browser.wait(EC.elementToBeClickable(_this.viewProfile), 8000).
			then(function() {
				return _this.username.getText();
			}).
			then(function(name) {
				return assert.equal(login, name, "! UserInfo username");
			}).
			then(function() {
				return _this.email.getText();
			}).
			then(function(mail) {
				return assert.equal(mail, email, "! UserInfo email");
			});
		}
	}


});
module.exports = userPage;