// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Handling Mouse Hover in Cypress', function() {
      // test case
      it('Clicking on Sign-In', function (){
        // launch the application
        cy.visit("https://www.amazon.com/");
        // to display hidden element with invoke() with show
        cy.get('#nav-flyout-ya-signin').invoke('show');
        //click on the hidden element
        cy.contains('Sign').click();
        //assert to verify the url
        cy.url().should('include','signin');
        //cy.get('.a-spacing-small').should('have.text','Sign-In')
     });
  })