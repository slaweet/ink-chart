'use strict';
const React = require('react');
const {Box} = require('ink');
const propTypes = require('prop-types');
const ervy = require('ervy');

const {bg, fg, ...ervyChartTypes} = ervy;

const Chart = ({type, data, options}) => (
	<Box>
		{ervy[type](data, options)}
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
