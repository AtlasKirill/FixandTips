import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import apiUrls from './../constants/apiUrls.js';
import { bindActionCreators } from 'redux';
import { createRequest } from '../actions/requests';
import { connect } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import CategoryList from './CategoryList';
import { loadRequests } from './../actions/requests.js';
import { loadNews } from './../actions/news.js';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import store from './../index.jsx';


const styles = theme => ({
  root: {
    background: 'white',
    borderRadius: 5,
    color: 'black',
    padding: '5px 20px 5px 20px',
    boxShadow: 'white',
    border: 'solid',
    borderWidth: 1,
},
textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400,
    alignSelf: 'center',
},
formControl: {
    margin: theme.spacing.unit * 3,
},
group: {
    margin: `${theme.spacing.unit}px 0`,
},
});


class NewRequest extends React.Component {
  state = {
    open: false,
    description:'No description',
    status:'Отправлена',
    category:'No category',
    materials: 'No materials',
    urgency: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };


  handleChangeType = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleChangePriority = event => {
    this.setState({ urgency: !this.state.urgency });
  };

  onClick=(e)=> {
    console.log('onClick')
    this.props.createRequest(apiUrls.requests,
                            {description:this.state.description,
                            category:this.state.category, 
                            materials:this.state.materials,
                            status:this.state.status,
                            urgency: this.state.urgency},
                            store.getState().auth.token);
    this.setState({ open: false });
    this.props.loadRequests(apiUrls.myRequests(this.props.user.id), store.getState().auth.token);
}
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button onClick={this.handleClickOpen} className={classes.root} >
          <AddIcon/>
          СОЗДАТЬ
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="registration-dialog-title"
        >
          <DialogTitle id="registration-dialog-title" align="center">Создание заявки</DialogTitle>
          <DialogContent>
            <DialogContentText align="center">
              Заполните данные формы
              </DialogContentText>
            <TextField
              id="outlined-multiline-flexible"
              label="Опишите проблему"
              multiline
              rowsMax="4"
              value={this.state.description}
              onChange={this.handleChange('description')}
              className={classes.textField}
              margin="normal"
              helperText="Что сломалось"
              variant="outlined"
            />
            <Typography align="center">
              Выберите тип заявки
              </Typography>
            <FormControl component="fieldset" className={classes.formControl}>
              <RadioGroup
                aria-label="requestType"
                name="request"
                className={classes.group}
                value={this.state.category}
                onChange={this.handleChange('category')}
              >
                <FormControlLabel value="Сантехник" control={<Radio />} label="Сантехник" />
                <FormControlLabel value="Плотник" control={<Radio />} label="Плотник" />
                <FormControlLabel value="Электрик" control={<Radio />} label="Электрик" />
                <FormControlLabel value="Другое" control={<Radio />} label="Другое" />
              </RadioGroup>
            </FormControl>
            <Typography align="center">
              Выберите приоритет заявки
              </Typography>
              <FormGroup className={classes.formGroupControl}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.state.urgency}
                                        onChange={this.handleChangePriority}
                                        value={this.state.urgency}
                                    />
                                }
                                label="Срочно"
                            />
                        </FormGroup>

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Отмена
            </Button>
            <Button onClick={this.onClick} color="primary">
              Создать
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}


NewRequest.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ auth }) => {
  return {
      user: auth.user,
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createRequest, loadRequests }, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(NewRequest));