
const LoginTest = function (browser) {
  browser
    .url(`${browser.launch_url}`)
    .waitForElementVisible('body', 1000)
    .setValue('input[type=text]', '')
    .click('button[name=btnLogin]')
    .pause(1000)
    .assert.containsText('h6', 'Bienvenu(e) Jean');
    if(this.Login) {
      browser.end();
    }
      
}

module.exports = {
  '@tags': ['loginError'],
  'Login' : LoginTest
};
