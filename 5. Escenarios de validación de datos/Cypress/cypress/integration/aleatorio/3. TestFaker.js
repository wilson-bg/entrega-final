const faker = require('faker');
beforeEach(() => {
  cy.visit('http://localhost:2368/ghost/#/signin')
  cy.get('#ember8').type('m.leguizamong@uniandes.edu.co', { force: true })
  cy.get('#ember10').type('123456789!', { force: true })
  cy.get('#ember12').click()
  cy.wait(7000);
})

describe( `Llenando formulario`, function() {
   
  it(`12. Crear tag con nombre largo`, function() { 

    cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember38').click()
    cy.get('a[href*="tags/new/"]').first().click()
    cy.get('#tag-name').click({force:true}).type(faker.lorem.words(10))
    cy.get('header.gh-canvas-header').within(() => {
        cy.get('button').click()
    })
  })

  it(`13. Crear tag con nombre mail`, function() { 
    cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember38').click()
    cy.get('a[href*="tags/new/"]').first().click()
    cy.get('#tag-name').click({force:true}).type(faker.internet.email(""))
    cy.get('header.gh-canvas-header').within(() => {
        cy.get('button').click()
    })
    cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember38').click({force:true})
  })

  it(`14. Crear tag con nombre corto`, function() { 
    cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember38').click()
    cy.get('a[href*="tags/new/"]').first().click()
    cy.get('#tag-name').click({force:true}).type(faker.lorem.word())
    cy.get('header.gh-canvas-header').within(() => {
        cy.get('button').click()
    })
    cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember38').click({force:true})
  })

  it(`15. Crear tag con nombre numérico`, function() { 
    cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember38').click()
    cy.get('a[href*="tags/new/"]').first().click()
    cy.get('#tag-name').click({force:true}).type(faker.finance.amount())
    cy.get('header.gh-canvas-header').within(() => {
        cy.get('button').click()
    })
    cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember38').click({force:true})
  })

  it(`16. Crear tag con imagen`, function() { 

    cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember38').click()
    cy.get('a[href*="tags/new/"]').first().click({force:true})
    cy.get('#tag-name').click({force:true}).type(faker.internet.avatar())
    cy.get('header.gh-canvas-header').within(() => {
        cy.get('button').click()
    })
    cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember38').click({force:true})
  })

  it(`17. Crear tag con hexadecimal`, function() { 

    cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember38').click()
    cy.get('a[href*="tags/new/"]').first().click({force:true})
    cy.get('#tag-name').click({force:true}).type(faker.datatype.hexaDecimal())
    cy.get('header.gh-canvas-header').within(() => {
        cy.get('button').click()
    })
    cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember38').click({force:true})
  })

  it(`18. Crear tag con dato inválido del color`, function() { 

    cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember38').click()
    cy.get('a[href*="tags/new/"]').first().click({force:true})
    cy.get('#tag-name').click({force:true}).type(faker.lorem.word())
    cy.get('input[name="accent-color"]').click({force:true}).type(faker.random.alpha())
    cy.get('header.gh-canvas-header').within(() => {
      cy.get('button').click()
    })
  })

  it(`19. Crear tag con datos válidos`, function() { 

    cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember38').click()
    cy.get('a[href*="tags/new/"]').first().click({force:true})
    cy.get('#tag-name').click({force:true}).type(faker.lorem.word())
    cy.get('#tag-description').click({force:true}).type(faker.lorem.paragraph())
    cy.get('header.gh-canvas-header').within(() => {
      cy.get('button').click()
    })
  })

  it(`20. Crear tag con datos correo`, function() { 

    cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember38').click()
    cy.get('a[href*="tags/new/"]').first().click({force:true})
    cy.get('#tag-name').click({force:true}).type(faker.internet.email())
    cy.get('#tag-description').click({force:true}).type(faker.internet.email())
    cy.get('header.gh-canvas-header').within(() => {
      cy.get('button').click()
    })
  })

  it(`21. Crear tag con datos numéricos`, function() { 

    cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember38').click()
    cy.get('a[href*="tags/new/"]').first().click({force:true})
    cy.get('#tag-name').click({force:true}).type(faker.random.alphaNumeric())
    cy.get('#tag-description').click({force:true}).type(faker.random.alphaNumeric())
    cy.get('header.gh-canvas-header').within(() => {
      cy.get('button').click()
    })
    cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember38').click({force:true})
  })

  
})