import React from 'react';
import RequestStudent from './RequestStudent.jsx';
import NewsStudent from './NewsStudent.jsx';
import User from './User.jsx';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RequestCreationModal from './CreationModal'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';



const styles = theme => ({
    headline: {
        margin: 20,
    },
});


class StudentPage extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <div>
                <Grid container spacing={10} justify="center">

                    <Grid item md={6}>
                        <Typography variant="h5" gutterBottom className={classes.headline}>
                            Мои запросы
                        </Typography>
                        <RequestCreationModal/>
                    </Grid>
                    <Grid item md={6}>
                        <Typography variant="h5" gutterBottom className={classes.headline}>
                            Объявления общежития
                        </Typography>
                    </Grid>
                    <Grid item md={6}>
                        <RequestStudent/>
                    </Grid>
                    <Grid item md={6}>

                        <NewsStudent/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

StudentPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(StudentPage);