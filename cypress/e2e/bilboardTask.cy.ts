export {}
describe('Billboard check', () => {

  beforeEach('Login into Intranet', () => {
    cy.visit('/')
    cy.login(Cypress.env('userName'), Cypress.env('password'));
  })

  function asserElementsCount(Section: string) {
    cy.contains(Section).find('.count').then(($el) => {
      const totalCount = $el.text().substring(0, 2)
      cy.contains(Section).click();
      let count = 0;

      function countElements() {
        cy.get('.product-details').its('length').then((n) => {
          count += n;
        })
        cy.get('.current').invoke('text').then(($el2) => {
          if ($el2 == '2') {
            const totalItems = `${count}`
            expect(totalItems == totalCount)
          } else {
            cy.get('.next').click().then(countElements)
          }
        })
      }

      countElements()
    })
  }

  it('Check item count in Other section', () => {
    cy.visit('https://intranet.ctco.lv/billboard/');
    asserElementsCount('Other')
  })

  it('Check item count in Electronics section', () => {
    cy.visit('https://intranet.ctco.lv/billboard/');
    asserElementsCount('Electronics')
  })

  it('Check item count in Transport section', () => {
    cy.visit('https://intranet.ctco.lv/billboard/');
    asserElementsCount('Transport')
  })

  it('Check item count in Food section', () => {
    cy.visit('https://intranet.ctco.lv/billboard/');
    cy.contains('Food').find('.count').then(($el) => {
      const count = $el.text().substring(0, 2)
      cy.contains('Food').click();
      cy.get('.product-details').should('have.length', count)
    })
  })

  it('Check item count in Real estate section', () => {
    cy.visit('https://intranet.ctco.lv/billboard/');
    cy.contains('Real estate').find('.count').then(($el) => {
      const count = $el.text().substring(0, 2)
      cy.contains('Real estate').click();
      cy.get('.product-details').should('have.length', count)
    })
  })
})