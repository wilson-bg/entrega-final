
context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:2368/ghost/#/signin')
      
    })

    const DatosCorreo = require("../DataPool/MOCK_DATA_EMAIL.json");
    const DatosClave = require("../DataPool/MOCK_DATA_CLAVES.json");

    it('1. Intento de login con contraseña inválida', () => {
      var correoAleatorio = DatosCorreo[Math.floor(Math.random() * DatosCorreo.length)];
      var claveAleatorio = DatosClave[Math.floor(Math.random() * DatosClave.length)];
      cy.get('#ember8').type(correoAleatorio["email"], { force: true })
      cy.get('#ember10').type(claveAleatorio["claves"], { force: true })
      cy.get('#ember12').click()
      cy.wait(2000);
      
      cy.screenshot('Login/Escenario1')
      cy.get('p').should(($p) => {
        expect($p.first()).to.contain('Your password is incorrect.')
      })
      cy.screenshot('Login/Escenario1_1')

      
    })

})