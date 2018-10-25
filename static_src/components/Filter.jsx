import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';



const styles = theme => ({
  button: {
    maxHeight:20,
    minWidth: 150,
    marginLeft: 0,
    marginRight: 8,
    marginTop: 8,
    marginBottom:8,
    boxShadow:'0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
    backgroundColor: 'var(--background-start)',
},
button_show:{
  position: 'relative',
  top: '10px',
  maxHeight: 20,
  minWidth: 150,
  marginLeft: 0,
  marginRight: 8,
  marginTop: 8,
  marginBottom: 8,
  boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
  backgroundColor: '#4fc3f7',
},
  status:{
    padding:0,
    marginTop:20,
    marginBottom: 0,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing.unit * 2,
    maxWidth:200,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class Filters extends React.Component {
  state = {
    color: 'default',
    clicked: false,
};

  handleClickChange = event => {
    this.setState({ clicked: ! this.state.clicked });
    this.setState({ color: this.state.clicked ? 'default' : 'secondary' });
  };

  render(){
  const { classes } = this.props;

    return (
      <React.Fragment>
        <Typography variant="overline" gutterBottom className={classes.status}>
          Статус:
      </Typography>
        <Button
          className={classes.button}
          onClick={this.handleClickChange}
          style={
            this.state.color === 'secondary'
              ? {
                '--background-start': '#ec407a',
              }
              : {
                '--background-start': '#ffffff',
              }
          }
        >
          В ПРОЦЕССЕ
        </Button>
        <Button variant="contained"  className={classes.button} >
          НОВЫЕ
        </Button>
        <Button variant="contained" className={classes.button}>
          СРОЧНО
        </Button>
        <Typography variant="overline" gutterBottom className={classes.status}>
          Тип заявок:
      </Typography>
        <Button variant="contained" className={classes.button}>
          ПЛОТНИК
        </Button>
        <Button variant="contained" className={classes.button}>
          САНТЕХНИК
        </Button>
        <Button variant="contained" className={classes.button}>
          ЭЛЕКТРИК
        </Button>
        <Button variant="contained" className={classes.button}>
          ХИМ ОБРАБОТКА
        </Button>
        <Button variant="contained" className={classes.button}>
          ДРУГОЕ
        </Button>
        <Typography variant="overline" gutterBottom className={classes.status}>
          По дате:
      </Typography>
      <Grid container spacing={5}>
        <form className={classes.container} noValidate>
          <TextField
            id="date"
            label="С"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>

        <form className={classes.container} noValidate>
          <TextField
            id="date"
            label="По"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
          <Button variant="contained" className={classes.button_show}>
            Показать
        </Button>
      </Grid>


        </React.Fragment>

    );
  }
}

Filters.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Filters);