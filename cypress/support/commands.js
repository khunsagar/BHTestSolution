// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


  Cypress.Commands.add('acceptCookiesIfVisible', () => {
    cy.get('#onetrust-accept-btn-handler', { timeout: 0 }).then(($el) => {
      if ($el.length > 0 && $el.is(':visible')) {
        cy.wrap($el).click();
        cy.log('Clicked Accept Cookies');
      } else {
        cy.log('No Cookies popup found or it is not visible');
      }
    });
  });
  
  Cypress.Commands.add('waitForTaboolaNetworkCall', (waitForDomContentLoaded = 'taboolaRequest') => {
    cy.intercept('GET', 'https://cds.taboola.com/*').as(waitForDomContentLoaded); 
    cy.wait(`@${waitForDomContentLoaded}`); 
  });

  

  Cypress.Commands.add('verifyURL', (pagename) => {
   cy.url().should('include', pagename);
  });
  
