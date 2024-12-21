import findOptionPageLocators from "../locators/findoptionPage.locator";

export function verifyURLContainsChildCareLocator(urlString) {
  cy.verifyURL(urlString);
}

export function enterAddress(address) {
  cy.get(findOptionPageLocators.addressInputField)
    .should("exist")
    .click()
    .type(address);
  cy.wait(5000);
  cy.get(findOptionPageLocators.addressInputField, { timeout: 10000 }).click();
  cy.get(findOptionPageLocators.addressInputField).type("{enter}");
  cy.get(findOptionPageLocators.centerSearchResultContainer, {
    timeout: 5000,
  }).should("exist");
}

export function verifySearchCenterResultsCount() {
  cy.wait(5000);
  cy.get(findOptionPageLocators.centerSearchResult, { timeout: 5000 })
    .its("length")
    .then((length) => {
      cy.get(findOptionPageLocators.noOfCenters, { timeout: 5000 })
        .invoke("text")
        .then((text) => {
          const resultNumber = parseInt(text.trim(), 10);
          expect(length).to.equal(resultNumber);
        });
    });
}

export function clickOnFirstCenterFromSearchResults() {
  cy.get(findOptionPageLocators.centerSearchResultNames, { timeout: 5000 })
    .first()
    .click();
}

export function verifyCenterDetails() {
    compareText(
      findOptionPageLocators.centerSearchResultNames,
      findOptionPageLocators.centerNameDetailsOnMap,
      "Center Name"
    );
  
    compareText(
      findOptionPageLocators.centerSearchResultAddress,
      findOptionPageLocators.centerAddressDetailsOnMap,
      "Center Address"
    );
  }

  function compareText(sourceLocator, targetLocator, label) {
    cy.get(sourceLocator, { timeout: 3000 })
      .first()
      .invoke("text")
      .then((sourceText) => {
        cy.get(targetLocator, { timeout: 2000 })
          .first()
          .invoke("text")
          .then((targetText) => {
            expect(sourceText.trim()).to.equal(targetText.trim(), `${label} should match`);
          });
      });
  }

