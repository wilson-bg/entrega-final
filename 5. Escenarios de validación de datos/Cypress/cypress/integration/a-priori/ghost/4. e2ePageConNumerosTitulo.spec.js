context('Actions', () => {

    const DatosLogin = require("../DataPool/MOCK_DATA_LOGIN.json");
    const DatosNumeros = require("../DataPool/MOCK_DATA_NUMEROS.json");
    var datos = DatosLogin[0];
    beforeEach(() => {
      cy.visit('http://localhost:2368/ghost/#/signin')
      cy.get('#ember8').type(datos['usuario'], { force: true })
      cy.get('#ember10').type(datos['clave'], { force: true })
      cy.get('#ember12').click()
      cy.wait(3000);
    })
    
    it('7. Dado una sesión válida-Crear post con título', () => {
        var numeroAleatorio = DatosNumeros[Math.floor(Math.random() * DatosNumeros.length)];
        cy.get('#ember37').click()
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/pages')
        cy.get('a[href*="editor/page"]').first().click()
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/page')
        cy.wait(3000);
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(numeroAleatorio["numero"]);
        cy.wait(3000);
        cy.get('.koenig-editor__editor-wrapper').click()
        cy.wait(7000);
        cy.visit('http://localhost:2368/ghost/#/pages');
    })

})
