import { Given, Then, And, When } from "cypress-cucumber-preprocessor/steps";
import NgcsPage from '../PageObjects/NgcsPage.js'

const ngcsPage = new NgcsPage()


Given('I open NG911 login page', () => {
  cy.loginNg911();
  cy.log('login successful');

});

When('I will be on home page', () => {
  cy.get('body');
  cy.wait(8000)
  cy.get('a[aria-label="Lumen"]').should('be.visible');
  cy.log("LUMEN logo is visible");
  cy.log('home page Loaded successful');
});

Then('I verify if NGCS card should be display on NG911 dashboard', () => {
  cy.wait(1000)
  ngcsPage.validateNgcsCardIsEnable()
});

Then('I verify if NGCS count should be display on NGCS card', () => {
  cy.wait(1000)
  ngcsPage.validateNgcsCountIsEnable()
});

Then('I verify if text NGCS should be display on NGCS card', () => {
  cy.wait(1000)
  ngcsPage.validateNgcsTextIsDisplay()
});

Then('I verify if impacted count should be display on NGCS card', () => {
  cy.wait(1000)
  ngcsPage.validateNgcsImpactedCountIsDisplay()
});

Then('I verify if NGCS Core Tab should be display under NGCS card', () => {
  cy.wait(1000)
  ngcsPage.verifyAndClickNgcsTab()
  ngcsPage.verifyNgcsCore()
});

Then('I verify if Component Status Tab should be display under NGCS card', () => {
  cy.wait(1000)
  ngcsPage.verifyAndClickNgcsTab()
  ngcsPage.verifyNgcsComponentStatus()
});

Then('I verify if Core Functions Tab should be display under NGCS', () => {
  cy.wait(1000)
  ngcsPage.verifyAndClickNgcsTab()
  ngcsPage.verifyNgcsCoreFunctions()
}); 

Then('I verify if search box should be display under NGCS card', () => {
  cy.wait(1000)
  ngcsPage.verifyAndClickNgcsTab()
  ngcsPage.validateNgcsSearchBoxIsDisplay()
}); 

Then('I verify if NGCS Data table should be display under NGCS card', () => {
  cy.wait(1000)
  ngcsPage.verifyAndClickNgcsTab()
  ngcsPage.validateNgcsDataTableIsDisplay()
});

Then('I verify if NGCS count on UI should be same as API response', () => {
  cy.wait(1000)
  ngcsPage.verifyNgcsCardDetails()
});

Then('I verify if text NGCS on UI should be same as API response', () => {
  cy.wait(1000)
  ngcsPage.verifyNgcsCardDetails()
});

Then('I verify if impacted count on UI should be same as API response for NGCS', () => {
  cy.wait(1000)
  ngcsPage.verifyNgcsCardDetails()
});

Then('I verify if all NGCS table header under List Tab on NGCS card should be same as API response', () => {
  cy.wait(1000)
  ngcsPage.verifyAndClickNgcsTab()
  ngcsPage.verifyTableHeaderWithApiNGCS()
});

Then('I verify NgcsCore,ComponentStatus and NgcsCoreDevices tab on NGCS page', () => {
  cy.wait(1000)
  ngcsPage.verifyAndClickNgcsTab()
  cy.wait(1000)
  ngcsPage.verifyNgcsCore()
  cy.wait(1000)
  ngcsPage.verifyNgcsCoreFunctions()
  ngcsPage.verifyNgcsComponentStatus()
  cy.log('NGCS page validation successful');
});

And('I verify Table Header on NGCS page With API', () => {
  cy.wait(2000)
  ngcsPage.verifyTableHeaderWithApiNGCS()
  cy.log('API validation for table header on NGCS page successful');
});

Then('I verify card details on NGCS page With API', () => {
  cy.wait(3000)
  ngcsPage.verifyNgcsCardDetails()
  cy.log('NGCS card details validated successful');
});


