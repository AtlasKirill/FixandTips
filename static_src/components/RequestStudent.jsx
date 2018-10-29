import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import 'typeface-roboto';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Tooltip from '@material-ui/core/Tooltip';
import Done from '@material-ui/icons/Done';
import PropTypes from 'prop-types';
// import ErrorOutline from "@material-ui/core/SvgIcon/SvgIcon";
import ErrorOutline from '@material-ui/icons/ErrorOutline'
import RegButton from "./Registration";
import StudentRequestWarning from "./StudentRequestWarning.jsx"

const styles = theme => ({
    card: {
        // maxHeight: 200,
        margin: 10,
    },
    urgently_button: {
        float: 'left',
        margin: 5,
        minHeight: '100%',
    },
    content: {
        // borderRadius:0,
        // borderColor: 'white',
        // borderShadow:'white',
        // color:'white',
        '&:last-child': {
            padding: 10,
            paddingRight: 5,
            margin: 5,
        },
    },
    Status: {
        // ...theme.typography.button,
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
        // ...theme.typography.button,
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
        // position: 'relative',
        // bottom: theme.spacing.unit * 1,
        // left: theme.spacing.unit * 25
    },
    alert: {
        color: 'red',
        margin: 4,
    },
});


class RequestStudent extends React.Component {

    render() {
        const {classes} = this.props;

        const urgent = false;

        return (
            <div>
                <Card className={classes.card}>
                    <Grid container spacing={8}>
                        <Grid md={6}>
                            <CardContent classes={{root: classes.content}}>
                                <Typography variant="subtitle1">
                                    Елизавета Носкова
                                </Typography>
                                <Typography variant="body1">
                                    Начал протекать кран в раковине
                                </Typography>

                            </CardContent>
                        </Grid>
                        <Grid item md={3}>
                            <CardContent classes={{root: classes.content}}>
                                {urgent && (
                                    <div>
                                        <Typography variant="subtitle2" classes={{root: classes.urgently_button}}>
                                            Срочно
                                        </Typography>
                                        <ErrorOutline className={classes.alert}/>
                                    </div>
                                )}
                                {!urgent && (
                                    <div>
                                        <Typography variant="subtitle2" classes={{root: classes.urgently_button}}>
                                            Не срочно
                                        </Typography>
                                    </div>
                                )}
                            </CardContent>
                        </Grid>
                        <Grid item md={3}>
                            <CardContent classes={{root: classes.content}}>
                                <Typography variant="subtitle2" align="right">
                                    07:53 pm
                                </Typography>
                                <Typography variant="subtitle2" align="right">
                                    26.09.18
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item md={6}>
                            <CardContent classes={{root: classes.content}}>
                                <Typography variant="subtitle2">
                                    Использованные материалы:
                                </Typography>
                                <Typography variant="body1">
                                    2 патрубка
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item md={6}>
                            <CardContent classes={{root: classes.content}}>
                                <Typography variant="subtitle2">
                                    Tип заявки (тех персонал)
                                </Typography>
                                <Typography variant="body1">
                                    Сантехник
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item md={12}>
                            <Divider/>
                        </Grid>
                        <Grid item md={6} className={classes.content}>
                            <CardContent classes={{root: classes.content}}>
                                <Done/>
                                <Typography>
                                    Отправлена
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item md={6}>
                            <CardContent classes={{root: classes.content}}>
                                <StudentRequestWarning/>
                            </CardContent>
                        </Grid>
                    </Grid>

                </Card>

            </div>
        );
    }
}

RequestStudent.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(RequestStudent);