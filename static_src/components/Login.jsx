import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import {renderByOrder} from 'recharts/lib/util/ReactUtils';
import {connect} from "react-redux";
import {Link, Redirect} from "react-router-dom";
import {login} from '../actions/auth';
import RegButton from './Registration';
import NavBar from './NavBar';

const styles = theme => ({
    layout: {
        width: 'auto',
        display: 'block', // Fix IE11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
        font: "Roboto",
        fontSize: '1.2em',
    },
    accaunt: {
        marginTop: 20,
        marginBottom: 0,
    },
});

class Login extends Component {

    state = {
        username: '',
        password: '',
    };
    onChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    }

    render() {
        const {classes} = this.props;
        if (this.props.isAuthenticated) {
            return <Redirect to="/"/>
        }
        return (
            <div>

                <React.Fragment>
                    <CssBaseline/>
                    <main className={classes.layout}>
                        <NavBar/>
                        <Paper className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <LockIcon/>
                            </Avatar>
                            <Typography component="h1" variant="h4">
                                Вход
                            </Typography>
                            <form className={classes.form}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="username">Имя пользователя</InputLabel>
                                    <Input id="username"
                                           name="username"
                                           autoComplete="username"
                                           autoFocus
                                           onChange={this.onChange('username')}
                                           value={this.state.username}/>
                                </FormControl>

                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="password">Пароль</InputLabel>
                                    <Input
                                        name="password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        onChange={this.onChange('password')}
                                        value={this.state.password}
                                    />
                                </FormControl>

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={this.onSubmit}
                                >
                                    Войти
                                </Button>
                            </form>
                            <Typography variant="body1" gutterBottom className={classes.accaunt}>
                                Еще нет аккаунта?
                            </Typography>
                            <RegButton/>
                        </Paper>

                    </main>

                </React.Fragment>
            </div>
        );
    }

}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    let errors = [];
    if (state.auth.errors) {
        errors = Object.keys(state.auth.errors).map(field => {
            return {field, message: state.auth.errors[field]};
        });
    }
    return {
        errors,
        isAuthenticated: state.auth.isAuthenticated
    };
}

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => {
            return dispatch(login(username, password));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));
