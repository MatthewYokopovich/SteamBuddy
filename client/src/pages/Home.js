import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';


const leftPaper = {
  textAlign: 'center',
  color: "red",
}
const mainPaper = {
  textAlign: 'center',
  color: "blue",
}
const rightPaper = {
  textAlign: 'center',
  color: "yellow",
}
class Home extends Component{

    render(){
        return(
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper style={leftPaper}>left</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper style={mainPaper}>main</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper style={rightPaper}>right</Paper>
                </Grid>
            </Grid>
        )
    }
}

export default Home;