/// <reference types="cypress"/>
it('Google Search', function(){

    cy.visit('https://google.com')
    cy.get('#APjFqb', {timeout:5000}).type('Automation step by step{Enter}')
    cy.contains('Videos').click()
    //cy.get('.FPdoLc > center > .gNO89b').click()
})