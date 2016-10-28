const assert = require('assert');
var page = require('./page');
var companyPage = Object.create(page, {
	email: {
		get: function() {
			return element(by.css('a.email'));
		}
	},
	site: {
		get: function() {
			return element(by.css('a.url'));
		}
	},

	checkContacts: {
		value: function(mail, phone, site) {
			_this = this;
			return _this.email.getText().
			then(function(companyMail) {
				return assert.equal(companyMail, mail, "! Contacts: mail");
			}).
			then(function() {
				return _this.site.getText()
			}).
			then(function(companySite) {
				return assert.equal(site, companySite, "! Contacts: site");
			});
		}
	}

});
module.exports = companyPage;