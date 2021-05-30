context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:2368/ghost/#/signin')
      cy.get('#ember8').type('m.leguizamong@uniandes.edu.co', { force: true })
      cy.get('#ember10').type('123456789!', { force: true })
      cy.get('#ember12').click()
      cy.wait(7000);
    })
    
    it('12. Dado una sesión válida- Crear page con título - navegación', () => {
        cy.get('#ember37').click()
        cy.wait(7000);
        cy.screenshot('Login/Escenario12_1')
        cy.url().should('eq', 'http://localhost:2368/ghost/#/pages')
        cy.screenshot('Login/Escenario12_2')
    })

    
    it('13. Dado una sesión válida-Crear page con título navegación segundo nivel', () => {
        cy.get('#ember37').click()
        cy.wait(7000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/pages')
        cy.get('a[href*="editor/page"]').first().click()
        cy.wait(7000);
        cy.screenshot('Login/Escenario13_1')
        cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/page')
        cy.screenshot('Login/Escenario13_2')
    })

    it('14. Dado una sesión válida-Crear page con título', () => {
        cy.get('#ember37').click()
        cy.wait(7000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/pages')
        cy.get('a[href*="editor/page"]').first().click()
        cy.wait(7000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/page')
        cy.screenshot('Login/Escenario14_1')
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type('Cypress page').should('have.value', 'Cypress page')
        cy.screenshot('Login/Escenario14_2')
    })
    
    it('15. Dado una sesión válida-Crear page con título - ir al listado de page', () => {
        cy.get('#ember37').click()
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/pages')
        cy.get('a[href*="editor/page"]').first().click()
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/page')
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type('Cypress page consulta')
        cy.wait(7000);
        cy.visit('http://localhost:2368/ghost/#/pages')
        cy.screenshot('Login/Escenario15_1')
        cy.wait(2000);
        cy.screenshot('Login/Escenario15_2')
    })

    it('16. Dado una sesión válida-Crear page con título - buscar en el listado', () => {
        cy.get('#ember37').click()
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/pages')
        cy.get('a[href*="editor/page"]').first().click()
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/page')
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type('Cypress page consulta')
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').click()
        cy.wait(7000);
        cy.visit('http://localhost:2368/ghost/#/pages')
        cy.wait(2000);
        cy.screenshot('Login/Escenario16_1')
        cy.get('.gh-list-row.gh-posts-list-item.ember-view').should(($p) => {
            expect($p.first()).to.contain('Cypress page consulta')
        })
        cy.screenshot('Login/Escenario16_2')
    })
})
