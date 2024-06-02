import { homePage } from "../pages/homePage";

describe("search functionality", () => {
  it("add product to cart", () => {
    cy.visit("/");
    cy.get(homePage.locators.searchField).type("fiction");
    cy.get(homePage.locators.searchBtn).click();
  });

  // additionally test filtering, sorting, pagination
});
