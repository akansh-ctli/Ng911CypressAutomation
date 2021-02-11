///<reference types="cypress" />

class PsapPage {

  validateLoginPage(){
    cy.wait(2000)
    cy.get('a[aria-label="Lumen"]').should('be.visible');
  }
  validatePsapCard(){
    cy.get(':nth-child(1) > .-center > .chi-stat__content').should('be.visible');
  }
  validatePsapCount(){
    cy.get(':nth-child(1) > .-center > .chi-stat__content > #content-div-regular > .chi-stat-metric > div.chi-stat-metric__value').should('be.visible');
  }
  validatePsapText(){
    cy.get(':nth-child(1) > .-center > .chi-stat__content > #content-div-regular > .chi-stat-metric > .chi-stat-metric__title').contains('PSAP');
  }

  validatePsapImpectedCount(){
    cy.get(':nth-child(1) > .-center > .chi-stat__content > #content-div-regular > div.chi-stat-submetric').should('be.visible');
  }
  validateMapTab() {
    cy.get('.menu-items > :nth-child(1) > .chi-card__tabs > .chi-tabs > .-active > a').should('be.visible').and('have.text', 'Map');
    return this
  }
  
  validateListTab() {
    cy.get('.menu-items > :nth-child(1) > .chi-card__tabs > .chi-tabs > :nth-child(2) > a').should('be.visible').and('have.text', 'List');
    return this
  }

  validateSearchBoxAtPsapTab() {
    cy.get('.menu-items > :nth-child(1) > .chi-card__tabs > .chi-tabs > :nth-child(2) > a').should('be.visible').click();
    cy.wait(2000)
    cy.get('#example__icon-right-aligned').should('be.visible');
    return this
  }

  validatePsapDataTableIsEnable() {
    cy.get('.menu-items > :nth-child(1) > .chi-card__tabs > .chi-tabs > :nth-child(2) > a').should('be.visible').click();
    cy.wait(2000)
    cy.get('table[data-v-6394997e]>tbody').should('be.visible');
    return this
  }

