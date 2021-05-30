const DatosUsuario = require("../DataPool/MOCK_DATA_USUARIO.json");
const DatosLogin = require("../DataPool/MOCK_DATA_LOGIN.json");
var datos = DatosLogin[0];

context('Actions', () => {

    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.wait(3000)
        cy.get('form').within(() => {
            cy.get('.email.ember-text-field.gh-input.ember-view').type(datos['usuario'])
            cy.get('.password.ember-text-field.gh-input.ember-view').type(datos['clave'])
            cy.get('#ember12 > span').click()
        })
        cy.wait(1000)
    })

    it('Crear Metadata', () => {

        var variable = DatosUsuario[Math.floor(Math.random() * DatosUsuario.length)].usuario;
        variable = variable.substr(0, 1);

        cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember40').click();
        cy.wait(1000);
        cy.get(':nth-child(6) > .gh-setting-first').contains('Expand').click({ force: true });


        cy.get('#metaTitle').click({ force: true });
        cy.get('#metaTitle').clear();
        cy.get('#metaTitle').type(variable)

        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click();

    })
})

