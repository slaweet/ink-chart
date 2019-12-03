
> Chart component for [Ink](https://github.com/vadimdemedes/ink)


## Install

```
$ npm install ink-chart
```


## Usage

```js
import React from 'react';
import {render} from 'ink';
import Chart from 'ink-chart';

const data = [
  { key: 'A', value: 30 },
  { key: 'B', value: 10 },
  { key: 'C', value: 50 }
];

render(
	<Chart preserveAspectRatio data={data} type'bar'/>
);
```


## API

### `<Chart/>`

Besides the props below, it accepts props allowed in [`ansi-escapes`](https://github.com/sindresorhus/ansi-escapes#options).

#### data

Type: `array`

List with the data to display.

#### type

Type: `string`

Type of the chart, e.g. 'bar', 'pie'.


## License

MIT © [Vít Stanislav](https://github.com/slaweet)
