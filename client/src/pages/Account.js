import React, { Component } from "react";
import SteamLogin from "../components/SteamLogin";
import SteamLogout from "../components/SteamLogout";
import API from "../utils/API";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import AccountGame from "../components/AccountGame";



const styles = {
    div:{
      display: 'flex',
      flexDirection: 'row wrap',
      padding: 20,
      width: '100%'
    },
    paperLeft:{
      flex: 1,
      height: '100%',
      margin: 10,
      textAlign: 'center',
      padding: 10,
      color: "#8F98A0",
      backgroundColor: "#171a21"
    },
    paperRight:{
      height: 600,
      flex: 4,
      margin: 10,
      textAlign: 'center',
      color: "#8F98A0",
      backgroundColor: "#171a21"
    },
    loginStyle: {
        color: "#8F98A0",
      backgroundColor: "#171a21",
      textAlign: 'center',
      padding: 10,
    },
    grid:{
        color: "#8F98A0",
          backgroundColor: "#1b2838",
          display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
  };

class Home extends Component{

    state={
        loggedIn: false,
        gameData: [],
        recentlyplayed: [],
    }

    componentDidMount(){
        API.checkLogin().then(resp=>{
            let loggedIn = resp.data;
            if(loggedIn){
                API.getOwnedGames().then(respo=>{
                    API.getRecentlyPlayed().then(respon=>{
                        this.setState({
                        loggedIn: resp.data,
                        gameData: respo.data,
                        recentlyplayed: respon.data
                    })
                    console.log(this.state);
                })
            })
            }
            else{
                this.setState({
                    loggedIn: resp.data
                  }) 
            }
            
          })
    }

    render(){
        return(
            <Grid container style={styles.grid}>
                {this.state.loggedIn ? (
                    <div style={styles.div}>
                    <Grid item xs={6} >
                        <Paper style={styles.paperLeft}>
                        <h4>Games owned: {this.state.gameData.game_count}</h4>
                        <ul>
                        {this.state.gameData.games.map(g=>(
                            <AccountGame key={g.appid} name={g.name} playtime={g.playtime_forever} imglogo={"http://media.steampowered.com/steamcommunity/public/images/apps/"+g.appid+"/"+g.img_logo_url+".jpg"} />
                        ))}</ul>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} >
                        <Paper style={styles.paperRight}>
                            <h4>Recently Played(last 2 weeks)</h4>
                            <ul>
                                {this.state.recentlyplayed.games.map(g=>(
                                    <AccountGame key={g.appid} name={g.name} playtime={g.playtime_forever} imglogo={"http://media.steampowered.com/steamcommunity/public/images/apps/"+g.appid+"/"+g.img_logo_url+".jpg"} />
                                ))}
                            </ul>
                        </Paper>
                        <h4>Steam Logout</h4><SteamLogout />
                        </Grid></div>
                ):(
                    <Grid item> <Paper style={styles.loginStyle} >
                    <p>Please login to view your account information.</p>
                    <SteamLogin />
                    </Paper></Grid>
                )}
                
            </Grid>
        )
    }
}

export default Home;