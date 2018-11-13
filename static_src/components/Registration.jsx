import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import {connect} from "react-redux";
import {Link, Redirect} from "react-router-dom";
import {register} from '../actions/auth';


const styles = theme => ({
    root: {
        background: 'primary',
        borderRadius: 3,
        border: 0,
        // color: 'white',
        padding: '0 30px',
        boxShadow: 'gray',
        marginTop: 15,
    },
    textField: {
        margin: 5,
        minWidth: '100%',
        alignSelf: 'center',
    },

});


class RegButton extends React.Component {
    state = {
        open: false,
        username: "",
        password: "",
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    onChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.register(this.state.username, this.state.password);
    }


    render() {
        const {classes} = this.props;
        if (this.props.isAuthenticated) {
            return <Redirect to="/"/>
        }
        return (
            <div>
                <Button onClick={this.handleClickOpen} color="primary" className={classes.root}>Регистрация</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="registration-dialog-title"
                    maxWidth={"md"}
                >
                    <DialogTitle id="registration-dialog-title" align="center">Регистрация</DialogTitle>
                    <DialogContent>
                        <DialogContentText align="center">
                            Создайте аккаунт в Fix&Tips
                        </DialogContentText>
                        <Grid Grid container spacing={8}>
                            <Grid item md={12}>
                                <TextField
                                    id="outlined-email-input"
                                    label="Username"
                                    className={classes.textField}
                                    type="username"
                                    name="username"
                                    autoComplete="username"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.onChange('username')}
                                    value={this.state.username}
                                />
                            </Grid>
                            <Grid item md={12}>
                                <TextField
                                    id="outlined-password-input"
                                    label="Password"
                                    className={classes.textField}
                                    type="password"
                                    autoComplete="current-password"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.onChange('password')}
                                    value={this.state.password}
                                />
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Отмена
                        </Button>
                        <Button onClick={this.onSubmit} color="primary">
                            Зарегистрироваться
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}


RegButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({auth}) => {
    let errors = [];
    if (auth.errors) {
        errors = Object.keys(auth.errors).map(field => {
            return {field, message: auth.errors[field]};
        });
    }
    return {
        errors,
        isAuthenticated: auth.isAuthenticated
    };
}
const mapDispatchToProps = dispatch => {
    return {
        register: (username, password) => dispatch(register(username, password)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RegButton));