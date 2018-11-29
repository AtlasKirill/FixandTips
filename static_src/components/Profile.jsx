import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import red from '@material-ui/core/colors/red';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {connect} from 'react-redux';
import {logout, loadUser, updateUser} from '../actions/auth';
import NavBar from './NavBar';
import TextField from '@material-ui/core/TextField';
import {bindActionCreators} from 'redux';
import store from './../index.jsx';
import apiUrls from './../constants/apiUrls.js';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {Link, Redirect} from 'react-router-dom';


const styles = theme => ({
    card: {
        // maxWidth: 700,
        margin: 20,
        // minWidth: 650,
    },

    main_info: {
        margin: 15,
        padding: 15,
        // minHeight: 200,

    },
    avatar: {
        margin: 10,
        background: red[500],
        objectPosition: '50% 50%',
        width: 100,
        height: 100,

    },
    input: {
        display: 'none',
    },
    button_upload: {
        margin: theme.spacing.unit,
        padding: 5,
        objectPosition: '50% 50%',
    },

    content: {

        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 15,
        padding: 15,
        float: 'none',

    },
    grid: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'column',
    },
    button: {
        marginTop: 8,
    },
    textField: {
        width: '100%',
    },
    listItem: {
        paddingBottom: 0,
        paddingTop: 0,
    },
    Name: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        // flexWrap: 'wrap',
        maxWidth: 600,
        maxHeight: 200,
        marginTop: 'auto',
        marginBottom: 'auto',
        boxShadow: 'none',
        marginLeft: 20,
        marginRight: 10,
    },
    icon: {
        padding: 8,
        minWidth: 150,
        minHeight: 150,
        color: '#81d4fa',
    },
});

class Profile extends React.Component {

    state = {
        edited: false,
        avatar: "/static/build/pic.jpg",
        group_num: '',
        flat: '',
        phone: '',
        field: '',
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleClickEdit = (e) => {
        this.setState(state => ({
            edited: !state.edited,
        }));
    };

    handleClickSubmit = () => {
        this.props.updateUser(apiUrls.userDetail(this.props.user.id), {
            group_num: this.state.group_num,
            flat: this.state.flat,
            phone: this.state.phone
        }, store.getState().auth.token)
        this.setState(state => ({
            edited: !state.edited,
        }));

    };
    handleClickSubmit = () => {
        this.props.updateUser(apiUrls.userDetail(this.props.user.id), {
            group_num: this.state.group_num,
            flat: this.state.flat,
            phone: this.state.phone
        }, store.getState().auth.token)
        this.setState(state => ({
            edited: !state.edited,
        }));
    };

    render() {
        const {classes} = this.props;

        if (this.props.isLoading) {
            return (<div>Loading...</div>)
        }
        if (!this.props.isAuthenticated) {
            return <Redirect push to="/login"/>
        }

        return (
            <div>
                <NavBar/>
                <Grid container spacing={8} className={classes.grid}>
                    <Grid item md={12}>
                        <Paper className={classes.card}>
                            <Grid container spacing={8}>
                                <Grid item md={4} container justify="center">
                                    <Paper className={classes.Name}>
                                        <AccountCircle className={classes.icon}/>
                                        <Typography variant="h6" align="center">
                                            {this.props.user.name}
                                        </Typography>
                                        <Typography variant="h6" align="center">
                                            {this.props.user.surname}
                                        </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item sm={8}>
                                    <Paper className={classes.main_info}>
                                        <Typography variant="h5" gutterBottom>
                                            Основная информация
                                        </Typography>
                                        <Typography variant="subtitle2" gutterBottom>
                                            {this.props.user.email}
                                        </Typography>
                                        <Typography variant="subtitle1" gutterBottom>
                                            студент
                                        </Typography>
                                    </Paper>
                                    <Paper className={classes.main_info}>
                                        <Typography variant="h5" gutterBottom>
                                            Контактная информация
                                        </Typography>

                                        <List>
                                            {!this.state.edited && (
                                                <div>
                                                    <ListItem>
                                                        <ListItemText primary="Группа"
                                                                      secondary={this.props.user.group_num}/>
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemText primary="Квартира"
                                                                      secondary={this.props.user.flat}/>
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemText primary="Телефон"
                                                                      secondary={this.props.user.phone}/>
                                                    </ListItem>
                                                </div>
                                            )}
                                            {this.state.edited && (
                                                <div>
                                                    <ListItem className={classes.listItem}>
                                                        <TextField
                                                            id="outlined-name"
                                                            label="Группа"
                                                            className={classes.textField}
                                                            value={this.state.group_num}
                                                            onChange={this.handleChange('group_num')}
                                                            margin="normal"
                                                            variant="outlined"
                                                        />
                                                    </ListItem>
                                                    <ListItem>
                                                        <TextField
                                                            id="outlined-name"
                                                            label="Квартира"
                                                            className={classes.textField}
                                                            value={this.state.flat}
                                                            onChange={this.handleChange('flat')}
                                                            margin="normal"
                                                            variant="outlined"
                                                        />
                                                    </ListItem>
                                                    <ListItem>
                                                        <TextField
                                                            id="outlined-name"
                                                            label="Телефон"
                                                            className={classes.textField}
                                                            value={this.state.phone}
                                                            onChange={this.handleChange('phone')}
                                                            margin="normal"
                                                            variant="outlined"
                                                        />
                                                    </ListItem>
                                                </div>
                                            )}

                                        </List>
                                        {!this.state.edited && (
                                            <Button variant="outlined" className={classes.button}
                                                    onClick={this.handleClickEdit}>
                                                ИЗМЕНИТЬ
                                            </Button>
                                        )}
                                        {this.state.edited && (
                                            <Button variant="outlined" className={classes.button}
                                                    onClick={this.handleClickSubmit}>
                                                Сохранить
                                            </Button>
                                        )}
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>

            </div>
        );
    }
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({auth}, state) => {
    return {
        user: auth.user,
        // avatar: auth.user.avatar,
        isAuthenticated: auth.isAuthenticated,
        isLoading: auth.isLoading,
        field: state.field,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({logout, updateUser, loadUser}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Profile));
