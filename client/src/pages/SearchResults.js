import React, { Component } from "react";
import  { Redirect } from 'react-router-dom'
import API from "../utils/API";
import NewsItem from "../components/NewsItem";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import Achievement from "../components/Achievement";
import FavoriteButton from "../components/FavoriteButton";

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
  };


class SearchResults extends Component {

    state={
        newsinfo: {},
        gameschema: {},
        playerachievements: [],
        globalachievements: [],
        userDB: {},
        loggedIn: false,
    }

    componentDidMount(){
        let appid = this.props.match.params.appid;
        let loggedIn = false;
        API.checkLogin().then(r=>{
            loggedIn = r.data;
            API.getSearchNews(appid).then(resp=>{
                API.getGameSchema(appid).then(respo=>{
                    API.getAchievementData(appid).then(respon=>{
                        loggedIn ?(
                            API.getPlayerAchievements(appid).then(respons=>{
                                API.getMyData().then(response=>{
                                    API.getUserDB({
                                        steamId: response.data[0].steamid}).then(responses=>{
                                        this.setState({
                                newsinfo: resp.data[0],
                                gameschema: respo.data,
                                playerachievements: respons.data,
                                globalachievements: respon.data,
                                userDB: responses.data[0],
                                loggedIn
                            })
                            console.log(this.state);  
                                    })
                                })
                            })
                        ):(
                            this.setState({
                            newsinfo: resp.data[0],
                            gameschema: respo.data,
                            globalachievements: respon.data,
                            loggedIn
                        })
                        )
                        
                    })
            }) 
        })
        }) 
    }

    render(){
        return (
            <Grid container item spacing={1} direction={"row"} justify={"center"} alignItems={"center"} style={{backgroundColor: "#171a21"}}>
                {this.state.newsinfo.appname ? (
                    <Grid item spacing={1} direction={"row"} justify={"center"} alignItems={"center"}>
                    <h2 style={{textAlign: 'center'}}>{this.state.newsinfo.appname}</h2>
                    {this.state.loggedIn ? (
                        <FavoriteButton style={{textAlign: 'center'}} appid={this.state.newsinfo.appid} favorites={this.state.userDB.favorites} steamid={this.state.userDB.steamId} history={this.props.history} />
                    ):(
                        <p> </p>
                    )}
                    <div style={styles.div}>
                        
                    <Grid item xs={6} style={styles.paperLeft}><Paper>
                        <h4>News</h4>
                    {
                        this.state.newsinfo.newsitems.map(n=>(
                            <NewsItem title={n.title} key={n.gid} url={n.url} contents={n.contents}/>
                         ))
                    }</Paper>
                    </Grid>
                    <Grid item xs={6} style={styles.paperRight}><Paper>
                        <h4>Achievements </h4>
                        {this.state.globalachievements.length ? (
                            this.state.loggedIn ? (
                                <ul>
                        {this.state.gameschema.availableGameStats.achievements.map(a=>(
                            <Achievement name={a.displayName} key={a.name} description={a.description} icon={a.icon} percent={this.state.globalachievements.find(o=> o.name===a.name)} achieved={this.state.playerachievements.find(o=> o.apiname===a.name).achieved}/>
                        ))}</ul>
                            ):(
                                <ul>
                        {this.state.gameschema.availableGameStats.achievements.map(a=>(
                            <Achievement name={a.displayName} key={a.name} description={a.description} icon={a.icon} percent={this.state.globalachievements.find(o=> o.name===a.name)}/>
                        ))}</ul>
                            )
                            
                        ):(
                            <p>No Achievements found...</p>
                        )}
                        
                    </Paper>
                    </Grid>
                    </div></Grid>
                ) : (
                    <div> 
                        Loading...
                    </div>
                )}
            </Grid>
        )
    }
}

export default SearchResults;