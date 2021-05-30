context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('#ember8').type('m.leguizamong@uniandes.edu.co', { force: true })
        cy.get('#ember10').type('123456789!', { force: true })
        cy.get('#ember12').click()
        cy.wait(7000);
        cy.visit('http://localhost:2368/ghost/#/posts')
        cy.wait(2000); 
    })
    
    it('10. Dado una sesión válida, con un post existente - publicarlo ', () => {
        cy.get(".gh-content-entry-title").first().click({force: true});
        cy.wait(7000);
        cy.get(".gh-btn span").first().click({force: true}); 
        cy.wait(2000);
        cy.get(".gh-btn-blue").click();
        cy.wait(2000);
        cy.screenshot('Login/Escenario10_1')
        cy.get('#ember245').first().should(($p) => {
            expect($p.first()).to.contain('Published')
        });
        cy.screenshot('Login/Escenario10_2')
    })

    it('11. Dado una sesión válida, un post publica - despublicarla', () => {
        cy.get(".gh-content-entry-title").first().click({force: true});
        cy.wait(7000);
        cy.log("Update derecho superior")
        cy.get(".gh-btn span").first().click({force: true}); 
        cy.wait(2000);
        cy.log("Radio para despublicar")
        cy.get(".gh-publishmenu-radio-label").first().click({force: true}); 
        cy.wait(2000);
        cy.log("Click en el botón para despublicar.")
        cy.get("#ember321").click();
        cy.wait(2000);
        cy.log("El post fue publicado. Comparación.")
        cy.screenshot('Login/Escenario11_1')
        cy.get('#ember245').first().should(($p) => {
            expect($p.first()).to.contain('Draft')
        });
        cy.screenshot('Login/Escenario11_2')
    })

})