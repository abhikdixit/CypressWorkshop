// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import "cypress-real-events/support";

import 'cypress-file-upload';
//Wait Unit for Steps to wait Till we get the value
import 'cypress-wait-until';
//For Local Storage
import "cypress-localstorage-commands";

Cypress.Commands.add('postToken', () => {
  cy.request({
    method: 'POST',
    url: Cypress.env('api_identity_url'), //get from cypress.env.json
    form: true, //sets to application/x-www-form-urlencoded
    body: {
      grant_type: 'password',
      username: "abhinay.dixit@hotmail.com",
      password: "spree123"
    }
  })
  .its('body')
  .then(identity => {
    cy.setLocalStorage("access_token", identity.access_token);
  });
});


//Below is Login command to login to OrangeHRM application
Cypress.Commands.add('Login', (uname,upass) => {
       // Enter UserName and Password
    
       cy.get('input#txtUsername').type(uname)
       cy.get('input#txtPassword').type(upass)
       cy.get('input#btnLogin').click()
  })

  Cypress.Commands.add("Login_fixture", (file_name) => { 
     //using fixture in the command file
     cy.fixture(file_name).then(function(data){
     this.data = data;
     console.log(this.data);
     //Using Promise to handle the chain concept
     }).then(function(){
     cy.visit(this.data.URL);
     cy.get('input#txtUsername').type(this.data.Uname)
     cy.get('input#txtPassword').type(this.data.Upass)
     cy.get('input#btnLogin').click()
     })
     })

     //Below command to Read XLXS File

    /*  Cypress.Commands.add("parseXlsx", (inputFile) => {
      return cy.task('parseXlsx', { filePath: inputFile })
      }); */
//Below command to grab cookies value based on name of cookies
      Cypress.Commands.add('getCookiesValue',() => {
        cy.getCookie('orangehrm')
        .should('have.property', 'value')
        .then((cookie) => {
            const cookieValue = cookie.value;
            cy.log(cookieValue)

      });
    });