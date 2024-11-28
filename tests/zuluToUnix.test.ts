import { expect, test } from 'vitest';

import { zuluToUnix } from '../src/zuluToUnix';

test('It should convert a Date string to the number of seconds after the Unix epoch', () => {
  const expected = 1673710838227;

  const response = zuluToUnix('2023-01-14T15:40:38.227Z');

  expect(response).toBe(expected);
});

test('It should convert an ISO 8601/RFC 3339 time format to a Unix timestamp', () => {
  const expected = 1669027317000;
  const response = zuluToUnix('2022-11-21T10:41:57Z');
  expect(response).toBe(expected);
});
