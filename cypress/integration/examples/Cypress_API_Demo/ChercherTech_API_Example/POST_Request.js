describe('POST- Service Example', () => {
    it("test post", () => {
        cy.request("POST", "https://chercher.tech/sample/api/product/create", {
          name: "Fathima",
          description: "Welcome to Cypress",
          price: "200000",
        }).then((response) => {
          // response.body is automatically serialized into JSON
          cy.log(response.body);
          expect(response.body).contains("Product was created with UI.")
        });
      });
});