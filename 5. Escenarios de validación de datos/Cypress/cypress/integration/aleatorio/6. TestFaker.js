const faker = require('faker');
beforeEach(() => {
  cy.visit('http://localhost:2368/ghost/#/signin')
  cy.get('#ember8').type('m.leguizamong@uniandes.edu.co', { force: true })
  cy.get('#ember10').type('123456789!', { force: true })
  cy.get('#ember12').click()
  cy.wait(7000);
})

describe( `Llenando formulario`, function() {
   
  it('31. Dado una sesión válida-Crear post con título', () => {
    cy.get('#ember28').click()
    cy.wait(3000);
    cy.url().should('eq', 'http://localhost:2368/ghost/#/posts')
    cy.get('a[href*="editor/post"]').first().click()
    cy.wait(3000);
    cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/post')
    cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(faker.random.alpha());
    cy.wait(3000);
    cy.get('.koenig-editor__editor-wrapper').click()
    cy.get('.koenig-editor__editor-wrapper').type(faker.random.alpha());
    cy.wait(7000);
    cy.visit('http://localhost:2368/ghost/#/posts');
})

it('32. Crear Metadata', () => {
  cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember40').click();
  cy.wait(1000);
  cy.get(':nth-child(6) > .gh-setting-first').contains('Expand').click({ force: true });
  cy.get('#metaTitle').click({ force: true });
  cy.get('#metaTitle').clear();
  cy.get('#metaTitle').type(faker.lorem.paragraphs())
  cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click();

})

it('33. Crear Metadata correo', () => {
  cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember40').click();
  cy.wait(1000);
  cy.get(':nth-child(6) > .gh-setting-first').contains('Expand').click({ force: true });
  cy.get('#metaTitle').click({ force: true });
  cy.get('#metaTitle').clear();
  cy.get('#metaTitle').type(faker.internet.email())
  cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click();

})

it('34. Crear Metadata corto', () => {
  cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember40').click();
  cy.wait(1000);
  cy.get(':nth-child(6) > .gh-setting-first').contains('Expand').click({ force: true });
  cy.get('#metaTitle').click({ force: true });
  cy.get('#metaTitle').clear();
  cy.get('#metaTitle').type(faker.lorem.word())
  cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click();

})

it('35. Crear Metadata - imagen', () => {
  cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember40').click();
  cy.wait(1000);
  cy.get(':nth-child(6) > .gh-setting-first').contains('Expand').click({ force: true });
  cy.get('#metaTitle').click({ force: true });
  cy.get('#metaTitle').clear();
  cy.get('#metaTitle').type(faker.random.image())
  cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click();

})

it('37. Crear Metadata - otros', () => {
  cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember40').click();
  cy.wait(1000);
  cy.get(':nth-child(6) > .gh-setting-first').contains('Expand').click({ force: true });
  cy.get('#metaTitle').click({ force: true });
  cy.get('#metaTitle').clear();
  cy.get('#metaTitle').type(faker.music.genre())
  cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click();

})

it('38. Dado una sesión válida-Crear post con título random, detalle también', () => {
  cy.get('#ember37').click()
  cy.wait(2000);
  cy.url().should('eq', 'http://localhost:2368/ghost/#/pages')
  cy.get('a[href*="editor/page"]').first().click()
  cy.wait(2000);
  cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/page')
  cy.wait(3000);
  cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(faker.random.alpha());
  cy.wait(3000);
  cy.get('.koenig-editor__editor-wrapper').click()
  cy.get('.koenig-editor__editor-wrapper').type(faker.random.alpha());
  cy.wait(7000);
  cy.visit('http://localhost:2368/ghost/#/pages');
})

it('39. Dado una sesión válida-Crear post con título largo, detalle corto', () => {
  cy.get('#ember37').click({force:true})
  cy.wait(2000);
  cy.url().should('eq', 'http://localhost:2368/ghost/#/pages')
  cy.get('a[href*="editor/page"]').first().click({force:true})
  cy.wait(2000);
  cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/page')
  cy.wait(3000);
  cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(faker.lorem.paragraph());
  cy.wait(3000);
  cy.get('.koenig-editor__editor-wrapper').click({force:true})
  cy.get('.koenig-editor__editor-wrapper').type(faker.lorem.word());
  cy.wait(7000);
  cy.visit('http://localhost:2368/ghost/#/pages');
})

it('40. Dado una sesión válida-Crear post con título teléfono - detalle corto', () => {
  cy.get('#ember37').click({force:true})
  cy.wait(2000);
  cy.url().should('eq', 'http://localhost:2368/ghost/#/pages')
  cy.get('a[href*="editor/page"]').first().click({force:true})
  cy.wait(2000);
  cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/page')
  cy.wait(3000);
  cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(faker.phone.phoneNumber());
  cy.wait(3000);
  cy.get('.koenig-editor__editor-wrapper').click({force:true})
  cy.get('.koenig-editor__editor-wrapper').type(faker.lorem.word());
  cy.wait(7000);
  cy.visit('http://localhost:2368/ghost/#/pages');
})


})