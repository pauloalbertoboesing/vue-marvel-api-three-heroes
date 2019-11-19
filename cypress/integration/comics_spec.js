/// <reference types="Cypress" />

context('Carregar 5 Comics', () => {

  it('Carregar Portal', function() {
      cy.visit(`${Cypress.env('baseUrl')}`)
  })

  it('Carregar 5 Comics Thor', function() {
    cy.request('http://gateway.marvel.com/v1/public/characters/1009664/comics?ts=1&apikey=6dde85c58427c9201d9da58ddc388843&hash=2477a3f1a16ab8205b809ece1a77d8c0&orderBy=-onsaleDate&limit=5').as('Thor')
    cy.get('@Thor').should((response) => {
      expect(response.body.data.count).to.eq(5)
      expect(response.body.code).to.eq(200)
    })    
  })

  it('Carregar 5 Comics Spider-Man', function() {
    cy.request('http://gateway.marvel.com/v1/public/characters/1009610/comics?ts=1&apikey=6dde85c58427c9201d9da58ddc388843&hash=2477a3f1a16ab8205b809ece1a77d8c0&orderBy=-onsaleDate&limit=5').as('SpiderMan')
    cy.get('@SpiderMan').should((response) => {
      expect(response.body.data.count).to.eq(5)
      expect(response.body.code).to.eq(200)
    })    
  })  

  it('Carregar 5 Comics Hulk', function() {
    cy.request('http://gateway.marvel.com/v1/public/characters/1009351/comics?ts=1&apikey=6dde85c58427c9201d9da58ddc388843&hash=2477a3f1a16ab8205b809ece1a77d8c0&orderBy=-onsaleDate&limit=5').as('Hulk')
    cy.get('@Hulk').should((response) => {
      expect(response.body.data.count).to.eq(5)
      expect(response.body.code).to.eq(200)
    })    
  })   

})


