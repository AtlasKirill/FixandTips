import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';
import {withStyles} from '@material-ui/core/styles';
import { connect } from 'react-redux';


const styles = theme => ({
    card: {
        width: '100%',
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

        render(){
            const { classes } = this.props;
            return( 
                <Card className={classes.card}>
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
                    <IconButton className={classes.button} aria-label="Delete">
                        <DeleteIcon/>
                    </IconButton>
    
                </Card>
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
export default connect(mapStateToProps)(withStyles(styles)(News));