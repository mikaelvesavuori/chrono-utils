import { expect, test } from 'vitest';

import { getDateFromTimestamp } from '../src/getDateFromTimestamp';

test('It should convert a timestamp to a date in "YYYYMMDD" format', () => {
  const expected = '20221005';

  const response = getDateFromTimestamp('1664928000000');

  expect(response, expected);
});

test('It should convert a timestamp to a date in "YYYYMMDD" format and add missing (ms) digits if 10 digits long', () => {
  const expected = '20221005';

  const response = getDateFromTimestamp('1664928000');

  expect(response, expected);
});
