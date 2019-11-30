import React, { Component } from "react";

class AccountGame extends Component{

    render(){
        return(
            <li style={{
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: "blue"
            }}>
                <img src={this.props.imglogo} style={{float: "left", maxWidth: "20%"}} />
                {this.props.name ? (
            <h5>{this.props.name}</h5>
                ):(
                    <h5>Name not found...</h5>   
                )}
                <p>You have played for {(this.props.playtime/60).toFixed(1)} hour(s) total.</p>
            </li>
        )
    }
}

export default AccountGame;