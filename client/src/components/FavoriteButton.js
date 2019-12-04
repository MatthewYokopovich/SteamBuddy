import React, { Component } from "react";
import API from "../utils/API";

class FavoriteButton extends Component{
    state={
        user: {}
    }

    componentDidMount(){
        console.log(this.props.userDB);
        this.setState({
            user: this.props.userDB
        })
    }
    handleUnfavorite = ()=>{
        let newfaves = this.props.userDB.favorites.filter(e=>e!==this.props.appid);
        API.updateUserDB({
            steamId: this.props.userDB.steamId,
            favorites: newfaves
        }).then(res=>{
            this.setState({
                user: res.data
            })
        })
    }

    handleFavorite = ()=>{
        let newfaves = this.props.userDB.favorites;
        newfaves.push(this.props.appid);
        API.updateUserDB({
            steamId: this.state.user.steamId,
            favorites: newfaves
        }).then(res=>{
            this.setState({
                user: res.data
            })
        })
    }


    render(){
        return(
            console.l0g(this.state.user);
            this.state.user.favorites.find(o=>o===this.props.appid) ?(
                <form>
            <input name="Unfavorite" value="Unfavorite" type="button" alt="Unfavorite this app" onClick={this.handleUnfavorite} />
            </form>
            ):(
                <form>
            <input name="Favorite" value="Favorite" type="button" alt="Favorite this app" onClick={this.handleFavorite} />
            </form>
            )
        )
    }
}

export default FavoriteButton;