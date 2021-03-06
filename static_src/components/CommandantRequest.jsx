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
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteRequest} from '../actions/requests';
import {updateRequest} from '../actions/requests';
import apiUrls from './../constants/apiUrls';
import store from './../index.jsx';

const styles = theme => ({
    card: {
        margin: 10,
        border: 'solid 1px',
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
        marginTop: 0,
        marginBottom: 0,
        width: 300,
    },
    cancelConfirm: {
        paddingBottom: 8,
        paddingTop: 8,
    },
    cancelbutton: {
        marginRight: 8,
    },
});

class CommandantRequest extends React.Component {

    state = {
        anchorEl: null,
        anchorEl1: null,
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
    state = {
        confirmation: false,
    };

    onClick = (e) => {
        console.log(apiUrls.requestDetail(this.props.id))
        this.setState(state => ({
            confirmation: true,
        }));
    };
    onDelete = (e) => {
        console.log(apiUrls.requestDetail(this.props.id))
        this.setState(state => ({
            confirmation: false,
        }));
        this.props.deleteRequest(apiUrls.requestDetail(this.props.id), {is_deleted: true}, store.getState().auth.token);
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    handleNew = (e) => {
        this.setState({anchorEl: null});
        this.props.updateRequest(apiUrls.requestDetail(this.props.id), {status: 'Отправлена'}, store.getState().auth.token);
    };
    handleProcessing = (e) => {
        this.setState({anchorEl: null});
        this.props.updateRequest(apiUrls.requestDetail(this.props.id), {status: 'В процессе'}, store.getState().auth.token);
    };
    handleComplete = (e) => {
        this.setState({anchorEl: null});
        this.props.updateRequest(apiUrls.requestDetail(this.props.id), {status: 'Выполнена'}, store.getState().auth.token);
    };
    handleReject = (e) => {
        this.setState({anchorEl: null});
        this.props.updateRequest(apiUrls.requestDetail(this.props.id), {status: 'Отклонена'}, store.getState().auth.token);
    };
    handleCarpenter = (e) => {
        this.setState({anchorEl1: null});
        this.props.updateRequest(apiUrls.requestDetail(this.props.id), {category: 'Плотник'}, store.getState().auth.token);
    };
    handleChemistry = (e) => {
        this.setState({anchorEl1: null});
        this.props.updateRequest(apiUrls.requestDetail(this.props.id), {category: 'Хим обработка'}, store.getState().auth.token);
    };
    handlePlumber = (e) => {
        this.setState({anchorEl1: null});
        this.props.updateRequest(apiUrls.requestDetail(this.props.id), {category: 'Сантехник'}, store.getState().auth.token);
    };
    handleElictrician = (e) => {
        this.setState({anchorEl1: null});
        this.props.updateRequest(apiUrls.requestDetail(this.props.id), {category: 'Электрик'}, store.getState().auth.token);
    };
    handleOther = (e) => {
        this.setState({anchorEl1: null});
        this.props.updateRequest(apiUrls.requestDetail(this.props.id), {category: 'Другое'}, store.getState().auth.token);
    };
    // onClick=(e)=> {
    //     console.log(apiUrls.requestDetail(this.props.id))
    //     this.props.deleteRequest(apiUrls.requestDetail(this.props.id),{is_shown:false}, store.getState().auth.token);
    // };

    onClickChange = (e) => {
        this.setState(state => ({
            edited: !state.edited,
        }));
    };

    onSubmit = (e) => {
        this.props.deleteRequest(apiUrls.requestDetail(this.props.id), {materials: this.state.materials}, store.getState().auth.token);
        this.setState(state => ({
            edited: !state.edited,
        }));
    };

    handleClickStatus = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClickCategory = event => {
        this.setState({anchorEl1: event.currentTarget});
    }

    handleCloseStatus = () => {
        this.setState({anchorEl: null});
    };

    handleCloseCategory = () => {
        this.setState({anchorEl1: null});
    };
    onCancel = (e) => {
        this.setState(state => ({
            confirmation: false,
        }));

    };

    render() {
        const {status} = this.state;
        const {type} = this.state;
        const {edited} = this.state;
        const {classes} = this.props;
        const {anchorEl} = this.state;
        const {anchorEl1} = this.state;
        const open = Boolean(anchorEl);
        const open1 = Boolean(anchorEl1);
        var requestStatus = this.props.status === 'Отправлена' ? 'Новая' : this.props.status;
        var cancel = <IconButton aria-label="Delete"
                                 onClick={this.onClick}>
            <DeleteIcon/>
        </IconButton>;

        if (this.props.is_deleted || !this.props.is_shown) {
            return (<div></div>);
        }
        return (
            <div>
                <Card className={classes.card}>
                    <Grid container spacing={8}>
                        <Grid item md={6}>
                            <CardContent classes={{root: classes.content}}>
                                <Typography variant="subtitle2">
                                    {this.props.author.name} {this.props.author.surname}, {this.props.author.flat}к.
                                </Typography>
                                <Typography variant="body1">
                                    {this.props.description}
                                </Typography>

                            </CardContent>
                        </Grid>
                        <Grid item md={6}>
                            <CardContent classes={{root: classes.content}}>
                                <Typography variant="subtitle2" align="right">
                                    {new Date(this.props.created_at).toDateString()}
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
                                            {this.props.materials}
                                        </Typography>
                                    </div>)}

                                {this.state.edited && (
                                    <div>
                                        <TextField
                                            id="standard-name"
                                            label="Использованные материалы"
                                            className={classes.textField}
                                            value={this.state.materials}
                                            onChange={this.handleChange('materials')}
                                            margin="normal"
                                        />
                                        <IconButton className={classes.button} aria-label="Done"
                                                    onClick={this.onSubmit}>
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
                                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleClickStatus}
                                >
                                    {requestStatus}
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={this.handleCloseStatus}
                                >
                                    <MenuItem onClick={this.handleNew}>Новая</MenuItem>
                                    <MenuItem onClick={this.handleProcessing}>В процессе</MenuItem>
                                    <MenuItem onClick={this.handleComplete}>Выполнена</MenuItem>
                                    <MenuItem onClick={this.handleReject}>Отклонена</MenuItem>
                                </Menu>

                            </CardContent>
                        </Grid>
                        <Grid item md={3} className={classes.content}>
                            <CardContent classes={{root: classes.content}}>
                                <Button
                                    aria-owns={anchorEl1 ? 'simple-menu' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleClickCategory}
                                >
                                    {this.props.category}
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl1}
                                    open={open1}
                                    onClose={this.handleCloseCategory}
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
                                {this.state.confirmation && (
                                    <div>
                                        <Grid container spacing={8}>
                                            <Grid item md={6}>
                                                <Typography className={classes.cancelConfirm}>
                                                    Удалить заявку:
                                                </Typography>
                                            </Grid>
                                            <Grid item md={3}>
                                                <Button onClick={this.onDelete}>
                                                    Да
                                                </Button>
                                            </Grid>
                                            <Grid item md={3}>
                                                <Button onClick={this.onCancel} className={classes.cancelbutton}>
                                                    Нет
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </div>
                                )}
                                {!this.state.confirmation && (
                                    <div>
                                        {cancel}
                                    </div>
                                )}
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
const mapStateToProps = ({requests}, ownProps) => {
    return {
        ...requests.requests[ownProps.id],
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({deleteRequest, updateRequest}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CommandantRequest));