// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Cypress Test', function () {

  it('Visits the OrangeHRM Page and Perform Login Action', function () {
    //Visit the OrnageHRM Website
    //cy.visit("https://opensource-demo.orangehrmlive.com/");
    //Calling Custom Command
    cy.Login_fixture('login')
    //Verify Dashboard Tab
    cy.get('#menu_dashboard_index > b').should('have.text', 'Dashboard')
    cy.contains('Welcome').click()
    //cy.get('#welcome').click()
    cy.get('a[href="/index.php/auth/logout"]').click()
    cy.url().should('include', 'index.php/auth/login')

  })
})