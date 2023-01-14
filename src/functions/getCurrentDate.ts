import { makeTwoDigitDate } from './makeTwoDigitDate';

/**
 * @description Returns the current date in `YYYY-MM-DD` format.
 *
 * The `noDashes` option will strip any dashes between days, months, etc.
 *
 * @returns `2022-11-20`
 * @returns `20221120`
 */
export function getCurrentDate(noDashes = false): string {
  const date = new Date();
  const year = date.getUTCFullYear();
  const month = makeTwoDigitDate(date.getUTCMonth() + 1, 'month');
  const day = makeTwoDigitDate(date.getUTCDate(), 'day');

  const dateString = `${year}-${month}-${day}`;

  if (noDashes) return dateString.replaceAll('-', '');
  return dateString;
}
