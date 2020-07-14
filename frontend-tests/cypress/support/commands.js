Cypress.Commands.add("access", () => {
    
    cy.visit(Cypress.env('URL'))
        .then(() => {
            cy.get('.header')
                .contains('Weather Checker');
    });
});

Cypress.Commands.add("submit", (postCode) => {

    cy.get('.search_3').type(postCode)
        .then(() => {
            cy.get('.submit_3')
                .click();
    });
});
