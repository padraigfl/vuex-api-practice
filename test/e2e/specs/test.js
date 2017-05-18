// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.pokelink')
      //.assert.containsText('.pokelink', 'Next Page')//checking that previous page doesn't load
      .assert.elementPresent('.pokelist')
      .waitForElementVisible('.pokelist-entry', 5000)
      .assert.elementCount('.pokelist-entry', 20)
      .assert.containsText('.pokelist-entry', 'bulbasaur')
      .assert.containsText('.page-count', 'Page 1 of 41')
      .end()
  },
  'single entry': function (browser){
    const devServer = browser.globals.devServerURL+'/pokemon/1'

    console.log(devServer)

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .waitForElementPresent(".pokemon-sprite", 10000)//i.e. wait for data to load from actions
      .assert.elementCount('.pokemon-type', 2)
      .assert.containsText('.pokemon-heading', 'bulbasaur')
      .end()
  },
  'move from list to single entry': function (browser){
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .waitForElementVisible('.pokelist-entry', 5000)
      .click('.pokelist-entry')//
      .waitForElementPresent(".pokemon-sprite", 10000)
      .assert.containsText('.pokemon-heading', 'bulbasaur')//the first option should be bulbasaur as that's the first result
      .end()
  },
  'next page': function (browser) {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .waitForElementVisible('#pokelink-next', 5000)
      //.assert.containsText('.pokelink', 'Next Page')//checking that previous page doesn't load, it does in the test though?
      .click('#pokelink-next')//move to page 2
      .pause(10000)//wait as this seems erratic in the test, doubtlessly some issue with how I call the new page
      .assert.containsText('.pokelist-entry', 'spearow')
      .end()
  }
}
