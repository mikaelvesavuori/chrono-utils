import { expect, test } from 'vitest';
import { getCurrentDate } from '../src/getCurrentDate';

import { makeTwoDigitDate } from '../src/makeTwoDigitDate';

const date = new Date();
const month = date.getUTCMonth() + 1;
const year = date.getUTCFullYear();
const day = date.getUTCDate();

test('It should keep a two digit day date when passing in `15`', () => {
  const expected = '15';

  const response = makeTwoDigitDate(15, 'day');

  expect(response, expected);
});

test('It should make a two digit day date from `1`', () => {
  const expected = '01';

  const response = makeTwoDigitDate(1, 'day');

  expect(response, expected);
});

test('It should make a two digit month date from `1`', () => {
  const expected = '01';

  const response = makeTwoDigitDate(1, 'month');

  expect(response, expected);
});

test('It should get the current date in `YYYY-MM-DD` format', () => {
  const expected = `${year}-${makeTwoDigitDate(month, 'month')}-${makeTwoDigitDate(day, 'day')}`;

  const response = getCurrentDate();

  expect(response, expected);
});

test('It should add a leading zero if day value is below 10 for days', () => {
  const expected = '05';

  const response = makeTwoDigitDate(new Date('2022-12-05'), 'day');

  expect(response, expected);
});

test('It should add a leading zero if day value is below 10 for months', () => {
  const expected = '07';

  const response = makeTwoDigitDate(new Date('2022-07-05'), 'month');

  expect(response, expected);
});

/**
 * NEGATIVE TESTS
 */
test('It should throw an InvalidDateUnitError if no matching date unit is passed in', () => {
  // @ts-ignore
  expect(() => makeTwoDigitDate().toThrowError());
});
