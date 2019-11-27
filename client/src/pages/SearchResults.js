import React, { Component } from "react";
import API from "../utils/API";
import NewsItem from "../components/NewsItem";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';

class SearchResults extends Component {

    state={
        newsinfo: {},
        loggedIn: false,
    }

    componentDidMount(){
        let appid = this.props.match.params.appid;
        let loggedIn = false;
        API.checkLogin().then(r=>{
            loggedIn = r.data;
            API.getSearchNews(appid).then(resp=>{
                if(loggedIn){
                   API.getAchievementData(appid).then(respo=>{
                console.log(respo.data);
                this.setState({
                newsinfo: resp.data[0],
                loggedIn
            })
            }) 
                }
                else{
                    this.setState({
                        newsinfo: resp.data[0],
                        loggedIn
                    })
                }
            
            
        })
        })
        
    }

    render(){
        return (
            <Grid container spacing={1}>
                {this.state.newsinfo.appname ? (
                    <div>
                        <h2>{this.state.newsinfo.appname}</h2>
                    <Grid item xs={6} ><h4>News</h4>
                    {
                        this.state.newsinfo.newsitems.map(n=>(
                            <NewsItem title={n.title} key={n.gid} url={n.url} contents={n.contents}/>
                         ))
                    }</Grid>
                    <Grid item xs={6} ><h4>Achievments </h4>

                    </Grid>
                    </div>
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