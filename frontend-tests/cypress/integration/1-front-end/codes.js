context('Given user access site', () => {

    let postCode;

    it('When a non-valid post-code is submitted Then invalid postcode error should be displayed', () => {

        postCode = 'EC1A 1BB';
        cy.submit(postCode);

        cy.get('body').within(() => {

            cy.get('h1')
                .should('be.visible')   
                .should('contain','Invalid postcode.');
        });
    });

    it('When a valid non-existing post-code is submitted Then unable to find postcode error should be displayed', () => {

        postCode = 'B99 9AA';
        cy.submit(postCode);

        cy.get('body').within(() => {

            cy.get('h1')
                .should('be.visible')   
                .should('contain','Unable to find the postcode.');
        });
    });

    it('When a valid post-code is submitted Then weather details table should be displayed', () => {

        postCode = 'W6 0NW';
        cy.submit(postCode);

        cy.get('body').within(() => {

            cy.get('.tableHeader')
                .should('be.visible')   
                .should('contain','Weather details');
        });
    });

    it('When a valid non-space separated and case-insensitive post-code is submitted Then weather details table should be displayed', () => {

        postCode = 'w60nW';
        cy.submit(postCode);

        cy.get('body').within(() => {

            cy.get('.tableHeader')
                .should('be.visible')   
                .should('contain','Weather details');
        });
    });
});