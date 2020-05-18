var RocksPage = require('../../PageObjects/rocks.page');


describe("LeaveLab Demo Test", function() {

  before(function() {
    // runs before all tests in this file regardless where this line is defined.
    RocksPage.open();
    RocksPage.wholePage
    });

  it("ogin Demo TestCase", function() {

      RocksPage.AgencyPartnerSurvey()

    });

  after(function() {
      // runs after all tests in this file
      browser.closeWindow()
    });


});
