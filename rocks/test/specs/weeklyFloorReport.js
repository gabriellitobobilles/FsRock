var RocksPage = require('../../PageObjects/rocks.page');
const access= require('../../testdata/testdata.js')


describe('Weekly Report', function () {

    before(function() {
        // runs before all tests in this file regardless where this line is defined.
        RocksPage.open();
        RocksPage.wholePage
        RocksPage.rocksLogin(access.weeklyFloorReportCredential.Email, access.weeklyFloorReportCredential.Password);
        expect(RocksPage.weeklyReportTile).toBeDisplayed();
    });

    it('Weekly Floor Report', function (done) {
        this.timeout(300000); // 5 minutes
        RocksPage.weeklyReportTile.click();
        RocksPage.weeklyFloorReport()

    });

    it('Start New Weekly Floor Report', function (done) {
        this.timeout(300000); // 5 minutes
        RocksPage.startNewWeeklyReport.click()
        RocksPage.weeklyFloorReport()

    });

    after(function() {
        // runs after all tests in this file
        browser.closeWindow()
        // browser.deleteSession()
    });


});