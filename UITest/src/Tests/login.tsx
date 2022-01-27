import login from "../PageObject/loginPage";

context("Login Suite", () => {
  beforeEach(() => {
    cy.visit("http://the-internet.herokuapp.com/login");
  });

  it("Login successful", () => {
    login.getUsernameField().type("tomsmith");
    login.getPasswordField().type("SuperSecretPassword!");
    login.getSubmitButton().click();
    login.getMessage().contains("You logged into a secure area!");
    cy.contains(
      "Welcome to the Secure Area. When you are done click logout below."
    );
  });

  it("Login with wrong username", () => {
    login.getUsernameField().type("tomcruise");
    login.getPasswordField().type("SuperSecretPassword!");
    login.getSubmitButton().click();
    login.getMessage().contains("Your username is invalid!");
  });

  it("Login with wrong password", () => {
    login.getUsernameField().type("tomsmith");
    login.getPasswordField().type("SuperSecret");
    login.getSubmitButton().click();
    login.getMessage().contains("Your password is invalid!");
  });

  it("Logout successful", () => {
    login.getUsernameField().type("tomsmith");
    login.getPasswordField().type("SuperSecretPassword!");
    login.getSubmitButton().click();
    login.getMessage().contains("You logged into a secure area!");
    login.getLogoutButton().click({ force: true });
    login.getMessage().contains("You logged out of the secure area!");
  });
});
