import { expect, test } from 'vitest';

import { datesWithinMaximumRange } from '../src/datesWithinMaximumRange';

test('It should return "true" for two dates within an accepted time span', () => {
  const expected = true;

  const startDate = new Date('2022-11-30');
  const endDate = new Date('2022-12-01');
  const response = datesWithinMaximumRange(startDate, endDate);

  expect(response).toBe(expected);
});

test('It should return "false" for two dates outside of an accepted time span', () => {
  const expected = false;

  const startDate = new Date('2018-06-01');
  const endDate = new Date('2021-12-01');
  const response = datesWithinMaximumRange(startDate, endDate);

  expect(response).toBe(expected);
});

test('It should return "false" for two dates outside of an accepted, customized time span', () => {
  const expected = false;

  const startDate = new Date('2022-12-01');
  const endDate = new Date('2022-12-10');
  const response = datesWithinMaximumRange(startDate, endDate, 7);

  expect(response).toBe(expected);
});

/**
 * NEGATIVE TESTS
 */

test('It should throw a InvalidDateOrderError if the start date is after the end date', () => {
  const expected = 'Start date is before end date!';

  const startDate = new Date('2022-12-02');
  const endDate = new Date('2022-12-01');

  expect(() => datesWithinMaximumRange(startDate, endDate)).toThrowError(
    expected
  );
});
