// type definitions for Cypress object "cy"
/// <reference types="cypress" />

import LoginPage from "../../PageObjects_OrangeHRM/LoginPage"
import HomePage from "../../PageObjects_OrangeHRM/HomePage"

//const tests = require('TestData/MultiData.json')
const tests = require('../PageObject_OrangeHRMScripts/MultiData.json')

describe('OrangeHRM Login Test', function() {
   
     tests.forEach(element => {
         
            
    it('Visits the OrangeHRM Page and Perform Login Action', function() {
        const PLogin=new LoginPage()
        const PHome=new HomePage()
    //Visit the OrnageHRM Website
    PLogin.LaunchURL("https://opensource-demo.orangehrmlive.com/");
       // Enter UserName and Password
    PLogin.EnterUserName(element.uname)
    PLogin.EnterPassword(element.password)
    PLogin.ClickLoginButton()
    //Verify that user can see OrangeHRM title
    cy.title().should('be.equal','OrangeHRM')
    cy.url().should('include','/index.php/dashboard')

    //Lohout from OrangeHRM
    PHome.ClickWelcomeLink()
    PHome.ClickLogoutLink()
   
});
  })
  })