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


const styles = theme => ({
    root: {
        background: 'inherit',
        borderRadius: 3,
        border: 0,
        color: 'white',
        padding: '0 30px',
        boxShadow: 'gray',
    },
    textField: {
        margin: 5,
        minWidth: '100%',
        alignSelf: 'center',
    },
});


class RegButton extends React.Component {
// <<<<<<< HEAD
//     state = {
//         open: false,
//         email: '',
//         password:'',
//         name:'',
//         surname:'',
//     };
//
//     handleClickOpen = () => {
//         this.setState({open: true});
//     };
//
//     handleClose = () => {
//         this.setState({open: false});
//     };
//
//
//     render() {
//         const {classes} = this.props;
//         return (
//             <div>
//                 <Button onClick={this.handleClickOpen} className={classes.root}>Регистрация</Button>
//                 <Dialog
//                     open={this.state.open}
//                     onClose={this.handleClose}
//                     aria-labelledby="registration-dialog-title"
//                     maxWidth={"md"}
//                 >
//                     <DialogTitle id="registration-dialog-title" align="center">Регистрация</DialogTitle>
//                     <DialogContent>
//                         <DialogContentText align="center">
//                             Создайте аккаунт в Fix&Tips
//                         </DialogContentText>
//                         <Grid Grid container spacing={8}>
//                             <Grid item md={12}>
//                                 <TextField
//                                     id="outlined-email-input"
//                                     label="Email"
//                                     className={classes.textField}
//                                     type="email"
//                                     name="email"
//                                     autoComplete="email"
//                                     margin="normal"
//                                     variant="outlined"
//                                 />
//                             </Grid>
//                             <Grid item md={12}>
//                                 <TextField
//                                     id="outlined-password-input"
//                                     label="Password"
//                                     className={classes.textField}
//                                     type="password"
//                                     autoComplete="current-password"
//                                     margin="normal"
//                                     variant="outlined"
//                                 />
//                             </Grid>
//                         </Grid>
//                         <DialogContentText align="center">
//                             Заполните данные
//                         </DialogContentText>
//                         <Grid Grid container spacing={8}>
//                             <Grid item md={12}>
//                                 <TextField
//                                     id="outlined-email-input"
//                                     label="Фамилия"
//                                     className={classes.textField}
//                                     type="name"
//                                     name="surname"
//                                     autoComplete="surname"
//                                     margin="normal"
//                                     variant="outlined"
//                                 />
//                             </Grid>
//                             <Grid item md={12}>
//                                 <TextField
//                                     id="outlined-password-input"
//                                     label="Имя"
//                                     className={classes.textField}
//                                     type="name"
//                                     autoComplete="name"
//                                     margin="normal"
//                                     variant="outlined"
//                                 />
//                             </Grid>
//                         </Grid>
//                     </DialogContent>
//                     <DialogActions>
//                         <Button onClick={this.handleClose} color="primary">
//                             Отмена
//                         </Button>
//                         <Button onClick={this.handleClose} color="primary">
//                             Зарегистрироваться
//                         </Button>
//                     </DialogActions>
//                 </Dialog>
//             </div>
//         );
//     }
// =======
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };


    render() {
        const {classes} = this.props;
        return (
            <div>
                <Button onClick={this.handleClickOpen} className={classes.root}>Регистрация</Button>
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
                                    label="Email"
                                    className={classes.textField}
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    margin="normal"
                                    variant="outlined"
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
                                />
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Отмена
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
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

export default withStyles(styles)(RegButton);