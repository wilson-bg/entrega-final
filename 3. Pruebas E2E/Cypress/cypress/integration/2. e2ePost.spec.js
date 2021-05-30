context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:2368/ghost/#/signin')
      cy.get('#ember8').type('m.leguizamong@uniandes.edu.co', { force: true })
      cy.get('#ember10').type('123456789!', { force: true })
      cy.get('#ember12').click()
      cy.wait(7000);
    })
    
    it('5. Dado una sesión válida- Crear post con título - navegación', () => {
        cy.get('#ember28').click()
        cy.wait(7000);
        cy.screenshot('Login/Escenario5_1')
        cy.url().should('eq', 'http://localhost:2368/ghost/#/posts')
        cy.screenshot('Login/Escenario5_2')

    })

    it('6. Dado una sesión válida-Crear post con título navegación segundo nivel', () => {
        cy.get('#ember28').click()
        cy.wait(7000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/posts')
        cy.get('a[href*="editor/post"]').first().click()
        cy.wait(7000);
        cy.screenshot('Login/Escenario6_1')
        cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/post')
        cy.screenshot('Login/Escenario6_2')
    })

    it('7. Dado una sesión válida-Crear post con título', () => {
        cy.get('#ember28').click()
        cy.wait(7000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/posts')
        cy.get('a[href*="editor/post"]').first().click()
        cy.wait(7000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/post')
        cy.screenshot('Login/Escenario7_1')
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type('Cypress post').should('have.value', 'Cypress post')
        cy.screenshot('Login/Escenario7_2')
    })
    
    it('8. Dado una sesión válida-Crear post con título - ir al listado de post', () => {
        cy.get('#ember28').click()
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/posts')
        cy.get('a[href*="editor/post"]').first().click()
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/post')
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type('Cypress post consulta')
        cy.wait(2000);
        cy.screenshot('Login/Escenario8_1')
        cy.visit('http://localhost:2368/ghost/#/posts')
        // cy.screenshot('Login/Escenario8_2')
        
    })

    it('9. Dado una sesión válida-Crear post con título - buscar en el listado', () => {
        cy.get('#ember28').click()
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/posts')
        cy.get('a[href*="editor/post"]').first().click()
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/post')
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type('Cypress post consulta')
        cy.wait(1000);
        cy.get('.koenig-editor__editor-wrapper').click()
        cy.wait(7000);
        cy.visit('http://localhost:2368/ghost/#/posts')
        cy.wait(2000);
        cy.screenshot('Login/Escenario9_1')
        cy.get('.gh-list-row.gh-posts-list-item').should(($p) => {
            expect($p.first()).to.contain('Cypress post consulta')
        })
        cy.screenshot('Login/Escenario9_1')
    })
})
