//context('Actions', () => {
	
describe('Prueba escenarios ghost  - Post', () => {

	let config = new Array;
	let mockaroo = new Array;
	let random = 0;
	let usuario=0;
	
	before(() => {
		cy.fixture('config').should((_config) => {
			config = _config;
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
		//cy.wait(7000);
		
    })
   
    it('7. Crear post con título - navegación', () => {
        cy.get('#ember28').click()
        cy.wait(7000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/posts')

    })

    it('8. Crear post con título navegación segundo nivel', () => {
        cy.get('#ember28').click()
        cy.wait(7000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/posts')
        cy.get('a[href*="editor/post"]').first().click()
        cy.wait(7000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/post')
    })
	

    it('9. Crear post con título extenso', () => {
        cy.get('#ember28').click()
        cy.wait(7000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/posts')
        cy.get('a[href*="editor/post"]').first().click()
        cy.wait(7000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/post')        
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(mockaroo[random].naughty_string).should('have.value', mockaroo[random].naughty_string)
		
        
    })

    it('10. Crear post con título - naughty_string', () => {
        cy.get('#ember28').click()
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/posts')
        cy.get('a[href*="editor/post"]').first().click()
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/post')
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(mockaroo[random].naughty_string)
        cy.wait(2000);
        cy.visit('http://localhost:2368/ghost/#/posts')
		cy.get('.gh-list-row.gh-posts-list-item').should('not.contain', mockaroo[random].naughty_string)
        
    })
	
    
    it('11. Crear post con título - image base64', () => {
        cy.get('#ember28').click()
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/posts')
        cy.get('a[href*="editor/post"]').first().click()
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/post')
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(mockaroo[random].base64)
        cy.wait(2000);
        cy.visit('http://localhost:2368/ghost/#/posts')
		cy.get('.gh-list-row.gh-posts-list-item').should('not.contain', mockaroo[random].base64)
        
    })
	
	

    it('12. Crear post con título valido', () => {
        cy.get('#ember28').click()
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/posts')
        cy.get('a[href*="editor/post"]').first().click()
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/post')
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type( mockaroo[random].char_sequence)
        cy.wait(1000);
        cy.get('.koenig-editor__editor-wrapper').click()
        cy.wait(7000);
        cy.visit('http://localhost:2368/ghost/#/posts')
        cy.wait(2000);
        cy.get('.gh-list-row.gh-posts-list-item').should(($p) => {
            expect($p.first()).to.contain( mockaroo[random].char_sequence)
        })
    })
	
	
})
