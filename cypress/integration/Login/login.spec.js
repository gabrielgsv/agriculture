it('Todo Login', () => {
  cy.visit(`${Cypress.env('url')}/login`);

  cy.get('#email').type('user@email.com');
  cy.get('#password').type('user123');

  cy.get('#submit').click();
  cy.get('#Sair').should('have.id', 'Sair');
});