import React, { Component } from "react";

class SteamLogout extends Component{

    render(){
        return(
            <form action="/auth/logout" method="post">
            Logout<input name="logout" type="submit" alt="Sign out of Steam"/>
            </form>
        )
    }
}

export default SteamLogout;