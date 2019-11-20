import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1),
  },
  toolbarButtons: {
    marginLeft: "auto",
    marginRight: -12
  },
}));

export default function Nav() {
  const classes = useStyles();
  const preventDefault = event => event.preventDefault();

  return (
    <AppBar position="static">
    <Toolbar>
      <IconButton
        className={classes.menuButton}
        color="inherit"
        aria-label="Menu"
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h3" color="inherit">
      <Link href="/" color="inherit" className={classes.link}>
        SteamBuddy
      </Link>
      </Typography>
      <span className={classes.toolbarButtons}>
      <Typography>
      <Link href="/search" color="inherit" className={classes.link}>
        Search
      </Link>
      <Link href="/account" color="inherit" className={classes.link}>
        Account
      </Link>
    </Typography>
      </span>
    </Toolbar>
  </AppBar>
  );
}
