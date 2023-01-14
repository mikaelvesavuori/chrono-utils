/**
 * @description Converts Zulu time (UTC/GMT +0) to Unix timestamp.
 *
 * @example zuluToUnix('2022-11-21T10:41:57Z');
 *
 * @returns `1669027317000`
 */
export function zuluToUnix(zuluTime: string) {
  return new Date(zuluTime).getTime();
}
