const LoginTest = require('./login')

module.exports = {
  'Login Application': LoginTest.Login,
  'Add Message' :  function (browser) {    
        browser
        .setValue('input[name=btnAddMessage]', '--commands')
        .click('button[name=btnSendMessage]')
        .pause(1000)
        .getText("div.message > div > div p", function(result){
          this.assert.equal(result.value, 'Les commandes disponibles : Bots, Salut, Bye, Bonjour, Météo')
        })
        .end();
  }
};
