import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import API from "../utils/API";
import Game from "../components/Game";


const leftPaper = {
  textAlign: 'center',
  color: "red",
}
const mainPaper = {
  textAlign: 'center',
  color: "dark blue",
}
const rightPaper = {
  textAlign: 'center',
  color: "yellow",
}
class Home extends Component{

    state={
        appnews: [],
        applist: [],
    }
    componentDidMount(){
        const appstoget = [440, 823500]
        API.getNews(appstoget).then(res=>{
        console.log(res.data);
        this.setState({
            appnews: res.data
            });
        })
    }
    render(){
        return(
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper style={leftPaper}>left</Paper>
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
                    <Paper style={rightPaper}>right</Paper>
                </Grid>
            </Grid>
        )
    }
}

export default Home;