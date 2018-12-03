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
import withWidth from '@material-ui/core/withWidth';


const styles = theme => ({
    root: {
        background: 'primary',
        borderRadius: 3,
        border: 0,
        padding: '0 30px',
        boxShadow: 'gray',
        marginTop: 0,
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
        this.props.register(this.state.username, this.state.password, this.state.name, this.state.surname, this.state.flat);
    }

    render() {
        const {classes} = this.props;
        if (this.props.isAuthenticated) {
            return <Redirect to="/"/>
        }

        if ('xs' === this.props.width){
            return (
            <div>
                <Button onClick={this.handleClickOpen} color="primary" className={classes.root}>Регистрация</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="registration-dialog-title"
                    maxWidth={"sm"}
                    fullScreen={true}
                >
                    <DialogTitle id="registration-dialog-title" align="center">Регистрация</DialogTitle>
                    <DialogContent>
                        <DialogContentText align="center">
                            Создайте аккаунт в Fix&Tips
                        </DialogContentText>
                        <Grid container spacing={8}>
                            <Grid item md={12} sm = {12} xs = {12}>
                                <TextField
                                    id="outlined-email-input"
                                    label="email"
                                    className={classes.textField}
                                    type="email"
                                    name="username"
                                    autoComplete="email"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.onChange('username')}
                                    value={this.state.username}
                                />
                            </Grid>
                            <Grid item md={12} sm = {12} xs = {12}>
                                <TextField
                                    id="outlined-password-input"
                                    label="Пароль"
                                    className={classes.textField}
                                    type="password"
                                    autoComplete="new-password"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.onChange('password')}
                                    value={this.state.password}
                                />
                            </Grid>
                        </Grid>
                        <DialogContentText align="center">
                            Укажите Ваше ФИО и номер комнаты
                        </DialogContentText>
                        <Grid Grid container spacing={8}>
                            <Grid item md={12} sm = {12} xs = {12}>
                                <TextField
                                    id="outlined-name-input"
                                    label="Имя"
                                    className={classes.textField}
                                    type="name"
                                    autoComplete="name"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.onChange('name')}
                                    value={this.state.name}
                                />
                            </Grid>
                            <Grid item md={12} sm = {12} xs = {12}>
                                <TextField
                                    id="outlined-surname-input"
                                    label="Фамилия"
                                    className={classes.textField}
                                    type="family-name"
                                    autoComplete="family-name"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.onChange('surname')}
                                    value={this.state.surname}
                                />
                            </Grid>
                            <Grid item md={12} sm = {12} xs = {12}>
                                <TextField
                                    id="outlined-flat-input"
                                    label="Квартира"
                                    className={classes.textField}
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.onChange('flat')}
                                    value={this.state.flat}
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
        } else
        return (
            <div>
                <Button onClick={this.handleClickOpen} color="primary" className={classes.root}>Регистрация</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="registration-dialog-title"
                    maxWidth={"sm"}
                >
                    <DialogTitle id="registration-dialog-title" align="center">Регистрация</DialogTitle>
                    <DialogContent>
                        <DialogContentText align="center">
                            Создайте аккаунт в Fix&Tips
                        </DialogContentText>
                        <Grid container spacing={8}>
                            <Grid item md={12} sm = {12} xs = {12}>
                                <TextField
                                    id="outlined-email-input"
                                    label="email"
                                    className={classes.textField}
                                    type="email"
                                    name="username"
                                    autoComplete="email"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.onChange('username')}
                                    value={this.state.username}
                                />
                            </Grid>
                            <Grid item md={12} sm = {12} xs = {12}>
                                <TextField
                                    id="outlined-password-input"
                                    label="Пароль"
                                    className={classes.textField}
                                    type="password"
                                    autoComplete="new-password"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.onChange('password')}
                                    value={this.state.password}
                                />
                            </Grid>
                        </Grid>
                        <DialogContentText align="center">
                            Укажите Ваше ФИО и номер комнаты
                        </DialogContentText>
                        <Grid Grid container spacing={8}>
                            <Grid item md={12} sm = {12} xs = {12}>
                                <TextField
                                    id="outlined-name-input"
                                    label="Имя"
                                    className={classes.textField}
                                    type="name"
                                    autoComplete="name"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.onChange('name')}
                                    value={this.state.name}
                                />
                            </Grid>
                            <Grid item md={12} sm = {12} xs = {12}>
                                <TextField
                                    id="outlined-surname-input"
                                    label="Фамилия"
                                    className={classes.textField}
                                    type="family-name"
                                    autoComplete="family-name"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.onChange('surname')}
                                    value={this.state.surname}
                                />
                            </Grid>
                            <Grid item md={12} sm = {12} xs = {12}>
                                <TextField
                                    id="outlined-flat-input"
                                    label="Квартира"
                                    className={classes.textField}
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.onChange('flat')}
                                    value={this.state.flat}
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
        register: (username, password, name, surname, flat) => dispatch(register(username, password, name, surname, flat)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withWidth()(withStyles(styles)(RegButton)));