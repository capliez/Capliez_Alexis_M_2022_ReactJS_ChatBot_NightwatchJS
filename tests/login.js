
const LoginTest = function (browser) {
  browser
    .url('http://localhost:3000/')
    .waitForElementVisible('body', 1000)
    .setValue('input[type=text]', 'Jean')
    .click('button[name=btnLogin]')
    .pause(1000)
    .assert.containsText('h6', 'Bienvenu(e) Jean');
    if(this.Login) {
      browser.end();
    }
      
}

module.exports = {
  'Login' : LoginTest
};
