import test from 'ava';

import { getTimestampForInputDate } from '../src/getTimestampForInputDate';

test.serial('It should convert an YYYYMMDD date to a Unix timestamp', (t) => {
  const expected = '1672531200';

  const response = getTimestampForInputDate('20230101');

  t.deepEqual(response, expected);
});

test.serial(
  'It should convert an YYYYMMDD date to a Unix timestamp with an additional positive offset in hours',
  (t) => {
    const expected = '1672545600';

    const response = getTimestampForInputDate('20230101', 4);

    t.deepEqual(response, expected);
  }
);

test.serial(
  'It should convert an YYYYMMDD date to a Unix timestamp with an additional negative offset in hours',
  (t) => {
    const expected = '1672491600';

    const response = getTimestampForInputDate('20230101', -11);

    t.deepEqual(response, expected);
  }
);

test.serial(
  'It should convert an YYYYMMDD date to a Unix timestamp and get the last possible time (23:59:59) of the matched date',
  (t) => {
    const expected = '1672617599';

    const response = getTimestampForInputDate('20230101', 0, true);

    t.deepEqual(response, expected);
  }
);

/**
 * NEGATIVE TESTS
 */

test.serial(
  'It should throw an InvalidIsoDateConversionError if passed an invalid date unit',
  (t) => {
    const expected = 'InvalidIsoDateConversionError';

    // @ts-ignore
    const error: any = t.throws(() => getTimestampForInputDate(1));

    t.is(error.name, expected);
  }
);
