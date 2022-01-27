export default {
  getUsernameField() {
    return cy.get("#username");
  },
  getPasswordField() {
    return cy.get("#password");
  },
  getSubmitButton() {
    return cy.get("button").contains(" Login");
  },
  getLogoutButton() {
    return cy.contains(" Logout");
  },
  getMessage() {
    return cy.get("#flash-messages");
  },
};
