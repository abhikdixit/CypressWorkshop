// type definitions for Cypress object "cy"
/// <reference types="cypress" />
//Changing the timeout from 6 seconds to 5 seconds


Cypress.config('pageLoadTimeout',80000)
describe('My First Cypress Test', function() {

    before(function() {
        // runs once before all tests in the it block
        //Visit the OrnageHRM Website
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        
       // Enter UserName and Password
        
        cy.get('input#txtUsername').type('Admin')
        cy.get('input#txtPassword').type('admin123')
        cy.get('input#btnLogin').click()
    
      })

/*       beforeEach(function() {
          
        // runs once before all tests in the it block
        cy.getCookie('orangehrm')
        .should('have.property', 'value')
        .then((cookie) => {
            cookieValue = cookie.value;
            cy.log(cookieValue)
            cy.wrap(cookieValue).as('pcookievalue');

        })
    
      }) */

    it('Visits the OrangeHRM Page and Perform Login Action', function() {
        cy.getCookiesValue()
                .then((returned_value) => {
                    cy.log("Cookies Value = " + returned_value)
                    cy.setCookie('orangehrm',returned_value)
                })

    //Verify Dashboard Tab
    cy.get('#menu_dashboard_index > b').should('have.text','Dashboard').click()
   
  })

  it('Visits the OrangeHRM Page and Perform Login Action', function() {

    cy.getCookiesValue()
    .then((returned_value) => {
        cy.log("Cookies Value = " + returned_value)
        cy.setCookie('orangehrm',returned_value)
    })
    //Verify Admin Tab and Click
    cy.get('#menu_admin_viewAdminModule > b').should('have.contain','Admin').click()
    
   //Verify Admin URL in navigation bar
   cy.url().should('include','index.php/admin/viewSystemUsers')
   
  })

  after(function() {
    // runs once after all tests in the it/specify block
    //Visit the OrnageHRM Website
    cy.contains('Welcome').click()
    //cy.get('#welcome').click()
    cy.get('a[href="/index.php/auth/logout"]').click()
    cy.url().should('include','index.php/auth/login')

  })
  })

