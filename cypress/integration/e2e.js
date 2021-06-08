// e2e.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Pokedex', function() {
  it('front page can be opened', function() {
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:8080')
    // eslint-disable-next-line no-undef
    cy.contains('ivysaur')
    // eslint-disable-next-line no-undef
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})