  verifyTableHeaderWithApiPSAP() {
    var mtoken = Cypress.env('mytoken');
    cy.request({
      method: "get",
      followRedirect: false,
      log: true,
      url:
        "https://api-dev1.centurylink.com/DataServices/v1/PublicSafety/ng911/refresh/PSAP",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + mtoken,
      },
      response: [],
    }).then((response) => {
      assert.equal(response.status, 200);
      //cy.log(response.body);
      expect(response.body).to.not.be.null;
      let psapsList = response.body.psaps;
      psapsList.forEach((item) => {
        expect(item).to.have.all.keys(
          "name",
          "id",
          "psapName",
          "status",
          "callsReceived",
          "callsMissed",
          "moSScore",
          "address",
          "circuits",
          "alerts"
        );
      });
    });
  }
  
  verifyPsapCardDetails() {
    var mtoken = Cypress.env('mytoken');
    cy.request({
      method: "get",
      followRedirect: false,
      log: true,
      url:
        "https://api-dev1.centurylink.com/DataServices/v1/PublicSafety/ng911/refresh/PSAP",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + mtoken,
      },
      response: [],
    }).then((response) => {
      assert.equal(response.status, 200);
      cy.log(response.body);
      expect(response.body).to.not.be.null;
      let psapCount = response.body.psapCount;
      let impactedCount = response.body.psapImpactedCount + ' Impacted';
      cy.get(':nth-child(1) > .-center > .chi-stat__content > #content-div-regular > .chi-stat-metric > .chi-stat-metric__title').contains('PSAP');
      cy.log("PSAP count-", psapCount);
      cy.get(':nth-child(1) > .-center > .chi-stat__content > #content-div-regular > .chi-stat-metric > div.chi-stat-metric__value').contains(psapCount);
      cy.log("PSAP impacted-", impactedCount);
      //cy.get(':nth-child(1) > .-center > .chi-stat__content > #content-div-regular > div.chi-stat-submetric').contains(impactedCount);
    });
  }

  verifyPsapDataTableHeader_UI() {
    cy.get('.menu-items > :nth-child(1) > .chi-card__tabs > .chi-tabs > :nth-child(2) > a').should('be.visible').click();
    const expPsapDataHeaders = ['PSAP', 'Status', 'PSAP ID','Calls Received','Calls Missed','MOS Score'];
    cy.wrap(expPsapDataHeaders).each(($el, index, $list) => {
      index=index+1
      const loc="#list-section > div > div > div > div > div.chi-card__content > section > div > table > thead > tr > th:nth-child("+index+") > div"
      cy.get(loc).contains($el);
         })          
      }
    
      verifyPsapDrawerDisplay() {
        cy.get('.menu-items > :nth-child(1) > .chi-card__tabs > .chi-tabs > :nth-child(2) > a').should('be.visible').click();
        cy.wait(2000)
        cy.get('#list-section > div > div > div > div > div.chi-card__content > section > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > a').should('be.visible').click();
        cy.get('#PSAPDrawerTab').should('be.visible')
      }

      verifyOverviewTabDisplayOnPsapDrawer() {
        cy.get('.menu-items > :nth-child(1) > .chi-card__tabs > .chi-tabs > :nth-child(2) > a').should('be.visible').click();
        cy.wait(2000)
        cy.get('#list-section > div > div > div > div > div.chi-card__content > section > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > a').should('be.visible').click();
        cy.get('#list-section > div > div > div > div > div.chi-card__content').should('be.visible')
        cy.get('#overviewTab').should('be.visible')
      }
      verifyAlarmsTabDisplayOnPsapDrawer() {
        cy.get('.menu-items > :nth-child(1) > .chi-card__tabs > .chi-tabs > :nth-child(2) > a').should('be.visible').click();
        cy.wait(2000)
        cy.get('#list-section > div > div > div > div > div.chi-card__content > section > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > a').should('be.visible').click();
        cy.get('#list-section > div > div > div > div > div.chi-card__content').should('be.visible')
        cy.get('#PSAPDrawerTab > li:nth-child(2) > a').should('be.visible')
      }

      verifyTableHeaderOnOverviewTabOnPsapDrawer() {
        cy.get('.menu-items > :nth-child(1) > .chi-card__tabs > .chi-tabs > :nth-child(2) > a').should('be.visible').click();
        cy.wait(2000)
        cy.get('#list-section > div > div > div > div > div.chi-card__content > section > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > a').should('be.visible').click();
        cy.get('#list-section > div > div > div > div > div.chi-card__content').should('be.visible')
        cy.get('#overviewTab').should('be.visible').click()

        const expOverviewTabHeaders = ['PSAP Connections', 'Device', 'Avg Utilization (%)','Packet Loss (%)','Jitter (ms)'];
        cy.wrap(expOverviewTabHeaders).each(($el, index, $list) => {
          index=index+1
          const loc="#overveiwTabPannel > table > thead > tr > th:nth-child("+index+")"
          cy.get(loc).contains($el);
             }) 
      }

      verifyTableHeaderOnAlarmsTabOnPsapDrawer() {
        cy.get('.menu-items > :nth-child(1) > .chi-card__tabs > .chi-tabs > :nth-child(2) > a').should('be.visible').click();
        cy.wait(2000)
        cy.get('#list-section > div > div > div > div > div.chi-card__content > section > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > a').should('be.visible').click();
        cy.get('#list-section > div > div > div > div > div.chi-card__content').should('be.visible')
        cy.get('#PSAPDrawerTab > li:nth-child(2) > a').should('be.visible').click()

        const expAlarmsTabHeaders = ['Time (UTC)', 'Device', 'Severity','Description'];
        cy.wrap(expAlarmsTabHeaders).each(($el, index, $list) => {
          index=index+1
          const loc="#alarmsTabPannel > table > thead > tr > th:nth-child("+index+")"
          cy.get(loc).contains($el);
             }) 
      }
      
      verifyPsapNameDisplayOnPsapDrawer(){
        cy.get('.menu-items > :nth-child(1) > .chi-card__tabs > .chi-tabs > :nth-child(2) > a').should('be.visible').click();
        cy.wait(2000)
        cy.get('#list-section > div > div > div > div > div.chi-card__content > section > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > a').should('be.visible').click();
        cy.get('#list-section > div > div > div > div > div.chi-card__content').should('be.visible')
        cy.get('#bottomDrawer > div.chi-drawer__header > span > span.psap-name').should('be.visible')
      }
      verifyPsapIdDisplayOnPsapDrawer(){
        cy.get('.menu-items > :nth-child(1) > .chi-card__tabs > .chi-tabs > :nth-child(2) > a').should('be.visible').click();
        cy.wait(2000)
        cy.get('#list-section > div > div > div > div > div.chi-card__content > section > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > a').should('be.visible').click();
        cy.get('#list-section > div > div > div > div > div.chi-card__content').should('be.visible')
        cy.get('#bottomDrawer > div.chi-drawer__header > span > span.psap-id').should('be.visible')
      }
      verifyPsapAddressDisplayOnPsapDrawer(){
        cy.get('.menu-items > :nth-child(1) > .chi-card__tabs > .chi-tabs > :nth-child(2) > a').should('be.visible').click();
        cy.wait(2000)
        cy.get('#list-section > div > div > div > div > div.chi-card__content > section > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > a').should('be.visible').click();
        cy.get('#list-section > div > div > div > div > div.chi-card__content').should('be.visible')
        cy.get('#bottomDrawer > div.chi-drawer__header > span > span.psap-address').should('be.visible')
      }

      verifyCloseButtonDisplayOnPsapDrawer(){
        cy.get('.menu-items > :nth-child(1) > .chi-card__tabs > .chi-tabs > :nth-child(2) > a').should('be.visible').click();
        cy.wait(2000)
        cy.get('#list-section > div > div > div > div > div.chi-card__content > section > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > a').should('be.visible').click();
        cy.get('#list-section > div > div > div > div > div.chi-card__content').should('be.visible')
        cy.get('#bottomDrawer > div.chi-drawer__header > button').should('be.visible')
      }
      

    getPsapIdsFromServiceMap(){
    //cy.get('div.chi-popover:nth-child(6) > div:nth-child(1) > div:nth-child(1)').click({force: true})
    cy.get('div.chi-popover',{timeout:60000}).each(($el, index, $list) => {
        index=index+2;
      cy.log(index +'--  '+ $el.text())
       if($el.text().includes('1 ')){
        cy.wait(2000)
        
        //const loc="div.chi-popover:nth-child("+ index +") > div:nth-child(1) > div:nth-child(1) > span:nth-child(1) > span:nth-child(2)"
        //cy.log(loc);
        const loc="#googleMapRef > div > div > div:nth-child(1) > div:nth-child(3) > div > div:nth-child(4) > div:nth-child("+ index +")"
        //cy.wait(20000)
       //cy.get(loc).click('center',{force: true})
       
        //cy.wait(2000)
        //cy.get('button.chi-button:nth-child(3) > div:nth-child(1) > i',{timeout:60000}).click()
         //$el.click({force: true});
         cy.log('clicked')
       }
     
    })
  }
  

  getAppLogOutTime(mTimeOut) {
    var flag = true;
    var time = 0;
    var maxTimeout = mTimeOut;
    cy.log('maxTimeOut--' + maxTimeout);

    while (flag == true) {
      if (cy.get('.-active > a > .-ml--0').should('be.visible')) {
        flag = true
        if (time == maxTimeout) {
          break
        }
      }
      else {
        flag = false
      }
      cy.log('total login time is-- ' + time + ' min');
      cy.writeFile('cypress/fixtures/ng911LogOutTime.txt', 'total login time is-- ' + time + ' min');
      cy.wait(60000)
      time = time + 1
    }
  }

  
  
  
}
export default PsapPage

