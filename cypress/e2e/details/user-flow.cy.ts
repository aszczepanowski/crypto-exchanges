describe('Details - user flow', () => {
  const API_HOST = Cypress.env('REACT_APP_API_HOST');

  beforeEach(() => {
    cy.visit('/details/binance');
    cy.intercept(`${API_HOST}/exchanges/binance`).as('getDetails');
  });

  it('should have the correct click interactions', () => {
    cy.wait('@getDetails');

    // Check if the link to the official website
    // or social media links will open in a new tab
    cy.findByTestId('visit-website').should('have.attr', 'target', '_blank');
    cy.findByTestId('details-box').then((box) => {
      const socialMediaLinks = box.find('[data-testid="social-media-link"]');

      if (socialMediaLinks.length > 0) {
        cy.findAllByTestId('social-media-link')
          .first()
          .should('have.attr', 'target', '_blank');
      }
    });

    cy.findByTestId('go-back-link').click();
    cy.location('pathname').should('eq', '/');
  });
});
