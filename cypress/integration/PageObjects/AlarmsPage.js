///<reference types="cypress" />

class AlarmsPage {

  verifyAlarmsCardIsDisplay() {
    cy.get(':nth-child(4) > .-center > .chi-stat__content').should('be.visible');
  }

  verifyAlarmsCountIsDisplay() {
    cy.get(':nth-child(4) > .-center > .chi-stat__content > #content-div-regular > .chi-stat-metric > div.chi-stat-metric__value').should('be.visible');
  }
  verifySearchBoxIsDisplay(){
    cy.get('#example__icon-left-aligned').should('be.visible');
  }

  verifySearchMagnifierIconDisplay(){
    cy.get('#list-section > div > div > div > div > div.chi-form__item.-px--2.-mt--2 > div > i').should('be.visible');
  }

  verifyAlarmsDataTableDisplay(){
    cy.get('#list-section > div > div > div > div > div.chi-card__content > section').should('be.visible');
  }

  verifyTextAlarmsDisplay(){
    cy.get(':nth-child(4) > .-center > .chi-stat__content > #content-div-regular > .chi-stat-metric > .chi-stat-metric__title').contains('ALARMS');
  }

  verifyTextAlarmsDisplay(){
    cy.get(':nth-child(4) > .-center > .chi-stat__content > #content-div-regular > .chi-stat-metric > .chi-stat-metric__title').contains('ALARMS');
  }


  verifyAndClickAlarmsTab() {
    cy.get('div.chi-col:nth-child(4) > div:nth-child(1) > div:nth-child(1)').should('be.visible').click();
    return this
  }

  verifyDataTablePresentAlarms() {
    cy.get('.-fixed--header').should('be.visible');
    return this
  }

  verifyTableHeaderWithApi() {
    var mtoken = Cypress.env('mytoken');
    cy.request({
      method: "get",
      followRedirect: false,
      log: true,
      url:
        "https://api-dev1.centurylink.com/DataServices/v1/PublicSafety/ng911/refresh/ALARMS",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + mtoken,
      },
      response: [],
    }).then((response) => {
      assert.equal(response.status, 200);
      cy.log(response.body);
      expect(response.body).to.not.be.null;
      let alarmLists = response.body.alarmLists;
      alarmLists.forEach((item) => {
        expect(item).to.have.all.keys( 
          "alarmTimestamp",
          "segment",
          "device",
          "type",
          "metric"      
        );
      });
    });
  }

  verifyAlarmsCardDetails() {
    var mtoken = Cypress.env('mytoken');
    cy.request({
      method: "get",
      followRedirect: false,
      log: true,
      url:
        "https://api-dev1.centurylink.com/DataServices/v1/PublicSafety/ng911/refresh/ALARMS",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + mtoken,
      },
      response: [],
    }).then((response) => {
      assert.equal(response.status, 200);
      //cy.log(response.body);
      expect(response.body).to.not.be.null;
      let alarmsCount = response.body.alarmCount;
      cy.get(':nth-child(4) > .-center > .chi-stat__content > #content-div-regular > .chi-stat-metric > .chi-stat-metric__title').contains('ALARMS');
      cy.log("ALARMS count-", alarmsCount);
      cy.get(':nth-child(4) > .-center > .chi-stat__content > #content-div-regular > .chi-stat-metric > div.chi-stat-metric__value').contains(alarmsCount);

    });
  }


}

export default AlarmsPage