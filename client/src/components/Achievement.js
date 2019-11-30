import React, { Component } from "react";
import API from "../utils/API";

class Achievement extends Component{
    state = {
        loggedIn: false
    }
    componentDidMount(){
        API.checkLogin().then(res=>{
            this.setState({
                loggedIn: res.data
            });
        })
    }

    render(){
        return(
            <li style={{
                borderStyle: "solid",
                borderWidth: 1,
            }}>
            <img src={this.props.icon} style={{float: "left", maxWidth: "20%"}} />
            <h5>{this.props.name}</h5>
            <p>{this.props.description}</p>
            <p>{this.props.percent.percent.toFixed(2)}% of players have completed this achievement</p>
            {this.state.loggedIn ? (
                this.props.achieved===1 ? (
                    <p>You have completed this achievement.</p>
                ):(
                    <p>You have not completed this achievement. </p>
                )
            ):(
                <p>Please Login to view your achievement info. </p>
            )}

            </li>
        )
    }
}

export default Achievement;