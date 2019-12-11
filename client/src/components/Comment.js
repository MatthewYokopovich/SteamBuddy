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
                height: 200
            }}><a href={"https://steamcommunity.com/profiles/"+this.props.author.steamId}>
                {this.props.author.currentName}</a> said: {this.props.body}
            </div>
        )
    }
}

export default Comment