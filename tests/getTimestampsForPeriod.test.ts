import test from 'ava';

import { getTimestampsForPeriod } from '../src/getTimestampsForPeriod';

const getRandomInteger = () => Math.floor(Math.random() * 15) + 1;

const secondsInHour = 3600;
const secondsInDay = secondsInHour * 24;

test.serial('It should create two 10-character timestamps', (t) => {
  const { from, to } = getTimestampsForPeriod(1);

  t.assert(from.length === 10);
  t.assert(to.length === 10);
});

test.serial('It should timestamps that have the correct time span', (t) => {
  const days = getRandomInteger();

  const { from, to } = getTimestampsForPeriod(days);

  t.assert(parseInt(to) - parseInt(from) === secondsInDay * days - 1);
});

test.serial('It should set a negative offset', (t) => {
  const hours = -3;

  const normalizedTimestamp = getTimestampsForPeriod(1);
  const { from } = getTimestampsForPeriod(1, hours);

  t.assert(parseInt(from) - parseInt(normalizedTimestamp.from) === secondsInHour * hours);
});

test.serial('It should set a positive offset', (t) => {
  const hours = 7;

  const normalizedTimestamp = getTimestampsForPeriod(1);
  const { from } = getTimestampsForPeriod(1, hours);

  t.assert(parseInt(from) - parseInt(normalizedTimestamp.from) === secondsInHour * hours);
});
