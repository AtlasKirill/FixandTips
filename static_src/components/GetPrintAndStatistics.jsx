import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import BarChart from '@material-ui/icons/BarChart';
import PrintIcon from '@material-ui/icons/Print';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    minWidth:150,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function FloatingActionButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Grid container spacing={5}>
      <Grid item md={12}>
      <Button variant="extendedFab" aria-label="Delete" className={classes.button}>
        <PrintIcon className={classes.extendedIcon} />
        ПЕЧАТЬ
      </Button>
      </Grid>
        <Grid item md={12}>

      <Button variant="extendedFab" href = '#statistics' aria-label="Delete" className={classes.button}>
        <BarChart className={classes.extendedIcon} />
        Статистика
      </Button>
        </Grid>

      </Grid>
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);
