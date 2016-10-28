const assert = require('assert');
var EC = protractor.ExpectedConditions;


module.exports = Object.create({}, {

    lentaBtn: { get: function() {return element(by.css('a[title="Лента"]'));  } },
    companyBtn: {  get: function() { return element(by.css('li>a[title="Компании"]')); }},
    salaryBtn: { get: function() { return element(by.css('a[title="Зарплаты"]')); } },
    jobsBtn: {   get: function() { return element(by.css('a[title="Вакансии"]'));} },
    calendarBtn: { get: function() { return element(by.css('a[title="Календарь"]'));}},
    user: { get: function() { return element(by.css('div.user-info>a:nth-child(1)')); } },
    signIn: {  get: function() { return element(by.css('a.a-sign-link'));} },

    go: {
        value: function(site) {
            browser.get(site);
        }
    },
    isTitleContains: {
        value: function(title) {
            var EC = protractor.ExpectedConditions;
            browser.wait(EC.titleContains(title), 5000);
        }


    },
    navigateToSignInPage: {
        value: function() {
            _this = this;
            return browser.wait(EC.elementToBeClickable(_this.signIn), 8000).then(function() {
                _this.signIn.click();
            });
        }
    },
    navigateToUserPage: {
        value: function() {
            _this = this;
            return browser.wait(EC.elementToBeClickable(_this.user), 8000).then(function() {
                _this.user.click();
            });
        }
    },
    navigateToCompaniesPage: {
        value: function() {
            _this = this;
            return browser.wait(EC.elementToBeClickable(_this.companyBtn), 8000).then(function() {
                _this.companyBtn.click();
            });

        }
    }


});