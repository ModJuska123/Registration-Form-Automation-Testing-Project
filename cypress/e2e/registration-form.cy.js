describe('registration form functionality', () => {

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
  
  it('Customer is able to fill registration form', () => {
    // Customer goes to page
    cy.visit('http://localhost:5173')

    // Fill the form
    cy.get("input[name='username']").type("bebras")
    cy.get("input[name='email']").type("bebras@gmail.com")
    cy.get("input[name='password']").type("123456")
    cy.get("input[name='dob']").type("2024-07-05") // Corrected date format

    // Submit the form
    cy.contains("button", /submit/i).click()

    // Increase timeout for checking the submitted information
    cy.contains("Submitted Information:", { timeout: 10000 }).should("be.visible")

    // Check for the specific content
    cy.contains("Submitted Information: Username: bebras Email: bebras@gmail.com Date of Birth: 2024-07-05 Age: -1", { timeout: 10000 }).should("be.visible")
  })
})


// describe('registration form submit functionality', () => {
  
//   it('Customer is able to fill registration form', () => {
//     // Customer goes to page
//     cy.visit('http://localhost:5173')

//     // Fill the form
//     cy.get("input[name='username']").type("bebras")
//     cy.get("input[name='email']").type("bebras@gmail.com")
//     cy.get("input[name='password']").type("123456")
//     cy.get("input[name='dob']").type("2024-07-05") // Corrected date format

//     // Submit the form
//     cy.contains("button", /submit/i).click()

//     // Verify if the button click worked by checking for a specific change
//     cy.url().should('include', '/submitted') // Assuming the URL changes after submission

//     // Debug by logging the HTML body
//     cy.get('body').then(($body) => {
//       cy.log($body.html()) // Logs the entire HTML of the body
//       if ($body.find('Submitted Information: Username: bebras Email: bebras@gmail.com Date of Birth: 2024-07-05 Age: -1').length) {
//         cy.contains("Submitted Information: Username: bebras Email: bebras@gmail.com Date of Birth: 2024-07-05 Age: -1").should("be.visible")
//       } else {
//         throw new Error('Submitted information not found')
//       }
//     })
//   })
// })

