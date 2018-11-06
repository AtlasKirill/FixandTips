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
import { connect } from 'react-redux';
import apiUrls from './../constants/apiUrls.js';
import { bindActionCreators } from 'redux';
import { deleteNews } from '../actions/news';


const styles = theme => ({
    card: {
        // width: '90%',
        margin: 10,
        // padding:10,
    },
    button: {
        margin: theme.spacing.unit,
    },
    devider: {
        marginTop: 15,
        // width: '90%',
    },
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
            return(<div></div>);
        }

        return (
            <Card className={classes.card}>
                <CardHeader
                    title={this.props.title}
                    subheader={ new Date(this.props.created_at).toDateString() }
                />

                <CardContent>
                    <Typography component="p">
                        { this.props.text }
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
const mapStateToProps = ({ news }, ownProps ) => {
    return {
        ...news.news[ownProps.id],
    }
}

export default connect(mapStateToProps, null)(withStyles(styles)(StudentNews));
