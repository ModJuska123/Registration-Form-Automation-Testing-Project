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
    cy.get("input[name='username']").type("bebras")
    cy.get("input[name='email']").type("bebras@gmail.com")
    cy.get("input[name='password']").type("456123")
    cy.get("input[name='dob']").type("1990-01-01") // Corrected date format

    // Submit the form
    cy.contains("button", "Submit").click()

    // Check for the specific content
    cy.get(".submitted-info").should("contain", "Username: bebras")
    cy.get(".submitted-info").should("contain", "Email: bebras@gmail.com")
    cy.get(".submitted-info").should("contain", "Date of Birth: 1990-01-01")
    cy.get(".submitted-info").should("contain", "Age: 34")
  })
})