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


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    card: {
        maxWidth: 700,
        margin: 20,
        minWidth: 600,
    },

    main_info: {
        margin: 15,
        padding: 15,
        // minHeight: 200,
    },
    avatar: {
        margin: 10,
        background: red[500],
        // justifyItems: 'center',
        objectPosition: 50,
    },
    bigAvatar: {
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
});

class Profile extends React.Component {

    onClick=(e)=> {
        console.log('Want to change smth')
    }

    render() {
        const {classes} = this.props;
        const info = this.props.sessionInfo.data;
        return (
            <Grid container className={classes.root} spacing={16}>
                <Grid item sm={6}>
                    <Card className={classes.card}>
                        <Grid container spacing={24}>
                            <Grid item sm={4}>
                                <CardContent>
                                    <Avatar
                                        //alt="Лиза Носкова"
                                        src="images/Liza.jpg"
                                        className={classNames(classes.avatar, classes.bigAvatar)}
                                    />

                                    <Typography component="h2" variant="subtitle1" align="center">
                                        { info.username }
                                    </Typography>
                                    <input
                                        accept="image/*"
                                        className={classes.input}
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                    />
                                    <label htmlFor="contained-button-file">
                                        <Button variant="outlined" size="small" component="span"
                                                className={classes.button_upload} align="center">
                                            Изменить аватар
                                        </Button>
                                    </label>
                                </CardContent>
                            </Grid>
                            <Grid item sm={8}>
                                <Paper className={classes.main_info}>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Основная информация
                                    </Typography>
                                    <Typography variant="subtitle2" gutterBottom>
                                        { info.email }
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
                                            <ListItemText primary="Группа" secondary={ info.group_num }/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText primary="Квартира" secondary={ info.flat }/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText primary="Телефон" secondary={ info.phone }/>
                                        </ListItem>
                                    </List>
                                    <Button variant="outlined" className={classes.button} onClick={ this.onClick }>
                                        Изменить
                                    </Button>
                                    <Button variant="contained" color="secondary" className={classes.button_password}>
                                        Сменить пароль
                                    </Button>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        sessionInfo: state.sessionInfo,
    };
};

export default connect(mapStateToProps, null)(withStyles(styles)(Profile));
