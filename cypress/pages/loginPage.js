const locators = {
  email: '[id="Email"]',
  password: '[id="Password"]',
  loginBtn: '[value="Log in"]',
};

const LoginFillForm = (user) => {
  cy.get(locators.email).type(user.email);
  cy.get(locators.password).type(user.password);
  cy.get(locators.loginBtn).click();
};

export const loginPage = {
  locators,
  LoginFillForm,
};
