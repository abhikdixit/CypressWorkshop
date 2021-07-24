// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('GET Service Example', ()=>{
 
    it("test GET", () => {
        cy.request("GET", "https://chercher.tech/sample/api/product/read?id=5193", {
        }).then((response) => {
        // Parse JSON the body.
        //const body = JSON.parse(response.body);
        expect(response.status).to.eq(200);
        expect(response.headers['content-type']).to.eq('application/json; charset=UTF-8');
        cy.log(response.body);
        expect(response.body).to.not.be.null; 
        });
      });
 
});