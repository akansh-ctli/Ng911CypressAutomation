import { Given, Then, And, When } from "cypress-cucumber-preprocessor/steps";
import IngressPage from '../PageObjects/IngressPage.js'

const ingressPage= new IngressPage()

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

 
 Then('I verify if INGRESS card get displayed on NG911 dashboard', () => {
     cy.wait(1000)
     ingressPage.verifyIngressCardIsDisplay()
  });

  
 Then('I verify if INGRESS card displayes total ingress count', () => {
   cy.wait(1000)
   ingressPage.verifyIngressCountIsDisplay()
});

Then('I verify if INGRESS word get displayed in ingress card', () => {
   cy.wait(1000)
   ingressPage.verifyIngressTextIsDisplay()
});

Then('I verify tab Gateways displayed under ingress card', () => {
   cy.wait(1000)
   ingressPage.verifyAndClickIngressTab() 
   ingressPage.verifyIngressGatewaysTab()
});

Then('I verify search box get displayed under tab Gateways and SBCs', () => {
   cy.wait(1000)
   ingressPage.verifyAndClickIngressTab() 
   ingressPage.verifyIngressSearchBoxIsDisplay()
});

Then('I verify INGRESS table get displayed under tab Gateways', () => {
   cy.wait(1000)
   ingressPage.verifyAndClickIngressTab() 
   ingressPage.verifyIngressDataTableIsDisplay()
});

Then('I verify column names Ingress,status,Trunks Available,Trunks Active,calls Received,Calls Delivered and link utilization in tab Gateways', () => {
   cy.wait(1000)
   ingressPage.verifyAndClickIngressTab() 
   ingressPage.verifyTableHeaderWithApiIngress()
});

Then('I verify INGRESS table get displayed under tab SBCs', () => {
   cy.wait(1000)
   ingressPage.verifyAndClickIngressTab() 
   ingressPage.verifyIngressDataTableSbcIsDisplay()
});

Then('I verify colums Ingress SBC,Status,Calls Received,Calls Delivered and Link utilization(%)', () => {
   cy.wait(1000)
   ingressPage.verifyAndClickIngressTab() 
   ingressPage.verifyTableHeaderWithApiIngress()
});

Then('I verify if INGRESS impacted count displayed in UI is same in API response', () => {
   cy.wait(1000)
   ingressPage.verifyIngressCardDetails()
});


Then('I verify if all INGRESS table headers displayed under Gateways tab should be same as API response', () => {
   cy.wait(1000)
   ingressPage.verifyAndClickIngressTab() 
   ingressPage.verifyTableHeaderWithApiIngress()
});

 Then('I verify Gateways, SBCs Tabs and data table present on INGRESS page', () => {
    cy.wait(1000)
      ingressPage.verifyAndClickIngressTab() 
      cy.wait(3000)
      ingressPage.verifyDataTablePresentIngress()
      ingressPage.verifyIngressGatewaysTab()
      ingressPage.verifyIngressSBCs()
   });
 Then('I verify card details on INGRESS page With API', () => {
      cy.wait(3000)
      ingressPage.verifyIngressCardDetails()
      cy.log('INGRESS card details validated successful');
   });

 And('I verify Table Header on INGRESS page With API', () => {
    cy.wait(2000)
    ingressPage.verifyTableHeaderWithApiIngress()
    cy.log('API validation for table header on ingress page successful');
   });
