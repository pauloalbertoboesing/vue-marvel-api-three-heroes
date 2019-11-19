/// <reference types="Cypress" />

context('Carregar Personagens', () => {

  it('Carregar Portal', function() {
      cy.visit(`${Cypress.env('baseUrl')}`)
  })

  it('Carregar Thor', function() {
    cy.request('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=6dde85c58427c9201d9da58ddc388843&hash=2477a3f1a16ab8205b809ece1a77d8c0&name=Thor').as('Thor')
    cy.get('@Thor').should((response) => {
      expect(response.body.data.results[0].name).to.eq('Thor')
      expect(response.body.code).to.eq(200)
    })    
  })

  it('Carregar Spider-Man', function() {
    cy.request('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=6dde85c58427c9201d9da58ddc388843&hash=2477a3f1a16ab8205b809ece1a77d8c0&name=Spider-Man').as('SpiderMan')
    cy.get('@SpiderMan').should((response) => {
      expect(response.body.data.results[0].name).to.eq('Spider-Man')
      expect(response.body.code).to.eq(200)
    })    
  })  

  it('Carregar Hulk', function() {
    cy.request('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=6dde85c58427c9201d9da58ddc388843&hash=2477a3f1a16ab8205b809ece1a77d8c0&name=Hulk').as('Hulk')
    cy.get('@Hulk').should((response) => {
      expect(response.body.data.results[0].name).to.eq('Hulk')
      expect(response.body.code).to.eq(200)
    })    
  })    

})


