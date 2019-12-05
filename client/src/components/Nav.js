import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import API from "../utils/API";
import SteamIcon from "../components/SteamIcon";

const theme = createMuiTheme();
class Nav extends Component{

  state={
    loggedIn: false
  }

  componentDidMount(){
    API.checkLogin().then(resp=>{
      console.log(resp.data);
      this.setState({
        loggedIn: resp.data
      })
    })
  }
  
  render(){
    return (
    <AppBar position="static" style={{backgroundColor: "#171a21"}}>
    <Toolbar>
        <SteamIcon />
      <Typography variant="h3" color="inherit">
      <Link href="/" color="inherit"  style={{margin: theme.spacing(1)}}>
        SteamBuddy
      </Link>
      </Typography>
      <span  style={{marginLeft: "auto",    marginRight: -12}}>
      <Typography>
      <Link href="/search" color="inherit" style={{margin: theme.spacing(1)}}>
        Search
      </Link>
        {this.state.loggedIn ? (
          <Link href="/account" color="inherit" style={{margin: theme.spacing(1)}}>Account </Link>
        ):(
          <Link href="/account" color="inherit" style={{margin: theme.spacing(1)}}>Login </Link>
        )}
    </Typography>
      </span>
    </Toolbar>
  </AppBar>
  );
  }
}

export default Nav;
