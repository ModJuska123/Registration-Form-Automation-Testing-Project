Cypress.Commands.add("fillFormAndSubmit", (username = '', email = '', password = '', dateOfBirth = '') => {
    cy.visit('http://localhost:5173/')
    if (username) {
        cy.get('[name="username"]').type(username)
    }
    if (email) {
        cy.get('[name="email"]').type(email)
    }
    if (password) {
        cy.get('[name="password"]').type(password)
    }
    if (dateOfBirth) {
        cy.get('[name="dob"]').type(dateOfBirth)
    }
    cy.get('[data-cy="submit"]').click()
  });
  