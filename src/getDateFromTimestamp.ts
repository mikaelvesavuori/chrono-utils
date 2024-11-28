/**
 * @description Takes a timestamp and returns the current date in `YYYYMMDD` format.
 *
 * @example getDateFromTimestamp("1664928000");
 *
 * @returns `20221005`
 */
export function getDateFromTimestamp(timestamp: string): string {
  const value = timestamp.length === 10 ? `${timestamp}000` : timestamp;

  return new Date(Number.parseInt(value))
    .toISOString()
    .split('T')[0]
    .replaceAll('-', '');
}
