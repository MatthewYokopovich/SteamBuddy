import React, { Component } from "react";
import API from "../utils/API";


class SteamLogout extends Component{

    handleLogout = ()=>{
        API.steamLogout().then(res=>{
            console.log(this.context);
        })
    }

    render(){
        return(
            <form action="/auth/logout" method="post">
            <input name="logout" value="Logout" type="submit" alt="Sign out of Steam"/>
            </form>
        )
    }
}

export default SteamLogout;