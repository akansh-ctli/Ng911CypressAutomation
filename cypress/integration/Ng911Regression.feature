Feature: Validate Regression scenarios for NG911

  @TEST_FFP-27836 @regression
  Scenario: TC1_HomePage_Verify if we are able to login on NG911 dashboard
    Given I open NG911 login page
    When I will be on home page
    Then I Verify if we are able to login on NG911 dashboard

  @TEST_FFP-27837 @regression
  Scenario: TC2_HomePage_Verify if Lumen logo should enable at login page for NG911 
    Given I open NG911 login page
    When I will be on home page
    Then I verify if Lumen logo should enable at login page for NG911

  @TEST_FFP-27695 @regression
  Scenario: TC1_PSAP_Verify if PSAP card should be display on NG911 dashboard 
    Given I open NG911 login page
    When I will be on home page
    Then I verify PSAP card shuld display on dashboard

  @TEST_FFP-27696 @regression
  Scenario: TC2_PSAP_Verify if PSAP count should be display on PSAP card
    Given I open NG911 login page
    When I will be on home page
    Then I verify PSAP count should be display on PSAP card

  @TEST_FFP-27697 @regression
  Scenario: TC3_PSAP_Verify if "PSAP" should be display on PSAP card
    Given I open NG911 login page
    When I will be on home page
    Then I verify PSAP text should be display on PSAP card

  @TEST_FFP-27698 @regression
  Scenario: TC4_PSAP_Verify if impacted count should be display on PSAP card
    Given I open NG911 login page
    When I will be on home page
    Then I verify impacted count should be display on PSAP card

  @TEST_FFP-27699 @regression
  Scenario: TC5_PSAP_Verify if Map Tab should be display under PSAP card
    Given I open NG911 login page
    When I will be on home page
    Then I verify Map Tab should be display under PSAP card

  @TEST_FFP-27700 @regression
  Scenario: TC6_PSAP_Verify if List Tab should be display under PSAP card
    Given I open NG911 login page
    When I will be on home page
    Then I verify if List Tab should be display under PSAP card

  @TEST_FFP-27701 @regression
  Scenario: TC7_PSAP_Verify if search box should be display under List Tab on PSAP card
    Given I open NG911 login page
    When I will be on home page
    Then I verify search box should be display under List Tab on PSAP card

  @TEST_FFP-27702 @regression
  Scenario: TC8_PSAP_Verify if PSAP Data table should be display under List Tab on PSAP card
    Given I open NG911 login page
    When I will be on home page
    Then I verify if PSAP Data table should be display under List Tab on PSAP card

  @TEST_FFP-27703 @regression
  Scenario: TC9_PSAP_Verify if PSAP, Status,PSAP ID,Calls Received,Calls Missed and MOS Score should be display as table header under List Tab on PSAP card
    Given I open NG911 login page
    When I will be on home page
    Then I verify if PSAP, Status,PSAP ID,Calls Received,Calls Missed and MOS Score should be display as table header under List Tab on PSAP card

  @TEST_FFP-27704 @regression
  Scenario: TC10_PSAP:Verify if PSAP count on UI should be same as API response
    Given I open NG911 login page
    When I will be on home page
    Then I verify if PSAP count on UI should be same as API response

  @TEST_FFP-27705 @regression
  Scenario: TC11_PSAP_Verify if text "PSAP" on UI should be same as API response
    Given I open NG911 login page
    When I will be on home page
    Then I verify if text PSAP on UI should be same as API response

  @TEST_FFP-27706 @regression
  Scenario: TC12_PSAP_Verify if impacted count on UI should be same as API response
    Given I open NG911 login page
    When I will be on home page
    Then I verify if impacted count on UI should be same as API response

    
  @TEST_FFP-27707 @regression
  Scenario: TC13_PSAP_Verify if all PSAP table header under List Tab on PSAP card should be same as API response
    Given I open NG911 login page
    When I will be on home page
    Then I verify if all PSAP table header under List Tab on PSAP card should be same as API response

  @TEST_FFP-27708 @regression
  Scenario: TC14_NGCS_Verify if NGCS card should be display on NG911 dashboard 
    Given I open NG911 login page
    When I will be on home page
    Then I verify if NGCS card should be display on NG911 dashboard

  @TEST_FFP-27709 @regression
  Scenario: TC15_NGCS_Verify if NGCS count should be display on NGCS card
    Given I open NG911 login page
    When I will be on home page
    Then I verify if NGCS count should be display on NGCS card

  @TEST_FFP-27710 @regression
  Scenario: TC16_NGCS_Verify if txt "NGCS" should be display on NGCS card
    Given I open NG911 login page
    When I will be on home page
    Then I verify if text NGCS should be display on NGCS card
   
  @TEST_FFP-27717 @regression
  Scenario: TC17_NGCS_Verify if impacted count should be display on NGCS card
    Given I open NG911 login page
    When I will be on home page
    Then I verify if impacted count should be display on NGCS card 

  @TEST_FFP-27718 @regression
  Scenario: TC18_NGCS_Verify if NGCS Core Tab should be display under NGCS card
    Given I open NG911 login page
    When I will be on home page
    Then I verify if NGCS Core Tab should be display under NGCS card

  @TEST_FFP-27719 @regression
  Scenario: TC19_NGCS_Verify if Component Status Tab should be display under NGCS card
    Given I open NG911 login page
    When I will be on home page
    Then I verify if Component Status Tab should be display under NGCS card
 
  @TEST_FFP-27720 @regression
  Scenario: TC20_NGCS_Verify if Core Functions Tab should be display under NGCS 
    Given I open NG911 login page
    When I will be on home page
    Then I verify if Core Functions Tab should be display under NGCS

  @TEST_FFP-27721 @regression
  Scenario: TC21_NGCS_Verify if search box should be display under NGCS card
    Given I open NG911 login page
    When I will be on home page
    Then I verify if search box should be display under NGCS card

  @TEST_FFP-27722 @regression
  Scenario: TC22_NGCS_Verify if NGCS Data table should be display under NGCS card
    Given I open NG911 login page
    When I will be on home page
    Then I verify if NGCS Data table should be display under NGCS card 

  @TEST_FFP-27726 @regression
  Scenario: TC26_NGCS_Verify if NGCS count on UI should be same as API response
    Given I open NG911 login page
    When I will be on home page
    Then I verify if NGCS count on UI should be same as API response

  @TEST_FFP-27727 @regression
  Scenario: TC27_NGCS_Verify if text "NGCS" on UI should be same as API response
    Given I open NG911 login page
    When I will be on home page
    Then I verify if text NGCS on UI should be same as API response

  @TEST_FFP-27728 @regression
  Scenario: TC28_NGCS_Verify if impacted count on UI should be same as API response for NGCS
    Given I open NG911 login page
    When I will be on home page
    Then I verify if impacted count on UI should be same as API response for NGCS

  @TEST_FFP-27729 
  Scenario: TC29_NGCS_Verify if all NGCS table header under List Tab on NGCS card should be same as API response
    Given I open NG911 login page
    When I will be on home page
    Then I verify if all NGCS table header under List Tab on NGCS card should be same as API response

  @TEST_FFP-27743 @regression
  Scenario: TC1_INGRESS_Verify if INGRESS card get displayed on NG911 dashboard
    Given I open NG911 login page
    When I will be on home page
    Then I verify if INGRESS card get displayed on NG911 dashboard

  @TEST_FFP-27744 @regression
  Scenario: TC2_INGRESS_Verify if INGRESS card displayes total ingress count
    Given I open NG911 login page
    When I will be on home page
    Then I verify if INGRESS card displayes total ingress count 

  @TEST_FFP-27745 @regression
  Scenario: TC3_INGRESS_Verify tab Gateways get displayed under ingress card
    Given I open NG911 login page
    When I will be on home page
    Then I verify tab Gateways displayed under ingress card

  @TEST_FFP-27746 @regression
  Scenario: TC4_INGRESS_Verify search box get displayed under tab Gateways and SBCs
    Given I open NG911 login page
    When I will be on home page
    Then I verify search box get displayed under tab Gateways and SBCs

  @TEST_FFP-27747 @regression
  Scenario: TC5_INGRESS_verify INGRESS table get displayed under tab Gateways
    Given I open NG911 login page
    When I will be on home page
    Then I verify INGRESS table get displayed under tab Gateways

  @TEST_FFP-27748 @regression
  Scenario: TC6_INGRESS_Verify column names Ingress,status,Trunks Available,Trunks Active,calls Received,Calls Delivered and link utilization in tab Gateways
    Given I open NG911 login page
    When I will be on home page
    Then I verify column names Ingress,status,Trunks Available,Trunks Active,calls Received,Calls Delivered and link utilization in tab Gateways

 @TEST_FFP-27749 @regression
  Scenario: TC7_INGRESS_Verify INGRESS table get displayed under tab SBCs
    Given I open NG911 login page
    When I will be on home page
    Then I verify INGRESS table get displayed under tab SBCs

  @TEST_FFP-27750 
  Scenario: TC8_INGRESS_Verify colums Ingress SBC,Status,Calls Received,Calls Delivered and Link utilization(%)
    Given I open NG911 login page
    When I will be on home page
    Then I verify colums Ingress SBC,Status,Calls Received,Calls Delivered and Link utilization(%)

  @TEST_FFP-27832 @regression
  Scenario: TC9_INGRESS_Verify if INGRESS word get displayed in ingress card
    Given I open NG911 login page
    When I will be on home page
    Then I verify if INGRESS word get displayed in ingress card

  @TEST_FFP-27833 @regression
  Scenario: TC10_INGRESS_Verify if INGRESS impacted count displayed in UI is same in API response
    Given I open NG911 login page
    When I will be on home page
    Then I verify if INGRESS impacted count displayed in UI is same in API response

  @TEST_FFP-27834 @regression
  Scenario: TC11_INGRESS_Verify if all INGRESS table headers displayed under Gateways tab should be same as API response
    Given I open NG911 login page
    When I will be on home page
    Then I verify if all INGRESS table headers displayed under Gateways tab should be same as API response
 
  @TEST_FFP-27737 @regression
  Scenario: TC1_ALARMS_Verify if ALARM card get displayed on NG911 dashboard
    Given I open NG911 login page
    When I will be on home page
    Then I verify if ALARM card get displayed on NG911 dashboard  

  @TEST_FFP-27738 @regression
  Scenario: TC2_ALARMS_Verify if ALARM card displayes total alarm count
    Given I open NG911 login page
    When I will be on home page
    Then I verify if ALARM card displayes total alarm count

  @TEST_FFP-27739 @regression
  Scenario: TC3_ALARMS_Verify if search box is displayed
    Given I open NG911 login page
    When I will be on home page
    Then I verify if search box is displayed

  @TEST_FFP-27740 @regression
  Scenario: TC4_ALARMS_Verify in search box the search magnifier icon is displayed
    Given I open NG911 login page
    When I will be on home page
    Then I verify in search box the search magnifier icon is displayed

  @TEST_FFP-27741 @regression
  Scenario: TC5_ALARMS_Verify alarms table get displayed in alarms page
    Given I open NG911 login page
    When I will be on home page
    Then I verify alarms table get displayed in alarms page

  @TEST_FFP-27742 
  Scenario: TC6_ALARMS_Verify columns Time,Segment,Device,Severity and Description get displayed
    Given I open NG911 login page
    When I will be on home page
    Then I verify columns Time,Segment,Device,Severity and Description get displayed

  @TEST_FFP-27827 @regression
  Scenario: TC7_ALARMS_Verify if ALARM word get displayed in Alarms card
    Given I open NG911 login page
    When I will be on home page
    Then I verify if ALARM word get displayed in Alarms card

  @TEST_FFP-27829 @regression
  Scenario: TC9_ALARMS_Verify if ALARM count on UI should be same as API response
    Given I open NG911 login page
    When I will be on home page
    Then I verify if ALARM count on UI should be same as API response 
    
  @TEST_FFP-27830 @regression
  Scenario: TC10_ALARMS_Verify if text "ALARMS" on UI should be same as API response
    Given I open NG911 login page
    When I will be on home page
    Then I verify if text ALARMS on UI should be same as API response

  @TEST_FFP-27831 
  Scenario: TC11_ALARMS_Verify if all ALARMS table header on ALARMS card should be same as API response
    Given I open NG911 login page
    When I will be on home page
    Then I verify if all ALARMS table header on ALARMS card should be same as API response 