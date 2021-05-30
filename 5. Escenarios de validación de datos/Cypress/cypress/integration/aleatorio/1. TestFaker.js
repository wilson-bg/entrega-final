const faker = require('faker');

describe( `Llenando formulario login con datos inválidos`, function() {
    it(`1. Visita el formulario de login y lo llena con datos inválidos`, function() { 
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('#ember8').scrollIntoView().focus().type(faker.name.firstName())
        cy.get('#ember10').scrollIntoView().focus().type(faker.name.firstName())
        cy.get('#ember12').click()
        cy.get('p').should(($p) => {
          expect($p.first()).to.contain('Please fill out the form to sign in.')
        })
    })

    it(`2. Visita el formulario de login y lo llena con datos del formato esperado
    pero que no corresponden a un usuarios real`, function() { 
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('#ember8').scrollIntoView().focus().type(faker.internet.email())
        cy.get('#ember10').scrollIntoView().focus().type(faker.internet.password())
        cy.get('#ember12').click()
        cy.get('p').should(($p) => {
          expect($p.first()).to.contain('There is no user with that email address.')
        })
    })

    it(`3. Clic en el botón de autenticar con un formulario vacío.`, function() { 
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('#ember12').click()
        cy.get('p').should(($p) => {
          expect($p.first()).to.contain('Please fill out the form to sign in.')
        })
    })

    it(`4. Visita el formulario de login y lo llena con datos del formato esperado
    pero que no corresponden a un usuarios real`, function() { 
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('#ember8').scrollIntoView().focus().type(faker.internet.email())
        cy.get('#ember10').scrollIntoView().focus().type(faker.internet.password())
        cy.get('#ember12').click()
        cy.get('p').should(($p) => {
          expect($p.first()).to.contain('There is no user with that email address.')
        })
    })

    it(`5. Visita el formulario de login y llena solo un campo`, function() { 
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('#ember8').scrollIntoView().focus().type(faker.helpers.randomize())
        cy.get('#ember12').click()
        cy.get('p').should(($p) => {
          expect($p.first()).to.contain('Please fill out the form to sign in.')
        })
    })

    it(`6. Visita el formulario de login y lo llena con imágenes`, function() { 
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('#ember8').scrollIntoView().focus().type(faker.image.avatar())
        cy.get('#ember10').scrollIntoView().focus().type(faker.image.dataUri())
        cy.get('#ember12').click()
        cy.get('p').should(($p) => {
          expect($p.first()).to.contain('Please fill out the form to sign in.')
        })
    })

    it(`7. Visita el formulario de login y lo llena caracteres largosS`, function() { 
      cy.visit('http://localhost:2368/ghost/#/signin')
      cy.get('#ember8').scrollIntoView().focus().type(faker.lorem.paragraph())
      cy.get('#ember10').scrollIntoView().focus().type(faker.lorem.paragraph())
      cy.get('#ember12').click()
      cy.get('p').should(($p) => {
        expect($p.first()).to.contain('Please fill out the form to sign in.')
      })
  })
})