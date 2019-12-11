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
                textAlign: 'center',
                justifyContent: "center",
                height: 65
            }}><a href={"https://steamcommunity.com/profiles/"+this.props.author.steamId} style={{color: "inherit"}}>
                <img src={this.props.author.imgSrc} style={{float: "left", borderStyle: "solid",
                borderWidth: 1, borderColor: "#57cbde"}} /></a>
                {this.props.author.currentName} said: {this.props.body}
                {this.props.author._id===this.props.user ? (
                    <p>match</p>
                ):(
                    <p></p>
                )}
            </div>
        )
    }
}

export default Comment