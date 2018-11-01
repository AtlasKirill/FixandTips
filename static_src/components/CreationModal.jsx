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
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import AddIcon from '@material-ui/icons/Add';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const styles = theme => ({
    root: {
        background: 'white',
        borderRadius: 5,
        color: 'black',
        padding: '5px 20px 5px 20px',
        boxShadow: 'white',
        border: 'solid',
        borderWidth: 1,
        // marginTop: 20,
        // marginBottom:20,
        // marginLeft: 10,
        // marginRight: 10,
        margin: 20,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 400,
        alignSelf: 'center',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
    formGroupControl:{
        margin: theme.spacing.unit * 3,
    },
});


class NewRequest extends React.Component {
    state = {
        open: false,
        valueType: 'san',
        valuePriority: 'high',
        checkedUrgent: false,
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


    handleChangeType = event => {
        this.setState({valueType: event.target.value});
    };

    handleChangePriority = event => {
        this.setState({valuePriority: event.target.value});
    };


    handleChangeUrgent = name => event => {
        this.setState({[name]: event.target.checked});
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
                >
                    <DialogTitle id="registration-dialog-title" align="center">Создание заявки</DialogTitle>
                    <DialogContent>
                        <DialogContentText align="center">
                            Заполните данные формы
                        </DialogContentText>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Опишите проблему"
                            multiline
                            rowsMax="4"
                            value={this.state.multiline}
                            onChange={this.handleChange('multiline')}
                            className={classes.textField}
                            margin="normal"
                            helperText="Что сломалось"
                            variant="outlined"
                        />
                        <Typography align="center">
                            Выберите тип заявки
                        </Typography>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <RadioGroup
                                aria-label="requestType"
                                name="request"
                                className={classes.group}
                                value={this.state.valueType}
                                onChange={this.handleChangeType}
                            >
                                <FormControlLabel value="san" control={<Radio/>} label="Сантехник"/>
                                <FormControlLabel value="plot" control={<Radio/>} label="Плотник"/>
                                <FormControlLabel value="el" control={<Radio/>} label="Электрик"/>
                                <FormControlLabel value="other" control={<Radio/>} label="Другое"/>
                            </RadioGroup>
                        </FormControl>
                        <Typography align="center">
                            Выберите приоритет заявки
                        </Typography>
                        {/*<FormControl component="fieldpriority" className={classes.formControl}>*/}
                        {/*<RadioGroup*/}
                        {/*aria-label="requestType"*/}
                        {/*name="priority"*/}
                        {/*className={classes.group}*/}
                        {/*value={this.state.valuePriority}*/}
                        {/*onChange={this.handleChangePriority}*/}
                        {/*>*/}
                        {/*<FormControlLabel value="high" control={<Radio/>} label="Срочно"/>*/}
                        {/*<FormControlLabel value="low" control={<Radio/>} label="Не срочно"/>*/}
                        {/*</RadioGroup>*/}
                        {/*</FormControl>*/}
                        {/*<Checkbox*/}
                            {/*value="skldmmf"*/}
                            {/*checked={this.state.checkedA}*/}
                            {/*onChange={this.handleChangeUrgent('checkedUrgent')}*/}
                            {/*value="checkedA"*/}
                        {/*/>*/}
                        <FormGroup className={classes.formGroupControl}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.state.checkedUrgent}
                                        onChange={this.handleChangeUrgent('checkedUrgent')}
                                        value="checkedUrgent"
                                    />
                                }
                                label="Срочно"
                            />
                        </FormGroup>
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