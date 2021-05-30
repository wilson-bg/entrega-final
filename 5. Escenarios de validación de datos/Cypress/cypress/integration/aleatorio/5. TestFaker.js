const faker = require('faker');
beforeEach(() => {
  cy.visit('http://localhost:2368/ghost/#/signin')
  cy.get('#ember8').type('m.leguizamong@uniandes.edu.co', { force: true })
  cy.get('#ember10').type('123456789!', { force: true })
  cy.get('#ember12').click()
  cy.wait(7000);
})

describe( `Llenando formulario`, function() {
   
  it('25. Dado una sesión válida-Crear page con título', () => {
    cy.visit('http://localhost:2368/ghost/#/pages')
    cy.wait(7000);
    cy.url().should('eq', 'http://localhost:2368/ghost/#/pages')
    cy.get('a[href*="editor/page"]').first().click()
    cy.wait(7000);
    cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/page')
    let title = faker.internet.userName();
    cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(title).should('have.value', title)
  
  })

  it('26. Dado una sesión válida-Crear page con título muy largo', () => {
    cy.visit('http://localhost:2368/ghost/#/pages')
    cy.wait(7000);
    cy.url().should('eq', 'http://localhost:2368/ghost/#/pages')
    cy.get('a[href*="editor/page"]').first().click()
    cy.wait(7000);
    cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/page')
    let title = faker.lorem.paragraphs();
    cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(title).should('have.value', title)
  cy.wait(2000);
  })

  it('27. Dado una sesión válida-Crear page con título corto', () => {
    cy.visit('http://localhost:2368/ghost/#/pages')
    cy.wait(7000);
    cy.url().should('eq', 'http://localhost:2368/ghost/#/pages')
    cy.get('a[href*="editor/page"]').first().click()
    cy.wait(7000);
    cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/page')
    let title = faker.lorem.word();
    cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(title).should('have.value', title)
    cy.wait(2000);
  })

  it('28. Dado una sesión válida-Crear page con título imagen', () => {
    cy.visit('http://localhost:2368/ghost/#/pages')
    cy.wait(7000);
    cy.url().should('eq', 'http://localhost:2368/ghost/#/pages')
    cy.get('a[href*="editor/page"]').first().click()
    cy.wait(7000);
    cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/page')
    let title = faker.image.image();
    cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(title).should('have.value', title)
    cy.get('.koenig-editor__editor-wrapper').click()
  })

  it('29. Dado una sesión válida-Crear page con título imagen- contenido largo', () => {
    cy.visit('http://localhost:2368/ghost/#/pages')
    cy.wait(7000);
    cy.url().should('eq', 'http://localhost:2368/ghost/#/pages')
    cy.get('a[href*="editor/page"]').first().click()
    cy.wait(7000);
    cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/page')
    let title = faker.image.image();
    cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(title).should('have.value', title)
    cy.get('.koenig-editor__editor-wrapper').click().type(faker.lorem.paragraphs())
    cy.wait(2000)
  })

  it('30. Dado una sesión válida-Crear page con título texto - y contenido', () => {
    cy.visit('http://localhost:2368/ghost/#/pages')
    cy.wait(7000);
    cy.url().should('eq', 'http://localhost:2368/ghost/#/pages')
    cy.get('a[href*="editor/page"]').first().click()
    cy.wait(7000);
    cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/page')
    let title = faker.image.image();
    cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(title).should('have.value', title)
    cy.get('.koenig-editor__editor-wrapper').click().type(faker.internet.email())
    cy.wait(2000)
  })

})