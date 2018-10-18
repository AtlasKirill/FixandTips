// import React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@material-ui/core/AppBar";
// import Tabs from "@material-ui/core/Tabs";
// import { Link } from 'react-router-dom';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';

// class ListItemLink extends React.Component {
    
  
//     render() {
//       const { icon, primary } = this.props;
//       return (
//           <ListItem button component={this.renderLink}>
//             <ListItemIcon>{icon}</ListItemIcon>
//             <ListItemText primary={primary} />
//           </ListItem>
//       );
//     }
//   }
  
//   ListItemLink.propTypes = {
//     icon: PropTypes.node.isRequired,
//     primary: PropTypes.node.isRequired,
//     to: PropTypes.string.isRequired,
//   };

// class NavBar extends React.Component {

//   render() {
//     return (
//         <AppBar position="sticky"
//                 color="default"
//         > 
//           <Tabs
//             fullWidth
//             indicatorColor="primary"
//             textColor="primary"
//             scrollButtons='on'
//           >
              
//               <ListItemLink to="/" primary="Главная" />
//               <ListItemLink to="/logout" primary="Выйти"  />

//           </Tabs>
//         </AppBar>
//     );
//   }
// }


// export default NavBar;

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Fix&Tips
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);

