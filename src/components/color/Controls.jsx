import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ boxColor }) => (
    <>
    <input type="color" value={boxColor} onChange={onBoxColorChange}></input>
    </>
)

Controls.propTypes = {
    boxColor: PropTypes.string.isRequired,
    onBoxColorChange: PropTypes.func.isRequired
}

//generate random color 

