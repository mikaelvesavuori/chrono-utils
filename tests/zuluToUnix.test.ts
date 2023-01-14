import test from 'ava';

import { zuluToUnix } from '../src/functions/zuluToUnix';

test.serial(
  'It should convert a Date string to the number of seconds after the Unix epoch',
  (t) => {
    const expected = 1673710838227;

    const response = zuluToUnix('2023-01-14T15:40:38.227Z');

    t.deepEqual(response, expected);
  }
);

test.serial('It should convert an ISO 8601/RFC 3339 time format to a Unix timestamp', (t) => {
  const expected = 1669027317000;
  const response = zuluToUnix('2022-11-21T10:41:57Z');
  t.deepEqual(response, expected);
});
