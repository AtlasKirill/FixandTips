import 'typeface-roboto';
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import {connect} from 'react-redux';
import apiUrls from './../constants/apiUrls.js';
import {bindActionCreators} from 'redux';
import {deleteNews} from '../actions/news';


const styles = theme => ({
    card: {
        // width: '90%',
        margin: 10,
        border: 'solid 1px',
        minHeight: 213,
    },
    button: {
        margin: theme.spacing.unit,
    },
    devider: {
        marginTop: 15,
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
    font:{
        fontSize:'x-large',
    },
    date:{
        fontSize:'1em',
    }
});

class StudentNews extends React.Component {

    static propTypes = {
        id: PropTypes.number,
        author: PropTypes.number,
        is_deleted: PropTypes.bool,
    }

    render() {
        const {classes} = this.props;

        if (this.props.is_deleted) {
            return (<div></div>);
        }

        return (
            <Card className={classes.card}>
                <CardContent classes={{root: classes.content}}>
                    <Typography variant="h5" gutterBottom className={classes.font} align={"center"}>
                        {this.props.title}
                    </Typography>
                    <Typography align={"center"} className={classes.date}>
                        {new Date(this.props.created_at).toDateString()}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography component="p" variant="h6">
                        {this.props.text}
                    </Typography>
                    <Divider className={classes.devider}/>
                </CardContent>

            </Card>
        );
    }
}

StudentNews.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStateToProps = ({news}, ownProps) => {
    return {
        ...news.news[ownProps.id],
    }
}

export default connect(mapStateToProps, null)(withStyles(styles)(StudentNews));
