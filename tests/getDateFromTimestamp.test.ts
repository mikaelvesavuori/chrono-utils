import test from 'ava';

import { getDateFromTimestamp } from '../src/getDateFromTimestamp';

test.serial('It should convert a timestamp to a date in "YYYYMMDD" format', (t) => {
  const expected = '20221005';

  const response = getDateFromTimestamp('1664928000000');

  t.deepEqual(response, expected);
});

test.serial(
  'It should convert a timestamp to a date in "YYYYMMDD" format and add missing (ms) digits if 10 digits long',
  (t) => {
    const expected = '20221005';

    const response = getDateFromTimestamp('1664928000');

    t.deepEqual(response, expected);
  }
);
