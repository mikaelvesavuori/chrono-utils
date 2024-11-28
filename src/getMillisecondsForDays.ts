/**
 * @description Returns the number of milliseconds for a count of days.
 *
 * @example getMillisecondsForDays(3);
 *
 * @returns `259200000`
 */
export const getMillisecondsForDays = (days: number) =>
  24 * 60 * 60 * 1000 * days; // hours x minutes x seconds
