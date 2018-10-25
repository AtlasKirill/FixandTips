import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import RegButton from './Registration'
import Icon from '@material-ui/core/Icon';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    button: {
        margin: 0,
        color:'white',
    },
};

class ListItemLink extends React.Component {
  renderLink = itemProps => <Link to={this.props.to} {...itemProps} />;

  render() {
    const { icon, primary } = this.props;
    return (
        <ListItem button component={this.renderLink}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={primary} />
        </ListItem>
    );
  }
}

ListItemLink.propTypes = {
  icon: PropTypes.node.isRequired,
  primary: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

class NavBar extends React.Component {

    state = {
        auth: false,
    };

    render() {
        const {classes} = this.props;
        const {auth} = this.state;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                          <ListItemLink to="/student" primary="Fix&Tips"  />
                        </Typography>
                        {auth && (
                            <div>
                                <RegButton/>
                            </div>
                        )}
                        {!auth && (
                            <div>
                               <ListItemLink className={classes.button} to="/profile" primary="Profile" icon={<AccountCircle/>} />
                                {/* <IconButton className={classes.button} aria-label="AccountCircle">
                                  <Link to="/profile">
                                    <AccountCircle/>
                                  </Link> */}
                                {/* </IconButton> */}
                            </div>
                        )}

                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}


NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
