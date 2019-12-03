import {serial as test} from 'ava';
import React from 'react';
import {render} from 'ink-testing-library';
import ervy from 'ervy';
import Chart from '.';

const normalizeWhiteSpace = output => output.replace(/ +\n/g, '\n').trimRight();

test('renders bar chart', t => {
	const data = [
		{key: 'A', value: 30},
		{key: 'B', value: 10},
		{key: 'C', value: 50}
	];
	const type = 'bar';
	const actual = render(<Chart data={data} type={type}/>);
	const expected = normalizeWhiteSpace(ervy[type](data));

	t.is(actual.lastFrame(), expected);
});
