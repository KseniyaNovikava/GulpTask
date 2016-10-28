var page = require('./page');
var loginPage = Object.create(page, {
	username: {
		get: function() {
			return element(by.css('input[id="user_login"].input-xlarge'));
		}
	},
	password: {
		get: function() {
			return element(by.css('input[id="user_password"].input-xlarge'));
		}
	},
	submit: {
		get: function() {
			return element(by.css('div.input.action>input.btn.blue'));
		}

	},
	isLoginPage: {
		value: function() {
			return browser.getCurrentUrl().
			then(function(url) {
				return url.indexOf("login");
			});
		}
	},

	signIn: {
		value: function(login, pass) {
			var EC = protractor.ExpectedConditions;
			_this = this;
			return browser.wait(EC.elementToBeClickable(_this.submit), 8000).then(function() {
				_this.username.sendKeys(login);
			}).
			then(function() {
				return _this.password.sendKeys(pass);
			}).
			then(function() {
				return _this.submit.click();
			});
		}
	}

});
module.exports = loginPage;