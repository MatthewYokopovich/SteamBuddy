import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import API from "../utils/API";
import Game from "../components/Game";
import Friend from "../components/Friend";
import User from "../components/User";
import FavoriteGame from "../components/FavoriteGame";


const leftPaper = {
  textAlign: 'center',
}
const mainPaper = {
  textAlign: 'center',
  color: "dark blue",
}
const rightPaper = {
  textAlign: 'center',
}
class Home extends Component{

    state={
        appnews: [],
        friends: [],
        userdata: {},
        userDB: {},
        loggedIn: false,
    }
    componentDidMount(){
        const appstoget = [440, 823500, 546560];
        API.checkLogin().then(resp=>{
            let loggedIn = resp.data;
            API.getNews(appstoget).then(res=>{
                if(loggedIn){
                    API.getUserFriends().then(response=>{
                        API.getUserData(response.data).then(respo=>{
                            API.getMyData().then(respon=>{
                                API.getUserDB({
                                    steamId: respon.data[0].steamid
                                }).then(responses=>{
                                    console.log(responses.data);
                                   if(!responses.data.length){
                                    API.createUserDB({
                                        steamId: respon.data[0].steamid,
                                        favorites: []
                                    }).then(responsest=>{
                                        this.setState({
                                            appnews: res.data,
                                            friends: respo.data,
                                            userdata: respon.data[0],
                                            userDB: responsest.data,
                                            loggedIn
                                            })
                                            console.log(this.state);
                                    })
                                   }
                                   else{
                                       this.setState({
                                        appnews: res.data,
                                        friends: respo.data,
                                        userdata: respon.data[0],
                                        userDB: responses.data[0],
                                        loggedIn
                                        })
                                        console.log(this.state);
                                   }
                                    
                                })
                            })
                        });
                        
                    })
                }
                else{
                   this.setState({
                appnews: res.data,
                loggedIn
            }); 
                }
          })
        })
    }
    render(){
        return(
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper style={leftPaper}>
                        {this.state.userdata.steamid ? (
                            <div>
                                <User id={this.state.userdata.steamid} name={this.state.userdata.personaname} imgsrc={this.state.userdata.avatarmedium} url={this.state.userdata.profileurl} pstate={this.state.userdata.personastate}/>
                                {this.state.userDB.favorites.length ? (
                                    <div><h3>Favorites</h3>
                                         <ul>
                                        {this.state.userDB.favorites.map(f=>{
                                            return <FavoriteGame appid={f}/>
                                        })}
                                    </ul></div>
                                ):(
                                    <div> No favorites found.</div>
                                )}
                            </div>
                        ): (
                            <div>
                                Login to view your information
                                </div>
                        )}
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper style={mainPaper}>
                        {this.state.appnews.length ? (
                            <div>
                                {this.state.appnews.map(g=>{
                                    return <Game appname={g.appname} appid={g.appid} newsitems={g.newsitems} key={g.appid} />
                                })}
                            </div>
                        ) : (
                            <div>
                                No Results found.
                            </div>
                        )}
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper style={rightPaper}>
                        {this.state.friends.length ? (
                            <div><h3>Friends</h3>
                            <ul>
                                {this.state.friends.map(f=>{
                                    return(
                                       <Friend key={f.steamid} id={f.steamid} name={f.personaname} imgsrc={f.avatarmedium} url={f.profileurl} pstate={f.personastate}/>
                                    )
                                })}
                            </ul></div>
                        ):(
                            <div>
                                No Friends found </div>
                        )}
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default Home;