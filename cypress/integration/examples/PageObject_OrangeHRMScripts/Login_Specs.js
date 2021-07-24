// type definitions for Cypress object "cy"
/// <reference types="cypress" />

import LoginPage from "../../PageObjects_OrangeHRM/LoginPage"

describe('OrangeHRM Login Test', function() {
    it('Visits the OrangeHRM Page and Perform Login Action', function() {
        const PLogin=new LoginPage()
    //Visit the OrnageHRM Website
    PLogin.LaunchURL("https://opensource-demo.orangehrmlive.com/");
       // Enter UserName and Password
    PLogin.EnterUserName('Admin')
    PLogin.EnterPassword('admin123')
    PLogin.ClickLoginButton()
    //Verify that user can see OrangeHRM title
    cy.title().should('be.equal','OrangeHRM')
    cy.url().should('include','/index.php/dashboard')
   
  })
  })