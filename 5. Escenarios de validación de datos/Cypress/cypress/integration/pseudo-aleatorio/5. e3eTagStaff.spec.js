//context('Actions', () => {
	
describe('Prueba escenarios ghost  - Tags - staff - ', () => {

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
        cy.wait(1000);
				
    })
    

    it('28. Crear tag - char_sequence', function() { 

        cy.get('a[href*="/tags').first().click()
		cy.get('a[href*="/tags/new').first().click()
		cy.get('#tag-name').type(mockaroo[random].char_sequence, { force: true })
		cy.get('.gh-btn.gh-btn-blue').click()
		cy.get('a[href*="/tags').first().click()
		cy.wait(2000);
		cy.get('h3.gh-tag-list-name').should(($p) => {
			expect($p).to.contain(mockaroo[random].char_sequence)
        })
	 
    })
	
	it('29. Crear tag - chine', function() { 

        cy.get('a[href*="/tags').first().click()
		cy.get('a[href*="/tags/new').first().click()
		cy.get('#tag-name').type(mockaroo[random].chine, { force: true })
		cy.get('.gh-btn.gh-btn-blue').click()
		cy.get('a[href*="/tags').first().click()
		cy.wait(2000);
		cy.get('h3.gh-tag-list-name').should(($p) => {
			expect($p).to.contain(mockaroo[random].chine)
        })
	 
    })
	
	it('30. Crear tag - date', function() { 

        cy.get('a[href*="/tags').first().click()
		cy.get('a[href*="/tags/new').first().click()
		cy.get('#tag-name').type(mockaroo[random].dateOld, { force: true })
		cy.get('.gh-btn.gh-btn-blue').click()
		cy.get('a[href*="/tags').first().click()
		cy.wait(2000);
		cy.get('h3.gh-tag-list-name').should(($p) => {
			expect($p).to.contain(mockaroo[random].dateOld)
        })
	 
    })

	
	it('31. Crear tag - @', function() { 

        cy.get('a[href*="/tags').first().click()
		cy.get('a[href*="/tags/new').first().click()
		cy.get('#tag-name').type(mockaroo[random].email, { force: true })
		cy.get('.gh-btn.gh-btn-blue').click()
		cy.get('a[href*="/tags').first().click()
		cy.wait(2000);
		cy.get('h3.gh-tag-list-name').should(($p) => {
			expect($p).to.contain(mockaroo[random].email)
        })
    })
	
	
	
    it('32. Crear tag - URL', function() { 

        cy.get('a[href*="/tags').first().click()
		cy.get('a[href*="/tags/new').first().click()
		cy.get('#tag-name').type(mockaroo[random].url, { force: true })
		cy.get('.gh-btn.gh-btn-blue').click()
		cy.wait(2000);
		cy.get('p').should(($p) => {
			expect($p).to.contain('Tag names cannot be longer than 191 characters.')
        })
    })
	
	


    it('32. Crear tag - base64', function() { 

        cy.get('a[href*="/tags').first().click()
		cy.get('a[href*="/tags/new').first().click()
		cy.get('#tag-name').type(mockaroo[random].base64, { force: true })
		cy.get('.gh-btn.gh-btn-blue').click()
		cy.wait(2000);
		cy.get('p').should(($p) => {
			expect($p).to.contain('Tag names cannot be longer than 191 characters.')
        })
    })
	

	
	it('33. Crear tag - tag-description', function() { 

        cy.get('a[href*="/tags').first().click()
		cy.get('a[href*="/tags/new').first().click()
		cy.get('#tag-name').type(mockaroo[random].univer, { force: true })
		cy.get('#tag-description').type(mockaroo[random].base64+mockaroo[random].url, { force: true })				
		cy.get('.gh-btn.gh-btn-blue').click()
		cy.wait(2000);
		cy.get('p').should(($p) => {
			expect($p).to.contain('Description cannot be longer than 500 characters.')
        })
    })
	
	
	
	it('34. Crear tag - tag-description', function() { 

        cy.get('a[href*="/tags').first().click()
		cy.get('a[href*="/tags/new').first().click()
		cy.get('#tag-name').type(mockaroo[random].univer, { force: true })
		cy.get('#tag-description').type(mockaroo[random].char_sequence, { force: true })				
		cy.get('.gh-btn.gh-btn-blue').click()
		cy.get('a[href*="/tags').first().click()
		cy.wait(2000);
		cy.get('h3.gh-tag-list-name').should(($p) => {
			expect($p).to.contain(mockaroo[random].univer)
        })
    })

	it('35. Crear tag - tag-description - fail Slug', function() { 

        cy.get('a[href*="/tags').first().click()
		cy.get('a[href*="/tags/new').first().click()
		cy.get('#tag-name').type(mockaroo[random].univer, { force: true })
		cy.get('#tag-description').type(mockaroo[random].char_sequence, { force: true })				
		cy.get('#tag-slug').type(mockaroo[random].url, { force: true })				
		cy.get('.gh-btn.gh-btn-blue').click()
		cy.get('a[href*="/tags').first().click()
		cy.wait(2000);
		cy.get('h1').should(($p) => {
			expect($p).to.contain('Are you sure you want to leave this page?')
        })
	 })
	 
	 
	 
	it('36. Crear tag - url', function() { 

        cy.get('a[href*="/tags').first().click()
		cy.get('a[href*="/tags/new').first().click()
		cy.get('#tag-name').type(mockaroo[random].dum_url, { force: true })
		cy.get('#tag-description').type(mockaroo[random].multi, { force: true })				
		cy.get('#tag-slug').type(mockaroo[random].multi, { force: true })				
		cy.get('.gh-btn.gh-btn-blue').click()
		cy.get('span').should(($p) => {
			expect($p).to.contain('Saved')
        })

	 })
	 
	 
	 
	
	 it('37. Crear Staff users ', function() { 

        cy.get('a[href*="/staff').first().click()
		cy.get('.gh-btn.gh-btn-green').click()		
		cy.get('#new-user-email').type(mockaroo[random].email, { force: true })
		cy.get('.modal-footer>.gh-btn.gh-btn-green').first().click()
		cy.wait(5000);
		cy.get('a[href*="/staff').first().click()
  	    cy.get('h3.apps-card-app-title').should(($p) => {
			expect($p).to.contain(mockaroo[random].email)
        })

	 })
	 
	 
	 
	 it('38. Crear Staff users - URL', function() { 

        cy.get('a[href*="/staff').first().click()
		cy.get('.gh-btn.gh-btn-green').click()		
		cy.get('#new-user-email').type(mockaroo[random].dum_url, { force: true })
		cy.get('.modal-footer>.gh-btn.gh-btn-green').first().click()
		cy.wait(1000);
  	    cy.get('p').should(($p) => {
			expect($p).to.contain('Invalid Email.')
        })

	 })
	 
	it('39. Crear Staff users - doble email', function() { 

        cy.get('a[href*="/staff').first().click()
		cy.get('.gh-btn.gh-btn-green').click()		
		cy.get('#new-user-email').type(mockaroo[random].email+''+mockaroo[random].email, { force: true })
		cy.get('.modal-footer>.gh-btn.gh-btn-green').first().click()
		cy.wait(1000);
  	    cy.get('p').should(($p) => {
			expect($p).to.contain('Invalid Email.')
        })
	 })
	 
	 
	 it('40. Crear Staff users ', function() { 

        cy.get('a[href*="/staff').first().click()
		cy.get('.gh-btn.gh-btn-green').click()		
		cy.get('#new-user-email').type(mockaroo[random].email, { force: true })
		cy.get('.modal-footer>.gh-btn.gh-btn-green').first().click()
		cy.wait(5000);
		cy.get('.gh-btn.gh-btn-green').first().click()		
		cy.get('#new-user-email').type(mockaroo[random].email, { force: true })
		cy.get('.modal-footer>.gh-btn.gh-btn-green').first().click()
		cy.wait(5000);
  	    cy.get('p').should(($p) => {
			expect($p).to.contain('A user with that email address was already invited.')
        })

	 })	 
	 
	 
	

})
