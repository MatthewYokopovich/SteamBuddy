import React, { Component } from "react";

class SteamLogin extends Component{

    render(){
        return(
            <form action="/auth/steam" method="post">
            <input name="submit" type="image" src="http://steamcommunity-a.akamaihd.net/public/images/signinthroughsteam/sits_small.png" alt="Sign in through Steam"/>
            </form>
        )
    }
}

export default SteamLogin