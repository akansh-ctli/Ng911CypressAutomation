import { Given, Then, And, When } from "cypress-cucumber-preprocessor/steps";
import PsapPage from '../PageObjects/PsapPage.js'

const psapPage = new PsapPage()


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

  Then('I verify List and Map tab on PSAP page', () => {
    cy.wait(8000)
    psapPage.validateListTab()
    cy.wait(1000)
    psapPage.validateMapTab()
    //psapPage.getPsapIdsFromServiceMap()
    cy.log('PSAP page validation successful');
  });
  
  And('I verify Table Header on PSAP page With API', () => {
    cy.wait(2000)
    psapPage.verifyTableHeaderWithApiPSAP()
    cy.log('API validation for table header on PSAP page successful');
   });

  Then('I verify card details on PSAP page With API', () => {
    cy.wait(3000)
    psapPage.verifyPsapCardDetails()
    cy.log('PSAP card details validated successful');
 });

And('I verify Table Data on PSAP page With API', () => {
  cy.wait(3000)
  psapPage.verifyPsapDataTable_UI()
  psapPage.verifyPsapDataTable_API()
  cy.log('PSAP card details validated successful');
});

Then('I Verify if we are able to login on NG911 dashboard', () => {
  psapPage.validateLoginPage()
});

Then('I verify if Lumen logo should enable at login page for NG911', () => {
  psapPage.validateLoginPage()
});
Then('I verify PSAP card shuld display on dashboard', () => {
  cy.wait(3000)
  psapPage.validatePsapCard()
});

Then('I verify PSAP count should be display on PSAP card', () => {
  cy.wait(3000)
  psapPage.validatePsapCount()
});

Then('I verify PSAP text should be display on PSAP card', () => {
  cy.wait(3000)
  psapPage.validatePsapText()
});

Then('I verify impacted count should be display on PSAP card', () => {
  cy.wait(3000)
  psapPage.validatePsapImpectedCount()
}); 

Then('I verify Map Tab should be display under PSAP card', () => {
  cy.wait(3000)
  psapPage.validateMapTab()
});

Then('I verify if List Tab should be display under PSAP card', () => {
  cy.wait(3000)
  psapPage.validateListTab()
});

Then('I verify search box should be display under List Tab on PSAP card', () => {
  cy.wait(3000)
  psapPage.validateSearchBoxAtPsapTab()
});  

Then('I verify if PSAP Data table should be display under List Tab on PSAP card', () => {
  cy.wait(3000)
  psapPage.validatePsapDataTableIsEnable()
});

Then('I verify if PSAP, Status,PSAP ID,Calls Received,Calls Missed and MOS Score should be display as table header under List Tab on PSAP card', () => {
  cy.wait(3000)
  psapPage.verifyTableHeaderWithApiPSAP()
});

Then('I verify if PSAP count on UI should be same as API response', () => {
  cy.wait(3000)
  psapPage.verifyPsapCardDetails()
});

Then('I verify if text PSAP on UI should be same as API response', () => {
  cy.wait(3000)
  psapPage.verifyPsapCardDetails()
});

Then('I verify if impacted count on UI should be same as API response', () => {
  cy.wait(3000)
  psapPage.verifyPsapCardDetails()
});

Then('I verify if all PSAP table header under List Tab on PSAP card should be same as API response', () => {
  cy.wait(3000)
  psapPage.verifyTableHeaderWithApiPSAP()
});