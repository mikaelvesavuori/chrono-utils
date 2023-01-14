import { getCurrentDate } from './getCurrentDate';

/**
 * @description Return the date of the day before today in `YYYY-MM-DD` format.
 *
 * The `noDashes` option will strip any dashes between days, months, etc.
 *
 * @returns `2022-11-20`
 * @returns `20221120`
 */
export function getDateYesterday(noDashes = false): string {
  const today = new Date(getCurrentDate());
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const dateString = yesterday.toISOString().split('T')[0];

  if (noDashes) return dateString.replaceAll('-', '');
  return dateString;
}
