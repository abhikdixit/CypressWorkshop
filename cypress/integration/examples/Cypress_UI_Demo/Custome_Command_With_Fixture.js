// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Cypress Test', function () {

  //Use the cy.fixture() method to pull data from fixture file
  before(function () {
    cy.fixture('login').then(function (data) {
      this.data = data;
    })
  })


  it('Visits the OrangeHRM Page and Perform Login Action', function () {
    //Visit the OrnageHRM Website
    cy.visit(this.data.URL);

    // Enter UserName and Password
    //Calling Custom Command to Enter username, password and Click Login button 
    cy.Login(this.data.Uname, this.data.Upass)
    //Verify Dashboard Tab
    cy.get('#menu_dashboard_index > b').should('have.text', 'Dashboard')
    cy.contains('Welcome').click()
    //cy.get('#welcome').click()
    cy.get('a[href="/index.php/auth/logout"]').click()
    cy.url().should('include', 'index.php/auth/login')

  })
})