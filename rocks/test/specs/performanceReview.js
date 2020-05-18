var RocksPage = require('../../PageObjects/rocks.page');
const access= require('../../testdata/testdata.js')

describe("Weekly Report",  function() {


    before(function() {
        // runs before all tests in this file regardless where this line is defined.
        RocksPage.open();
        RocksPage.wholePage
        RocksPage.rocksLogin(access.performanceReviewCredential.Email, access.performanceReviewCredential.Password);
        expect(RocksPage.performanceReviewTile).toBeDisplayed();
    });

    it("Login Demo TestCase",  function(done){
        this.timeout(300000); // 5 minutes
        RocksPage.PerformanceReview()  
        
    });

    after(function() {
        // runs after all tests in this file
        browser.closeWindow()
    });
});
