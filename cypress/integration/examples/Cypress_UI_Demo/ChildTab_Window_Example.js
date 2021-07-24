// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Child Tab Example', function () {
    // test case
    it.skip('Child Tab -Test 1', function (){
        // launch the url
        cy.visit("https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm");
        // removing the target attribute from the link with removeAttr()
        cy.get('a[title="TutorialsPoint - Home"]')
        .invoke('removeAttr', 'target').click();
        // assertion to verify the current Url
        cy.url().should('include','https://www.tutorialspoint.com/index.htm');
        //cy.get('.mui-btn').click()
        // moving back to the parent tab with the help of go() method
        //cy.go('back');
        cy.go('back');
     });

         // test case
    it('Child Tab -Test 2', function (){
        // launch the url
        cy.visit("https://opensource-demo.orangehrmlive.com/");

           // Enter UserName and Password
    
    cy.get('input#txtUsername').type('Admin')
    cy.get('input#txtPassword').type('admin123')
    cy.get('input#btnLogin').click()
    //Verify Dashboard Tab
    cy.get('#menu_dashboard_index > b').should('have.text','Dashboard')
        // removing the target attribute from the link with removeAttr()
        cy.get("a[href='http://www.orangehrm.com/']")
        .invoke('removeAttr', 'target').click();
     });
})