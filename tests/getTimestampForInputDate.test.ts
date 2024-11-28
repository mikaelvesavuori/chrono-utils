import { expect, test } from 'vitest';

import { getTimestampForInputDate } from '../src/getTimestampForInputDate';

test('It should convert an YYYYMMDD date to a Unix timestamp', () => {
  const expected = '1672531200';

  const response = getTimestampForInputDate('20230101');

  expect(response, expected);
});

test('It should convert an YYYYMMDD date to a Unix timestamp with an additional positive offset in hours', () => {
  const expected = '1672545600';

  const response = getTimestampForInputDate('20230101', 4);

  expect(response, expected);
});

test('It should convert an YYYYMMDD date to a Unix timestamp with an additional negative offset in hours', () => {
  const expected = '1672491600';

  const response = getTimestampForInputDate('20230101', -11);

  expect(response, expected);
});

test('It should convert an YYYYMMDD date to a Unix timestamp and get the last possible time (23:59:59) of the matched date', () => {
  const expected = '1672617599';

  const response = getTimestampForInputDate('20230101', 0, true);

  expect(response, expected);
});

/**
 * NEGATIVE TESTS
 */

test('It should throw an InvalidIsoDateConversionError if passed an invalid date unit', () => {
  // @ts-ignore
  expect(() => getTimestampForInputDate(1).toThrowError());
});
