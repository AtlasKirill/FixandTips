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
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    card: {
        // display: 'flex',
        // flexDirection: 'column',
        // alignContent: 'center',
        // justify: 'center',
        maxWidth: 1000,
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
        width: 100,
        height: 100,

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
        marginTop: 8,
    },
    content: {
        // borderRadius:0,
        // borderColor: 'white',
        // borderShadow:'white',
        // color:'white',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 15,
        padding: 15,
        float: 'none',
        // height: '80%',
        // minWidth: 200,
        // '&:last-child': {
        //     padding: 10,
        //     paddingRight: 5,
        //     margin: 5,
        // },
    },
    grid: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'column',
    },
    button: {
        marginTop: 8,
    },
    textField: {
        width: '100%',
    },
});

class StudentPage extends React.Component {

    state = {
        phone: '',
        group: '',
        room: '',
        hostel: '',
    };

    handleChangeSettings = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const {classes} = this.props;

        return (
            <Grid container spacing={8}>
                <Grid item md={12} className={classes.grid}>
                    <Paper className={classes.card}>
                        <Grid container spacing={8}>
                            <Grid item md={4} alignContent={"center"} className={classes.root}>
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
                                            align={'center'}
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
                                    <form className={classes.container} noValidate autoComplete="off">
                                        <TextField
                                            id="standard-name"
                                            label="Группа"
                                            className={classes.textField}
                                            value={this.state.group}
                                            onChange={this.handleChangeSettings('group')}
                                            margin="normal"
                                        />
                                        <TextField
                                            id="standard-name"
                                            label="Квартира"
                                            className={classes.textField}
                                            value={this.state.room}
                                            onChange={this.handleChangeSettings('room')}
                                            margin="normal"
                                        />
                                        <TextField
                                            id="standard-name"
                                            label="Общежитие"
                                            className={classes.textField}
                                            value={this.state.hostel}
                                            onChange={this.handleChangeSettings('hostel')}
                                            margin="normal"
                                        />
                                        <TextField
                                            id="standard-name"
                                            label="Телефон"
                                            className={classes.textField}
                                            value={this.state.phone}
                                            onChange={this.handleChangeSettings('phone')}
                                            margin="normal"
                                        />
                                    </form>
                                    <Button variant="outlined" className={classes.button}>
                                        Изменить
                                    </Button>
                                    {/*<Button variant="contained" color="secondary" className={classes.button_password}>*/}
                                    {/*Сменить пароль*/}
                                    {/*</Button>*/}
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}


// function formDataSet(requests = {}) {
//
//     var tmp = [];
//     var result = new Map();
//
//     for (let i in requests) {
//
//         var date = new Date(requests[i].created_at);
//         var resultDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
//         tmp.push([resultDate, requests[i].category]);
//
//     }
//     tmp.sort();
//     for (let i in tmp) {
//         if (!result.has(tmp[i][0])) {
//             result.set(tmp[i][0], {Электрик: 0, Плотник: 0, Сантехник: 0, Другое: 0});
//             tmp[i][1] == 'Электрик' ? result[tmp[i][0]] = [1, 0, 0, 0] :
//                 tmp[i][1] == 'Плотник' ? result[tmp[i][0]] = [0, 1, 0, 0] :
//                     tmp[i][1] == 'Сантехник' ? result[tmp[i][0]] = [0, 0, 1, 0] :
//                         result[tmp[i][0]] = [0, 0, 0, 1];
//         } else {
//             tmp[i][1] == 'Электрик' ? result[tmp[i][0]][0]++ :
//                 tmp[i][1] == 'Плотник' ? result[tmp[i][0]][1]++ :
//                     tmp[i][1] == 'Сантехник' ? result[tmp[i][0]][2]++ :
//                         result[tmp[i][0]][3]++;
//         }
//     }
//
//     var el = 0, pl = 0, plum = 0, other = 0;
//     for (var [key, value] of result) {
//         if (value[0] == 0)
//             el++;
//         if (value[1] == 0)
//             pl++;
//         if (value[2] == 0)
//             plum++;
//         if (value[3] == 0)
//             other++;
//     }
//
//     var size = result.size;
//     for (var [key, value] of result) {
//         if (el == size)
//             value.splice(pos, 0);
//         if (pl == size)
//             value.splice(pos, 1);
//         if (plum == size)
//             value.splice(pos, 2);
//         if (other == size)
//             value.splice(pos, 3);
//     }
//
//     var finalResult = [];
//
//     for (var [key, value] of result) {
//         finalResult.push({date: key,value});
//     }
//     return finalResult;
// }
//
// export default {
//     formDataSet,
// };


StudentPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StudentPage);
