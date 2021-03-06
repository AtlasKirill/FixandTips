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
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import apiUrls from './../constants/apiUrls.js';
import {bindActionCreators} from 'redux';
import {createRequest} from '../actions/requests';
import {connect} from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import {loadRequests} from './../actions/requests.js';
import {loadNews} from './../actions/news.js';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import store from './../index.jsx';
import withWidth from '@material-ui/core/withWidth';



const styles = theme => ({
    root: {
        background: 'white',
        borderRadius: 5,
        color: 'black',
        padding: '5px 20px 5px 20px',
        boxShadow: 'white',
        border: 'solid',
        borderWidth: 1,
    },
    textField: {
        margin: 5,
        // minWidth: '100%',
        alignSelf: 'center',
        minWidth: 400,

    },
    textFieldOnMobile: {
        margin: 5,
        minWidth: '100%',
        alignSelf: 'center',
    },

    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
    formGroupControl: {
        margin: theme.spacing.unit * 3,
    },
    head: {
        fontSize: '1.2em',
    },
    title: {
        fontSize: '1.5em',
    },
    dialogOnMobile: {
        '&:last-child': {
            marginright: 5,
            marginLeft: 5,
        },
    },
});


class NewRequest extends React.Component {
    state = {
        open: false,
        description: '',
        status: 'Отправлена',
        category: 'No category',
        materials: 'No materials',
        urgency: false,
    };

    handleClickOpen = () => {
        this.setState({open: true});
        this.setState({description: ''});
        this.setState({category: 'No category'});
        this.setState({urgency: false});
    };

    handleClose = () => {
        this.setState({open: false});
    };
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };


    handleChangeType = name => event => {
        this.setState({[name]: event.target.value});
    };

    handleChangePriority = event => {
        this.setState({urgency: !this.state.urgency});
    };

    onClick = (e) => {
        console.log('onClick')
        this.props.createRequest(apiUrls.requests,
            {
                description: this.state.description,
                category: this.state.category,
                materials: this.state.materials,
                status: this.state.status,
                urgency: this.state.urgency
            },
            store.getState().auth.token);
        this.setState({open: false, description: 'No description'});
    }

    render() {
        // var fullscreen
        // if ('xs' === this.props.width)
        //     fullscreen = "true";
        // else fullscreen = "false";

        const {classes} = this.props;

        if ('xs' === this.props.width) {
            return (
                <div>
                    <Button onClick={this.handleClickOpen} className={classes.root} size={"large"}>
                        <AddIcon/>
                        <Typography variant={"h6"}>
                            СОЗДАТЬ
                        </Typography>
                    </Button>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="registration-dialog-title"
                        // maxWidth={"lg"}
                        fullScreen={"true"}
                    >
                        <DialogTitle id="registration-dialog-title" className={classes.title} align="center">Создание
                            заявки</DialogTitle>
                        <DialogContent>
                            <DialogContentText align="center" className={classes.head}>
                                Заполните данные формы
                            </DialogContentText>
                            <Grid container spacing={8}>
                                <Grid item md={12} sm={12} xs={12}>
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        label="Опишите проблему"
                                        multiline
                                        rowsMax="4"
                                        value={this.state.description}
                                        onChange={this.handleChange('description')}
                                        className={classes.textFieldOnMobile}
                                        margin="normal"
                                        helperText="Что сломалось"
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                            <Typography align="center" className={classes.head}>
                                Выберите тип заявки
                            </Typography>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <RadioGroup
                                    aria-label="requestType"
                                    name="request"
                                    className={classes.group}
                                    value={this.state.category}
                                    onChange={this.handleChange('category')}
                                >
                                    <FormControlLabel value="Сантехник" control={<Radio/>} label="Сантехник"/>
                                    <FormControlLabel value="Плотник" control={<Radio/>} label="Плотник"/>
                                    <FormControlLabel value="Электрик" control={<Radio/>} label="Электрик"/>
                                    <FormControlLabel value="Хим обработка" control={<Radio/>} label="Хим обработка"/>
                                    <FormControlLabel value="Другое" control={<Radio/>} label="Другое"/>
                                </RadioGroup>
                            </FormControl>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Отмена
                            </Button>
                            <Button onClick={this.onClick} color="primary">
                                Создать
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            );

        } else
        return (
            <div>
                <Button onClick={this.handleClickOpen} className={classes.root} size={"large"}>
                    <AddIcon/>
                    <Typography variant={"h6"}>
                        СОЗДАТЬ
                    </Typography>
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="registration-dialog-title"
                    maxWidth={"lg"}
                >
                    <DialogTitle id="registration-dialog-title" className={classes.title} align="center">Создание
                        заявки</DialogTitle>
                    <DialogContent>
                        <DialogContentText align="center" className={classes.head}>
                            Заполните данные формы
                        </DialogContentText>
                        <Grid container spacing={8}>
                            <Grid item md={12} sm={12} xs={12}>
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Опишите проблему"
                                    multiline
                                    rowsMax="4"
                                    value={this.state.description}
                                    onChange={this.handleChange('description')}
                                    className={classes.textField}
                                    margin="normal"
                                    helperText="Что сломалось"
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                        <Typography align="center" className={classes.head}>
                            Выберите тип заявки
                        </Typography>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <RadioGroup
                                aria-label="requestType"
                                name="request"
                                className={classes.group}
                                value={this.state.category}
                                onChange={this.handleChange('category')}
                            >
                                <FormControlLabel value="Сантехник" control={<Radio/>} label="Сантехник"/>
                                <FormControlLabel value="Плотник" control={<Radio/>} label="Плотник"/>
                                <FormControlLabel value="Электрик" control={<Radio/>} label="Электрик"/>
                                <FormControlLabel value="Хим обработка" control={<Radio/>} label="Хим обработка"/>
                                <FormControlLabel value="Другое" control={<Radio/>} label="Другое"/>
                            </RadioGroup>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Отмена
                        </Button>
                        <Button onClick={this.onClick} color="primary">
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

const mapStateToProps = ({auth}) => {
    return {
        user: auth.user,
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({createRequest, loadRequests}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(withWidth()(withStyles(styles)(NewRequest)));