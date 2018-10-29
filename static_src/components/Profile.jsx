import 'typeface-roboto';
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


const styles = theme => ({
    // root: {
    //     flexGrow: 1,
    // },
    card: {
        // display: 'flex',
        // flexDirection: 'column',
        // alignContent: 'center',
        // justify: 'center',
        maxWidth: 800,
        margin: 20,
        // minWidth: 700,

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
        objectPosition: '50% 50%',
        width: 180,
        height: 180,

    },
    input: {
        display: 'none',
    },
    button_upload: {

        margin: theme.spacing.unit,
        padding: 5,
        objectPosition: '50% 50%',
        // flex: 1,

    },
    button_password: {
        background: red[500],
        marginLeft: 20,
    },
    content: {
        // borderRadius:0,
        // borderColor: 'white',
        // borderShadow:'white',
        // color:'white',
        margin: 15,
        padding: 15,
        float: 'none',
        minWidth: 200,
        // '&:last-child': {
        //     padding: 10,
        //     paddingRight: 5,
        //     margin: 5,
        // },
    },
});

class StudentPage extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <Grid container spacing={8}>
                <Grid item md={12}>
                    <Paper className={classes.card}>
                        <Grid container spacing={8}>
                            <Grid item md={4}>
                                <Paper classes={{root: classes.content}}>
                                    <Avatar
                                        //alt="Лиза Носкова"
                                        src="/static_src/components/images/Liza.jpg"
                                        className={classNames(classes.avatar)}
                                    />

                                    <Typography component="h2" variant="title" align="center">
                                        Елизавета Носкова
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
                            <Grid item md={8}>
                                <Paper className={classes.main_info}>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Основная информация
                                    </Typography>
                                    <Typography variant="subtitle2" gutterBottom>
                                        elizabetn@gmail.com
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
                                            <ListItemText primary="Группа" secondary="518"/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText primary="Квартира" secondary="816"/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText primary="Общежитие" secondary="12"/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText primary="Телефон" secondary="+79856783090"/>
                                        </ListItem>
                                    </List>
                                    <Button variant="outlined" className={classes.button}>
                                        Изменить
                                    </Button>
                                    <Button variant="contained" color="secondary" className={classes.button_password}>
                                        Сменить пароль
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

StudentPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StudentPage);
