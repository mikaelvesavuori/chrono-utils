import { getCurrentDate } from './getCurrentDate';
import { getTimestampForInputDate } from './getTimestampForInputDate';

/**
 * @description Get maximum historical/past timestamp at midnight X number of days ago.
 *
 * @example getMaxTimestampFromDate(10, 0);
 * @example getMaxTimestampFromDate(6, 6);
 * @example getMaxTimestampFromDate(4, -2);
 *
 * @returns `1672790400`
 */
export function getMaxTimestampFromDate(maxDateRange: number, offset: number) {
  const date = new Date(getCurrentDate());
  date.setUTCDate(date.getUTCDate() - maxDateRange);
  return getTimestampForInputDate(date.toISOString().substring(0, 10).replaceAll('-', ''), offset);
}
