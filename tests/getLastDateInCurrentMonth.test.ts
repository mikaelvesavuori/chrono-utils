import test from 'ava';

import { getLastDateInCurrentMonth } from '../src/getLastDateInCurrentMonth';

const date = new Date();
const month = date.getUTCMonth() + 1;
const year = date.getUTCFullYear();
const lastDay = new Date(year, month).toISOString().split('T')[0].substring(8);

test.serial('It should get the last date in the current month in `YYYY-MM-DD` format', (t) => {
  const expected = `${year}-${month}-${lastDay}`;

  const response = getLastDateInCurrentMonth();

  t.deepEqual(response, expected);
});
