import { expect, test } from 'vitest';

import { getTimestampsForPeriod } from '../src/getTimestampsForPeriod';

const getRandomInteger = () => Math.floor(Math.random() * 15) + 1;

const secondsInHour = 3600;
const secondsInDay = secondsInHour * 24;

test('It should create two 10-character timestamps', () => {
  const { from, to } = getTimestampsForPeriod(1);

  expect(from.length === 10);
  expect(to.length === 10);
});

test('It should timestamps that have the correct time span', () => {
  const days = getRandomInteger();

  const { from, to } = getTimestampsForPeriod(days);

  expect(
    Number.parseInt(to) - Number.parseInt(from) === secondsInDay * days - 1
  );
});

test('It should set a negative offset', () => {
  const hours = -3;

  const normalizedTimestamp = getTimestampsForPeriod(1);
  const { from } = getTimestampsForPeriod(1, hours);

  expect(
    Number.parseInt(from) - Number.parseInt(normalizedTimestamp.from) ===
      secondsInHour * hours
  );
});

test('It should set a positive offset', () => {
  const hours = 7;

  const normalizedTimestamp = getTimestampsForPeriod(1);
  const { from } = getTimestampsForPeriod(1, hours);

  expect(
    Number.parseInt(from) - Number.parseInt(normalizedTimestamp.from) ===
      secondsInHour * hours
  );
});
