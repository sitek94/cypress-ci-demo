describe('template spec', () => {
  it('passes', () => {

    cy.intercept({
      method: 'GET',
      url: 'https://api.example.com',
    })

    cy.visit('https://example.cypress.io')
  })
})
