const LoginTest = require('./login')

module.exports = {
  'Login Application': LoginTest.Login,
  'Logout' :  function (browser) {    
        browser
        .click('button[name=btnLogout]')
        .pause(1000)
        .assert.containsText('h1', 'Connexion')
        .assert.urlEquals(`${browser.launch_url}`)
        .end();
  }
};
