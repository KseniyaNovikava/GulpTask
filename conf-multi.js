//protractor.conf.js
exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  getPageTimeout: 60000,
  allScriptsTimeout: 500000,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  multiCapabilities: [{
    'browserName': 'chrome',
    specs: ['features/authorization.feature'],
  }, {
    'browserName': 'firefox',
    specs: ['features/companies.feature']

  }],

  baseURL: 'http://localhost:8080/',

  cucumberOpts: {
    require: 'features/step_definitions/steps.js',
    tags: false,
    format: 'pretty',
    profile: false,
    'no-source': true
  }
};