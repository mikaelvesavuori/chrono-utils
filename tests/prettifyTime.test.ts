import { expect, test } from 'vitest';

import { prettifyTime } from '../src/prettifyTime';

test('It should convert a numeric count of seconds into a colon-separated time format', () => {
  const expected = '00:00:01:00';

  const response = prettifyTime(60);

  expect(response, expected);
});

test('It should prettify a large number, representing more than one day', () => {
  const expected = '01:10:17:36';

  const response = prettifyTime(123456);

  expect(response, expected);
});
