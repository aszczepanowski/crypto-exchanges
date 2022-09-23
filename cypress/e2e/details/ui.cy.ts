describe('Details - UI', () => {
  const API_HOST = Cypress.env('REACT_APP_API_HOST');

  beforeEach(() => {
    cy.visit('/details/binance');
  });

  it('should display skeleton, then component with API data', () => {
    cy.get('h1').contains('Loading data...');
    cy.findByTestId('details-box-skeleton').should('be.visible');

    cy.intercept(`${API_HOST}/exchanges/binance`).as('getDetails');
    cy.wait('@getDetails');

    cy.get('h1').contains('Binance');
    cy.findByTestId('details-box').should('be.visible');
    cy.findByTestId('details-box').contains('Cayman Islands');
  });

  it('should display error info', () => {
    cy.intercept(`${API_HOST}/exchanges/binance`, {
      forceNetworkError: true
    }).as('getDetailsError');
    cy.wait('@getDetailsError');

    cy.get('h1').contains('Request error');
    cy.contains('An error occurred while processing your request');
  });

  it('should display empty data info', () => {
    cy.intercept(`${API_HOST}/exchanges/binance`, {
      body: {}
    }).as('getDetailsEmpty');
    cy.wait('@getDetailsEmpty');

    cy.get('h1').contains('Data not found');
    cy.contains('No data was found for your request');
  });
});
