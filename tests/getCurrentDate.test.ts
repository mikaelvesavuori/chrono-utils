import { expect, test } from 'vitest';

import { getCurrentDate } from '../src/getCurrentDate';

test('It should get the current date', () => {
  const expected = new Date().toISOString().split('T')[0];

  const response = getCurrentDate();

  expect(response, expected);
});

test('It should get the current date without dashes', () => {
  const expected = new Date().toISOString().split('T')[0].replaceAll('-', '');

  const response = getCurrentDate(true);

  expect(response, expected);
});
