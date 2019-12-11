import React, { Component } from "react";
import API from "../utils/API";
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
            author: this.props.user,
            body: this.state.value,
            appid: this.props.appid
        }
        API.createComment(newComment);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <lable>
                    Add a comment:
                    <input type="text" name="comment" value={this.state.value} onChange={this.handleInputChange} />
                </lable>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default CommentInput