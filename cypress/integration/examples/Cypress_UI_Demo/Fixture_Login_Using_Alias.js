// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Login to Orange HRM', function() {
    
      //Use the cy.fixture() method to pull data from fixture file
   beforeEach(function () {
     //Using Allia we can assign the return function to allias and call them.
    cy.fixture('UserLoginDetails').as('user')
  })
    
    it('Visits the OrangeHRM Page and Perform Login Action', function() {
    //Visit the OrnageHRM Website
    cy.visit(this.user.URL);
    
   // Enter UserName and Password
    
    cy.get('input#txtUsername').type(this.user.Uname)
    cy.get('input#txtPassword').type(this.user.Upass)
    cy.get('input#btnLogin').click()
    //Verify Dashboard Tab
    cy.get('#menu_dashboard_index > b').should('have.text','Dashboard')
    //Verify Admin Tab and Click
    cy.get('#menu_admin_viewAdminModule > b').should('have.contain','Admin').click()
   //Verify Admin URL in navigation bar
   cy.url().should('include','index.php/admin/viewSystemUsers')
   cy.contains('Welcome').click()
   //cy.get('#welcome').click()
   cy.get('a[href="/index.php/auth/logout"]').click()
   cy.url().should('include','index.php/auth/login')
   
  })
  })