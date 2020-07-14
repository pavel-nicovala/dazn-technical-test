import './commands'

before(() => {
    
    Cypress.config('defaultCommandTimeout', 10000);

});

beforeEach(() => {

    cy.access();

});
