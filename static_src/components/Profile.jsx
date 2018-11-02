import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import red from '@material-ui/core/colors/red';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';


const styles = theme => ({

    card: {
        // maxWidth: 700,
        margin: 20,
        maxWidth: 800,
    },

    main_info: {
        margin: 15,
        padding: 15,
    },
    avatar: {
        margin: 10,
        background: red[500],
        objectPosition: 50,
        width: 180,
        height: 180,
    },
    input: {
        display: 'none',
    },
    button_upload: {
        margin: theme.spacing.unit,
        padding: 5,
    },
    button_password: {
        background: red[500],
        marginLeft: 20,
    },

    content: {
        margin: 15,
        padding: 15,
        float: 'none',
        minWidth: 200,
    }
});

class Profile extends React.Component {

    onClick=(e)=> {
        console.log('Want to change smth')
    }

    render() {
        const {classes} = this.props;
        // const info = this.props.sessionInfo.data;
        if(this.props.isLoading)
        {
            return(<div>Loading...</div>)
        }
        return (
            <Grid container spacing={8}>
                <Grid item md={12}>
                    <Paper className={classes.card}>
                        <Grid container spacing={8}>
                            <Grid item md={4}>
                                <Paper classes={{root: classes.content}}>
                                    <Avatar
                                        src="/static_src/components/images/Liza.jpg"
                                        className={classNames(classes.avatar)}
                                    />

                                    <Typography component="h2" variant="title" align="center">
                                        { this.props.user.username}
                                    </Typography>
                                    <input
                                        accept="image/*"
                                        className={classes.input}
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                    />
                                    <label htmlFor="contained-button-file">
                                    <Button
                                            variant="outlined"
                                            size="mdall"
                                            component="span"
                                            className={classes.button_upload}>
                                            Изменить аватар
                                        </Button>
                                    </label>
                                </Paper>
                                
                            </Grid>
                            <Grid item sm={8}>
                                <Paper className={classes.main_info}>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Основная информация
                                    </Typography>
                                    <Typography variant="subtitle2" gutterBottom>
                                        { this.props.user.email }
                                    </Typography>
                                    <Typography variant="subtitle2" gutterBottom>
                                        студент
                                    </Typography>
                                </Paper>
                                <Paper className={classes.main_info}>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Контактная информация
                                    </Typography>
                                    <List>
                                        <ListItem>
                                            {/* <ListItemText primary="Группа" secondary={ this.props.user }/> */}
                                        </ListItem>
                                        <ListItem>
                                            {/* <ListItemText primary="Квартира" secondary={ this.props.user }/> */}
                                        </ListItem>
                                        <ListItem>
                                            {/* <ListItemText primary="Телефон" secondary={ this.props.user}/> */}
                                        </ListItem>
                                    </List>
                                    <Button variant="outlined" className={classes.button} onClick={ this.onClick }>
                                        Изменить
                                    </Button>
                                    <Button variant="contained" color="secondary" className={classes.button_password} onClick={this.props.logout}>
                                        Выйти
                                    </Button>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ auth }) => {
    return {
        user: auth.user,
        isAuthenticated: auth.isAuthenticated,
        isLoading: auth.isLoading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
      
      logout: () => dispatch(logout()),
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Profile));
