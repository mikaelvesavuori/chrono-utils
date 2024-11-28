import { expect, test } from 'vitest';

import { getFirstDateInCurrentMonth } from '../src/getFirstDateInCurrentMonth';

const date = new Date();
const month = date.getUTCMonth() + 1;
const year = date.getUTCFullYear();

test('It should get the first date in the current month in `YYYY-MM-DD` format', () => {
  const expected = `${year}-${month}-01`;

  const response = getFirstDateInCurrentMonth();

  expect(response, expected);
});
