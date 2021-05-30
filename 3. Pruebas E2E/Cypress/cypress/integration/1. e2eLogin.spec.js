
context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:2368/ghost/#/signin')
      
    })

    it('1. Intento de login con contraseña inválida', () => {
      cy.get('#ember8').type('m.leguizamong@uniandes.edu.co', { force: true })
      cy.get('#ember10').type('hjhjh!', { force: true })
      cy.get('#ember12').click()
      cy.wait(2000);
      
      cy.screenshot('Login/Escenario1')
      cy.get('p').should(($p) => {
        expect($p.first()).to.contain('Your password is incorrect.')
      })
      cy.screenshot('Login/Escenario1_1')

      
    })

    it('2. Intento de login con usuario inválido', () => {
        cy.get('#ember8').type('noExiste@uniandes.edu.co', { force: true })
        cy.get('#ember10').type('123456789!', { force: true })
        cy.get('#ember12').click()
        cy.wait(2000);
        cy.screenshot('Login/Escenario2_1')
        cy.get('p').should(($p) => {
          expect($p.first()).to.contain('There is no user with that email address.')
        })
        cy.screenshot('Login/Escenario2_2')

    })

    it('3. Inicio de sesión sin información', () => {
      cy.get('#ember12').click()
      cy.wait(2000);
      cy.screenshot('Login/Escenario3_1')
      cy.get('p').should(($p) => {
        expect($p.first()).to.contain('Please fill out the form to sign in.')
      })
      cy.screenshot('Login/Escenario3_2')

    })

    it('4. Inicio de sesión con usuario válido', () => {
      cy.get('#ember8').type('m.leguizamong@uniandes.edu.co', { force: true })
      cy.get('#ember10').type('123456789!', { force: true })
      cy.get('#ember12').click()
      cy.screenshot('Login/Escenario4_1')
      cy.wait(7000);
      cy.url().should('eq', 'http://localhost:2368/ghost/#/site')
      cy.screenshot('Login/Escenario4_2')
      
    })
})