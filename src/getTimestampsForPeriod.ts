import { getMillisecondsForDays } from './getMillisecondsForDays';

import { getDateYesterday } from './getDateYesterday';
import { getTimestampForInputDate } from './getTimestampForInputDate';

/**
 * @description Calculates `from` and `to` timestamps for a provided period in days.
 *
 * Using `lastNumDays` means getting specified range excluding current day.
 *
 * @example getTimestampsForPeriod(1);
 * @example getTimestampsForPeriod(5, -3);
 * @example getTimestampsForPeriod(14, 7);
 *
 * @returns `{ "from": "1673568000", "to": "1673654399" }`
 */
export function getTimestampsForPeriod(lastNumDays: number, offsetInHours = 0) {
  const toTime = getTimestampForInputDate(
    getDateYesterday(true),
    offsetInHours,
    true
  );
  const fromTime = new Date(
    Number.parseInt(`${toTime}999`) - getMillisecondsForDays(lastNumDays) + 1
  ).getTime();

  return {
    from: `${fromTime}`.substring(0, 10),
    to: `${toTime}`.substring(0, 10)
  };
}
