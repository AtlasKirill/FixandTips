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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteRequest } from '../actions/requests';
import apiUrls from './../constants/apiUrls';
import store from './../index.jsx';

const styles = theme => ({
    card: {
        // maxHeight: 200,
        margin: 10,
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
    }

    render() {
        // const {anchorEl} = this.state;
        // const open = Boolean(anchorEl);
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
                                <Typography variant="subtitle2" classes={{root: classes.urgently_button}}>
                                    Срочно
                                </Typography>
                                <ErrorOutline className={classes.alert}/>
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
                                {/*<Typography variant="subtitle2">*/}
                                    {/*Использованные материалы:*/}
                                {/*</Typography>*/}
                                {/*<Typography variant="body1">*/}
                                {/*2 патрубка*/}
                                {/*</Typography>*/}


                                <TextField
                                    id="standard-name"
                                    label="Использованные материалы"
                                    className={classes.textField}
                                    value={this.state.materials}
                                    onChange={this.handleChange('materials')}
                                    // value={ this.props.materials }
                                    // onChange={this.handleChangeMaterials('materials')}
                                    margin="normal"
                                />
                                <IconButton className={classes.button} aria-label="Done">
                                    <DoneIcon/>
                                </IconButton>
                            </CardContent>
                        </Grid>
                        <Grid item md={6}>
                            <CardContent classes={{root: classes.content}}>
                                <Typography variant="subtitle2">
                                    Tип заявки (тех персонал)
                                </Typography>
                                <Typography variant="body1">
                                    { this.props.category }
                                </Typography>

                                {/*<div>*/}
                                {/*<Button*/}

                                {/*aria-owns={open ? 'fade-menu' : undefined}*/}
                                {/*aria-haspopup="true"*/}
                                {/*onClick={this.handleClick}*/}
                                {/*>*/}
                                {/*sdsfdf*/}
                                {/*</Button>*/}
                                {/*<Menu*/}
                                {/*id="fade-menu"*/}
                                {/*anchorEl={anchorEl}*/}
                                {/*open={open}*/}
                                {/*onClose={this.handleClose}*/}
                                {/*TransitionComponent={Fade}*/}
                                {/*>*/}
                                {/*<MenuItem onClick={this.handleClose}>Profile</MenuItem>*/}
                                {/*<MenuItem onClick={this.handleClose}>My account</MenuItem>*/}
                                {/*<MenuItem onClick={this.handleClose}>Logout</MenuItem>*/}
                                {/*</Menu>*/}
                                {/*</div>*/}
                            </CardContent>
                        </Grid>

                        <Grid item md={12}>
                            <Divider/>
                        </Grid>

                        <Grid item md={6} className={classes.content}>
                            <CardContent classes={{root: classes.content}}>
                                <Done/>
                                <Typography>
                                    { this.props.status }
                                </Typography>
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