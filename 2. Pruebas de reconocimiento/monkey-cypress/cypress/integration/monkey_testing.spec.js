describe('Pruebas ghost ', function() {

    it('monkey testing', function(){
        cy.visit('http://localhost:2368/ghost/#/signin');
        cy.wait(1000);
        cy.get('#ember8').type('m.leguizamong@uniandes.edu.co');
        cy.get('#ember10').type('123456789!');
        cy.get('#ember12 > span').click({force: true});
        randomEvent(10);
    })
	
	
	var eventos = [linkEvent, buttonEvent, inputEvent];

	function getRandom(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	};
	
	function randomEvent(numEvent){
		if( numEvent > 0) {
			var random = getRandom(0,3);
			console.log(eventos[random]);
			eventos[getRandom(0,3)]();
			var numMonkeysActualizado = numEvent -1;
			cy.wait(2500);
			randomEvent(numMonkeysActualizado);
		}
	};


	function linkEvent() {
		cy.get('a').then($Links => {
			var randLink = $Links.get(getRandom(0, $Links.length));
			if(!Cypress.dom.isHidden(randLink)) {
				cy.wrap(randLink).click({force: true});
			}
		});
	};

	function inputEvent() {
		cy.get('input').then($Inputs => {
			var randInput = $Inputs.get(getRandom(0, $Inputs.length));
			if(!Cypress.dom.isHidden(randInput)){
				cy.wrap(randInput).click({force: true}).type('prueba texto');
			}
		});
	};

	function buttonEvent() {
		cy.get('button').then($Buttons => {
			var randButton = $Buttons.get(getRandom(0, $Buttons.length));
			if(!Cypress.dom.isHidden(randButton)){
				cy.wrap(randButton).click({force: true});
			}
		})
	};

});



