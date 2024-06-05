describe('registration form display functionality', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('displays registration form Username', () => {
    cy.contains("label", "Username:").should("be.visible")
    cy.get("input[name='username']").should("be.visible").and("have.value", "")
  })

  it('displays registration form Email', () => {
    cy.contains("label", "Email:").should("be.visible")
    cy.get("input[name='email']").should("be.visible").and("have.value", "")
  })

  it('displays registration form Password', () => {
    cy.contains("label", "Password:").should("be.visible")
    cy.get("input[name='email']").should("be.visible").and("have.value", "")
  })

  it('displays registration form Date of Birth', () => {
    cy.contains("label", "Date of Birth:").should("be.visible")
    cy.get("input[name='dob']").should("be.visible").and("have.value", "")
  })

  it('displays Submit Button', () => {
    cy.contains("button", /submit/i).should("be.visible")
  })
})

describe('registration form submit functionality', () => {
  
  it('sees submitted information with username, email, date of birth', () => {
    // Customer goes to page
    cy.visit('http://localhost:5173')

    // Fill the form
    cy.get("input[name='username']").type("user")
    cy.get("input[name='email']").type("user@gmail.com")
    cy.get("input[name='password']").type("456123")
    cy.get("input[name='dob']").type("1990-01-01") // Corrected date format

    // Submit the form
    cy.contains("button", "Submit").click()

    // Check for the specific content
    cy.get(".submitted-info").should("contain", "Username: user")
    cy.get(".submitted-info").should("contain", "Email: user@gmail.com")
    cy.get(".submitted-info").should("contain", "Date of Birth: 1990-01-01")
    cy.get(".submitted-info").should("contain", "Age: 34")
  })
})


// describe('registration form data validation', () => {
  
//   it('checks validity of Username, Email, Password, and Date of Birth', () => {
//     // Goes to the registration page
//     cy.visit('http://localhost:5173')

//     // Username validation: not shorter than 1 symbol
//     cy.get('input[name="username"]').type('a')
//     cy.get('form').submit()
//     cy.get('input[name="username"]').should('have.value', 'a')

//     // Email validation: should have "@" and "." symbols and symbols before "@", after and after "."
//     cy.get('input[name="email"]').type('test@example.com')
//     cy.get('form').submit()
//     cy.get('input[name="email"]').should('have.value', 'test@example.com')

//     // Password validation: not shorter than 6 symbols
//     cy.get('input[name="password"]').type('abcdef')
//     cy.get('form').submit()
//     cy.get('input[name="password"]').should('have.value', 'abcdef')

//     // Date of Birth validation: allow entering year, month, and date
//     cy.get('input[name="dob"]').type('2000-01-01')
//     cy.get('form').submit()
//     cy.get('input[name="dob"]').should('have.value', '2000-01-01') 
//   })
// })

describe ("Registration form validation", () => {
  let correctUsername = "user";
  let correctEmail = "user@gmail.com";
  let correctPassword = "123456";
  let correctBirthDate = "2001-01-01";

  it("should display validation errors if submitted empty field", () => {
    cy.fillFormAndSubmit("", "", "", "");

    cy.get(".error")
     .should("be.visible")
      and("contain", "Username is required")
      and("contain", "Email is required")
      and("contain", "Password is required")
      and("contain", "Date of Birth is required")
  })
});