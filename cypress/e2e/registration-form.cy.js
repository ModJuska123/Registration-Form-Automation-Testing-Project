
describe("registration form display functionality", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("displays registration form Username", () => {
    cy.contains("label", "Username:").should("be.visible");
    cy.get("input[name='username']").should("be.visible").and("have.value", "");
  });

  it("displays registration form Email", () => {
    cy.contains("label", "Email:").should("be.visible");
    cy.get("input[name='email']").should("be.visible").and("have.value", "");
  });

  it("displays registration form Password", () => {
    cy.contains("label", "Password:").should("be.visible");
    cy.get("input[name='email']").should("be.visible").and("have.value", "");
  });

  it("displays registration form Date of Birth", () => {
    cy.contains("label", "Date of Birth:").should("be.visible");
    cy.get("input[name='dob']").should("be.visible").and("have.value", "");
  });

  it("displays Submit Button", () => {
    cy.contains("button", /submit/i).should("be.visible");
  });
});


describe("registration form submit functionality", () => {
  it("sees submitted information with username, email, date of birth", () => {
    
    cy.visit("http://localhost:5173");

    cy.get("input[name='username']").type("user");
    cy.get("input[name='email']").type("user@gmail.com");
    cy.get("input[name='password']").type("456123");
    cy.get("input[name='dob']").type("1990-01-01");
    cy.contains("button", "Submit").click();
    cy.get(".submitted-info").should("contain", "Username: user");
    cy.get(".submitted-info").should("contain", "Email: user@gmail.com");
    cy.get(".submitted-info").should("contain", "Date of Birth: 1990-01-01");
    cy.get(".submitted-info").should("contain", "Age: 34");
  });
});


describe("Registration form validation", () => {
  let correctUsername = "user";
  let correctEmail = "user@gmail.com";
  let correctPassword = "123456";
  let correctBirthDate = "2001-01-01";

  it("should display validation errors if submitted empty field", () => {
    cy.fillFormAndSubmit("", "", "", "");

    cy.get(".error")
      .should("be.visible")
      .and("contain", "Username is required")
      .and("contain", "Email is required")
      .and("contain", "Password is required")
      .and("contain", "Date of Birth is required");
  });

  it("should display validation errors for invalid email", () => {
    cy.fillFormAndSubmit(
      correctUsername,
      'my-email',
      correctPassword,
      correctBirthDate
    );

    cy.get(".error")
    .should("be.visible")
    .and("contain", "Email is invalid");
  });

  it("should display validation errors for short password", () => {
    cy.fillFormAndSubmit(
      correctUsername,
      correctEmail,
      "321",
      correctBirthDate
    );

    cy.get(".error")
      .should("be.visible")
      .and("contain", "Password must be at least 6 characters");
  });

  it("should inspect if date of birth have input of type 'date'", () => {
    cy.fillFormAndSubmit(
      correctUsername,
      correctEmail,
      correctPassword,
      correctBirthDate
    );
    
    cy.get('[name="dob"]').should("have.attr", "type", "date");
  });
});
