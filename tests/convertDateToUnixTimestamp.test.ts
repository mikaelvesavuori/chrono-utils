import { expect, test } from 'vitest';

import { convertDateToUnixTimestamp } from '../src/convertDateToUnixTimestamp';

test('It should convert a GitHub-style date', () => {
  const expected = '1640944897000';

  const response = convertDateToUnixTimestamp('2021-12-31T10:01:37Z');

  expect(response, expected);
});

test('It should convert a Bitbucket-style date', () => {
  const expected = '1641804163000';

  const response = convertDateToUnixTimestamp('2022-01-10T08:42:43+00:00');

  expect(response, expected);
});

/**
 * NEGATIVE TESTS
 */

test('It should throw a MissingTimeError if no time is passed to the function', () => {
  expect(() => expect(convertDateToUnixTimestamp).toThrowError());
});
