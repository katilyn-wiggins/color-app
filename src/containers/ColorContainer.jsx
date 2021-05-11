import React, { Component } from 'react'; 
import Controls from '../components/color/Controls';
import Display from '../components/color/Display'; 


export default class ColorContainer extends Component {
    state = {
        boxColor: '#000000'
    }
    
    randomColorPicker() {
        const newColor =
       ('#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6));
    }

    componentDidMount() { 
        setInterval(randomColorPicker, 1000);

    }

    handleBoxColorChange = (newColor) => {
        this.setState({ boxColor: newColor });
        console.log(this.state.boxColor)
    }
    render() {
        const { boxColor } = this.state; 

        return (
            <>
            <Display boxColor={boxColor} onBox/> 
            </>
        )
    }
}

