var LoginPage  = require('../pageObjects/loginPage');
var config = require('../config/test.config').config;
describe('Login Trello', () => {
    it('should to be possible to do login with valid credentials', () => {
        LoginPage.open();
        LoginPage.doLogin(config.valid_username, config.valid_password);
        LoginPage.checkHomeTrello(); 
    });

    it('Error Message for Invalid Password', () => {
        LoginPage.open();
        LoginPage.doLogin(config.valid_username, config.wrong_password);
        LoginPage.checkErrorMessage(); 
    });

    it('Error Message for Invalid Username', () => {
        LoginPage.open();
        LoginPage.doLogin(config.wrong_username, config.valid_password);
        LoginPage.checkErrorMessage(); 
    });
});