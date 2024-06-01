import { loginPage } from "../pages/loginPage";

describe("Login functionality", () => {
  it("should login successfully", () => {
    cy.visit("/login");

    cy.fixture("user").then((user) => {
      loginPage.LoginFillForm(user);
    });

    cy.url().should("equal", Cypress.config("baseUrl"));
  });
});
