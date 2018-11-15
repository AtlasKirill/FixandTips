import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import 'typeface-roboto';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Tooltip from '@material-ui/core/Tooltip';
import Done from '@material-ui/icons/Done';
import PropTypes from 'prop-types';
import ErrorOutline from '@material-ui/icons/ErrorOutline'
import CommandantRequestWarning from "./CommandantRequestWarning.jsx"
import Icon from '@material-ui/core/Icon';
import DoneIcon from '@material-ui/icons/Done';
import TextField from '@material-ui/core/TextField';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteRequest } from '../actions/requests';
import apiUrls from './../constants/apiUrls';
import store from './../index.jsx';

const styles = theme => ({
    card: {
        // maxHeight: 200,
        margin: 10,
        border:'solid 1px',
    },
    urgently_button: {
        float: 'left',
        margin: 5,
        minHeight: '100%',
    },
    content: {
        // borderRadius:0,
        // borderColor: 'white',
        // borderShadow:'white',
        // color:'white',
        '&:last-child': {
            padding: 5,
            paddingLeft: 15,
            margin: 5,
        },
    },
    Status: {
        // ...theme.typography.button,
        padding: 5,
        marginLeft: 10,
        marginTop: 0,
        marginBottom: 10,
        minWidth: 100,
        maxWidth: 100,
        textAlign: 'center',
        backgroundColor: '#ffc400',
    },
    Cancel: {
        // ...theme.typography.button,
        padding: 5,
        marginLeft: 1,
        marginright: 1,
        marginTop: 5,
        marginBottom: 5,
        maxWidth: 100,
        minWidth: 100,
        textAlign: 'center',
        backgroundColor: '#ff7043',
    },
    absolute_delete: {
        // position: 'relative',
        // bottom: theme.spacing.unit * 1,
        // left: theme.spacing.unit * 25
    },
    delete: {
        float: 'right',
        '&:last-child': {
            padding: 5,
            paddingLeft: 15,
            margin: 5,
        },
    },
    devider: {
        marginTop: 15,
        marginLeft: 5,
        marginRight: 5,
        // width: '90%',
    },
    alert: {
        color: 'red',
        margin: 4,
    },
    button: {
        margin: 4,
        padding: 10,
    },
    textField: {
        marginLeft: 0,
        marginRight: theme.spacing.unit,
        marginTop:0,
        marginBottom:0,
        width: 300,
    },
});

class CommandantRequest extends React.Component {
    // state = {
    //     anchorEl: null,
    // };
    //
    // handleClick = event => {
    //     this.setState({anchorEl: event.currentTarget});
    // };
    //
    // handleClose = () => {
    //     this.setState({anchorEl: null});
    // };

    state = {
        materials: '',
        status: '',
        type: '',
        edited: false,
    };

    static propTypes = {
        id: PropTypes.number,
        author: PropTypes.number,
        is_deleted: PropTypes.bool,
    }


    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    onClick=(e)=> {
        console.log(apiUrls.requestDetail(this.props.id))
        this.props.deleteRequest(apiUrls.requestDetail(this.props.id),{is_deleted:true}, store.getState().auth.token);
    };

    onClickChange=(e)=> {
        this.setState(state => ({
            edited: !state.edited,
        }));
    };

    onSubmit=(e)=> {
        //console.log(apiUrls.requestDetail(this.props.id))
        this.props.deleteRequest(apiUrls.requestDetail(this.props.id),{materials:this.state.materials}, store.getState().auth.token);
        this.setState(state => ({
            edited: !state.edited,
        }));
    };

