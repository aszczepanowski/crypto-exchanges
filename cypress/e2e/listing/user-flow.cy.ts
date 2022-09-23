describe('Listing - user flow', () => {
  const API_HOST = Cypress.env('REACT_APP_API_HOST');

  beforeEach(() => {
    cy.visit('/');
    cy.intercept(`${API_HOST}/exchanges?per_page=10`).as('getList');
  });

  it('should have the correct click interactions', () => {
    cy.wait('@getList');

    // Check if the link to the official website will open in a new tab
    cy.findAllByTestId('visit-website')
      .first()
      .should('have.attr', 'target', '_blank');

    // Click the item to check if the user was redirected to the right page
    cy.findAllByTestId('list-item').first().click();

    cy.location('pathname').should('contain', '/details/');
  });
});
