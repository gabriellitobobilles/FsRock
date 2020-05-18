var Page = require('./page')
const assert = require("assert");
const access= require('../testdata/testdata.js')

var step4 = [`#radio-skill_and_profiency > div:nth-child(4) > label`, `#radio-skills_and_knowledge > div:nth-child(5) > label`, 
    `#radio-reliability > div:nth-child(3) > label`,`#radio-self_accountable > div:nth-child(3) > label`,`#radio-methods_and_procedures > div:nth-child(2) > label`,
`#radio-communicate_effective > div:nth-child(1) > label`];

var step5 = [`#radio-work_cooperatively > div:nth-child(3) > label`, `#radio-positive_attitude > div:nth-child(1) > label`,
    `#radio-good_judgment > div:nth-child(1) > label`,`#radio-perform_expect > div:nth-child(3) > label`];
var LoginPage = Object.create(Page, {
    /**
     * define elements
     */
    username: { get: function () { return browser.$(`*[name="email"]`); } },
    password: { get: function () { return browser.$(`*[name="password"]`); } },
    loginbtn:     { get: function () { return browser.$(`[class="btn btn-success btn-block"]`); } },
    clientSelect: { get: function () { return browser.$(`[id="select-client_id"]`); } },
    weeklyReportTile:    { get: function () { return browser.$(`//span[contains(text(),'Weekly Floor Report')]`); } },
    performanceReviewTile:    { get: function () { return browser.$(`//span[contains(text(),'Performance Evaluation Review')]`); } },
    wholePage: { get: function () { return browser.maximizeWindow(); } },
    startNewWeeklyReport: { get: function () { return browser.$(`//button[contains(text(),'Start New Report')]`); } },
    scrollElement: { get: function () { return browser.$(`.fs-back-btn`); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, 'login');
    } },


    CompanyNameGenerator: { value: function () {
        const values = Object.keys(access.companyName)
        const randomValue = values[parseInt(Math.random() * values.length)]
        return randomValue
      } },

    weeklyFloorReport: { value:function() {

        //** clicking weekly report tile */
        // $(`//span[contains(text(),'Weekly Floor Report')]`).click()
        //** choose a client */
        this.clientSelect.waitForClickable({ timeout: 270000 });
        this.clientSelect.selectByVisibleText(`${this.CompanyNameGenerator()}`)
        $(`[class="btn button btn-success"]`).click()
        $(`[class="btn button btn-success"]`).waitForDisplayed({ timeout: 270000 });
        //** Step 2 */
        $(`//span[contains(text(),'Yes')]`).click();
        let Step2 = $(`*[id="textarea-2"]`).isExisting()
        assert.strictEqual(Step2, false)
        // expect($(`*[id="textarea-2"]`)).toBeDisplayed();
        browser.pause(2000);
        $(`//span[contains(text(),'No')]`).click();
        expect($(`*[id="textarea-2"]`)).toBeDisplayed();
        $(`*[id="textarea-2"]`).click();
        $(`*[id="textarea-2"]`).setValue(access.textAreaString); 
        $(`*[id="textarea-3"]`).click();
        $(`*[id="textarea-3"]`).setValue(access.textAreaString); 
        $(`*[id="textarea-4"]`).click();
        $(`*[id="textarea-4"]`).setValue(access.textAreaString); 
        $(`*[id="textarea-5"]`).click();
        $(`*[id="textarea-5"]`).setValue(access.textAreaString); 
        $(`//button[contains(text(),'Next')]`).click();
        //** Step 3 */
        $$(`//span[contains(text(),'Yes')]`)[0].click();
        let Step3a = $(`*[id="textarea-7"]`).isExisting()
        assert.strictEqual(Step3a, false)
        browser.pause(200);
        $$(`//span[contains(text(),'No')]`)[0].click();
        expect($(`*[id="textarea-7"]`)).toBeDisplayed();
        $(`*[id="textarea-7"]`).click();
        $(`*[id="textarea-7"]`).setValue(access.textAreaString); 
        $(`*[id="textarea-8"]`).click();
        $(`*[id="textarea-8"]`).setValue(access.textAreaString); 
        $(`*[id="textarea-9"]`).click();
        $(`*[id="textarea-9"]`).setValue(access.textAreaString); 
        $(`*[id="textarea-10"]`).click();
        $(`*[id="textarea-10"]`).setValue(access.textAreaString); 
        $$(`//span[contains(text(),'No')]`)[1].click();
        let Step3b = $(`*[id="textarea-12"]`).isExisting()
        assert.strictEqual(Step3b, false)
        $$(`//span[contains(text(),'Yes')]`)[1].click();
        expect($(`*[id="textarea-12"]`)).toBeDisplayed();
        $(`*[id="textarea-12"]`).click();
        $(`*[id="textarea-12"]`).setValue(access.textAreaString);
        $(`*[id="textarea-13"]`).click();
        $(`*[id="textarea-13"]`).setValue(access.textAreaString);
        $(`*[id="textarea-14"]`).click();
        $(`*[id="textarea-14"]`).setValue(access.textAreaString);
        $(`//button[contains(text(),'Next')]`).click();

        //** Step 4 */
        browser.pause(2000);
        this.scrollIntoView()
        $(`//span[contains(text(),'Yes')]`).click();
        let Step4a = $(`*[id="textarea-16"]`).isExisting()
        assert.strictEqual(Step4a, false)
        browser.pause(200);
        // $(`//span[contains(text(),'No')]`).scrollIntoView();
        $(`//span[contains(text(),'No')]`).click();
        expect($(`*[id="textarea-16"]`)).toBeDisplayed();
        // $(`*[id="textarea-16"]`).scrollIntoView();
        $(`*[id="textarea-16"]`).click();
        $(`*[id="textarea-16"]`).setValue(access.textAreaString);
        $(`*[id="textarea-17"]`).click();
        $(`*[id="textarea-17"]`).setValue(access.textAreaString);
        $(`//span[contains(text(),'Ahead')]`).click();
        let Step4b = $(`*[id="textarea-19"]`).isExisting()
        assert.strictEqual(Step4b, false);
        browser.pause(200);
        // $(`//span[contains(text(),'Behind')]`).scrollIntoView();
        $(`//span[contains(text(),'Behind')]`).click();
        expect($(`*[id="textarea-19"]`)).toBeDisplayed();
        // $(`*[id="textarea-19"]`).scrollIntoView();
        $(`*[id="textarea-19"]`).click();
        $(`*[id="textarea-19"]`).setValue(access.textAreaString);
        $(`*[id="textarea-20"]`).click();
        $(`*[id="textarea-20"]`).setValue(access.textAreaString);
        $(`*[id="textarea-21"]`).click();
        $(`*[id="textarea-21"]`).setValue(access.textAreaString);
        $(`*[id="textarea-22"]`).click();
        $(`*[id="textarea-22"]`).setValue(access.textAreaString);
        $(`//button[contains(text(),'Next')]`).click();

        //** Finish */
        browser.pause(2000);
        this.scrollIntoView()
        $$(`//span[contains(text(),'No')]`)[0].click();
        let Step5a = $(`*[id="textarea-28"]`).isExisting()
        assert.strictEqual(Step5a, true)
        browser.pause(2000);
        // $$(`//span[contains(text(),'Yes')]`)[0].scrollIntoView();
        $$(`//span[contains(text(),'Yes')]`)[0].click();
        expect($(`*[id="textarea-24"]`)).toBeDisplayed();
        $(`*[id="textarea-24"]`).click();
        $(`*[id="textarea-24"]`).setValue(access.textAreaString);
        $(`*[id="textarea-25"]`).click();
        $(`*[id="textarea-25"]`).setValue(access.textAreaString);
        $(`*[id="textarea-26"]`).click();
        $(`*[id="textarea-26"]`).setValue(access.textAreaString);
        $(`*[id="textarea-27"]`).click();
        $(`*[id="textarea-27"]`).setValue(access.textAreaString);
        browser.pause(2000);

        // $(`//button[contains(text(),'Prev')]`).scrollIntoView();
        browser.pause(2000);
        // $$(`//span[contains(text(),'No')]`)[1].scrollIntoView();
        $$(`//span[contains(text(),'No')]`)[1].click();
        let Step5b = $(`*[id="textarea-30"]`).isExisting()
        assert.strictEqual(Step5b, false)
        browser.pause(2000);
        // $$(`//span[contains(text(),'Yes')]`)[1].scrollIntoView();
        $$(`//span[contains(text(),'Yes')]`)[1].click();
        expect($(`*[id="textarea-30"]`)).toBeDisplayed();
        // $(`*[id="textarea-30"]`).scrollIntoView();
        $(`*[id="textarea-30"]`).click();
        $(`*[id="textarea-30"]`).setValue(access.textAreaString);
        $(`*[id="textarea-31"]`).click();
        $(`*[id="textarea-31"]`).setValue(access.textAreaString);
        $(`*[id="textarea-32"]`).click();
        $(`*[id="textarea-32"]`).setValue(access.textAreaString);
        $(`*[id="textarea-33"]`).click();
        $(`*[id="textarea-33"]`).setValue(access.textAreaString);
        $(`//button[contains(text(),' Submit ')]`).click();
        $(`//button[contains(text(),'Start New Report')]`).waitForClickable({ timeout: 270000 });
        expect($(`//button[contains(text(),'Start New Report')]`)).toBeDisplayed();
        browser.pause(2000);
    } },

    AgencyPartnerSurvey : { value: function(){

        browser.url(`https://develop.fullscale.rocks/agency-partner-survey`);
        // browser.maximizeWindow();
        $(`*[id="text-company"]`).click();
        $(`*[id="text-company"]`).setValue(Page.generateName());
        $(`*[id="text-street"]`).click();
        $(`*[id="text-street"]`).setValue(`15208 West 119th Street`);
        $(`*[id="text-city"]`).click();
        $(`*[id="text-city"]`).setValue(`Olathe City`);
        $(`*[id="text-state"]`).click();
        $(`*[id="text-state"]`).setValue(`Kansas`);
        $(`*[id="text-zip"]`).click();
        $(`*[id="text-zip"]`).setValue(`66062-5604`);
        $(`*[id="text-contact_no"]`).click();
        $(`*[id="text-contact_no"]`).setValue(`999999999`);
        $(`*[id="text-title"]`).click();
        $(`*[id="text-title"]`).setValue(`CTO`);
        $(`*[id="text-name"]`).click();
        $(`*[id="text-name"]`).setValue(`Matthew Wright`);
        $(`*[type="email"]`).click();
        $(`*[type="email"]`).setValue(`gbobilles+34@fullscale.io`);
        $(`//*[@id="radio-primary_contact_is_signatory"]//child::div[2]/label/span`).click();
        expect($(`*[id="text-signatory_fullname"]`)).toBeDisplayed()
        expect($(`*[placeholder="Enter e-mail address"]`)).toBeDisplayed()
        // browser.pause(1000)
        $(`//*[@id="radio-primary_contact_is_signatory"]//child::div[1]/label/span`).click();
        $(`[class="btn button btn-success"]`).click();
        // browser.pause(1000)
        $$(`[class="custom-control custom-control-inline custom-checkbox"]`)[0].click();
        $$(`[class="custom-control custom-control-inline custom-checkbox"]`)[3].click();
        // browser.pause(1000)
        expect($(`*[id="tags-basic"]`)).toBeDisplayed()
        expect($(`*[id="tags-basic"]`)).toBeDisplayed()
        // $(`*[id="text-employee_spoken"]`).click();
        // $(`*[id="text-employee_spoken"]`).setValue(`No, I did know someone in fullscale`);
        $(`//*[@id="radio-referred_by_someone"]//child::div[1]/label/span`).click()
        // browser.pause(1000)
        expect($(`*[id="text-referred_by"]`)).toBeDisplayed()
        $(`*[id="text-referred_by"]`).click()
        $(`*[id="text-referred_by"]`).setValue(`Gerald Wilkilson`)
         browser.pause(1000)
        $$(`[class="btn button btn-success"]`)[1].click()
         browser.pause(2000)
        console.log($(`[class="col-md-12 text-center thank-text text-secondary display-inline"]`).getText() == `Thank you for answering the survey.
        We will review and someone at Full Scale will reach out to you soon.`)
        // assert.strictEqual(browser.getTitle(), "Sample page - lambdatest.com");
        
    }},

    PerformanceReview : { value: function(){



        //** Performance Evaluation Review */
        this.performanceReviewTile.click()

        //** Step 1 */

        $(`[class="carousel-outer-container"]`).waitForClickable({ timeout: 270000 });
        $$(`//input[starts-with(@id,'__BVID__')]`)[0].click();
        browser.pause(1000)
        $$(`//input[starts-with(@id,'__BVID__')]`)[0].setValue(Page.dateRanage(6));
        browser.pause(1000)
        $$(`//input[starts-with(@id,'__BVID__')]`)[1].click();
        browser.pause(1000)
        $$(`//input[starts-with(@id,'__BVID__')]`)[1].setValue(Page.dateRanage(0));
        Page.ramNumber(4)
        browser.pause(1000)
        $$(`[class="VueCarousel-slide"]`)[Page.ramNumber(4)].click();
        browser.pause(1000)
        $(`//button[contains(text(),'Next')]`).click();

        //** Step 2 */

        for(let x=0; x<=1; x++){
            browser.pause(1000)
            $$(`[class="is-empty is-editor-empty"]`)[0].click();
            $$(`[class="is-empty is-editor-empty"]`)[0].setValue(access.textAreaString);
            browser.pause(500)
        }

        $(`//button[contains(text(),'Next')]`).click();

        //** Step 3 */
        $(`//button[contains(text(),'Next')]`).click();

        //** Step 4 */
        for(let x=0; x<=5; x++){
            browser.pause(1000)
            $$(`[class="is-empty is-editor-empty"]`)[0].click();
            $$(`[class="is-empty is-editor-empty"]`)[0].setValue(access.textAreaString);
            browser.pause(1000)
            $(`${step4[x]}`).click();
            browser.pause(500)
            }
        $(`//button[contains(text(),'Next')]`).click();

        //** Step 5 */
        this.scrollIntoView()
        for(let x=0; x<=3; x++){
            browser.pause(1000)
            $$(`[class="is-empty is-editor-empty"]`)[0].click();
            $$(`[class="is-empty is-editor-empty"]`)[0].setValue(access.textAreaString);
            browser.pause(1000)
            $(`${step5[x]}`).click();
            browser.pause(500)
            }
        $(`//button[contains(text(),'Next')]`).click();

        // ** Last step*/
        for(let x=0; x<=2; x++){
            browser.pause(1000)
            $$(`[class="is-empty is-editor-empty"]`)[0].click();
            $$(`[class="is-empty is-editor-empty"]`)[0].setValue(access.textAreaString);
            browser.pause(500)
            }
        $(`//button[contains(text(),' Submit ')]`).click();
        $(`p.col-md-12.text-center.my-4.h5.display-inline`).waitForDisplayed({ timeout: 270000 });
        expect($(`p.col-md-12.text-center.my-4.h5.display-inline`)).toHaveText(`Thank you for your evaluation.`);


    }},

    scrollIntoView: { value: function(){
        Page.scrollUP.call(this, this.scrollElement)
    }},

    rocksLogin: { value: function(username , password){
        this.username.waitForDisplayed({ timeout: 270000 });
        this.username.click();
        this.username.setValue(username);
        this.password.click();
        this.password.setValue(password);
        this.loginbtn.click();
    }},


});

module.exports = LoginPage;