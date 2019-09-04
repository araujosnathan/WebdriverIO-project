var TrelloPage = require('./trelloPage');

class LoginPage extends TrelloPage {

    get loginLink() { return $('[href="/login"]'); }
    get username() { return $('#user'); }
    get password() { return $('#password'); }
    get loginButton() { return $('#login'); }
    get home() { return $('._1q-xxtNvcdFBca'); }
    get errorMessage() { return $('.error-message'); }
  
    open() {
        super.open();
    }

    doLogin(username, password) {
        this.loginLink.click();
        this.username.click();
        this.username.setValue(username);
        this.password.click();
        this.password.setValue(password);
        this.loginButton.click();
    }

    checkHomeTrello(){
        this.home.waitForExist(10000);
    }

    checkErrorMessage(){
        this.errorMessage.waitForExist(10000);
    }

}

module.exports = new LoginPage();