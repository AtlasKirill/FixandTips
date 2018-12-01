import 'typeface-roboto';
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import CommandantNewsWarning from "./CommandantNewsWarning.jsx"
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteNews} from '../actions/news';
import {loadNews} from '../actions/news';
import IconButton from '@material-ui/core/IconButton';
import apiUrls from './../constants/apiUrls';
import store from './../index.jsx';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    card: {
        margin: 10,
        marginTop: 10,
        border: 'solid 1px',
    },
    devider: {
        marginTop: 5,
        // width: '90%',
    },
    content: {
        '&:last-child': {
            // padding: 5,
            paddingLeft: 15,
            margin: 5,
            paddingBottom: 0,
            paddingTop: 5,
            marginBottom: 0,
            marginTop: 0,
        },
    },
    delete: {
        float: 'right',
        '&:last-child': {
            padding: 5,
            paddingRight: 15,
            margin: 0,
        },
    },
    font: {
        fontSize: 'x-large',
    },
    date: {
        fontSize: '1em',
    },
    cancelConfirm: {
        paddingBottom: 8,
        paddingTop: 8,
    },
});

class CommandantNews extends React.Component {

    static propTypes = {
        id: PropTypes.number,
        author: PropTypes.number,
        is_deleted: PropTypes.bool,
    }

    state = {
        confirmation: false,
    };

    onClick = (e) => {
        console.log(apiUrls.newsDetail(this.props.id))
        this.setState(state => ({
            confirmation: true,
        }));
    };
    onDelete = (e) => {
        console.log(apiUrls.newsDetail(this.props.id))
        this.setState(state => ({
            confirmation: false,
        }));
        this.props.deleteNews(apiUrls.newsDetail(this.props.id), {is_deleted: true}, store.getState().auth.token);
    };
    onCancel = (e) => {
        this.setState(state => ({
            confirmation: false,
        }));

    };

    render() {
        const {classes} = this.props;
        var cancel = <IconButton aria-label="Delete"
                                 onClick={this.onClick}>
            <DeleteIcon/>
        </IconButton>;
        if (this.props.is_deleted) {
            return (<div></div>);
        }
        return (
            <div>
                <Card classes={{root: classes.card}} elevation={3}>
                    <Grid container spacing={8}>
                        <Grid item md={12}>
                            <CardContent classes={{root: classes.content}}>
                                <Typography variant="h5" gutterBottom className={classes.font} align={"center"}>
                                    {this.props.title}
                                </Typography>
                                <Typography align={"center"} className={classes.date}>
                                    {new Date(this.props.created_at).toDateString()}
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item md={12}>
                            <CardContent classes={{root: classes.content}}>
                                <Typography component="p" variant="h6">
                                    {this.props.text}
                                </Typography>
                                <Divider className={classes.devider}/>
                            </CardContent>
                        </Grid>
                        <Grid item md={12}>
                            <CardContent classes={{root: classes.delete}}>
                                {this.state.confirmation && (
                                        <div>
                                            <Grid container spacing={8}>
                                                <Grid item md={6}>
                                                    <Typography className={classes.cancelConfirm}>
                                                        Удалить новость:
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={3}>
                                                    <Button onClick={this.onDelete}>
                                                        Да
                                                    </Button>
                                                </Grid>
                                                <Grid item md={3}>
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
                                {/* <CommandantNewsWarning/> */}
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
            </div>
        );
    }
}

CommandantNews.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStateToProps = ({news}, ownProps) => {
    return {
        ...news.news[ownProps.id],
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({deleteNews, loadNews}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CommandantNews));
