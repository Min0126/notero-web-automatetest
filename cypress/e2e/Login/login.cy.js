

describe('forget password', () => {
      it('login', () => {
        cy.visit(Cypress.env("BASE_URL"))
    
        cy.get('input[type="text"]').type(Cypress.env("ID_NOTERO"));
    
        cy.get('input[type="password"]').type(Cypress.env("PASSWORD_LOGIN"));
    
        cy.get('button[type="submit"]').click();
    
        cy.url().should('include', '/license');
        
        cy.screenshot('login-success');
      });
  });
