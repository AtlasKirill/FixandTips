import React from 'react';
import Request from './Request.jsx';
import News from './News.jsx';
import User from './User.jsx';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import NewsCreationModal from './NewsCreationModal'
import Filters from './Filter';
import {withStyles} from "@material-ui/core";
import PropTypes from 'prop-types';


const styles = theme => ({
    root: {
        padding: 5,
    },
});


class CommandantPage extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <div>
                <Grid container spacing={10}>
                    <Grid item md={6} className={classes.root}>
                        <Filters/>
                    </Grid>
                    <Grid item md={6} className={classes.root}>
                        <NewsCreationModal/>
                    </Grid>
                    <Grid item md={6} className={classes.root}>
                        <Request/>
                    </Grid>
                    <Grid item md={6} className={classes.root}>
                        <News/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}


CommandantPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommandantPage);