describe('NotFound - UI', () => {
  beforeEach(() => {
    cy.visit('/broken');
  });

  it('should be displayed', () => {
    cy.findByTestId('not-found').should('exist');
  });
});
