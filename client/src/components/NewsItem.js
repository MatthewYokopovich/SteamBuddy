import React, { Component } from "react";

class NewsItem extends Component{

    render(){
        return (
            <div>
             <a href={this.props.url}>   {this.props.title}</a>
            </div>
        )
    }
}
export default NewsItem;