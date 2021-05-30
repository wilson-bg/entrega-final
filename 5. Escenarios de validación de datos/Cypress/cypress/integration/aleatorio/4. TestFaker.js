const faker = require('faker');
beforeEach(() => {
  cy.visit('http://localhost:2368/ghost/#/signin')
  cy.get('#ember8').type('m.leguizamong@uniandes.edu.co', { force: true })
  cy.get('#ember10').type('123456789!', { force: true })
  cy.get('#ember12').click()
  cy.wait(7000);
})

describe( `Llenando formulario`, function() {
   
  it(`22. Invitar editor. - Datos inválidos `, function() { 

    cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember39').click()
    cy.contains('Invite people').click()
    cy.get('#new-user-email').click({force:true}).type(faker.internet.domainName())
    cy.get('#new-user-role').scrollIntoView().focus().select('Editor')
    cy.get('div.modal-footer').within(() => {
        cy.get('button').click()
    })
    
  })

  it(`23. Invitar editor. `, function() { 

    cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember39').click()
    cy.contains('Invite people').click()
    cy.get('#new-user-email').click({force:true}).type(faker.internet.userName())
    cy.get('#new-user-role').scrollIntoView().focus().select('Colb')
    cy.get('div.modal-footer').within(() => {
        cy.get('button').click()
    })
    
  })

  it(`24. Invitar Author. `, function() { 

    cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember39').click()
    cy.contains('Invite people').click()
    cy.get('#new-user-email').click({force:true}).type(faker.internet.email())
    cy.get('#new-user-role').scrollIntoView().focus().select('Author')
    cy.get('div.modal-footer').within(() => {
        cy.get('button').click()
    })
    
  })

})