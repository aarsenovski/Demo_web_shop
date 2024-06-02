import product from "../fixtures/product.json";
import { productPage } from "../pages/productPage";

describe("test add to cart functionality", () => {
  beforeEach(() => {
    cy.intercept("POST", "**addproducttocart/details/45/1").as(
      "addProductToCart"
    );
  });
  it("should add product to cart", () => {
    cy.visit(product.productUrl);
    cy.get(productPage.locators.addToCart).click();

    //verify the action is done successfully by asserting on the response
    cy.wait("@addProductToCart").then((res) => {
      expect(res.response.body.success).to.eq(true);
    });
  });
});
