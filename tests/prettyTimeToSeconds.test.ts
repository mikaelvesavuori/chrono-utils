import test from 'ava';

import { prettyTimeToSeconds } from '../src/prettyTimeToSeconds';

test.serial('It should convert a pretty-formatted number in DD:HH:MM:SS format to seconds', (t) => {
  const expected = 34104;

  const response = prettyTimeToSeconds('00:09:28:24');

  t.deepEqual(response, expected);
});

test.serial('It should return zero when no time is passed in', (t) => {
  const expected = 0;
  // @ts-ignore
  const response = prettyTimeToSeconds();
  t.deepEqual(response, expected);
});

test.serial('It should return zero when "00:00:00:00" is passed in', (t) => {
  const expected = 0;
  const response = prettyTimeToSeconds('00:00:00:00');
  t.deepEqual(response, expected);
});
