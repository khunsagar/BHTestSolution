import homePageSearchLocators from "../locators/homePage.locator";

export function clickOnSearchIconFromHomePage() {
  return cy.get(homePageSearchLocators.searchIcon).click();
}

export function verifySearchFieldVisibilityOnPage() {
  cy.get(
    homePageSearchLocators.searchForm + homePageSearchLocators.searchBox
  ).should("be.visible");
}

export function typeSearchText(searchText) {
  cy.get(homePageSearchLocators.searchForm + homePageSearchLocators.searchBox)
    .click()
    .type(searchText);
}

export function clickOnSearchButton() {
  cy.get(
    homePageSearchLocators.searchForm + homePageSearchLocators.searchButton
  ).click();
}

export function clickOnFindCenterOptionIcon() {
  cy.get ('.nav-top>.nav-primary-wrap>.nav-list-wrap>.nav-item.displayed-desktop>a[href].track_cta_click')
    .should('be.visible')
    .click()
}
