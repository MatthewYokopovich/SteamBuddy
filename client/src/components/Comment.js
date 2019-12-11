import React, { Component } from "react";

class Comment extends Component{

    componentDidMount(){
        console.log(this.props.author);
    }

    render(){
        return (
            <div>
                {this.props.body}
            </div>
        )
    }
}

export default Comment