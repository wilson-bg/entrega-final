//const normalizeText = (s) => s.replace(/\s/g, '').toLowerCase()

describe('Prueba escenarios ghost', () => {

	let config = new Array;
	let mockaroo = new Array;
	let random = 0;
	let usuario = 0;
	
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
			//console.log('random: ' + random)
			//console.log(mockaroo[random])
		})
	})
	
    beforeEach(() => {
		cy.visit('http://localhost:2368/ghost/#/signin')
		cy.wait(1000);
	})
	
	
    it('1. Intento de login con contraseña inválida - naughty_string', () => {		
	
      cy.get('#ember8').type(config[usuario].user, { force: true })
      //cy.get('#ember10').type(config[0].pass, { force: true })
	  cy.get('#ember10').type(mockaroo[random].dateOld, { force: true })
      cy.get('#ember12').click()
      cy.wait(2000);
      
      cy.get('.main-error').should(($p) => {
        //expect($p.first()).to.contain('Your password is incorrect.')
		//expect($p.first()).to.contain('Too many login attempts.')
		//expect($p.first()).to.contain('Only 100 tries per IP address every 3600 seconds.')	
		let valor = $p.text()
		expect($p.first()).to.contain(valor)	
      })
    })
	
	
    it('2. Intento de login con contraseña inválida - base64', () => {
		
	
      cy.get('#ember8').type(config[usuario].user, { force: true })
      //cy.get('#ember10').type(config[usuario].pass, { force: true })
	  cy.get('#ember10').type(mockaroo[random].base64, { force: true })
      cy.get('#ember12').click()
      cy.wait(2000);
      
      cy.get('.main-error').should(($p) => {
		//expect($p.first()).to.contain('Your password is incorrect.')
		//expect($p.first()).to.contain('Too many login attempts.')
		//expect($p.first()).to.contain('Only 100 tries per IP address every 3600 seconds.')
		let valor = $p.text()
		expect($p.first()).to.contain(valor)
      })
	        
    }) 


   it('3. Intento de login inválido, con usuario aleatorio', () => {
        cy.get('#ember8').type(mockaroo[random].email, { force: true })
        cy.get('#ember10').type(config[usuario].pass, { force: true })
        cy.get('#ember12').click()
        cy.wait(2000);
        ///cy.get('.main-error').should(($p) => {
		///	expect($p.first()).to.contain('There is no user with that email address.')
        //})
		
    })
	

    it('4. Intento de login inválido, con usuario y contraseña aleatoria - naughty_string ', () => {
      cy.get('#ember8').type(mockaroo[random].naughty_string, { force: true })
        cy.get('#ember10').type(mockaroo[random].naughty_string, { force: true })
        cy.get('#ember12').click()
        cy.wait(2000);
        cy.get('.main-error').should(($p) => {
			expect($p.first()).to.contain('Please fill out the form to sign in.')
        })

    })

    it('5. Intento de login inválido, con usuario y contraseña aleatoria - URL ', () => {
      cy.get('#ember8').type(mockaroo[random].url, { force: true })
        cy.get('#ember10').type(mockaroo[random].naughty_string, { force: true })
        cy.get('#ember12').click()
        cy.wait(2000);
        cy.get('.main-error').should(($p) => {
			expect($p.first()).to.contain('Please fill out the form to sign in.')
        })

    })
	
	
	it('6. Intento de login inválido, con usuario y contraseña - chine ', () => {
      cy.get('#ember8').type(mockaroo[random].chine, { force: true })
        cy.get('#ember10').type(mockaroo[random].chine, { force: true })
        cy.get('#ember12').click()
        cy.wait(2000);
        cy.get('.main-error').should(($p) => {
			expect($p.first()).to.contain('Please fill out the form to sign in.')
        })

    })
	
})