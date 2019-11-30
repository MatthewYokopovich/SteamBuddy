import React, { Component } from "react";

class User extends Component{

    renderState(){
        switch(this.props.pstate){
            case 0: return(
                <p>Offline or Private</p>
            )
            case 1: return(
                <p>Online</p>
            )
            case 2: return(
                <p>Busy</p>
            )
            case 3: return(
                <p>Away</p>
            )
            case 4: return(
                <p>Snooze</p>
            )
            case 5: return(
                <p>Looking to Trade</p>
            )
            case 6: return(
                <p>Looking to Play</p>
            )
        }
    }

    render(){
        return (
            <div style={{
                borderStyle: "solid",
                borderWidth: 1,
            }}>
                <a href={this.props.url}><img src={this.props.imgsrc} style={{float: "left"}}/>
                <h3>{this.props.name}</h3></a>
                {this.renderState()}
            </div>
        )
    }
}

export default User;