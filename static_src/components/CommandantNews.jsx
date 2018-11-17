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

const styles = theme => ({
    card: {
        margin: 10,
        marginTop: 10,
        border:'solid 1px',
        minHeight: 213,
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
    font:{
        fontSize:'x-large',
    },
    date:{
        fontSize:'1em',
    }
});

class CommandantNews extends React.Component {

    static propTypes = {
        id: PropTypes.number,
        author: PropTypes.number,
        is_deleted: PropTypes.bool,
    }
    // onClick=(e)=> {
    //     console.log(apiUrls.newsDetail(this.props.id))
    //     this.props.deleteNews(apiUrls.newsDetail(this.props.id),{is_deleted:true});
    // }
    onDelete = (e) => {
        console.log(apiUrls.requestDetail(this.props.id))
        this.props.deleteNews(apiUrls.newsDetail(this.props.id), {is_deleted: true}, store.getState().auth.token);
        // this.props.loadNews(apiUrls.news,store.getState().auth.token);
        // this.setState({ open: false });
    }

    render() {
        const {classes} = this.props;
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
                                    <IconButton aria-label="Delete"
                                                onClick={this.onDelete}>
                                        <DeleteIcon/>
                                    </IconButton>
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
