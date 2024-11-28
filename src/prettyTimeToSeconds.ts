/**
 * @description Converts a prettified time to a numberic count of seconds
 * to represent the same value.
 *
 * @example prettyTimeToSeconds('00:09:28:24');
 *
 * @returns `34104`
 */
export function prettyTimeToSeconds(time: string) {
  if (!time || time === '00:00:00:00') return 0;

  const [days, hours, minutes, seconds] = time.split(':');
  return (
    Number.parseInt(days) * 86400 +
    Number.parseInt(hours) * 3600 +
    Number.parseInt(minutes) * 60 +
    Number.parseInt(seconds)
  );
}
