import React, { Component, useState, useEffect } from 'react'
import bulb from "./assets/bulb.png"


class Button extends Component {
    constructor() {
        super();
        this.state = {
           currentTime: 0
        }
    };

    onClick = (input) => {
        if (input = 'Run script') {
            // Open the script from here
            console.log("Button clicked")
            fetch('/time').then(res => res.json()).then(data => {
                    // setCurrentTime(data.time);
                    this.setState({ currentTime: data.time })
                });
            
            console.log(this.state.currentTime)
            
        }
    }
    
    
    render() {

        return(
        <div>
            <img 
                src={bulb} 
                className="bulb-btn" 
                onClick={() => this.onClick('Run script')}
            />
        </div>)
    }
}

export default Button