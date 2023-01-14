import test from 'ava';

import { prettifyTime } from '../src/functions/prettifyTime';

test.serial(
  'It should convert a numeric count of seconds into a colon-separated time format',
  (t) => {
    const expected = '00:00:01:00';

    const response = prettifyTime(60);

    t.deepEqual(response, expected);
  }
);

test.serial('It should prettify a large number, representing more than one day', (t) => {
  const expected = '01:10:17:36';

  const response = prettifyTime(123456);

  t.deepEqual(response, expected);
});
