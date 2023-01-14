/**
 * @description Return the last date in the current month in `YYYY-MM-DD` format.
 *
 * @example `2022-12-31`
 */
export function getLastDateInCurrentMonth(): string {
  const date = new Date();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();
  const day = new Date(year, month).toISOString().split('T')[0].substring(8);

  return `${year}-${month}-${day}`;
}
