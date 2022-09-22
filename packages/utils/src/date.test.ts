import { findDateMinMax } from './date';

describe('findDateMinMax', () => {
  test('it should return the correct min and max dates', () => {
    const dates = [
      new Date('2022-09-05'),
      new Date('2022-09-07'),
      new Date('2022-09-06'),
      new Date('2022-09-01'),
      new Date('2022-09-11'),
      new Date('2022-09-26'),
      new Date('2022-09-22'),
      new Date('2022-09-21'),
    ];

    const { min, max } = findDateMinMax(...dates);

    expect(min).toEqual(new Date('2022-09-01'));
    expect(max).toEqual(new Date('2022-09-26'));
  });
});
