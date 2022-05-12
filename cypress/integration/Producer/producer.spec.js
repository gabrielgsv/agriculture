beforeEach(() => {
  cy.login()
  cy.visit(`${Cypress.env('url')}/producer`)
})

it('Should add a producer and show in search grid', function () {
  cy.get('#buttonAddProducer').click();
  cy.get('#cpfInput').clear();
  cy.get('#cpfInput').type('189.821.700-90');
  cy.get('#nameInput').clear();
  cy.get('#nameInput').type('Produtor Cypress');
  cy.get('#farmNameInput').clear();
  cy.get('#farmNameInput').type('Fazenda Cypress');
  cy.get('#ufInput').select('RJ');
  cy.get('#cityInput').select('3304557');
  cy.get('#totalHectaresInput').type('10087');
  cy.get('#arableHectaresInput').type('5895');
  cy.get('#vegetationArableInput').type('2587');
  cy.get(':nth-child(1) > .chakra-checkbox__label').click();
  cy.get(':nth-child(4) > .chakra-checkbox__label').click();
  cy.get('#saveButton').click();
  cy.get('.chakra-toast > .chakra-toast__inner > #\\31  > .chakra-alert__icon > .chakra-icon > path').should('be.visible');
  cy.wait(1000);
  cy.get('[type="search"]').type('cypress');
  cy.get('.gridjs-tbody > .gridjs-tr > [data-column-id="name"]').should('have.text', 'Produtor Cypress');
});

it('Should update with other dada and check in serach grid', function () {
  cy.wait(1000);
  cy.get('[type="search"]').type('cypress');
  cy.get('#buttonEditProducer').click();
  cy.get('.chakra-modal__content-container').click();
  cy.get('#cpfInput').clear();
  cy.get('#cpfInput').type('462.181.800-77');
  cy.get('#nameInput').clear();
  cy.get('#nameInput').type('Produtor Cypress Editado');
  cy.get('#farmNameInput').clear();
  cy.get('#farmNameInput').type('Fazenda Cypress Editado');
  cy.get('#ufInput').select('SP');
  cy.get('#cityInput').select('3501152');
  cy.get('#totalHectaresInput').clear();
  cy.get('#totalHectaresInput').type('10010');
  cy.get('#arableHectaresInput').clear();
  cy.get('#arableHectaresInput').type('5810');
  cy.get('#vegetationArableInput').clear();
  cy.get('#vegetationArableInput').type('2510');
  cy.get(':nth-child(1) > .chakra-checkbox__label').click();
  cy.get(':nth-child(4) > .chakra-checkbox__label').click();
  cy.get(':nth-child(2) > .chakra-checkbox__label').click();
  cy.get(':nth-child(3) > .chakra-checkbox__label').click();
  cy.get('#saveButton').click();
  cy.get('.chakra-toast > .chakra-toast__inner > #\\31  > .chakra-alert__icon > .chakra-icon > path').should('be.visible');
  cy.wait(1000);
  cy.get('[type="search"]').type('cypress');
  cy.get('.gridjs-tbody > .gridjs-tr > [data-column-id="name"]').should('have.text', 'Produtor Cypress Editado');

})

it('Should delete Produtor Cypress and check in serach grid if it was deleted', function () {
  cy.wait(1000);
  cy.get('[type="search"]').type('cypress');
  cy.get('#buttonEditProducer').click();
  cy.get('#deleteIconButton').click();
  cy.get('#deleteButton').click();
  cy.get('.chakra-toast > .chakra-toast__inner > #\\31  > .css-njbp03 > #toast-1-title').should('have.text', 'Deletado com sucesso!');
  cy.get('.chakra-toast > .chakra-toast__inner > #\\31  > .chakra-alert__icon > .chakra-icon > path').should('be.visible');
  cy.wait(1000);
  cy.get('[type="search"]').type('cypress');
  cy.wait(500);
  cy.get('.gridjs-td').should('have.text', 'Nenhum resultado encontrado');
})