import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
// import './NavBar.css'

//Adding styling
const useStyles = makeStyles({    
    wholelist: {
      padding: 0,
    },                        
    list: {
        width: "100vw",
        margin: 0,
    },
    toplist: {
      height: 70,
      justifyContent: "flex-end",
      padding: 0,
      margin: 0,
    },
    Button: {
      width: 65,
      height: 70,
    },
    listItem: {
      height: 58,
      borderBottom: "2px solid #000000 ",
    },
    listText: {
      fontWeight: 400,
      fontSize: "24px",
    }
});

// Defining ListItemLink to transform each list item to a link to a page
function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}


function NavBar() {
  const classes = useStyles();
  
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift' )) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={classes.wholelist}>
          <ListItem key="Close" className={classes.toplist}>
                  <ListItemIcon><Button><CloseIcon fontSize="large" /></Button></ListItemIcon>
          </ListItem>
          <ListItemLink href='/' className={classes.listItem}>
                <p className={classes.listText}> Menu item 1</p>
            </ListItemLink>
          <ListItemLink href='/Homepage' className={classes.listItem} >
                <p className={classes.listText}> Menu item 2</p>
            </ListItemLink>
    
      </List>

    </div>
  );

  return (
    <div className="navBar">
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}> <MenuIcon style={{fill:'#f8f3e8'}} fontSize="large"/></Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default NavBar;