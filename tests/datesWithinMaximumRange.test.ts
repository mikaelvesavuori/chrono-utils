import test from 'ava';

import { datesWithinMaximumRange } from '../src/datesWithinMaximumRange';

test.serial('It should return "true" for two dates within an accepted time span', (t) => {
  const expected = true;

  const startDate = new Date('2022-11-30');
  const endDate = new Date('2022-12-01');
  const response = datesWithinMaximumRange(startDate, endDate);

  t.is(response, expected);
});

test.serial('It should return "false" for two dates outside of an accepted time span', (t) => {
  const expected = false;

  const startDate = new Date('2018-06-01');
  const endDate = new Date('2021-12-01');
  const response = datesWithinMaximumRange(startDate, endDate);

  t.is(response, expected);
});

test.serial(
  'It should return "false" for two dates outside of an accepted, customized time span',
  (t) => {
    const expected = false;

    const startDate = new Date('2022-12-01');
    const endDate = new Date('2022-12-10');
    const response = datesWithinMaximumRange(startDate, endDate, 7);

    t.is(response, expected);
  }
);

/**
 * NEGATIVE TESTS
 */

test.serial(
  'It should throw a InvalidDateOrderError if the start date is after the end date',
  (t) => {
    const expected = 'InvalidDateOrderError';

    const startDate = new Date('2022-12-02');
    const endDate = new Date('2022-12-01');

    const error: any = t.throws(() => datesWithinMaximumRange(startDate, endDate));

    t.is(error.name, expected);
  }
);
