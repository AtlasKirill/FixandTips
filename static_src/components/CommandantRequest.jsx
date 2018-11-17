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
import { updateRequest } from '../actions/requests';
import apiUrls from './../constants/apiUrls';
import store from './../index.jsx';

const styles = theme => ({
    card: {

        margin: 10,
        border:'solid 1px',
    },
    urgently_button: {
        float: 'left',
        margin: 5,
        minHeight: '100%',
    },
    content: {
        '&:last-child': {
            padding: 5,
            paddingLeft: 15,
            margin: 5,
        },
    },
    Status: {
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

    state = {
        anchorEl: null,
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
    handleNew=(e)=> {
        this.setState({ anchorEl: null });
        this.props.updateRequest(apiUrls.requestDetail(this.props.id),{status:'Отправлена'}, store.getState().auth.token);
    };
    handleProcessing=(e)=> {
        this.setState({ anchorEl: null });
        this.props.updateRequest(apiUrls.requestDetail(this.props.id),{status:'В процессе'}, store.getState().auth.token);
    };
    handleComplete=(e)=> {
        this.setState({ anchorEl: null });
        this.props.updateRequest(apiUrls.requestDetail(this.props.id),{status:'Выполнена'}, store.getState().auth.token); 
    };
    handleCarpenter=(e)=> {
        this.setState({ anchorEl: null });
        this.props.updateRequest(apiUrls.requestDetail(this.props.id),{category:'Плотник'}, store.getState().auth.token);
    };
    handleChemistry=(e)=> {
        this.setState({ anchorEl: null });
        this.props.updateRequest(apiUrls.requestDetail(this.props.id),{category:'Хим обработка'}, store.getState().auth.token);
    };
    handlePlumber=(e)=> {
        this.setState({ anchorEl: null });
        this.props.updateRequest(apiUrls.requestDetail(this.props.id),{category:'Сантехник'}, store.getState().auth.token); 
    };
    handleElictrician=(e)=> {
        this.setState({ anchorEl: null });
        this.props.updateRequest(apiUrls.requestDetail(this.props.id),{category:'Электрик'}, store.getState().auth.token); 
    };
    handleOther=(e)=> {
        this.setState({ anchorEl: null });
        this.props.updateRequest(apiUrls.requestDetail(this.props.id),{category:'Другое'}, store.getState().auth.token); 
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
        this.props.deleteRequest(apiUrls.requestDetail(this.props.id),{materials:this.state.materials}, store.getState().auth.token);
        this.setState(state => ({
            edited: !state.edited,
        }));
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
      };

    render() {
        const {status} = this.state;
        const {type} = this.state;
        const {edited} = this.state;
        const {classes} = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
    
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
                                    {this.props.status}
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem onClick={this.handleNew}>НОВАЯ</MenuItem>
                                    <MenuItem onClick={this.handleProcessing}>В ПРОЦЕССЕ</MenuItem>
                                    <MenuItem onClick={this.handleComplete}>ВЫПОЛНЕНА</MenuItem>
                                </Menu>

                            </CardContent>
                        </Grid>
                        <Grid item md={3} className={classes.content}>
                            <CardContent classes={{root: classes.content}}>
                                <Button
                                    aria-owns={type ? 'simple-menu' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleClick}
                                >
                                    {this.props.category}
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem onClick={this.handleElectrician}>Электрик</MenuItem>
                                    <MenuItem onClick={this.handleCarpenter}>Плотник</MenuItem>
                                    <MenuItem onClick={this.handlePlumber}>Сантехник</MenuItem>
                                    <MenuItem onClick={this.handleChemistry}>Хим обработка</MenuItem>
                                    <MenuItem onClick={this.handleOther}>Другое</MenuItem>
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
    return bindActionCreators({ deleteRequest, updateRequest }, dispatch)
  }
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(CommandantRequest));