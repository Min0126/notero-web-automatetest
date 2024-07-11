describe('forget password', () => {
    it('forget password}', () => {

        cy.visit(Cypress.env("BASE_URL"))
        
        cy.contains('คลิกที่นี่').click();
    
        cy.get('input[name="email"]').type(Cypress.env("EMAIL_LOGIN"));
    
        cy.get('button[type="button"]').click();
    
        cy.url().should('include', '/request-completed');

        cy.screenshot(`forget-password-success}`);

        cy.get('button[type="button"]').click();

        cy.url().should('include', '/');

      });
  });

  
// const viewport = require("../../support/viewport.config")

// describe('forget password', () => {
//     it('forget password Test on ${viewport.name}', () => {

//       cy.visit(Cypress.env("BASE_URL"))
//       viewport.forEach((viewport) => {
//         cy.viewport(viewport.width, viewport.height);
        
//         cy.contains('คลิกที่นี่').click();
    
//         cy.get('input[name="email"]').type(Cypress.env("EMAIL_LOGIN"));
    
//         cy.get('button[type="button"]').click();
    
//         cy.url().should('include', '/request-completed');

//         cy.screenshot(`forget-password-success-viewport_${viewport.name}`);

//         cy.get('button[type="button"]').click();

//         cy.url().should('include', '/');

//         })
//       });
//   });




  
