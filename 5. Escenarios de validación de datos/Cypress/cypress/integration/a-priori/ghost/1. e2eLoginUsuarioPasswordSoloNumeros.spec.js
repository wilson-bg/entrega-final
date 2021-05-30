
context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:2368/ghost/#/signin')
      
    })

    const DatosNumeros = require("../DataPool/MOCK_DATA_NUMEROS.json");

    it('2. Intento de login con usuario inválido', () => {
        var numeroAleatorio = DatosNumeros[Math.floor(Math.random() * DatosNumeros.length)];
        cy.get('#ember8').type(numeroAleatorio["numero"], { force: true })
        cy.get('#ember10').type(numeroAleatorio["numero"], { force: true })
        cy.get('#ember12').click()
        cy.wait(2000);
        cy.screenshot('Login/Escenario2_1')
        cy.get('p').should(($p) => {
          expect($p.first()).to.contain('Please fill out the form to sign in.')
        })
        cy.screenshot('Login/Escenario2_2')

    })


})