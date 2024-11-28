import { zuluToUnix } from './zuluToUnix';

import { InvalidDateOrderError } from './errors';

/**
 * @description Checks if two date objects are within a accepted maximum day range.
 *
 * @example
 * ```
 * const startDate = new Date('2022-11-30');
 * const endDate = new Date('2022-12-01');
 * const response = datesWithinMaximumRange(startDate, endDate);
 * ```
 *
 * @returns `true`
 */
export function datesWithinMaximumRange(
  startDate: Date,
  endDate: Date,
  maxDays = 365
) {
  const start = zuluToUnix(startDate.toISOString());
  const end = zuluToUnix(endDate.toISOString());
  if (start > end) throw new InvalidDateOrderError();

  // Divide by milliseconds and then by number of seconds in a day
  return Math.round((end - start) / 1000 / 86400) <= maxDays;
}
