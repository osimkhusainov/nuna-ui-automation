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
import "@testing-library/cypress/add-commands";

Cypress.Commands.add("findByAriaLabel", (text) => {
  cy.get(`[aria-label="${text}"]:visible`);
});

Cypress.Commands.add("findByAriaLive", (text) => {
  // timeout is not going to wait for 30 sec exactly, sometime it takes time longer in order to translate words. To avoid it we would also use API intercept (but there are no api calls)
  cy.get(`[aria-live="${text}"]:visible`, { timeout: 20000 });
});
