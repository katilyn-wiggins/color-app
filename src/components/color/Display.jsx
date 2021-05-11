import React from 'react'; 
import PropTypes from 'prop-types';

const Display = ({ boxColor }) => ( 
    <div style={{ background: boxColor, height: '300px',  width: '300px' }}>
    </div>
); 

Display.propTypes = {
    boxColor: PropTypes.string.isRequired
}

export default Display; 