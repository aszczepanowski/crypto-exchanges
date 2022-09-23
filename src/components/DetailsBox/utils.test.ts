import { getTwitterUrl } from './utils';

describe('DetailsBox utils', () => {
  it('should return full URL', () => {
    expect(getTwitterUrl('test')).toEqual('https://twitter.com/test');
  });

  it('should return empty URL', () => {
    expect(getTwitterUrl('')).toEqual('');
  });
});
