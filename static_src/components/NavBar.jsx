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
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToApp from '@material-ui/icons/ExitToApp';
import {Link, Redirect} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import GetPrintAndStatistics from './GetPrintAndStatistic';
import {connect} from 'react-redux';
import {logout} from '../actions/auth';
import {bindActionCreators} from 'redux';
import Avatar from '@material-ui/core/Avatar';
import withWidth from '@material-ui/core/withWidth';


const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    button: {
        marginTop: 'auto',
        marginBottom: 'auto',
        color: 'white',
        fontSize: '1.2em',
    },
    buttonOnMobile: {
        marginTop: 'auto',
        marginBottom: 'auto',
        color: 'white',
        fontSize: '0.9em',
        padding: 0,
    },
    buttonLogo: {
        background: 'inherit',
        color: 'white',
        fontSize: '1.6em',
        paddingLeft: 0,
    },
    buttonLogoOnMobile: {
        background: 'inherit',
        color: 'white',
        fontSize: '1.1em',
        paddingLeft: 0,
    },
    buttonExit: {
        marginTop: 'auto',
        marginBottom: 'auto',
        background: 'inherit',
        color: 'white',
        fontSize: '1.2em',
    },
    buttonExitOnMobile: {
        marginTop: 'auto',
        marginBottom: 'auto',
        background: 'inherit',
        color: 'white',
        fontSize: '0.9em',
        padding: 0,
    },
    icon: {
        padding: 8,
    },
};

class ListItemLink extends React.Component {
    renderLink = itemProps => <Link to={this.props.to} {...itemProps} />;

    render() {
        const {icon, primary} = this.props;
        return (
            <ListItem button component={this.renderLink}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={primary}/>
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
        if (this.props.isLoading) {
            return (<div></div>)
        }
        if (!this.props.isAuthenticated) {
            return <Redirect push to="/login"/>
        }
        else if (this.props.user.role == 2) {
            buttons = <div>
                <Grid container spacing={8}>
                    <Grid item md={6}>
                        <GetPrintAndStatistics/>
                    </Grid>
                    <Grid item md={6}>
                        <Button color="inherit" className={classes.buttonExit} onClick={this.props.logout}>
                            Выйти
                        </Button>
                    </Grid>
                </Grid>
            </div>
        }
        else if (this.props.user.role == 1) {

            if ('xs' === this.props.width || 'sm' === this.props.width) {
                buttons = <div>
                    <Grid container spacing={32}>
                        <Grid item xs={6}>
                            <Button color={"inherit"} component={Link} to="/profile" className={classes.buttonOnMobile}>
                                <AccountCircle className={classes.icon}/>
                                Профиль
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button color="inherit" className={classes.buttonExitOnMobile} onClick={this.props.logout}>
                                <ExitToApp className={classes.icon}/>
                                Выйти
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            } else {
                buttons = <div>
                    <Grid container spacing={8}>
                        <Grid item md={6}>
                            <Button color={"inherit"} component={Link} to="/profile" className={classes.button}>
                                <AccountCircle className={classes.icon}/>
                                Профиль
                            </Button>
                        </Grid>
                        <Grid item md={6}>
                            <Button color="inherit" className={classes.buttonExit} onClick={this.props.logout}>
                                <ExitToApp className={classes.icon}/>
                                Выйти
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            }

        }
        else if (this.props.user.role == 3) {
            buttons = <div>
                <Grid container spacing={8}>
                    <Grid item md={6}>
                        <Button color="inherit" className={classes.buttonExit} onClick={this.props.logout}>
                            Выйти
                        </Button>
                    </Grid>
                </Grid>
            </div>
        }
        if ('xs' === this.props.width || 'sm' === this.props.width) {
            return (
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" color="inherit" className={classes.grow}>
                                <Button component={Link} to="/"
                                        className={classes.buttonLogoOnMobile}>
                                    Fix&Tips
                                </Button>
                            </Typography>
                            {!this.props.isAuthenticated && (
                                <div>
                                    <RegButton/>
                                </div>
                            )}
                            {buttons}

                        </Toolbar>
                    </AppBar>
                </div>
            );
        } else
            return (
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" color="inherit" className={classes.grow}>
                                <Button component={Link} to="/"
                                        className={classes.buttonLogo}>
                                    Fix&Tips
                                </Button>
                            </Typography>
                            {!this.props.isAuthenticated && (
                                <div>
                                    <RegButton/>
                                </div>
                            )}
                            {buttons}

                        </Toolbar>
                    </AppBar>
                </div>
            );
    }
}


NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStateToProps = ({auth}) => {
    return {
        user: auth.user,
        isAuthenticated: auth.isAuthenticated,
        isLoading: auth.isLoading,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({logout}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(withWidth()(withStyles(styles)(NavBar)));
