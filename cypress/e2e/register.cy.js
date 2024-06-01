import { registerPage } from "../pages/registerPage";

describe("Register functionality", () => {
  it("should register a user successfully", () => {
    cy.visit("/register");
    cy.fixture("user").then((user) => {
      const newUser = {
        ...user,
        email: `andrej-test${Date.now()}demo@test.com`,
      };
      registerPage.registerFillForm(newUser);
    });
    cy.url().should("equal", `${Cypress.config("baseUrl")}registerresult/1`);
  });

  it("should show error message if registering duplicate email", () => {
    cy.visit("/register");
    cy.fixture("user").then((user) => {
      registerPage.registerFillForm(user);
    });
    cy.contains(registerPage.locators.emailExistsText);
    cy.url().should("equal", `${Cypress.config("baseUrl")}register`);
  });
});
