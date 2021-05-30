context('Actions', () => {

    const DatosLogin = require("../DataPool/MOCK_DATA_LOGIN.json");
    const DatosVacio = require("../DataPool/MOCK_DATA_NULL.json");
    var datos = DatosLogin[0];
    beforeEach(() => {
      cy.visit('http://localhost:2368/ghost/#/signin')
      cy.get('#ember8').type(datos['usuario'], { force: true })
      cy.get('#ember10').type(datos['clave'], { force: true })
      cy.get('#ember12').click()
      cy.wait(3000);
    })
    
    it('7. Dado una sesión válida-Crear post con título', () => {
        var claveEspecial = DatosVacio[0];
        cy.get('#ember28').click()
        cy.wait(3000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/posts')
        cy.get('a[href*="editor/post"]').first().click()
        cy.wait(3000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/post')
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(claveEspecial['vacio']);
        cy.wait(3000);
        cy.get('.koenig-editor__editor-wrapper').click()
        cy.wait(7000);
        cy.visit('http://localhost:2368/ghost/#/posts');
    })

})
