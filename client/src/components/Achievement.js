import React, { Component } from "react";

class Achievement extends Component{

    render(){
        return(
            <li style={{
                borderStyle: "solid",
                borderWidth: 1,
            }}>
            <img src={this.props.icon} style={{float: "left", maxWidth: "20%"}}/>
            <h5>{this.props.name}</h5>
            <p>{this.props.description}</p>
            <p>{this.props.percent.percent.toFixed(2)}% of players have completed this achievement</p>

            </li>
        )
    }
}

export default Achievement;