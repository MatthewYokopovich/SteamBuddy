import React, { Component } from "react";
import API from "../utils/API";
class FavoriteGame extends Component {

    state={
        app: {},
    }

    componentDidMount(){
        let appid = this.props.appid;
        API.getNews([appid]).then(res=>{
            this.setState({
                app: res.data[0]
            })
        })
    }

    render(){
        return (
            <li>
                {this.state.app.appname ? (
                <a href={"/search/"+this.state.app.appid}><p>{this.state.app.appname}</p></a>
                ):(
                    <p>error </p>
                )}
            </li>
        )
    }
}

export default FavoriteGame;