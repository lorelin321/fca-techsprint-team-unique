import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NavBar from './NavBar';
// import './Header.css';
import LocationOnIcon from '@material-ui/icons/LocationOn'

const useStyles = makeStyles((theme) => ({
    bar: {
      flexGrow: 1,
      height: "70px",
      boxShadow: "none",
      backgroundColor: "#292929"
    },
    extraIcon: {
      fontSize: 63,
 
    },
    toolbar: {
       justifyContent:"space-between",
       marginTop: 5,
       marginLeft: 0,
      },

      }));
  
  export default function Header() {
    const classes = useStyles();
  
    return (
      <div className={classes.main}>
        <AppBar position="fixed" color="transparent" className={classes.bar}>
          <Toolbar className={classes.toolbar}>
            <NavBar />
    
          </Toolbar>
          
        </AppBar>
      </div>
    );
  }
