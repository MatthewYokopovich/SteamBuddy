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
        event.preventDefault();
        let newComment = {
            author: this.props.user,
            body: this.state.value,
            appid: this.props.appid
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
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default CommentInput