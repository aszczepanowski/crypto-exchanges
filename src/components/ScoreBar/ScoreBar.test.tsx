import { render, screen } from '@testing-library/react';
import ScoreBar from './ScoreBar';

describe('ScoreBar component', () => {
  it('should render with orange color', () => {
    render(<ScoreBar value={3} />);
    const el = screen.getByTestId('score-bar');

    expect(el).toHaveClass('bg-orange-500');
    expect(el).toHaveStyle('width: 30%');
  });

  it('should render with yellow color', () => {
    render(<ScoreBar value={5} />);
    const el = screen.getByTestId('score-bar');

    expect(el).toHaveClass('bg-yellow-500');
    expect(el).toHaveStyle('width: 50%');
  });

  it('should render with lime color', () => {
    render(<ScoreBar value={7} />);
    const el = screen.getByTestId('score-bar');

    expect(el).toHaveClass('bg-lime-500');
    expect(el).toHaveStyle('width: 70%');
  });

  it('should render with green color', () => {
    render(<ScoreBar value={8} />);
    const el = screen.getByTestId('score-bar');

    expect(el).toHaveClass('bg-green-500');
    expect(el).toHaveStyle('width: 80%');
  });

  test('with value lower than 0', () => {
    render(<ScoreBar value={-5} />);
    const el = screen.getByTestId('score-bar');

    expect(el).toHaveClass('bg-orange-500');
    expect(el).toHaveStyle('width: 0%');
  });

  test('with value greater than 10', () => {
    render(<ScoreBar value={15} />);
    const el = screen.getByTestId('score-bar');

    expect(el).toHaveClass('bg-green-500');
    expect(el).toHaveStyle('width: 100%');
  });
});
