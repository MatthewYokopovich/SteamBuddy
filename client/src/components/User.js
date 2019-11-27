import React, { Component } from "react";

class User extends Component{

    render(){
        return (
            <div style={{
                borderStyle: "solid",
                borderWidth: 1,
            }}>
                <a href={this.props.url}><img src={this.props.imgsrc} style={{float: "left"}}/>
                <h5>{this.props.name}</h5></a>
            </div>
        )
    }
}

export default User;