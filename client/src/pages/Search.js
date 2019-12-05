import React, { Component } from "react";
import SearchBox from "../components/SearchBox";
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";

const paperStyle = {
    textAlign: 'center',
    color: "#8F98A0",
      backgroundColor: "#171a21"
  }

class Home extends Component{

    render(){
        return(
            <Grid container>
                <Grid item xs={2} ></Grid>
                <Grid item xs={8} >
            <Paper style={paperStyle}>
            <SearchBox /></Paper></Grid>
            <Grid item xs={2} ></Grid></Grid>
                    )
    }
}

export default Home;