    render() {
        // const {anchorEl} = this.state;
        // const open = Boolean(anchorEl);
        const {status} = this.state;
        const {type} = this.state;
        const {edited} = this.state;
        const {classes} = this.props;
        if(this.props.is_deleted){
            console.log('Deleted');
            return(<div></div>);
        }
        return (
            <div>
                <Card className={classes.card}>
                    <Grid container spacing={8}>
                        <Grid item md={6}>
                            <CardContent classes={{root: classes.content}}>
                                <Typography variant="subtitle2">
                                    { this.props.author.username }
                                </Typography>
                                <Typography variant="subtitle2">
                                    { this.props.group_num }
                                </Typography>
                                <Typography variant="body1">
                                    { this.props.description }
                                </Typography>

                            </CardContent>
                        </Grid>
                        <Grid item md={3}>
                            <CardContent classes={{root: classes.content}}>
                            {this.props.urgency && (
                                    <div>
                                        <Typography variant="subtitle2" classes={{root: classes.urgently_button}}>
                                            Срочно
                                        </Typography>
                                        <ErrorOutline className={classes.alert}/>
                                    </div>
                                )}
                                {!this.props.urgency && (
                                    <div>
                                        <Typography variant="subtitle2" classes={{root: classes.urgently_button}}>
                                            Не срочно
                                        </Typography>
                                    </div>
                                )}
                            </CardContent>
                        </Grid>
                        <Grid item md={3}>
                            <CardContent classes={{root: classes.content}}>
                                <Typography variant="subtitle2" align="right">
                                    { new Date(this.props.created_at).toDateString() }
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item md={6}>
                        <CardContent classes={{root: classes.content}}>
                            {!this.state.edited && (
                                    <div>
                                        <Typography variant="subtitle2">
                                            Использованные материалы:
                                        </Typography>
                                        <Typography variant="body1" onClick={this.onClickChange}>
                                            { this.props.materials }
                                        </Typography>
                                    </div>)}

                                {this.state.edited && (
                                    <div>
                                        <TextField
                                            id="standard-name"
                                            label="Использованные материалы"
                                            className={classes.textField}
                                            value={ this.state.materials }
                                            onChange={this.handleChange('materials')}
                                            margin="normal"
                                        />
                                <IconButton className={classes.button} aria-label="Done" onClick={this.onSubmit}>
                                    <DoneIcon/>
                                </IconButton>
                                </div>
                            )}
                            </CardContent>
                        </Grid>
                        <Grid item md={12}>
                            <Divider/>
                        </Grid>
                            
                        <Grid item md={3} className={classes.content}>
                            <CardContent classes={{root: classes.content}}>
                                <Button
                                    aria-owns={status ? 'simple-menu' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleClick}
                                >
                                    СТАТУС
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={status}
                                    open={Boolean(status)}
                                    onClose={this.handleClose}
                                    value={ this.state.status }
                                    onChange={this.handleChange('category')}
                                >
                                    <MenuItem onClick={this.handleClose}>НОВАЯ</MenuItem>
                                    <MenuItem onClick={this.handleClose}>В ПРОЦЕССЕ</MenuItem>
                                    <MenuItem onClick={this.handleClose}>ВЫПОЛНЕНА</MenuItem>
                                </Menu>

                            </CardContent>
                        </Grid>
                        <Grid item md={3} className={classes.content}>
                            <CardContent classes={{root: classes.content}}>
                                <Button
                                    aria-owns={type ? 'simple-menu' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleClickType}
                                >
                                    ТИП ЗАЯВКИ
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={type}
                                    open={Boolean(type)}
                                    onClose={this.handleCloseType}
                                >
                                    <MenuItem onClick={this.handleCloseType}>ЭЛЕКТРИК</MenuItem>
                                    <MenuItem onClick={this.handleCloseType}>ПЛОТНИК</MenuItem>
                                    <MenuItem onClick={this.handleCloseType}>САНТЕХНИК</MenuItem>
                                    <MenuItem onClick={this.handleCloseType}>ДРУГОЕ</MenuItem>
                                </Menu>

                            </CardContent>
                        </Grid>
                        <Grid item md={6}>
                            <CardContent classes={{root: classes.delete}}>
                                <Tooltip title="Delete 'position: absolute;'">
                                    <IconButton aria-label="Delete"
                                        onClick={this.onClick}>
                                        <DeleteIcon/>
                                    </IconButton>
                                </Tooltip>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
            </div>
        );
    }
}

CommandantRequest.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStateToProps = ({ requests }, ownProps ) => {
    return {
        ...requests.requests[ownProps.id],
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ deleteRequest }, dispatch)
  }
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(CommandantRequest));