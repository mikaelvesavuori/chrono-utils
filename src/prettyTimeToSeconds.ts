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
    parseInt(days) * 86400 + parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds)
  );
}
