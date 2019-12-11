import React, { Component } from "react";

class Comment extends Component{

    componentDidMount(){
        console.log(this.props.author);
    }

    render(){
        return (
            <div style={{
                borderStyle: "solid",
                borderWidth: 1,
                height: 75
            }}><a href={"https://steamcommunity.com/profiles/"+this.props.author.steamId} style={{color: "inherit"}}>
                {this.props.author.currentName}</a> said: {this.props.body}
            </div>
        )
    }
}

export default Comment