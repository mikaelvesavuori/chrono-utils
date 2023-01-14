import test from 'ava';

import { getDiffInSeconds } from '../src/functions/getDiffInSeconds';

test.serial('Given inputs as strings, it should return positive numbers from them', (t) => {
  const expected = 11;

  const response = getDiffInSeconds('12345', '23456');

  t.deepEqual(response, expected);
});

test.serial('Given inputs as strings, it should return negative numbers from them', (t) => {
  const expected = -12;

  const response = getDiffInSeconds('23456', '12345');

  t.deepEqual(response, expected);
});

test.serial('Given inputs as numbers, it should return negative numbers from them', (t) => {
  const expected = -12;

  // @ts-ignore
  const response = getDiffInSeconds(23456, 12345);

  t.deepEqual(response, expected);
});

test.serial('It should get the difference in seconds between two timestamps', (t) => {
  const expected = 100;

  const response = getDiffInSeconds('1670873500000', '1670873600000');

  t.deepEqual(response, expected);
});
