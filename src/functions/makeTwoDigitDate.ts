import { InvalidDateUnitError } from '../errors/errors';

/**
 * @description Add leading zero if date (day, month) is under 10.
 *
 * @example makeTwoDigitDate(1, 'day');
 * @example makeTwoDigitDate(11, 'month');
 * @example makeTwoDigitDate(new Date('2022-12-05'), 'day');
 * @example makeTwoDigitDate(new Date('2022-07-05'), 'month');
 */
export function makeTwoDigitDate(date: Date | number, unit: 'day' | 'month'): string {
  const value = (() => {
    if (unit === 'day') return typeof date === 'number' ? `${date}` : `${date.getUTCDate()}`;
    if (unit === 'month') return typeof date === 'number' ? `${date}` : `${date.getUTCMonth() + 1}`;
    throw new InvalidDateUnitError();
  })();

  return value.length === 1 ? `0${value}` : value;
}
