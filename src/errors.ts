/**
 * @description The error is fired when a start date occurs before an end date.
 */
export class InvalidDateOrderError extends Error {
  constructor() {
    super();
    this.name = 'InvalidDateOrderError';
    this.message = 'Start date is before end date!';
    this.cause = { statusCode: 400 };
  }
}

/**
 * @description Used when an incompatible date unit is encountered.
 */
export class InvalidDateUnitError extends Error {
  constructor() {
    super();
    this.name = 'InvalidDateUnitError';
    this.message = `Incorrect date unit, must be 'day' or 'month'!`;
    this.cause = { statusCode: 400 };
  }
}

/**
 * @description Used when a date to be ISO-formatted is not valid.
 */
export class InvalidIsoDateConversionError extends Error {
  constructor() {
    super();
    this.name = 'InvalidIsoDateConversionError';
    this.message =
      'Either missing date to convert to ISO format or the length is not 8 characters long (YYYYMMDD format)!';
    this.cause = { statusCode: 400 };
  }
}

/**
 * @description Used when something is missing time.
 */
export class MissingTimeError extends Error {
  constructor() {
    super();
    this.name = 'MissingTimeError';
    this.message = 'Missing time in "convertDateToUnixTimestamp"!';
    this.cause = { statusCode: 500 };
  }
}
