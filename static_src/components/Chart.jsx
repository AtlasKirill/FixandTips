import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';


const data = [
    {name: '1', Visits: 2200, Orders: 3400},
    {name: '2', Visits: 1280, Orders: 2398},
    {name: '3', Visits: 5000, Orders: 4300},
    {name: '4', Visits: 4780, Orders: 2908},
    {name: '5', Visits: 5890, Orders: 4800},
    {name: '6', Visits: 4390, Orders: 3800},
    {name: '7', Visits: 4490, Orders: 4300},
    {name: '8', Visits: 4490, Orders: 4300},
    {name: '9', Visits: 4490, Orders: 4300},
    {name: '10', Visits: 4490, Orders: 4300},
    {name: '11', Visits: 5000, Orders: 4300},
];


const styles = theme => ({
    button: {
        maxHeight: 20,
        minWidth: 150,
        marginLeft: 0,
        marginRight: 8,
        marginTop: 8,
        marginBottom: 8,
        boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
        backgroundColor: 'var(--background-start)',
    },
    button_show: {
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
    status: {
        padding: 0,
        marginTop: 20,
        marginBottom: 0,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: theme.spacing.unit * 2,
        maxWidth: 200,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

class Chart extends React.Component {
    state = {
        color: 'default',
        clicked: false,
    };

    handleClickChange = event => {
        this.setState({clicked: !this.state.clicked});
        this.setState({color: this.state.clicked ? 'default' : 'secondary'});
    };

    render() {
        const {classes} = this.props;

        return (
            <React.Fragment>

                <Typography variant="h4" gutterBottom align="center">
                    Оперативная информация
                </Typography>
                <Typography variant="overline" gutterBottom className={classes.status} align="center">
                    Статус:
                </Typography>

                <Grid container spacing={5} justify="center">
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
                    <Button variant="contained" className={classes.button}>
                        НОВЫЕ
                    </Button>
                    <Button variant="contained" className={classes.button}>
                        СРОЧНО
                    </Button>
                    <Button variant="contained" className={classes.button}>
                        ВЫПОЛНЕНЫ
                    </Button>
                </Grid>

                <Typography variant="overline" gutterBottom className={classes.status} align="center">
                    Тип заявок:
                </Typography>
                <Grid container spacing={5} justify="center">

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
                </Grid>
                <Typography
                    align="center"
                    variant="overline" gutterBottom className={classes.status}>
                    Димнамика зарегистрированных и решенных заявок
                </Typography>
                <Grid container spacing={5} justify="center">
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


                <ResponsiveContainer width="95%" height={320} >
                    <LineChart data={data}>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <CartesianGrid vertical={false} strokeDasharray="3 3"/>
                        <Tooltip/>
                        <Legend/>
                        <Line type="monotone" dataKey="Visits" stroke="#82ca9d"/>
                        <Line type="monotone" dataKey="Orders" stroke="#8884d8" activeDot={{r: 8}}/>
                    </LineChart>
                </ResponsiveContainer>


            </React.Fragment>

        );
    }
}

Chart.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Chart);