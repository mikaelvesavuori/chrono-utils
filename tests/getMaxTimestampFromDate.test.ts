import test from 'ava';

import { getMaxTimestampFromDate } from '../src/getMaxTimestampFromDate';

test.serial('It should get the maximum historical/past timestamp at midnight 10 days ago', (t) => {
  const expected = '1672790400';

  const response = getMaxTimestampFromDate(10, 0);

  t.deepEqual(response, expected);
});

test.serial(
  'It should get the maximum historical/past timestamp at midnight 6 days ago using a positive offset',
  (t) => {
    const expected = '1673157600';

    const response = getMaxTimestampFromDate(6, 6);

    t.deepEqual(response, expected);
  }
);

test.serial(
  'It should get the maximum historical/past timestamp at midnight 4 days ago using a negative offset',
  (t) => {
    const expected = '1673301600';

    const response = getMaxTimestampFromDate(4, -2);

    t.deepEqual(response, expected);
  }
);
