// This demo can be run by:
// npx -p @babel/core -p @babel/node babel-node demo.js

import React from 'react';
import {render, Box} from 'ink';
import Chart from '.';

const data = [
	{key: 'A', value: 30},
	{key: 'B', value: 10},
	{key: 'C', value: 50}
];

render(
	<Box padding={2}>
		<Chart data={data} type='bar'/>
	</Box>
);
