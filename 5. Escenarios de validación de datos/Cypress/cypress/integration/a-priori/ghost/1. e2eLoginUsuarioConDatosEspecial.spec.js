
context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:2368/ghost/#/signin')
      
    })

    const DatosEspecial = require("../DataPool/MOCK_DATA_ESPECIAL.json");
    const DatosClave = require("../DataPool/MOCK_DATA_CLAVES.json");

    it('2. Intento de login con usuario inválido', () => {
        var especialAleatorio = DatosEspecial[Math.floor(Math.random() * DatosEspecial.length)];
        var claveAleatorio = DatosClave[Math.floor(Math.random() * DatosClave.length)];
        cy.get('#ember8').type(especialAleatorio["datosEspeciales"], { force: true })
        cy.get('#ember10').type(claveAleatorio["claves"], { force: true })
        cy.get('#ember12').click()
        cy.wait(2000);
        cy.screenshot('Login/Escenario2_1')
        cy.get('p').should(($p) => {
          expect($p.first()).to.contain('Please fill out the form to sign in.')
        })
        cy.screenshot('Login/Escenario2_2')

    })


})