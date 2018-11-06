import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import apiUrls from './../constants/apiUrls.js';
import { bindActionCreators } from 'redux';
import { deleteNews } from '../actions/news';


const styles = theme => ({
    card: {
        width: '90%',
        margin: 10,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class News extends React.Component{
   
    static propTypes = {
        id: PropTypes.number,
        author: PropTypes.number,
        is_deleted: PropTypes.bool,
    }

    onClick=(e)=> {
        console.log(apiUrls.newsDetail(this.props.id))
        this.props.deleteNews(apiUrls.newsDetail(this.props.id),{is_deleted:true});
      }
        render(){
            const { classes } = this.props;
            let news;
            if (this.props.is_deleted) {
                news = <div></div>
    
            }
            else{
                news = <Card className={classes.card}>
                <CardHeader
                    title={this.props.title}
                    subheader={ new Date(this.props.created_at).toDateString() }
                />

                <CardContent>
                    <Typography>
                        { this.props.text }
                    </Typography>
                    <Divider/>
                </CardContent>
                <IconButton className={classes.button} aria-label="Delete" onClick={this.onClick}>
                    <DeleteIcon/>
                </IconButton>

            </Card>
            }
            return( 
                <div>
                    { news }
                </div>
            );
        }
       
    }

News.propTypes = {
        classes: PropTypes.object.isRequired,
};
const mapStateToProps = ({ news }, ownProps ) => {
    return {
        ...news.news[ownProps.id],
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ deleteNews }, dispatch)
  }
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(News));