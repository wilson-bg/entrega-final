//context('Actions', () => {
describe('Prueba escenarios ghost  - Page', () => {

	let config = new Array;
	let mockaroo = new Array;
	let random = 0;
	let usuario=0;
	
	
	before(() => {
		cy.fixture('config').should((_config) => {
			config = _config;
			//console.log(config)
		})
		cy.request('https://my.api.mockaroo.com/data.json?key=fae49f20')
		.then((response) => {
			cy.writeFile('cypress/fixtures/mockaroo.json', response.body)
		})
		
		cy.fixture('mockaroo').should((_mockaroo) => {
			mockaroo = _mockaroo;
			random = Math.floor(Math.random()*mockaroo.length); 
		})
	})

	
    beforeEach(() => {
	    random = Math.floor(Math.random()*mockaroo.length); 	
	    cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('#ember8').type(config[usuario].user, { force: true })
        cy.get('#ember10').type(config[usuario].pass, { force: true })
        cy.get('#ember12').click()

       cy.wait(7000);
    })
    
    it('17. Dado una sesión válida- Crear page con título - navegación', () => {
        cy.get('#ember37').click()
        cy.wait(7000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/pages')
    })

    
    it('18. Dado una sesión válida-Crear page con título navegación segundo nivel', () => {
        cy.get('#ember37').click()
        cy.wait(7000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/pages')
        cy.get('a[href*="editor/page"]').first().click()
        cy.wait(7000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/page')
    })
	

    it('19. Crear page con título - buscar en el listado', () => {
	 
	 cy.get('#ember37').click()
        //cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/pages')
        cy.get('a[href*="editor/page"]').first().click()
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/page')
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(mockaroo[random].char_sequence)
		cy.get(".post-settings").first().click({force: true}); 
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').click()
        cy.wait(5000);
        cy.visit('http://localhost:2368/ghost/#/pages')
        cy.wait(2000);
        cy.get('.gh-list-row.gh-posts-list-item.ember-view').should(($p) => {
            expect($p.first()).to.contain(mockaroo[random].char_sequence)
        });
	 
   })


    it('20. Crear page con título - custom-excerpt ', () => {
	 
	 cy.get('#ember37').click()
        //cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/pages')
        cy.get('a[href*="editor/page"]').first().click()
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/page')
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(mockaroo[random].univer)
		cy.get(".post-settings").first().click({force: true}); 
		cy.get('#custom-excerpt').type(mockaroo[random].char_sequence)
		cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').click()
        cy.wait(5000);
        cy.visit('http://localhost:2368/ghost/#/pages')
        cy.wait(2000);
        cy.get('.gh-content-entry-title').should(($p) => {
            expect($p.first()).to.contain(mockaroo[random].univer)
        });
    })
	
  
   
     it('21. Crear page con título - custom-excerpt >  300 characters.', () => {
	 
	 cy.get('#ember37').click()
        //cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/pages')
        cy.get('a[href*="editor/page"]').first().click()
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/page')
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(mockaroo[random].char_sequence)
		cy.get(".post-settings").first().click({force: true}); 
		cy.get('#custom-excerpt').type(mockaroo[random].base64)
		 cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').click()
        cy.get('.response').first().should(($p) => {
            expect($p.first()).to.contain('Excerpt cannot be longer than 300 characters.')
        });	 
   })



    it('22. Crear page con título - URL string', () => {
        cy.get('#ember37').click()
        cy.wait(4000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/pages')
        cy.get('a[href*="editor/page"]').first().click()
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/page')
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(mockaroo[random].dateOld).should('have.value', mockaroo[random].dateOld)
		cy.get(".post-settings").first().click({force: true}); 
		cy.get('#custom-excerpt').type(mockaroo[random].base64)
		
		cy.get(".settings-menu-header-action > span").first().click({force: true}); 
		 		
        cy.get('.response').first().should(($p) => {
            expect($p.first()).to.contain('Excerpt cannot be longer than 300 characters.')
        });
    })
	
	
	
    it('23. Con una page existente - titulo > 255 characters- publicarlo ', () => {      		
		cy.get('#ember37').click()
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/pages')
		cy.get(".gh-content-entry-title").first().click({force: true});
        cy.wait(5000);
		cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(mockaroo[random].base64)
        cy.get(".gh-btn span").first().click({force: true}); 
        cy.wait(2000);
        cy.get(".gh-btn-blue").click();
 		
        cy.get('.gh-alert-content').first().should(($p) => {
            expect($p.first()).to.contain('Saving failed: Title cannot be longer than 255 characters.')
        });

    })	
	

    it('24.Con una page existente - titulo > 255 characters- publicarlo ', () => {
		cy.get('#ember37').click()
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/pages')
        cy.get(".gh-content-entry-title").first().click({force: true});
        cy.wait(7000);
		cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(mockaroo[random].base64)
        cy.get(".gh-btn span").first().click({force: true}); 
        cy.wait(2000);
        cy.get(".gh-btn-blue").click();
 		
        cy.get('.gh-alert-content').first().should(($p) => {
            expect($p.first()).to.contain('Saving failed: Title cannot be longer than 255 characters.')
        });

    })
	
	it('25. Con una page  existente - titulo > URl ', () => {
		cy.get('#ember37').click()
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/pages')
        cy.get(".gh-content-entry-title").first().click({force: true});
        cy.wait(7000);
		cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(mockaroo[random].url)
        cy.get(".gh-btn span").first().click({force: true}); 
        cy.wait(2000);
        cy.get(".gh-btn-blue").click();
 		
        cy.get('.gh-alert-content').first().should(($p) => {
            expect($p.first()).to.contain('Saving failed: Title cannot be longer than 255 characters.')
        });

    })	
	
	
    it('26.Con una page existente - titulo > 255 characters- publicarlo ', () => {
		cy.get('#ember37').click()
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/pages')
        cy.get(".gh-content-entry-title").first().click({force: true});
        cy.wait(7000);
		cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(mockaroo[random].base64)
        cy.get(".gh-btn span").first().click({force: true}); 
        cy.wait(2000);
        cy.get(".gh-btn-blue").click(); 		
        cy.get('.gh-alert-content').first().should(($p) => {
            expect($p.first()).to.contain('Saving failed: Title cannot be longer than 255 characters.')
        });
		cy.get(".gh-publishmenu-button").click(); 		
        cy.get('.gh-alert-content').first().should(($p) => {
            expect($p.first()).to.contain('Saving failed: Title cannot be longer than 255 characters.')
        });

    })	
	
	
	
	it('27. Con una page  existente - publicarla  ', () => {
		cy.get('#ember37').click()
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/pages')
        cy.get(".gh-content-entry-title").first().click({force: true});
        cy.wait(3000);
		cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(mockaroo[random].univer)
        cy.get(".gh-btn span").first().click({force: true}); 
        cy.wait(2000);
        cy.get(".gh-btn-blue").click(); 		
        cy.wait(3000);
        cy.get('.gh-notification-title').first().should(($p) => {
            expect($p.first()).to.contain('Published')
        });

    })
	
	
})
