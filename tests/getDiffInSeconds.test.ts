import { expect, test } from 'vitest';

import { getDiffInSeconds } from '../src/getDiffInSeconds';

test('Given inputs as strings, it should return positive numbers from them', () => {
  const expected = 11;

  const response = getDiffInSeconds('12345', '23456');

  expect(response).toBe(expected);
});

test('Given inputs as strings, it should return negative numbers from them', () => {
  const expected = -12;

  const response = getDiffInSeconds('23456', '12345');

  expect(response).toBe(expected);
});

test('Given inputs as numbers, it should return negative numbers from them', () => {
  const expected = -12;

  // @ts-ignore
  const response = getDiffInSeconds(23456, 12345);

  expect(response).toBe(expected);
});

test('It should get the difference in seconds between two timestamps', () => {
  const expected = 100;

  const response = getDiffInSeconds('1670873500000', '1670873600000');

  expect(response).toBe(expected);
});
