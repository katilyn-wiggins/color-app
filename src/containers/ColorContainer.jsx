import React, { Component } from 'react'; 
import Display from '../components/color/Display'; 

export default class ColorContainer extends Component {
    state = {
        boxColor: '#000000'
    }

    render() {
        const { boxColor } = this.state; 
        return (
            <>
            <Display boxColor={boxColor}/> 
            </>
        )
    }
}