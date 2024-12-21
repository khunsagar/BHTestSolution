/// <reference types="cypress" />
import * as homePageActions from "../pages/home-page";
import * as findCenterPageActions from "../pages/findcenteroption-page";

let data;

describe("Verify find location functionality", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.clearCookies();
    cy.visit("/");
    cy.acceptCookiesIfVisible();
    //cy.waitForTaboolaNetworkCall();
  });
  it("should verify correct details display when user find center ",  () => {
    cy.fixture("findoption").then((urlString) => {
      data = urlString;
      homePageActions.clickOnFindCenterOptionIcon();
      findCenterPageActions.verifyURLContainsChildCareLocator(data.urlString);
      findCenterPageActions.enterAddress(data.cityAddress);
      findCenterPageActions.verifySearchCenterResultsCount();
      findCenterPageActions.clickOnFirstCenterFromSearchResults();
      findCenterPageActions.verifyCenterDetails();
      
    });
  });
});
