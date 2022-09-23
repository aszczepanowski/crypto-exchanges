import { calculateWidth, getBarColor } from './utils';

describe('ScoreBar utils', () => {
  describe('getBarColor', () => {
    test('with value lower than 4', () => {
      expect(getBarColor(3)).toEqual('bg-orange-500');
    });

    test('with value lower than 6', () => {
      expect(getBarColor(5)).toEqual('bg-yellow-500');
    });

    test('with value lower than 8', () => {
      expect(getBarColor(7)).toEqual('bg-lime-500');
    });

    test('with any other value', () => {
      expect(getBarColor(9)).toEqual('bg-green-500');
    });
  });

  describe('calculateWidth', () => {
    test('with value lower than 0', () => {
      expect(calculateWidth(-5)).toEqual('0%');
    });

    test('with value 0', () => {
      expect(calculateWidth(0)).toEqual('0%');
    });

    test('with value 5', () => {
      expect(calculateWidth(5)).toEqual('50%');
    });

    test('with value 10', () => {
      expect(calculateWidth(10)).toEqual('100%');
    });

    test('with value higher than 10', () => {
      expect(calculateWidth(20)).toEqual('100%');
    });
  });
});
