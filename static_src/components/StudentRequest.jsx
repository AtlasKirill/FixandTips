import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import 'typeface-roboto';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
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
// import ErrorOutline from "@material-ui/core/SvgIcon/SvgIcon";
import ErrorOutline from '@material-ui/icons/ErrorOutline'
import RegButton from "./Registration";
import StudentRequestWarning from "./StudentRequestWarning.jsx"
import {connect} from 'react-redux';
import apiUrls from './../constants/apiUrls.js';
import {bindActionCreators} from 'redux';
import {deleteRequest} from '../actions/requests';
import store from './../index.jsx';
import withWidth from '@material-ui/core/withWidth';


const styles = theme => ({
    card: {
        border: 'solid 1px',
        margin: 10,
    },
    urgently_button: {
        float: 'left',
        margin: 5,
        minHeight: '100%',
    },
    content: {
        '&:last-child': {
            padding: 10,
            paddingRight: 5,
            margin: 5,
            // marginBottom: 0,
            paddingBottom: 5,
            paddingTop: 5,
        },
    },
    Status: {
        padding: 8,
        // margin: 10,
        marginLeft: 0,
        paddingLeft: 0,
        fontSize: '1.1em',
        // marginLeft: 10,
        // marginTop: 0,
        // marginBottom: 10,
    },
    alert: {
        color: 'red',
        margin: 4,
    },
    cancelgrid: {
        '&:last-child': {
            padding: 8,
            paddingRight: 5,
            margin: 8,
            // marginBottom: 12,
        },
    },
    cancelConfirm: {
        paddingBottom: 8,
        paddingTop: 8,
    },
    description: {
        fontSize: '1em',
    },
    buttonYes: {
        backgroundColor: '#ffa183',
    },
    buttonNo: {
        backgroundColor: '#b9f6ca',

    },
});


class StudentRequest extends React.Component {

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

    onCancel = (e) => {
        this.setState(state => ({
            confirmation: false,
        }));

    };

    render() {
        var cancel;
        const {classes} = this.props;
        if (this.props.status == 'Отправлена') {
            cancel = <Button variant="contained"
                             color="secondary"
                             onClick={this.onClick}>
                ОТМЕНИТЬ
            </Button>
        }
        else
            cancel = <div></div>

        if (this.props.is_deleted) {
            return (<div></div>);
        }
        else {
            if ('xs' === this.props.width || 'sm' === this.props.width) {
                return (
                    <div>
                        <Card className={classes.card}>
                            <Grid container spacing={8}>
                                <Grid item xs={6}>
                                    <CardContent classes={{root: classes.content}}>
                                        <Typography variant="body1" className={classes.description}>
                                            {this.props.description}
                                        </Typography>
                                    </CardContent>
                                </Grid>
                                <Grid item xs={6}>
                                    <CardContent classes={{root: classes.content}}>
                                        <Typography variant="subtitle2" align="right">
                                            {new Date(this.props.created_at).toDateString()}
                                        </Typography>
                                    </CardContent>
                                </Grid>
                                <Grid item xs={12}>
                                    <CardContent classes={{root: classes.content}}>
                                        <Typography variant="subtitle2">
                                            Tип заявки (тех персонал)
                                        </Typography>
                                        <Typography variant="body1">
                                            {this.props.category}
                                        </Typography>
                                    </CardContent>
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider/>
                                </Grid>
                                <Grid item xs={6} className={classes.content}>
                                    <CardContent classes={{root: classes.content}}>
                                        <Typography className={classes.Status}>
                                            {this.props.status}
                                        </Typography>
                                    </CardContent>
                                </Grid>
                                <Grid item xs={6}>
                                    <CardContent classes={{root: classes.cancelgrid}}>
                                        {this.state.confirmation && (
                                            <div>
                                                <Grid container spacing={8}>
                                                    <Grid item xs={6}>
                                                        <Button onClick={this.onDelete} className={classes.buttonYes}>
                                                            Да
                                                        </Button>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Button onClick={this.onCancel} className={classes.buttonNo}>
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
            } else
                return (
                    <div>
                        <Card className={classes.card}>
                            <Grid container spacing={8}>
                                <Grid item md={6}>
                                    <CardContent classes={{root: classes.content}}>
                                        <Typography variant="body1" className={classes.description}>
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
                                        <Typography variant="subtitle2">
                                            Tип заявки (тех персонал)
                                        </Typography>
                                        <Typography variant="body1">
                                            {this.props.category}
                                        </Typography>
                                    </CardContent>
                                </Grid>
                                <Grid item md={12}>
                                    <Divider/>
                                </Grid>
                                <Grid item md={6} className={classes.content}>
                                    <CardContent classes={{root: classes.content}}>
                                        <Typography className={classes.Status}>
                                            {this.props.status}
                                        </Typography>
                                    </CardContent>
                                </Grid>
                                <Grid item md={6}>
                                    <CardContent classes={{root: classes.cancelgrid}}>
                                        {this.state.confirmation && (
                                            <div>
                                                <Grid container spacing={8}>
                                                    <Grid item md={4}>
                                                        <Typography className={classes.cancelConfirm}>
                                                            Отменить заявку:
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item md={2}>
                                                        <Button onClick={this.onDelete}>
                                                            Да
                                                        </Button>
                                                    </Grid>
                                                    <Grid item md={2}>
                                                        <Button onClick={this.onCancel}>
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
}

StudentRequest.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStateToProps = ({requests}, ownProps) => {
    return {
        ...requests.requests[ownProps.id],
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({deleteRequest}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withWidth()(withStyles(styles)(StudentRequest)));
