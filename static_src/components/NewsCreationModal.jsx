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
import AddIcon from '@material-ui/icons/Add';


const styles = theme => ({
    root: {
        background: 'white',
        borderRadius: 5,
        color: 'black',
        padding: '5px 20px 5px 20px',
        boxShadow: 'white',
        border: 'solid',
        borderWidth: 1,
        margin: 0,

    },
    textField: {
        marginLeft: 5,
        marginRight: 5,
        minWidth: '100%',
        alignSelf: 'center',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
    dialog: {
        maxWidth: 550,
    }
});


class NewRequest extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };


    render() {
        const {classes} = this.props;

        return (

            <div>
                <Button onClick={this.handleClickOpen} className={classes.root}>
                    <AddIcon/>
                    СОЗДАТЬ
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="registration-dialog-title"
                    classes={classes.dialog}
                    maxWidth={"md"}
                >
                    <DialogTitle id="registration-dialog-title" align="center">Создание новости</DialogTitle>
                    <DialogContent>
                        <DialogContentText align="center">
                            Заполните данные формы
                        </DialogContentText>
                        <TextField
                            id="outlined-dense"
                            label="Введите заголовок новости"
                            className={classes.textField}
                            margin="dense"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Введите текст новости"
                            multiline
                            rowsMax="4"
                            value={this.state.multiline}
                            onChange={this.handleChange('multiline')}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Отмена
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Создать
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}


NewRequest.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewRequest);