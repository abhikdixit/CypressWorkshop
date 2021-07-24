import {defineStep} from 'cypress-cucumber-preprocessor/steps'
//import { after } from 'cypress/types/lodash';
import {Before,After,} from 'cypress-cucumber-preprocessor/steps'

/*Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })*/

Before(()=>{
    cy.log('Execution Started')
   //cy.visit("http://shop.demoqa.com/my-account/")
   //cy.visit("https://opensource-demo.orangehrmlive.com/")
})
//Steps to verify URL
defineStep('User see {string} url',(url) =>{
    cy.url().should('include',url)
})

//Steps to verify Title
defineStep('I see {string} in the title',(title) =>{
    cy.title().should('include',title)
})
After(()=>{
    cy.log('Execution End')
})