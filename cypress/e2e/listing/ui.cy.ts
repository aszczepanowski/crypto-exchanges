describe('Listing - UI', () => {
  const API_HOST = Cypress.env('REACT_APP_API_HOST');

  beforeEach(() => {
    cy.visit('/');
  });

  it('should display skeletons, then components with API data', () => {
    cy.findAllByTestId('list-item-skeleton').should('have.length', 10);

    cy.intercept(`${API_HOST}/exchanges?per_page=10`).as('getList');
    cy.wait('@getList');


    cy.findAllByTestId('list-item').should('have.length', 10);
    cy.findAllByTestId('list-item').first().contains('Binance');
    cy.findAllByTestId('list-item').first().contains('Cayman Islands');
  });

  it('should display error info', () => {
    cy.intercept(`${API_HOST}/exchanges?per_page=10`, {
      forceNetworkError: true
    }).as('getListError');
    cy.wait('@getListError');

    cy.contains('An error occurred while processing your request');
  });

  it('should display empty data info', () => {
    cy.intercept(`${API_HOST}/exchanges?per_page=10`, {
      body: []
    }).as('getListEmpty');
    cy.wait('@getListEmpty');

    cy.contains('No data was found for your request');
  });
});
