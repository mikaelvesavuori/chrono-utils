import test from 'ava';
import { getCurrentDate } from '../src/functions/getCurrentDate';

import { makeTwoDigitDate } from '../src/functions/makeTwoDigitDate';

const date = new Date();
const month = date.getUTCMonth() + 1;
const year = date.getUTCFullYear();
const day = date.getUTCDate();

test.serial('It should keep a two digit day date when passing in `15`', (t) => {
  const expected = '15';

  const response = makeTwoDigitDate(15, 'day');

  t.deepEqual(response, expected);
});

test.serial('It should make a two digit day date from `1`', (t) => {
  const expected = '01';

  const response = makeTwoDigitDate(1, 'day');

  t.deepEqual(response, expected);
});

test.serial('It should make a two digit month date from `1`', (t) => {
  const expected = '01';

  const response = makeTwoDigitDate(1, 'month');

  t.deepEqual(response, expected);
});

test.serial('It should get the current date in `YYYY-MM-DD` format', (t) => {
  const expected = `${year}-${makeTwoDigitDate(month, 'month')}-${makeTwoDigitDate(day, 'day')}`;

  const response = getCurrentDate();

  t.deepEqual(response, expected);
});

test.serial('It should add a leading zero if day value is below 10 for days', (t) => {
  const expected = '05';

  const response = makeTwoDigitDate(new Date('2022-12-05'), 'day');

  t.deepEqual(response, expected);
});

test.serial('It should add a leading zero if day value is below 10 for months', (t) => {
  const expected = '07';

  const response = makeTwoDigitDate(new Date('2022-07-05'), 'month');

  t.deepEqual(response, expected);
});

/**
 * NEGATIVE TESTS
 */
test.serial(
  'It should throw an InvalidDateUnitError if no matching date unit is passed in',
  (t) => {
    const expected = 'InvalidDateUnitError';

    // @ts-ignore
    const error: any = t.throws(() => makeTwoDigitDate());

    t.deepEqual(error.name, expected);
  }
);
