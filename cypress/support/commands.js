Cypress.Commands.add('login', () => {
  cy.request({
    method: 'POST',
    url: `${Cypress.env('url-api')}/login`,
    body: {
      email: "user@email.com",
      password: "user123"
    }
  })
    .then((resp) => {
      window.sessionStorage.setItem(btoa('Token'), resp.body.user.token)
    })

})
