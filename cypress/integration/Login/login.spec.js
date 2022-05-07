it('Todo Login', function () {
  cy.visit(Cypress.env('url'));
  cy.get('#email').type('user@email.com');
  cy.get('#password').type('user123');
  cy.get('#submit').click();
  cy.get('h1').should('have.text', 'Home');
});