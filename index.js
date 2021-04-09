'use strict';
const React = require('react');
const {Box, Text} = require('ink');
const propTypes = require('prop-types');
const ervy = require('ervy');

const {bg, fg, ...ervyChartTypes} = ervy;

const Chart = ({type, data, options}) => (
	<Box>
		<Text>{ervy[type](data, options)}</Text>
	</Box>
);

Chart.propTypes = {
	type: propTypes.oneOf(Object.keys(ervyChartTypes)),
	data: propTypes.arrayOf(
		propTypes.shape({
			key: propTypes.string.isRequired,
			value: propTypes.number.isRequired
		}),
	).isRequired,
	options: propTypes.object
};

Chart.defaultProps = {
	type: 'bar',
	options: {}
};

module.exports = Chart;
