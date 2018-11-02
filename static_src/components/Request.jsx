import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Done from '@material-ui/icons/Done';
import { connect } from 'react-redux';
import apiUrls from './../constants/apiUrls.js';
import { bindActionCreators } from 'redux';
import { deleteRequest } from '../actions/requests';



const styles = theme => ({
    card: {
      margin: 10,
    },
    urgently_button:{
      padding: 5,
      marginLeft: 1,
      marginright: 1,
      marginTop: 5,
      marginBottom: 5,
      maxWidth: 100,
      minWidth: 100,
      textAlign: 'center',
      backgroundColor: '#ff7043',
    },
    content: {
      '&:last-child': {
        padding: 10,
        paddingRight: 5,
        margin: 5,
      },
    },
    Status: {
      padding: 5,
      marginLeft: 10,
      marginTop: 0,
      marginBottom: 10,
      minWidth: 100,
      maxWidth: 100,
      textAlign: 'center',
      backgroundColor: '#ffc400',
    },
    Cancel: {
      padding: 5,
      marginLeft: 1,
      marginright: 1,
      marginTop: 5,
      marginBottom: 5,
      maxWidth: 100,
      minWidth: 100,
      textAlign: 'center',
      backgroundColor: '#ff7043',
    },
    absolute_delete: {
      
    },
  });

class Request extends React.Component{

  static propTypes = {
    id: PropTypes.number,
    author: PropTypes.number,
    is_deleted: PropTypes.bool,
  }

  onClick=(e)=> {
    console.log(apiUrls.requestDetail(this.props.id))
    this.props.deleteRequest(apiUrls.requestDetail(this.props.id),{is_deleted:true});
  }
    render(){
      const { classes } = this.props;
      let request;
      if(this.props.is_deleted){
        request=<div></div>
      }
      else{
        request=
      <Card className={classes.card}>
        <Grid container spacing={10} >
          <Grid item md={6}  >
            <CardContent classes={{root: classes.content}} >
              <Typography variant="subtitle2">
                { this.props.author.email }
              </Typography>
              <Typography variant="body1" >
                { this.props.description }
              </Typography>
            </CardContent>
          </Grid>
          <Grid item md={3}>
            <CardContent classes={{ root: classes.content }}>
              <Paper className={classes.urgently_button}>
                <Typography>
                  СРОЧНО
                </Typography>
              </Paper>
            </CardContent>
          </Grid>
          <Grid item md={3}>
            <CardContent classes={{ root: classes.content }}>
              <Typography variant="subtitle2" align="right">
                { new Date(this.props.created_at).toDateString() }
              </Typography>
            </CardContent>
          </Grid>
          <Grid item md={6}>
            <CardContent classes={{ root: classes.content }}>
              <Typography variant="subtitle2" >
                Использованные материалы:
              </Typography>
              <Typography variant="body1" >
                { this.props.materials }
              </Typography>
            </CardContent>
          </Grid>
          <Grid item md={6}>
            <CardContent classes={{ root: classes.content }}>
              <Typography variant="subtitle2">
                Tип заявки (тех персонал)
              </Typography>
              <Typography variant="body1" >
                { this.props.category.title }
              </Typography>
            </CardContent>
          </Grid>
          <Grid item md={12}>
            <Divider />
          </Grid>
          <Grid item md={3} className={classes.content}>
            <CardContent classes={{ root: classes.content }}>
              <Done />
              <Typography>
                { this.props.status.title }
            </Typography>
            </CardContent>
          </Grid>
          <Grid item md={3}>
            <CardContent classes={{ root: classes.content }}>
              <Paper className={classes.Cancel}>
                <Typography >
                  ОТМЕНИТЬ
                  </Typography>
              </Paper>
            </CardContent>
          </Grid>
          <Grid item md={5}>
            <CardContent>
              <Tooltip title="Delete 'position: absolute;'">
                <IconButton aria-label="Delete" className={classes.absolute_delete} onClick={this.onClick}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </CardContent>
          </Grid>

        </Grid>

      </Card>
      }
      return (
        <div>
          { request }
        </div>
      );
    }
  }
   
      


Request.propTypes = {
  classes: PropTypes.object.isRequired,

};


const mapStateToProps = ({ requests }, ownProps ) => {
    return {
        ...requests.requests[ownProps.id],
    }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ deleteRequest }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Request));