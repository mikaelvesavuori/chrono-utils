import test from 'ava';

import { getCurrentDate } from '../src/getCurrentDate';

test.serial('It should get the current date', (t) => {
  const expected = new Date().toISOString().split('T')[0];

  const response = getCurrentDate();

  t.deepEqual(response, expected);
});

test.serial('It should get the current date without dashes', (t) => {
  const expected = new Date().toISOString().split('T')[0].replaceAll('-', '');

  const response = getCurrentDate(true);

  t.deepEqual(response, expected);
});
