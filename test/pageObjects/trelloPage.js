module.exports = class TrelloPage {
    get path() { return 'https://trello.com/'; }
    
    open() {
        browser.reloadSession();
        browser.url(this.path);
    }
}