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
import GetPrintAndStatistics from "./GetPrintAndStatistics.jsx"


const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    button: {
        margin: 0,
        color: 'white',
    },
};

class NavBar extends React.Component {

    state = {
        authorized: false,
        isCommandant: false,
    };

    render() {
        const {classes} = this.props;

        // const authorized = true;
        // const isCommandant = false;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Fix&Tips
                        </Typography>
                        {!this.state.authorized && (
                            <div>
                                <RegButton/>
                            </div>
                        )}
                        {this.state.authorized && this.state.isCommandant && (
                            <div>
                                <GetPrintAndStatistics/>
                            </div>
                        )}
                        {this.state.authorized && !this.state.isCommandant && (
                            <div>
                                <IconButton className={classes.button} href="#address_of_profile"
                                            aria-label="AccountCircle">
                                    <AccountCircle/>
                                </IconButton>
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

