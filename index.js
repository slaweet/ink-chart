'use strict';
const React = require('react');
const {Box} = require('ink');
const propTypes = require('prop-types');
const ervy = require('ervy');

const Chart = ({type, data, options}) => (
	<Box>
		{ervy[type](data, options)}
	</Box>
);

Chart.propTypes = {
	type: propTypes.string,
	data: propTypes.arrayOf(
		propTypes.object,
	).isRequired,
	options: propTypes.object
};

Chart.defaultProps = {
	type: 'bar',
	options: {}
};

module.exports = Chart;
