import test from 'ava';

import { getMillisecondsForDays } from '../src/functions/getMillisecondsForDays';

test.serial('It should get the number of milliseconds for 3 days', (t) => {
  const expected = 259200000;

  const response = getMillisecondsForDays(3);

  t.deepEqual(response, expected);
});
