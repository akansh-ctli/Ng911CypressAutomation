import { Given, Then, And, When } from "cypress-cucumber-preprocessor/steps";
import AlarmsPage from '../PageObjects/AlarmsPage.js'


const alarmsPage= new AlarmsPage()


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

 Then('I verify if ALARM card get displayed on NG911 dashboard', () => {
   cy.wait(1000)
   alarmsPage.verifyAlarmsCardIsDisplay()
});
Then('I verify if ALARM card displayes total alarm count', () => {
   cy.wait(1000)
   alarmsPage.verifyAlarmsCountIsDisplay()
});

Then('I verify if search box is displayed', () => {
   cy.wait(1000)
   alarmsPage.verifyAndClickAlarmsTab()
   alarmsPage.verifySearchBoxIsDisplay()
});
Then('I verify in search box the search magnifier icon is displayed', () => {
   cy.wait(1000)
   alarmsPage.verifyAndClickAlarmsTab()
   alarmsPage.verifySearchMagnifierIconDisplay()
});
 
Then('I verify alarms table get displayed in alarms page', () => {
   cy.wait(1000)
   alarmsPage.verifyAndClickAlarmsTab()
   alarmsPage.verifyAlarmsDataTableDisplay()
});

Then('I verify columns Time,Segment,Device,Severity and Description get displayed', () => {
   cy.wait(1000)
   alarmsPage.verifyAndClickAlarmsTab()
   alarmsPage.verifyTableHeaderWithApi()
});

Then('I verify if ALARM word get displayed in Alarms card', () => {
   cy.wait(1000)
   alarmsPage.verifyAndClickAlarmsTab()
   alarmsPage.verifyTextAlarmsDisplay()
});

Then('I verify if ALARM count on UI should be same as API response', () => {
   cy.wait(1000)
   alarmsPage.verifyAndClickAlarmsTab()
   alarmsPage.verifyAlarmsCardDetails()
});

Then('I verify if impacted count should not get displayed in Alarms card', () => {
   cy.wait(1000)
   alarmsPage.verifyAndClickAlarmsTab()
   alarmsPage.verifyAlarmsImpactedCountIsNotDisplay()
});


Then('I verify if text ALARMS on UI should be same as API response', () => {
   cy.wait(1000)
   alarmsPage.verifyAndClickAlarmsTab()
   alarmsPage.verifyAlarmsCardDetails()
});

Then('I verify if all ALARMS table header on ALARMS card should be same as API response', () => {
   cy.wait(1000)
   alarmsPage.verifyAndClickAlarmsTab()
   alarmsPage.verifyTableHeaderWithApi()
});

 Then('I verify data table present on ALARMS page', () => {
      cy.wait(1000)
      alarmsPage.verifyAndClickAlarmsTab()
      cy.wait(3000)
      alarmsPage.verifyDataTablePresentAlarms()
      cy.log('ALARMS page validation successful');
   });

 And('I verify Table Header on ALARMS page With API', () => {
      cy.wait(2000)
      alarmsPage.verifyTableHeaderWithApi()
      cy.log('API validation for table header on Alarms page successful');
   });

   Then('I verify card details on ALARMS page With API', () => {
    cy.wait(3000)
    alarmsPage.verifyAlarmsCardDetails()
    cy.log('ALARMS card details validated successful');
 });