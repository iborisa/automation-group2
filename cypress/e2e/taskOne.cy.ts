export {}
describe('First homework', () => {

  beforeEach('Open main screen', () => {
    cy.visit('https://intranet.ctco.lv/')
  })

  it('Intranet Log in happy path tc', () => {
    cy.get('#username').type(Cypress.env('userName'))
    cy.get('#password').type(Cypress.env('password'))
    cy.get('.btn-submit').click()
    cy.get('#logo_img')
  })

  it('Intranet Log in failed tc', () => {
    cy.get('#username').type(Cypress.env('userName'))
    cy.get('#password').type(Cypress.env('userName'))
    cy.get('.btn-submit').click()
    cy.get('#fm1 .errors').contains('Invalid credentials')
  })


  it('Intranet Log in and log out tc', () => {
    cy.get('#username').type(Cypress.env('userName'))
    cy.get('#password').type(Cypress.env('password'))
    cy.get('.btn-submit').click()
    cy.get('.logout-button ').click()
    cy.get('#msg h2').should('have.text', 'Logout successful')
  })
})