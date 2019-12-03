'use strict';
const React = require('react');
const {Box} = require('ink');
const propTypes = require('prop-types');
const ervy = require('ervy');

const Image = ({type, data, options}) => (
	<Box>
		{ervy[type](data, options)}
	</Box>
);

Image.propTypes = {
	type: propTypes.string,
	data: propTypes.arrayOf(
		propTypes.object,
	).isRequired,
	options: propTypes.object
};

Image.defaultProps = {
	type: 'bar',
	options: {}
};

module.exports = Image;
