import React, { Component } from "react";
import SteamLogin from "../components/SteamLogin";
import SteamLogout from "../components/SteamLogout";
import API from "../utils/API";

class Home extends Component{

    state={
        loggedIn: false
    }

    componentDidMount(){
        API.checkLogin().then(resp=>{
            this.setState({
              loggedIn: resp.data
            })
          })
    }

    render(){
        return(
            <div>
                {this.state.loggedIn ? (
                    <SteamLogout />
                ):(
                    <SteamLogin />
                )}
                
            </div>
        )
    }
}

export default Home;