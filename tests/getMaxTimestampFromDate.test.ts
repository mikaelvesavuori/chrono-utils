import test from 'ava';

import { getCurrentDate } from '../src/getCurrentDate';
import { getMaxTimestampFromDate } from '../src/getMaxTimestampFromDate';

const calculateExpectedTimestamp = (days: number, offset = 0) => {
  const date = new Date(getCurrentDate());
  date.setUTCDate(date.getUTCDate() - days);

  let time = date.getTime() / 1000; // Convert from ms to seconds
  const secondsInHour = 3600;
  const diff = secondsInHour * offset;
  if (offset) time += diff; // If negative, adds negative number, so this works as intended but may look wrong at first sight!

  return `${time}`;
};

test.serial('It should get the maximum historical/past timestamp at midnight 10 days ago', (t) => {
  const days = 10;
  const expected = calculateExpectedTimestamp(days);

  const response = getMaxTimestampFromDate(days, 0);

  t.deepEqual(response, expected);
});

test.serial(
  'It should get the maximum historical/past timestamp at midnight 6 days ago using a positive offset',
  (t) => {
    const days = 6;
    const offset = 6;
    const expected = calculateExpectedTimestamp(days, offset);

    const response = getMaxTimestampFromDate(days, offset);

    t.deepEqual(response, expected);
  }
);

test.serial(
  'It should get the maximum historical/past timestamp at midnight 4 days ago using a negative offset',
  (t) => {
    const days = 4;
    const offset = -2;
    const expected = calculateExpectedTimestamp(days, offset);

    const response = getMaxTimestampFromDate(days, offset);

    t.deepEqual(response, expected);
  }
);
