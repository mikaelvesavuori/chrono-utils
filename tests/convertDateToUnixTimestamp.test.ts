import test from 'ava';

import { convertDateToUnixTimestamp } from '../src/convertDateToUnixTimestamp';

test.serial('It should convert a GitHub-style date', (t) => {
  const expected = '1640944897000';

  const response = convertDateToUnixTimestamp('2021-12-31T10:01:37Z');

  t.deepEqual(response, expected);
});

test.serial('It should convert a Bitbucket-style date', (t) => {
  const expected = '1641804163000';

  const response = convertDateToUnixTimestamp('2022-01-10T08:42:43+00:00');

  t.deepEqual(response, expected);
});

/**
 * NEGATIVE TESTS
 */

test.serial('It should throw a MissingTimeError if no time is passed to the function', (t) => {
  const expected = 'MissingTimeError';

  // @ts-ignore
  const error: any = t.throws(() => convertDateToUnixTimestamp());

  t.deepEqual(error.name, expected);
});
