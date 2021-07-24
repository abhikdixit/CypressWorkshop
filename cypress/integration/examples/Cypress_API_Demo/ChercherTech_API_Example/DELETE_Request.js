// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('DELETE Service Example', ()=>{
 
    it("test delete", () => {
        cy.request("DELETE", "https://chercher.tech/sample/api/product/delete", {
          id: "5193",
        }).then((response) => {
          // response.body is automatically serialized into JSON
          cy.log(response.body);
        });
      });
 
});