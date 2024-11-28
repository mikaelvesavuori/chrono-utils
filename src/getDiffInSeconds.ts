/**
 * @description Get the difference in seconds between two moments in time (i.e. Unix timestamps).
 *
 * @example getDiffInSeconds('1670873500000', '1670873600000');
 *
 * @returns `100`
 */
export const getDiffInSeconds = (
  earlierTime: string,
  laterTime: string
): number =>
  Math.floor(
    (Number.parseInt(laterTime) - Number.parseInt(earlierTime)) / 1000
  );
