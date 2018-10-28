import React from 'react';
import RequestCommandant from './RequestCommandant.jsx';
import NewsCommandant from './NewsCommandant.jsx';
import User from './User.jsx';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import NewsCreationModal from './NewsCreationModal'
import Filters from './Filter';
import {withStyles} from "@material-ui/core";
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography/Typography";
import GetPrintAndStatistics from "./GetPrintAndStatistics.jsx"


const styles = theme => ({
    root: {
        padding: 20,
    },
    headline: {
        margin: 20,
    },
});


class CommandantPage extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <div>
                <Grid container spacing={10}>
                    <Grid item md={6} className={classes.root}>
                        <Typography variant="h5" gutterBottom>
                            Запросы
                        </Typography>
                        <Filters/>

                    </Grid>
                    <Grid item md={6} className={classes.root}>
                        {/*<GetPrintAndStatistics/>*/}
                        <Typography variant="h5" gutterBottom>
                            Объявления общежития
                        </Typography>
                        <NewsCreationModal/>
                    </Grid>
                    <Grid item md={6} >
                        <RequestCommandant/>
                    </Grid>
                    <Grid item md={6} >
                        <NewsCommandant/>
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