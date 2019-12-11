import React, { Component } from "react";
import API from "../utils/API";
class Comment extends Component{

    componentDidMount(){
        console.log(this.props.author);
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        API.deleteComment(this.props.id).then(res=>{
            console.log(res);
        })
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
                    <form onSubmit={this.handleSubmit}>
                        <input type="submit" value="Remove" style={{float: "right"}}/>
                    </form>
                ):(
                    <p></p>
                )}
            </div>
        )
    }
}

export default Comment