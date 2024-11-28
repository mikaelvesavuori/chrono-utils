import { expect, test } from 'vitest';

import { prettyTimeToSeconds } from '../src/prettyTimeToSeconds';

test('It should convert a pretty-formatted number in DD:HH:MM:SS format to seconds', () => {
  const expected = 34104;
  const response = prettyTimeToSeconds('00:09:28:24');
  expect(response).toBe(expected);
});

test('It should return zero when no time is passed in', () => {
  const expected = 0;
  // @ts-ignore
  const response = prettyTimeToSeconds();
  expect(response).toBe(expected);
});

test('It should return zero when "00:00:00:00" is passed in', () => {
  const expected = 0;
  const response = prettyTimeToSeconds('00:00:00:00');
  expect(response).toBe(expected);
});
