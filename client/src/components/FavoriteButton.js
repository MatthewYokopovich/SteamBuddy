import React, { Component } from "react";
import API from "../utils/API";

class FavoriteButton extends Component{
    state={
        favorites: [],
        steamid: null
    }

    componentDidMount(){
        console.log(this.props.favorites);
        this.setState({
            favorites: this.props.favorites,
            steamid: this.props.steamid
        })
    }
    handleUnfavorite = ()=>{
        let newfaves = this.state.favorites.filter(e=>e!==this.props.appid);
        API.updateUserDB({
            steamId: this.state.steamid,
            favorites: newfaves
        }).then(res=>{
            console.log(res.data);
            // this.setState({
            //     user: res.data
            // })
        })
    }

    handleFavorite = ()=>{
        let newfaves = this.props.favorites;
        newfaves.push(this.props.appid);
        API.updateUserDB({
            steamId: this.state.steamid,
            favorites: newfaves
        }).then(res=>{
            this.setState({
                user: res.data
            })
        })
    }


    render(){
        return(
            this.props.favorites.find(o=>o===this.props.appid) ?(
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