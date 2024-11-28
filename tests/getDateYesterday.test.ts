import { expect, test } from 'vitest';

import { getCurrentDate } from '../src/getCurrentDate';
import { getDateYesterday } from '../src/getDateYesterday';

test('It should get the date of the day before today in `YYYY-MM-DD` format', () => {
  const today = new Date(getCurrentDate());
  const yesterday = new Date(today);
  yesterday.setDate(today.getUTCDate() - 1);
  const expected = yesterday.toISOString().split('T')[0];

  const response = getDateYesterday();

  expect(response, expected);
});

test('It should get the date of the day before today in `YYYYMMDD` format', () => {
  const today = new Date(getCurrentDate());
  const yesterday = new Date(today);
  yesterday.setDate(today.getUTCDate() - 1);
  const expected = yesterday.toISOString().split('T')[0].replaceAll('-', '');

  const response = getDateYesterday(true);

  expect(response, expected);
});
