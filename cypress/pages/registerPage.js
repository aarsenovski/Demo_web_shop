const locators = {
  maleGenderRadioButton: 'input[id="gender-male"]',
  femaleGenderRadioButton: 'input[id="gender-female"]',
  firstName: '[id="FirstName"]',
  lastName: '[id="LastName"]',
  email: '[id="Email"]',
  password: '[id="Password"]',
  confirmPassword: '[id="ConfirmPassword"]',
  registerBtn: '[id="register-button"]',
  emailExistsText: "The specified email already exists",
};

const registerFillForm = (user) => {
  cy.get(locators.maleGenderRadioButton).click();
  cy.get(locators.firstName).type(user.firstName);
  cy.get(locators.lastName).type(user.lastName);
  cy.get(locators.email).type(user.email);
  cy.get(locators.password).type(user.password);
  cy.get(locators.confirmPassword).type(user.confirmPassword);
  cy.get(locators.registerBtn).click();
};

export const registerPage = {
  locators,
  registerFillForm,
};
