import { render, screen } from '@testing-library/react';
import DetailsBoxSocial from './DetailsBoxSocial';

describe('DetailsBoxSocial component', () => {
  it('should render correctly', async () => {
    render(
      <DetailsBoxSocial facebook="Facebook" reddit="" twitter="binance" />
    );
    const el = await screen.findByTestId('social-media');

    expect(el).toBeInTheDocument();
  });

  it('should not render', async () => {
    render(<DetailsBoxSocial facebook="" reddit="" twitter="" />);
    const el = screen.queryByTestId('social-media');

    expect(el).not.toBeInTheDocument();
  });
});
