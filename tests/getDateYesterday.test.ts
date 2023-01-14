import test from 'ava';

import { getCurrentDate } from '../src/functions/getCurrentDate';
import { getDateYesterday } from '../src/functions/getDateYesterday';

test.serial('It should get the date of the day before today in `YYYY-MM-DD` format', (t) => {
  const today = new Date(getCurrentDate());
  const yesterday = new Date(today);
  yesterday.setDate(today.getUTCDate() - 1);
  const expected = yesterday.toISOString().split('T')[0];

  const response = getDateYesterday();

  t.deepEqual(response, expected);
});

test.serial('It should get the date of the day before today in `YYYYMMDD` format', (t) => {
  const today = new Date(getCurrentDate());
  const yesterday = new Date(today);
  yesterday.setDate(today.getUTCDate() - 1);
  const expected = yesterday.toISOString().split('T')[0].replaceAll('-', '');

  const response = getDateYesterday(true);

  t.deepEqual(response, expected);
});
