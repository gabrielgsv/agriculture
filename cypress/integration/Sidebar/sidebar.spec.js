beforeEach(() => {
  cy.login()
})

it('Sidebar change page and logout', function () {
  cy.visit(`${Cypress.env('url')}/`);

  cy.get('#Produtor\\ Rural').click();
  cy.url().should('eq', `${Cypress.env('url')}/producer`)

  cy.get('#Dashboard').click();
  cy.url().should('eq', `${Cypress.env('url')}/`)

  cy.get('#Sair').click();
  cy.url().should('eq', `${Cypress.env('url')}/login`)
  cy.get('#submit').should('have.attr', 'type', 'submit');
});