//context('Actions', () => {
describe('Prueba escenarios ghost  - Post', () => {

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
        cy.wait(5000);
        cy.visit('http://localhost:2368/ghost/#/posts')
        cy.wait(2000); 
    })
    


    it('13. Con un post existente - titulo  naughty_string - publicarlo ', () => {
        cy.get(".gh-content-entry-title").first().click({force: true});
        cy.wait(7000);
		cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(mockaroo[random].naughty_string)
        cy.get(".gh-btn span").first().click({force: true}); 
        cy.wait(2000);
        cy.get(".gh-btn-blue").click();
 		
        cy.get('.gh-notification-title').first().should(($p) => {
            expect($p.first()).to.contain('Published')
        });

    })
	
	
   
    it('14. Crear Post  - settings custom-excerpt  > 300 characters   ', () => {
        
		cy.get('a[href*="editor/post"]').first().click()
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/post')
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type( mockaroo[random].char_sequence)
        cy.wait(1000);
		cy.get(".post-settings").first().click({force: true}); 
		//cy.get('#url').type(mockaroo[random].char_sequence)
		cy.get('#custom-excerpt').type(mockaroo[random].base64)
		
		cy.get(".settings-menu-header-action > span").first().click({force: true}); 
		 		
        cy.get('.response').first().should(($p) => {
            expect($p.first()).to.contain('Excerpt cannot be longer than 300 characters.')
        });

    })
	

	

    it('15. Con un post existente - titulo > 255 characters- publicarlo ', () => {
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
	
	it('16. Con un post existente - titulo > URl ', () => {
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
	



})