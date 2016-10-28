const assert = require('assert');
var page = require('./page');
var companiesPage = Object.create(page, {
	search: {
		get: function() {
			return element(by.css('div.dataTables_filter>label>input'));
		}
	},
	companiesTable: {
		get: function() {
			return element(by.css('table[id="tablesort"]'));
		}
	},
	epam: {
		get: function() {
			return element(by.css('td[data="EPAM"]>a'));
		}
	},

	findCompany: {
		value: function(name) {
			_this = this;
			var EC = protractor.ExpectedConditions;
			return browser.wait(EC.elementToBeClickable(_this.search), 8000).
			then(function() {
				return _this.search.sendKeys(name)
			}).
			then(function() {
				return _this.epam.click();
			});
		}
	},
	isCompaniesTablePresent: {
		value: function() {
			return this.companiesTable.isPresent();
		}
	}

});
module.exports = companiesPage;