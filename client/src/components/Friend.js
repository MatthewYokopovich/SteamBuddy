import React, { Component } from "react";

class Friend extends Component{

    render(){
        return(
            <li style={{
                borderStyle: "solid",
                borderWidth: 1,
            }}>
                <a href={this.props.url}><img src={this.props.imgsrc} style={{float: "left"}}/>
                <h5>{this.props.name}</h5></a>
            </li>
        )
    }
}

export default Friend;