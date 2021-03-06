import React, { Component } from "react";
import  { Redirect } from 'react-router-dom'
import API from "../utils/API";
import NewsItem from "../components/NewsItem";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import Achievement from "../components/Achievement";
import FavoriteButton from "../components/FavoriteButton";
import Comment from "../components/Comment";
import CommentInput from "../components/CommentInput";

const styles = {
    grid:{
        color: "#8F98A0",
          backgroundColor: "#1b2838",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    },
    div:{
      display: 'flex',
      flexDirection: 'row wrap',
      padding: 20,
      width: '100%'
    },
    paperLeft:{
      flex: 1,
      margin: 10,
      textAlign: 'center',
      padding: 10,
      color: "#8F98A0",
          backgroundColor: "#171a21"
    },
    paperRight:{
      flex: 4,
      margin: 10,
      textAlign: 'center',
      color: "#8F98A0",
        backgroundColor: "#171a21",
        height: '100%',
    },
  };


class SearchResults extends Component {

    state={
        newsinfo: {},
        gameschema: {},
        comments: [],
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
                        API.getCommentsByApp(resp.data[0].appid).then(commentResp=>{
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
                                loggedIn,
                                comments: commentResp.data
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
                            loggedIn,
                            comments: commentResp.data

                        })
                        )
                        })
                    })
            }) 
        })
        }) 
    }

    render(){
        return (
            <Grid container item spacing={1} direction={"row"} justify={"center"} alignItems={"center"} >
                {this.state.newsinfo.appname ? (
                    <Grid item spacing={1} direction={"row"} justify={"center"} alignItems={"center"} style={styles.grid}>
                    <h2 style={{textAlign: 'center'}}>{this.state.newsinfo.appname}</h2>
                    {this.state.loggedIn ? (
                        <FavoriteButton style={{textAlign: 'center'}} appid={this.state.newsinfo.appid} favorites={this.state.userDB.favorites} steamid={this.state.userDB.steamId} history={this.props.history} />
                    ):(
                        <p> </p>
                    )}
                    <div style={styles.div}>
                        
                    <Grid item xs={6} >
                        <Paper style={styles.paperLeft}>
                            <div style={{
                borderStyle: "solid",
                borderWidth: 1,
            }}>
                        <h4>News</h4>
                    {this.state.newsinfo.newsitems.map(n=>(
                            <NewsItem title={n.title} key={n.gid} url={n.url} contents={n.contents}/>
                         ))
                    }</div>
                    <h4>Comments</h4>
                    {this.state.comments.length ? (
                        this.state.comments.map(c=>(
                            <Comment loggedIn={this.state.loggedIn} body={c.body} author={c.author} user={this.state.userDB._id} id={c._id}/>
                        ))
                    ):(
                        <p>No Comments Found...</p>
                    )}
                    {this.state.loggedIn ? (
                        <div>
                            <CommentInput user={this.state.userDB._id} appid={this.state.newsinfo.appid}/>
                        </div>
                    ):(
                        <div></div>
                    )}
                    </Paper>
                    </Grid>
                    <Grid item xs={6} >
                        <Paper style={styles.paperRight}>
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