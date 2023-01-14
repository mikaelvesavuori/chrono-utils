import { MissingTimeError } from '../errors/errors';

/**
 * @description Converts a regular date to (JS) Unix timestamp.
 *
 * @example convertDateToUnixTimestamp('2021-12-31T10:01:37Z');
 * @example convertDateToUnixTimestamp('2022-01-10T08:42:43+00:00');
 *
 * @returns `1640944897000`
 */
export function convertDateToUnixTimestamp(time: Date | string): string {
  if (!time) throw new MissingTimeError();
  return new Date(time).getTime().toString();
}
