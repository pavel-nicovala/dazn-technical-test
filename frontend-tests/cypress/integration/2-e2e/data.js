context('Given user submits a valid post-code', () => {

    const postCode = 'M5 0AA';

    it('When weather details table is displayed Then time format, temperature and humidity mandatory properties should be displayed', () => {

        cy.submit(postCode);
  
        cy.get('#root').within(() => {

            const todaysDate = Cypress.moment().format('DD/MM/YYYY HH:mm');
            const time = cy.get(':nth-child(1) > td');
            time.should('not.be.empty');
            time.should('contain', todaysDate);

            const temperature = cy.get(':nth-child(9) > td');
            temperature.should('not.be.empty');
         
            const humidity = cy.get(':nth-child(12) > td');
            humidity.should('not.be.empty');

        });
    });
});