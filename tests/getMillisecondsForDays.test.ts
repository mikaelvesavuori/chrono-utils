import { expect, test } from 'vitest';

import { getMillisecondsForDays } from '../src/getMillisecondsForDays';

test('It should get the number of milliseconds for 3 days', () => {
  const expected = 259200000;

  const response = getMillisecondsForDays(3);

  expect(response).toBe(expected);
});
