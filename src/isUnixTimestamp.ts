/**
 * @description Check if the input matching a 10 or 13 digit Unix timestamp.
 *
 * @example isUnixTimestamp(1234567890); // true
 * @example isUnixTimestamp('1234567890123'); // true
 * @example isUnixTimestamp('123456789'); // false
 * @example isUnixTimestamp('12345678901234'); // false
 * @example isUnixTimestamp('2024-06-06'); // false
 *
 * @returns boolean
 */
export function isUnixTimestamp(value: string | number): boolean {
  if (!value) return false;

  const timestamp = value.toString();

  // Check if it's a 10-digit (seconds) or 13-digit (milliseconds) timestamp
  const isCorrectLength = timestamp.length === 10 || timestamp.length === 13;

  // Ensure it only contains digits
  const isNumeric = /^\d+$/.test(timestamp);

  return isCorrectLength && isNumeric;
}
