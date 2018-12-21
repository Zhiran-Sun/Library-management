describe("Home page", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  it("Shows a header", () => {
    cy.get(".vue-title").should('contain','My Library System');
    cy.get('b > i').should('contain','It\'s a choice to visit our library~~');
  });

  describe("Navigation bar", () => {
    it("Shows the required links", () => {
      cy.get(".navbar").contains('Home' );
      cy.get(':nth-child(1) > :nth-child(1) > .nav-link > .fa').should('contain', 'Introduction');
      cy.get(':nth-child(1) > :nth-child(2) > .nav-link > .fa').should('contain', 'Books List');
      cy.get(':nth-child(1) > :nth-child(3) > .nav-link > .fa').should('contain', 'Edit books');
      cy.get(':nth-child(1) > :nth-child(4) > .nav-link > .fa').should('contain', 'User List');
    });

    it("Redirects when links are clicked", () => {
      cy.get(':nth-child(1) > :nth-child(3) > .nav-link > .fa').click();
      cy.url().should('include','/addBook' );
      cy.get(':nth-child(1) > :nth-child(2) > .nav-link > .fa').click();
      cy.url().should('include','/books' );
    });
  })
});
