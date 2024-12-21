import homePageSearchLocators from "../locators/homePage.locator";

export function verifyFirstSearchResult(expectedText) {
    cy.get(homePageSearchLocators.firstSearchResult, { timeout: 4000 }).should(
      "be.visible"
    )
    .should(
      "have.text",
      expectedText
    );
  }