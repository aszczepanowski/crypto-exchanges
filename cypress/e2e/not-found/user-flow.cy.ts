describe('Not found - user flow', () => {
  beforeEach(() => {
    cy.visit('/broken');
  });

  it('should allow the user to return to the home page', () => {
    cy.findByTestId('home-button').click();
    cy.location('pathname').should('eq', '/');
  });
});
