# `date-time-utils`

**`date-time-utils` ollects a number of helpful date and time utilities for TypeScript/Javascript.**

![Build Status](https://github.com/mikaelvesavuori/date-time-utils/workflows/main/badge.svg)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=mikaelvesavuori_date-time-utils&metric=alert_status)](https://sonarcloud.io/dashboard?id=mikaelvesavuori_date-time-utils)

[![CodeScene Code Health](https://codescene.io/projects/33643/status-badges/code-health)](https://codescene.io/projects/33643)

[![CodeScene System Mastery](https://codescene.io/projects/33643/status-badges/system-mastery)](https://codescene.io/projects/33643)

[![codecov](https://codecov.io/gh/mikaelvesavuori/date-time-utils/branch/main/graph/badge.svg?token=S7D3RM9TO7)](https://codecov.io/gh/mikaelvesavuori/date-time-utils)

[![Maintainability](https://api.codeclimate.com/v1/badges/007afe3ec1ee3fe7102c/maintainability)](https://codeclimate.com/github/mikaelvesavuori/date-time-utils/maintainability)

---

These utility functions are particularly useful when building applications that need to use Unix timestamps and convert between human-readable and query-optimized (Unix) times.

## Functions

### `convertDateToUnixTimestamp`

Converts a regular date to (JS) Unix timestamp.

```ts
import { convertDateToUnixTimestamp } from 'date-time-utils';

convertDateToUnixTimestamp('2021-12-31T10:01:37Z'); // '1640944897000'
convertDateToUnixTimestamp('2022-01-10T08:42:43+00:00'); // '1641804163000'
```

### `datesWithinMaximumRange`

Checks if two date objects are within a accepted maximum day range.

```ts
import { datesWithinMaximumRange } from 'date-time-utils';

const startDate = new Date('2022-11-30');
const endDate = new Date('2022-12-01');
const response = datesWithinMaximumRange(startDate, endDate); // true
```

### `getCurrentDate`

Returns the current date in `YYYY-MM-DD` format.

The `noDashes` option will strip any dashes between days, months, etc.

```ts
import { getCurrentDate } from 'date-time-utils';

const withDashes = getCurrentDate(); // '2022-11-20'
const withoutDashes = getCurrentDate(true); // '20221120'
```

### `getDateYesterday`

Return the date of the day before today in `YYYY-MM-DD` format.

The `noDashes` option will strip any dashes between days, months, etc.

```ts
import { getDateYesterday } from 'date-time-utils';

const withDashes = getDateYesterday(); // '2022-11-20'
const withoutDashes = getDateYesterday(true); // '20221120'
```

### `getDiffInSeconds`

Get the difference in seconds between two moments in time (i.e. Unix timestamps).

```ts
import { getDiffInSeconds } from 'date-time-utils';

getDiffInSeconds('1670873500000', '1670873600000'); // 100
```

### `getFirstDateInCurrentMonth`

Returns the first date in the current month in `YYYY-MM-DD` format.

```ts
import { getFirstDateInCurrentMonth } from 'date-time-utils';

getFirstDateInCurrentMonth(); // '2022-12-01'
```

### `getLastDateInCurrentMonth`

Returns the last date in the current month in `YYYY-MM-DD` format.

```ts
import { getLastDateInCurrentMonth } from 'date-time-utils';

getLastDateInCurrentMonth(); // '2022-12-31'
```

### `getMaxTimestampFromDate`

Get maximum historical/past timestamp at midnight X number of days ago.

```ts
import { getMaxTimestampFromDate } from 'date-time-utils';

getMaxTimestampFromDate(10, 0); // 10 days, 0 offset - '1672790400'
getMaxTimestampFromDate(6, 6); // 6 days, +6 hours offset - '1673157600'
getMaxTimestampFromDate(4, -2); // 4 days, -2 hours offset - '1673301600'
```

### `getMillisecondsForDays`

Returns the number of milliseconds for a count of days.

```ts
import { getMillisecondsForDays } from 'date-time-utils';

getMillisecondsForDays(); // 259200000
```

### `getTimestampForInputDate`

Gets a corresponding Unix timestamp for a `YYYYMMDD` date.

```ts
import { getTimestampForInputDate } from 'date-time-utils';

getTimestampForInputDate('20230101'); // '1672531200'
getTimestampForInputDate('20230101', 4); // +4 hours offset - '1672545600'
getTimestampForInputDate('20230101', -11); // -11 hours offset - '1672491600'
```

### `getTimestampsForPeriod`

Calculates `from` and `to` timestamps for a provided period in days.

Using `lastNumDays` means getting specified range excluding current day.

```ts
import { getTimestampsForPeriod } from 'date-time-utils';

getTimestampsForPeriod(1); // 1 day, zero offset
/*
{ "from": "1673568000", "to": "1673654399" }
*/

getTimestampsForPeriod(5, -3); // 5 days, -3 hours offset
/*
{ "from": "1673211600", "to": "1673643599" }
*/

getTimestampsForPeriod(14, 7); // 14 days, +7 hours offset
/*
{ "from": "1672470000", "to": "1673679599" }
*/
```

### `makeTwoDigitDate`

Add leading zero if date (day, month) is under 10.

```ts
import { makeTwoDigitDate } from 'date-time-utils';

makeTwoDigitDate(1, 'day'); // '01'
makeTwoDigitDate(11, 'month'); // '11'
makeTwoDigitDate(new Date('2022-12-05'), 'day'); // '05'
makeTwoDigitDate(new Date('2022-07-05'), 'month'); // '07'
```

### `prettifyTime`

Returns a prettified time format (`DD:HH:MM:SS`) from a count of seconds.

All fields will be double-digit, but it is possible that double-digit `DD` will in fact be three-digit `DDD` if the day count is huge (i.e. over 99).

```ts
import { prettifyTime } from 'date-time-utils';

prettifyTime(60); // '00:00:01:00';
prettifyTime(123456); // '01:10:17:36';
```

### `prettyTimeToSeconds`

Converts a prettified time to a numberic count of seconds to represent the same value.

```ts
import { prettyTimeToSeconds } from 'date-time-utils';

prettyTimeToSeconds('00:09:28:24'); // 34104
```

### `zuluToUnix`

Converts Zulu time (UTC/GMT +0) to Unix timestamp.

```ts
import { zuluToUnix } from 'date-time-utils';

zuluToUnix('2022-11-21T10:41:57Z'); // 1669027317000
```
