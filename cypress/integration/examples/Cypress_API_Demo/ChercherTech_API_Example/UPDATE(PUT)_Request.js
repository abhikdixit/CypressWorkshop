// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('PUT- Service Example', () => {
    it("test put", () => {
        cy.request("PUT", "https://chercher.tech/sample/api/product/update", {
          id: "5195",
          name: "Sushant",
          description: "Hello",
          price: "4000",
        }).then((response) => {
          // response.body is automatically serialized into JSON
          cy.log(response.body);
        });
      });

      
});