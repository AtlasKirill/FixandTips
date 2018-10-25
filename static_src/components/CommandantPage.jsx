import React from 'react';
import RequestList from './RequestList.jsx';
import NewsList from './NewsList.jsx';
import Grid from '@material-ui/core/Grid';
import NewsCreationModal from './NewsCreationModal'
import Filter from './Filter';
import {withStyles} from "@material-ui/core";
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {
        padding: 5,
    },
});

class CommandantPage extends React.Component{
  
    render(){
        const {classes} = this.props;
        return( 
            <div>
                <Grid container spacing={10}>
                    <Grid item md={6} className={classes.root}>
                        <Filter/> 
                    </Grid>
                    <Grid item md={6} className={classes.root}>
                      
                        <NewsCreationModal/>
                            
                    </Grid>
                    <Grid item md={6} className={classes.root}>
                        <RequestList/>
                    </Grid>
                    <Grid item md={6} className={classes.root}>
                        <NewsList/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
CommandantPage.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(CommandantPage);;