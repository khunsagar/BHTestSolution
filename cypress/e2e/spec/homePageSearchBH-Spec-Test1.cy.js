/// <reference types="cypress" />
import * as homePageActions from "../pages/home-page";
import * as searchPageActions from "../pages/search-result-page";

let searchData;

describe("Verify search functionality", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.clearCookies();
    cy.visit("/");
    cy.acceptCookiesIfVisible();
    //cy.waitForTaboolaNetworkCall();
  });
  it("should  verify first search result is exact match with what typed into search by the user ",  () => {
    cy.fixture("search").then((searchText) => {
      searchData = searchText;
      homePageActions.clickOnSearchIconFromHomePage();
      homePageActions.verifySearchFieldVisibilityOnPage();
      homePageActions.typeSearchText(searchData.searchText);
      homePageActions.clickOnSearchButton();
      searchPageActions.verifyFirstSearchResult(searchData.searchText);
    });
  });
});
