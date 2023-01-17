/**
 * @description Takes a timestamp and returns the current date in `YYYYMMDD` format.
 *
 * @example getDateFromTimestamp("1664928000");
 *
 * @returns `20221005`
 */
export function getDateFromTimestamp(timestamp: string): string {
  if (timestamp.length === 10) timestamp = `${timestamp}000`;
  return new Date(parseInt(timestamp)).toISOString().split('T')[0].replaceAll('-', '');
}
