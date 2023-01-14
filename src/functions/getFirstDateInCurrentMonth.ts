/**
 * @description Returns the first date in the current month in `YYYY-MM-DD` format.
 *
 * @example getFirstDateInCurrentMonth();
 *
 * @returns `2022-12-01`
 */
export function getFirstDateInCurrentMonth(): string {
  const date = new Date();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();

  return `${year}-${month}-01`;
}
