const faker = require('faker');
beforeEach(() => {
  cy.visit('http://localhost:2368/ghost/#/signin')
  cy.get('#ember8').type('m.leguizamong@uniandes.edu.co', { force: true })
  cy.get('#ember10').type('123456789!', { force: true })
  cy.get('#ember12').click()
  cy.wait(7000);
})

describe( `Llenando formulario`, function() {
   
  
  it('8. Dado una sesión válida-Crear post con título', () => {
      cy.get('#ember28').click()
      cy.wait(7000);
      cy.url().should('eq', 'http://localhost:2368/ghost/#/posts')
      cy.get('a[href*="editor/post"]').first().click()
      cy.wait(7000);
      cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/post')
      let titlePost = (faker.lorem.paragraph());
      cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(titlePost).should('have.value', titlePost)
  })
  
  it('9. Dado una sesión válida-Crear post con titulo corto - buscar en el listado', () => {
    cy.get('#ember28').click()
    cy.wait(2000);
    cy.url().should('eq', 'http://localhost:2368/ghost/#/posts')
    cy.get('a[href*="editor/post"]').first().click()
    cy.wait(2000);
    cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/post')
    let titlePost = (faker.lorem.word());
    cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(titlePost)
    cy.get('.koenig-editor__editor-wrapper').click()
    cy.wait(2000);
    cy.visit('http://localhost:2368/ghost/#/posts')
    cy.wait(2000);
    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(titlePost)
    })
  })

  it('10. Dado una sesión válida-Crear post con titulo numérico - buscar en el listado', () => {
    cy.get('#ember28').click()
    cy.wait(2000);
    cy.url().should('eq', 'http://localhost:2368/ghost/#/posts')
    cy.get('a[href*="editor/post"]').first().click()
    cy.wait(2000);
    cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/post')
    let titlePost = (faker.finance.amount());
    cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(titlePost)
    cy.get('.koenig-editor__editor-wrapper').click()
    cy.wait(2000);
    cy.visit('http://localhost:2368/ghost/#/posts')
    cy.wait(2000);
    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(titlePost)
    })
  })

  it('11. Dado una sesión válida-Crear post con titulo imagen - buscar en el listado', () => {
    cy.get('#ember28').click()
    cy.wait(2000);
    cy.url().should('eq', 'http://localhost:2368/ghost/#/posts')
    cy.get('a[href*="editor/post"]').first().click()
    cy.wait(2000);
    cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/post')
    let titlePost = (faker.image.city());
    cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(titlePost)
    cy.get('.koenig-editor__editor-wrapper').click()
    cy.wait(2000);
    cy.visit('http://localhost:2368/ghost/#/posts')
    cy.wait(2000);
    cy.get('.posts-list').should(($p) => {
        expect($p.first()).to.contain(titlePost)
    })
  })
  
})