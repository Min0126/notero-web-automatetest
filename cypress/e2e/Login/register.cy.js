
describe('forget password', () => {
      it('register', () => {
        cy.visit(Cypress.env("BASE_URL"))

        cy.get('button[type="button"]').click();
    
        cy.get('input[name="email"]').type(Cypress.env("EMAIL_REGISTER"));
    
        cy.get('button[type="button"]').click();
    
        cy.url().should('include', '/request-completed');

        cy.screenshot('register-sendemail-success');

        cy.get('button[type="button"]').click();
        
        cy.url().should('include', '/');
      });
  });
