import React, { Component } from 'react'; 
import Display from '../components/color/Display'; 



 export default class ColorContainer extends Component {
    state = {
        boxColor: '#000000',
        prevColor: '#000000'
    }

    componentDidMount() { 
        setInterval( () => this.randomColorPicker(), 1000);
    }

    randomColorPicker() {
        let randomColor = ('#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6));
        this.setState({
            prevColor: this.state.boxColor
        })
        console.log(this.state.prevColor); 
        this.setState({ 
            boxColor: randomColor
        })
        console.log(this.state.boxColor); 
    }

    render() {
        return (
            <>
            { this.state.boxColor === this.state.prevColor ? 
            <img src="https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg"/> 
            : <Display boxColor={this.state.boxColor.toString()} />  }
            
            </>
        )
    }
}

