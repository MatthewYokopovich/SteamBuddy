import React, { Component } from "react";

class CommentInput extends Component{

    state={
        value: ''
    }

    handleInputChange = (event)=>{
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit = (event)=>{
        let newComment = {
            author: this.state.user._id,
            body: this.state.value,
            appid: this.state.appid
        }
        console.log(newComment);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <lable>
                    Add a comment:
                    <input type="text" name="comment" value={this.state.value} onChange={this.handleInputChange} />
                </lable>
            </form>
        )
    }
}

export default CommentInput