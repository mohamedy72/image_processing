import { sumTwo } from '../index';

describe('Test specs', function () {
  it('the sum of 5 + 5 return 10', function () {
    expect(sumTwo(5, 5)).toBe(10);
  });
});
