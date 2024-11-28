import { expect, test } from 'vitest';

import { isUnixTimestamp } from '../src/isUnixTimestamp';

test('It should return true for valid 10-digit Unix timestamp (seconds)', () => {
  expect(isUnixTimestamp(1609459200)).toBe(true);
  expect(isUnixTimestamp('1609459200')).toBe(true);
});

test('It should return true for valid 13-digit Unix timestamp (milliseconds)', () => {
  expect(isUnixTimestamp(1609459200123)).toBe(true);
  expect(isUnixTimestamp('1609459200123')).toBe(true);
});

test('It should return false for timestamps with fractional milliseconds', () => {
  expect(isUnixTimestamp('1609459200.123')).toBe(false);
});

test('It should return false for non-numeric strings', () => {
  expect(isUnixTimestamp('abc123')).toBe(false);
  expect(isUnixTimestamp('1609abc123')).toBe(false);
});

test('It should return false for Dates', () => {
  // @ts-ignore
  expect(isUnixTimestamp(new Date())).toBe(false);
  expect(isUnixTimestamp('1609abc123')).toBe(false);
});

test('It should return false for invalid lengths', () => {
  expect(isUnixTimestamp(123)).toBe(false); // Too short
  expect(isUnixTimestamp('1609459200123456')).toBe(false); // Too long
});

test('It should return false for null, undefined, or empty inputs', () => {
  // @ts-ignore
  expect(isUnixTimestamp(null)).toBe(false);
  // @ts-ignore
  expect(isUnixTimestamp(undefined)).toBe(false);
  expect(isUnixTimestamp('')).toBe(false);
});

test('It should return false for mixed numeric and non-numeric values', () => {
  expect(isUnixTimestamp('1609459200abc')).toBe(false);
  expect(isUnixTimestamp('abc1609459200')).toBe(false);
});

test('It should handle edge cases for numeric inputs', () => {
  expect(isUnixTimestamp(0)).toBe(false); // Length doesn't match
  expect(isUnixTimestamp(9999999999)).toBe(true); // Valid 10-digit timestamp
  expect(isUnixTimestamp(9999999999999)).toBe(true); // Valid 13-digit timestamp
});
