import test from 'ava';

import { getFirstDateInCurrentMonth } from '../src/functions/getFirstDateInCurrentMonth';

const date = new Date();
const month = date.getUTCMonth() + 1;
const year = date.getUTCFullYear();

test.serial('It should get the first date in the current month in `YYYY-MM-DD` format', (t) => {
  const expected = `${year}-${month}-01`;

  const response = getFirstDateInCurrentMonth();

  t.deepEqual(response, expected);
});
