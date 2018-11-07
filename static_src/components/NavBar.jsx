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
import GetPrintAndStatistics from './GetPrintAndStatistic'
import { connect } from 'react-redux';


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
        authorized: true,
        isCommandant: true,
    };

    render() {
        let buttons;
        const {classes} = this.props;
        if(this.props.isLoading)
        {
            return(<div></div>)
        }
        else if(this.props.user.role == 2)
        {
            buttons  = <GetPrintAndStatistics/>
        }
        else if(this.props.user.role == 1)
        {
            buttons  = <ListItemLink className={classes.button} to="/profile" primary="Profile" icon={<AccountCircle/>} />
        }
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                          <ListItemLink to="/" primary="Fix&Tips"  />
                        </Typography>
                    {!this.props.isAuthenticated && (
                        <div>
                            <RegButton/>
                        </div>
                    )}
                        { buttons }

                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}


NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStateToProps = ({ auth }) => {
    return {
        user: auth.user,
        isAuthenticated: auth.isAuthenticated,
        isLoading: auth.isLoading,
    }
}
const mapDispatchToProps = dispatch => {
    return {
      loadUser: () => {
        return dispatch(loadUser());
      }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(NavBar));
